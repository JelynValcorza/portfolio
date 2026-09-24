"use client";

import { cn } from "@/src/lib/utils";
import { ParticleCanvas } from "@/src/components/common/ParticleCanvas";

type Tone = "blue" | "cyan" | "emerald";

interface TechSectionBackgroundProps {
  className?: string;
  tone?: Tone;
  particleCount?: number;
}

const toneStyles: Record<Tone, { top: string; bottom: string }> = {
  blue: {
    top: "bg-sky-500/14 dark:bg-sky-400/14",
    bottom: "bg-cyan-500/12 dark:bg-cyan-400/12",
  },
  cyan: {
    top: "bg-cyan-500/16 dark:bg-cyan-400/14",
    bottom: "bg-teal-500/14 dark:bg-teal-400/12",
  },
  emerald: {
    top: "bg-emerald-500/15 dark:bg-emerald-400/14",
    bottom: "bg-sky-500/12 dark:bg-sky-400/12",
  },
};

export function TechSectionBackground({
  className,
  tone = "blue",
  particleCount = 36,
}: TechSectionBackgroundProps) {
  const colors = toneStyles[tone];

  return (
    <div
      aria-hidden="true"
      className={cn("absolute inset-0 pointer-events-none", className)}
    >
      <ParticleCanvas
        particleCount={particleCount}
        maxDistance={126}
        speed={0.22}
        dotAlpha={0.24}
        lineAlpha={0.1}
      />

      <div className="tech-grid absolute inset-0 opacity-[0.28] dark:opacity-[0.2]" />
      <div className="tech-scanlines absolute inset-0 opacity-[0.18] dark:opacity-[0.24]" />

      <div
        className={cn(
          "absolute -top-20 -right-20 h-72 w-72 rounded-full blur-3xl animate-blob",
          colors.top,
        )}
      />
      <div
        className={cn(
          "absolute -bottom-24 -left-12 h-72 w-72 rounded-full blur-3xl animate-blob [animation-delay:5s]",
          colors.bottom,
        )}
      />

      <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/8 to-background/58 dark:via-background/10 dark:to-background/74" />
    </div>
  );
}
