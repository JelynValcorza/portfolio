"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/src/lib/utils";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

interface ParticleCanvasProps {
  className?: string;
  particleCount?: number;
  maxDistance?: number;
  speed?: number;
  dotAlpha?: number;
  lineAlpha?: number;
}

const DEFAULT_PARTICLE_COUNT = 65;
const DEFAULT_MAX_DIST = 140;
const DEFAULT_SPEED = 0.4;
const DEFAULT_DOT_ALPHA = 0.55;
const DEFAULT_LINE_ALPHA = 0.2;

function getPrimaryColor(alpha: number): string {
  const isDark = document.documentElement.classList.contains("dark");
  return isDark ? `rgba(56,189,248,${alpha})` : `rgba(37,99,235,${alpha})`;
}

export function ParticleCanvas({
  className,
  particleCount = DEFAULT_PARTICLE_COUNT,
  maxDistance = DEFAULT_MAX_DIST,
  speed = DEFAULT_SPEED,
  dotAlpha = DEFAULT_DOT_ALPHA,
  lineAlpha = DEFAULT_LINE_ALPHA,
}: ParticleCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number | undefined;
    let W = 0;
    let H = 0;
    const dpr = window.devicePixelRatio || 1;
    const particles: Particle[] = [];
    const reduceMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let shouldReduceMotion = reduceMotionQuery.matches;
    let isVisible = true;

    function setSize() {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function initParticles() {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
          r: Math.random() * 1.2 + 0.4,
        });
      }
    }

    function drawFrame() {
      ctx.clearRect(0, 0, W, H);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        else if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        else if (p.y > H) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = getPrimaryColor(dotAlpha);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = getPrimaryColor(
              (1 - dist / maxDistance) * lineAlpha,
            );
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      if (!isVisible || shouldReduceMotion) return;
      drawFrame();
      animationId = requestAnimationFrame(animate);
    }

    function stop() {
      if (animationId !== undefined) {
        cancelAnimationFrame(animationId);
        animationId = undefined;
      }
    }

    function start() {
      stop();
      if (shouldReduceMotion) {
        drawFrame();
        return;
      }
      if (isVisible) {
        animationId = requestAnimationFrame(animate);
      }
    }

    setSize();
    initParticles();
    start();

    const ro = new ResizeObserver(() => {
      setSize();
      initParticles();
      if (shouldReduceMotion) drawFrame();
    });
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        isVisible = !!entry?.isIntersecting;
        if (isVisible) {
          start();
        } else {
          stop();
        }
      },
      { threshold: 0.06 },
    );
    io.observe(canvas);

    const handleMotionChange = (event: MediaQueryListEvent) => {
      shouldReduceMotion = event.matches;
      start();
    };
    reduceMotionQuery.addEventListener("change", handleMotionChange);

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      reduceMotionQuery.removeEventListener("change", handleMotionChange);
    };
  }, [dotAlpha, lineAlpha, maxDistance, particleCount, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 pointer-events-none", className)}
      aria-hidden="true"
    />
  );
}
