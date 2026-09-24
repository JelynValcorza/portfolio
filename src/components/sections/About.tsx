"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  MapPin,
  Calendar,
  GraduationCap,
  Target,
  Heart,
  Code2,
} from "lucide-react";
import { SectionHeading } from "@/src/components/common/SectionHeading";
import { TechSectionBackground } from "@/src/components/common/TechSectionBackground";

const highlights = [
  { icon: MapPin, label: "Based in", value: "Philippines" },
  { icon: Calendar, label: "Experience", value: "4+ Years" },
  {
    icon: GraduationCap,
    label: "Education",
    value: "BS Information Technology",
  },
  { icon: Code2, label: "Specialty", value: "Frontend & Full Stack" },
];

const educations = [
  {
    school: "University of the Philippines",
    degree: "Bachelor of Science in Information Technology",
    year: "2019 – 2023",
    description:
      "Graduated with honors. Specialized in web development and software engineering. Active member of the Computer Science Society.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden py-24 lg:py-32 bg-surface"
    >
      <TechSectionBackground tone="cyan" particleCount={32} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="About Me"
          title="Who I Am"
          description="A passionate developer who loves crafting elegant solutions to complex problems."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-4/5 max-w-sm mx-auto lg:mx-0">
              <div
                className="absolute inset-0 bg-primary/5 rounded-3xl -rotate-3"
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 bg-border/40 rounded-3xl rotate-3 border border-border"
                aria-hidden="true"
              />
              <div className="relative h-full rounded-3xl overflow-hidden border border-border shadow-xl bg-muted">
                <Image
                  src="/profile.svg"
                  alt="Jelyn Valcorza"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Status card */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="absolute -bottom-4 -right-4 sm:right-0 bg-card border border-border rounded-2xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-green-500/10 rounded-xl flex items-center justify-center shrink-0">
                  <Target
                    className="w-4 h-4 text-green-500"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Open to Work
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Full-time / Contract
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-7"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Jelyn Valcorza
              </h3>
              <div className="space-y-3 text-muted-foreground leading-relaxed text-sm sm:text-base">
                <p>
                  I&apos;m a passionate Software Developer and Frontend
                  Specialist based in the Philippines, with over 2 years of
                  experience crafting modern web applications that are both
                  beautiful and performant.
                </p>
                <p>
                  My journey in tech started with a deep curiosity about how
                  websites work, which eventually led me to pursue a career in
                  software development. I specialize in building scalable web
                  applications using React, Next.js, and TypeScript.
                </p>
                <p>
                  Beyond code, I&apos;m passionate about open-source, learning
                  new technologies, and sharing knowledge with the developer
                  community.
                </p>
              </div>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-center gap-3 p-3.5 bg-background rounded-xl border border-border hover:border-primary/25 transition-colors"
                >
                  <div className="w-8 h-8 bg-blue-500/10 dark:bg-blue-400/8 rounded-lg flex items-center justify-center shrink-0">
                    <item.icon
                      className="w-4 h-4 text-blue-600 dark:text-blue-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Passion */}
            <div className="flex items-start gap-3 p-4 bg-blue-500/5 dark:bg-blue-400/5 border border-blue-500/15 dark:border-blue-400/15 rounded-xl">
              <Heart
                className="w-4 h-4 text-pink-500 dark:text-pink-400 shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <p className="text-sm text-muted-foreground leading-relaxed">
                I&apos;m genuinely passionate about building web experiences
                that make people&apos;s lives easier and more enjoyable. Clean
                code, great UX, and continuous learning drive everything I do.
              </p>
            </div>

            {/* Education */}
            <div>
              <h4 className="flex items-center gap-2 text-xs font-semibold text-foreground uppercase tracking-wider mb-3">
                <GraduationCap
                  className="w-4 h-4 text-primary"
                  aria-hidden="true"
                />
                Education
              </h4>
              {educations.map((edu) => (
                <div
                  key={edu.school}
                  className="p-4 bg-background rounded-xl border border-border"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h5 className="font-medium text-foreground text-sm leading-snug">
                      {edu.degree}
                    </h5>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-blue-600 dark:text-blue-400 mb-1.5">
                    {edu.school}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
