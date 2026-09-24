"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Star, CheckCircle2 } from "lucide-react";
import { experiences } from "@/src/data/experience";
import { Badge } from "@/src/components/ui/badge";
import { SectionHeading } from "@/src/components/common/SectionHeading";
import { TechSectionBackground } from "@/src/components/common/TechSectionBackground";
import { formatDate } from "@/src/lib/utils";
import { cn } from "@/src/lib/utils";

const typeLabels: Record<string, { label: string; className: string }> = {
  "full-time": {
    label: "Full-time",
    className:
      "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  },
  internship: {
    label: "Internship",
    className:
      "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  },
  freelance: {
    label: "Freelance",
    className:
      "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
  },
  "part-time": {
    label: "Part-time",
    className:
      "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
  },
};

export function Experience() {
  return (
    <section
      id="experience"
      className="relative isolate overflow-hidden py-24 lg:py-32 bg-background"
    >
      <TechSectionBackground tone="emerald" particleCount={30} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Experience"
          title="Professional Journey"
          description="A timeline of my professional experience and growth as a developer."
        />

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical timeline line */}
            <div
              className="absolute left-7.75 top-0 bottom-0 w-px bg-linear-to-b from-blue-500/70 via-violet-500/40 to-border/20"
              aria-hidden="true"
            />

            <div className="space-y-6">
              {experiences.map((exp, i) => {
                const type = typeLabels[exp.type] ?? typeLabels["full-time"];
                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative pl-16"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-5 flex items-center justify-center w-15.5">
                      <div
                        className={cn(
                          "w-8 h-8 rounded-xl border-2 flex items-center justify-center",
                          i === 0
                            ? "bg-linear-to-br from-blue-500 to-violet-600 border-blue-400/50 text-white shadow-md shadow-blue-500/20"
                            : "bg-card border-border text-muted-foreground",
                        )}
                        aria-hidden="true"
                      >
                        <Briefcase className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Card */}
                    <div className="bg-card border border-border rounded-2xl p-5 sm:p-6 hover:border-blue-500/25 dark:hover:border-blue-400/25 card-glow transition-all duration-200">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <h3 className="font-semibold text-foreground text-base">
                            {exp.role}
                          </h3>
                          <p className="text-sm font-medium text-primary mt-0.5">
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex flex-col items-end gap-1.5 shrink-0">
                          <span
                            className={cn(
                              "text-xs px-2 py-0.5 rounded-full font-medium",
                              type.className,
                            )}
                          >
                            {type.label}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {formatDate(exp.startDate)} –{" "}
                            {exp.endDate ? formatDate(exp.endDate) : "Present"}
                          </span>
                        </div>
                      </div>

                      {/* Location */}
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
                        <MapPin
                          className="w-3.5 h-3.5 shrink-0"
                          aria-hidden="true"
                        />
                        {exp.location}
                      </div>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Responsibilities */}
                      <div className="mb-4">
                        <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                          Responsibilities
                        </h4>
                        <ul className="space-y-1.5">
                          {exp.responsibilities.map((resp, ri) => (
                            <li
                              key={ri}
                              className="flex items-start gap-2 text-xs text-muted-foreground"
                            >
                              <span
                                className="w-1.5 h-1.5 bg-border rounded-full shrink-0 mt-1.5"
                                aria-hidden="true"
                              />
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Achievements */}
                      {exp.achievements.length > 0 && (
                        <div className="mb-4">
                          <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2 flex items-center gap-1.5">
                            <Star
                              className="w-3.5 h-3.5 text-primary"
                              aria-hidden="true"
                            />
                            Key Achievements
                          </h4>
                          <ul className="space-y-1.5">
                            {exp.achievements.map((ach, ai) => (
                              <li
                                key={ai}
                                className="flex items-start gap-2 text-xs text-muted-foreground"
                              >
                                <CheckCircle2
                                  className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5"
                                  aria-hidden="true"
                                />
                                {ach}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Tech */}
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
