"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skillGroups } from "@/src/data/skills";
import { SectionHeading } from "@/src/components/common/SectionHeading";
import { cn } from "@/src/lib/utils";
import type { SkillCategory } from "@/src/types";
import { TechSectionBackground } from "@/src/components/common/TechSectionBackground";

const categoryMeta: Record<string, { emoji: string; color: string }> = {
  frontend: {
    emoji: "⚡",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  backend: {
    emoji: "🔧",
    color: "bg-green-500/10 text-green-600 dark:text-green-400",
  },
  database: {
    emoji: "🗄️",
    color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  },
  tools: {
    emoji: "🛠️",
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  },
  languages: {
    emoji: "💻",
    color: "bg-pink-500/10 text-pink-600 dark:text-pink-400",
  },
  uiux: {
    emoji: "🎨",
    color: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
  },
};

function getLevelLabel(level: number): string {
  if (level >= 90) return "Expert";
  if (level >= 80) return "Advanced";
  if (level >= 70) return "Proficient";
  if (level >= 60) return "Intermediate";
  return "Learning";
}

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | "all">(
    "all",
  );

  const filteredGroups =
    activeCategory === "all"
      ? skillGroups
      : skillGroups.filter((g) => g.category === activeCategory);

  return (
    <section
      id="skills"
      className="relative isolate overflow-hidden py-24 lg:py-32 bg-surface"
    >
      <TechSectionBackground tone="blue" particleCount={34} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Skills"
          title="Technologies I Work With"
          description="A comprehensive set of tools and technologies I use to build modern web applications."
        />
        {/* Category filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={cn(
              "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200",
              activeCategory === "all"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80",
            )}
          >
            All
          </button>
          {skillGroups.map((group) => {
            const meta = categoryMeta[group.category];
            return (
              <button
                key={group.category}
                onClick={() => setActiveCategory(group.category)}
                className={cn(
                  "flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200",
                  activeCategory === group.category
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80",
                )}
              >
                <span aria-hidden="true">{meta.emoji}</span>
                {group.label}
              </button>
            );
          })}
        </div>

        {/* Skills */}
        <div className="space-y-10">
          {filteredGroups.map((group, groupIndex) => {
            const meta = categoryMeta[group.category];
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: groupIndex * 0.08 }}
              >
                {/* Group label */}
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className={cn(
                      "inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg",
                      meta.color,
                    )}
                  >
                    <span aria-hidden="true">{meta.emoji}</span>
                    {group.label}
                  </span>
                  <div className="flex-1 h-px bg-border" aria-hidden="true" />
                </div>

                {/* Skills grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                  {group.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.id}
                      initial={{ opacity: 0, scale: 0.96 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.04 }}
                      whileHover={{ y: -2 }}
                      className="p-4 bg-card border border-border rounded-2xl card-glow transition-all duration-200"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 bg-blue-500/10 dark:bg-blue-400/8 rounded-lg flex items-center justify-center shrink-0">
                            <span className="text-[10px] font-bold text-gradient uppercase">
                              {skill.name.substring(0, 2)}
                            </span>
                          </div>
                          <span className="text-sm font-medium text-foreground truncate">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs font-semibold text-muted-foreground ml-2 shrink-0">
                          {getLevelLabel(skill.level)}
                        </span>
                      </div>

                      {/* Progress bar */}
                      <div
                        className="h-1.5 bg-muted rounded-full overflow-hidden"
                        role="progressbar"
                        aria-valuenow={skill.level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`${skill.name} proficiency: ${skill.level}%`}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.9,
                            delay: skillIndex * 0.04 + 0.2,
                            ease: "easeOut",
                          }}
                          className="h-full progress-gradient rounded-full"
                        />
                      </div>
                      <p className="text-right text-[10px] text-muted-foreground mt-1.5">
                        {skill.level}%
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
