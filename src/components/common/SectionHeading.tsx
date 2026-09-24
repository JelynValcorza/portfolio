"use client";

import { motion } from "framer-motion";
import { cn } from "@/src/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  label,
  title,
  description,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "mb-12 lg:mb-16",
        align === "center" && "text-center",
        align === "left" && "text-left",
        className,
      )}
    >
      {label && (
        <span className="inline-flex items-center gap-2 text-[11px] font-semibold font-mono text-gradient uppercase tracking-[0.2em] mb-3 px-3 py-1.5 rounded-full bg-blue-500/6 dark:bg-blue-400/6 border border-blue-500/20 dark:border-blue-400/20">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
          {label}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
        {title}
      </h2>
      <div
        className={cn(
          "mt-3 h-0.5 w-20 rounded-full bg-linear-to-r from-sky-500 via-cyan-400 to-teal-400",
          align === "center" && "mx-auto",
        )}
      />
      {description && (
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
