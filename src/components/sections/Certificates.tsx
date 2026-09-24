"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Award, Calendar } from "lucide-react";
import { certificates } from "@/src/data/certificates";
import { SectionHeading } from "@/src/components/common/SectionHeading";
import { TechSectionBackground } from "@/src/components/common/TechSectionBackground";
import { formatDate } from "@/src/lib/utils";

export function Certificates() {
  return (
    <section
      id="certificates"
      className="relative isolate overflow-hidden py-24 lg:py-32 bg-background"
    >
      <TechSectionBackground tone="blue" particleCount={28} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Certificates"
          title="Certifications & Achievements"
          description="Continuous learning through industry-recognized certifications and courses."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Certificate image */}
              <div className="relative aspect-4/3 bg-muted overflow-hidden shrink-0">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
                {/* Fallback */}
                <div className="absolute inset-0 bg-linear-to-br from-primary/15 to-accent/10 flex items-center justify-center">
                  <Award
                    className="w-14 h-14 text-primary/30"
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-semibold text-foreground text-sm leading-snug mb-1 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs font-medium text-primary mb-3">
                  {cert.issuer}
                </p>

                <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4">
                  <Calendar
                    className="w-3.5 h-3.5 shrink-0"
                    aria-hidden="true"
                  />
                  <span>Issued {formatDate(cert.date)}</span>
                </div>

                {cert.credentialId && (
                  <p className="text-xs text-muted-foreground mb-4">
                    <span className="font-medium">ID:</span> {cert.credentialId}
                  </p>
                )}

                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${cert.title} certificate`}
                    className="mt-auto flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
                  >
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    View Certificate
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
