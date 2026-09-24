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
        <span className="inline-block text-xs font-semibold text-gradient uppercase tracking-[0.15em] mb-3 px-3 py-1.5 rounded-full bg-blue-500/6 dark:bg-blue-400/6 border border-blue-500/20 dark:border-blue-400/20">
          {label}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
        {title}
      </h2>
      <div
        className={cn(
          "mt-3 h-0.5 w-16 rounded-full bg-gradient-to-r from-blue-500 to-violet-600",
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
