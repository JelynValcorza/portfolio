"use client";

import { motion } from "framer-motion";
import {
  Code,
  Layers,
  Palette,
  Monitor,
  Building2,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { services } from "@/src/data/services";
import { SectionHeading } from "@/src/components/common/SectionHeading";
import { TechSectionBackground } from "@/src/components/common/TechSectionBackground";

const iconMap: Record<string, React.ElementType> = {
  code: Code,
  layers: Layers,
  palette: Palette,
  monitor: Monitor,
  building: Building2,
  zap: Zap,
};

export function Services() {
  return (
    <section
      id="services"
      className="relative isolate overflow-hidden py-24 lg:py-32 bg-surface"
    >
      <TechSectionBackground tone="emerald" particleCount={30} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Services"
          title="What I Can Do For You"
          description="From concept to deployment — I deliver high-quality digital solutions tailored to your needs."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Code;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="group p-6 bg-card border border-border rounded-2xl hover:border-blue-500/30 dark:hover:border-blue-400/30 hover:shadow-lg transition-all duration-300 flex flex-col card-glow"
              >
                <div className="w-11 h-11 bg-blue-500/10 dark:bg-blue-400/8 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 dark:group-hover:bg-blue-500 group-hover:shadow-md group-hover:shadow-blue-500/25 transition-all duration-300">
                  <Icon
                    className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="font-semibold text-foreground text-base mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                  {service.description}
                </p>

                <ul className="space-y-1.5 mt-auto">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-xs text-muted-foreground"
                    >
                      <CheckCircle2
                        className="w-3.5 h-3.5 text-primary shrink-0"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
