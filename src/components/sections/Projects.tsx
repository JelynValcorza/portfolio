"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Code2, ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/src/components/ui/social-icons";
import { projects } from "@/src/data/projects";
import { Dialog } from "@/src/components/ui/dialog";
import { Badge } from "@/src/components/ui/badge";
import { SectionHeading } from "@/src/components/common/SectionHeading";
import type { Project } from "@/src/types";
import { TechSectionBackground } from "@/src/components/common/TechSectionBackground";

function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      onClick={onClick}
      className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-blue-500/35 dark:hover:border-blue-400/35 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col card-glow"
    >
      <div className="relative aspect-video bg-muted overflow-hidden shrink-0">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            target.style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-accent/10 flex items-center justify-center">
          <span className="text-3xl font-bold text-primary/40 select-none">
            {project.title.substring(0, 2).toUpperCase()}
          </span>
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
          <span className="text-xs text-white bg-black/40 backdrop-blur-sm px-2 py-1 rounded-lg ml-auto">
            View details →
          </span>
        </div>
        <div className="absolute top-3 left-3">
          <span className="text-[10px] font-semibold uppercase tracking-wide px-2 py-1 bg-black/50 text-white rounded-lg backdrop-blur-sm">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-foreground text-base leading-snug group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <span className="text-xs text-muted-foreground shrink-0">
            {project.year}
          </span>
        </div>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge variant="secondary">
              +{project.technologies.length - 4}
            </Badge>
          )}
        </div>

        <div
          className="flex items-center gap-2"
          onClick={(e) => e.stopPropagation()}
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} source code on GitHub`}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-border hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
          >
            <Code2 className="w-3.5 h-3.5" aria-hidden="true" />
            Code
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden py-24 lg:py-32 bg-surface"
    >
      <TechSectionBackground tone="cyan" particleCount={38} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Projects"
          title="Things I've Built"
          description="A showcase of my recent projects — from web applications to enterprise systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onClick={() => setSelected(project)}
            />
          ))}
        </div>
      </div>

      <Dialog isOpen={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <div>
            <div className="relative aspect-video bg-muted rounded-t-2xl overflow-hidden">
              <Image
                src={selected.image}
                alt={selected.title}
                fill
                className="object-cover"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.display = "none";
                }}
              />
              <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                <span className="text-6xl font-bold text-primary/30 select-none">
                  {selected.title.substring(0, 2).toUpperCase()}
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                    {selected.category}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mt-1">
                    {selected.title}
                  </h3>
                </div>
                <span className="text-sm text-muted-foreground shrink-0">
                  {selected.year}
                </span>
              </div>

              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                {selected.longDescription}
              </p>

              <div className="mb-5">
                <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {selected.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span
                        className="w-1.5 h-1.5 bg-primary rounded-full shrink-0 mt-1.5"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selected.technologies.map((tech) => (
                    <Badge key={tech} variant="primary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={selected.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium border border-border rounded-xl hover:bg-muted transition-colors"
                >
                  <GitHubIcon
                    size={16}
                    className="w-4 h-4"
                    aria-hidden="true"
                  />
                  View Source Code
                </a>
                {selected.demo && (
                  <a
                    href={selected.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </Dialog>
    </section>
  );
}
