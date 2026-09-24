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
    top: "bg-blue-500/14 dark:bg-blue-400/12",
    bottom: "bg-cyan-500/12 dark:bg-cyan-400/10",
  },
  cyan: {
    top: "bg-cyan-500/14 dark:bg-cyan-400/12",
    bottom: "bg-sky-500/12 dark:bg-sky-400/10",
  },
  emerald: {
    top: "bg-emerald-500/14 dark:bg-emerald-400/12",
    bottom: "bg-blue-500/12 dark:bg-blue-400/10",
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
        maxDistance={120}
        speed={0.24}
        dotAlpha={0.28}
        lineAlpha={0.12}
      />

      <div className="absolute inset-0 opacity-[0.34] dark:opacity-[0.2] bg-[radial-gradient(circle_at_center,rgba(148,163,184,0.22)_1px,transparent_1px)] bg-size-[30px_30px]" />

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

      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-background/55 dark:to-background/70" />
    </div>
  );
}
