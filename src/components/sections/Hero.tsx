"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, ArrowRight, Download, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/src/components/ui/social-icons";
import { ParticleCanvas } from "@/src/components/common/ParticleCanvas";
import profileImage from "@/src/components/sections/profile.png";

const stats = [
  { label: "Years Experience", value: "3+" },
  { label: "Projects Built", value: "15+" },
  { label: "Technologies", value: "20+" },
  { label: "Organizations", value: "3+" },
];

const socialLinks = [
  {
    icon: GitHubIcon,
    href: "https://github.com/jelynvalcorza",
    label: "GitHub",
  },
  {
    icon: LinkedInIcon,
    href: "https://linkedin.com/in/jelynvalcorza",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:jelyn.valcorza@email.com", label: "Email" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55 },
  },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <ParticleCanvas />

        <div className="absolute inset-0 bg-[radial-gradient(circle,#e2e8f020_1px,transparent_1px)] bg-size-[32px_32px] dark:bg-[radial-gradient(circle,#1e293b40_1px,transparent_1px)]" />

        <div className="absolute top-0 right-0 w-175 h-175 bg-blue-500/10 dark:bg-blue-400/8 rounded-full blur-[140px] animate-blob" />
        <div className="absolute bottom-0 left-0 w-125 h-125 bg-violet-500/10 dark:bg-violet-400/8 rounded-full blur-[120px] animate-blob [animation-delay:4s]" />
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-cyan-500/6 dark:bg-cyan-400/6 rounded-full blur-[100px] animate-blob [animation-delay:8s]" />

        <span className="hidden sm:block absolute top-[8%] left-[4%] text-primary/8 dark:text-primary/10 font-mono text-sm font-semibold select-none animate-float [animation-delay:0s]">
          &lt;/&gt;
        </span>
        <span className="hidden sm:block absolute top-[6%] right-[4%] text-primary/8 dark:text-primary/10 font-mono text-sm font-semibold select-none animate-float [animation-delay:1.5s]">
          const
        </span>
        <span className="hidden sm:block absolute bottom-[10%] left-[6%] text-primary/8 dark:text-primary/10 font-mono text-base font-semibold select-none animate-float [animation-delay:3s]">
          {"{}"}
        </span>
        <span className="hidden sm:block absolute bottom-[8%] right-[5%] text-primary/8 dark:text-primary/10 font-mono text-sm font-semibold select-none animate-float [animation-delay:2s]">
          {"=>"}
        </span>
        <span className="hidden lg:block absolute top-[50%] left-[2%] text-primary/6 dark:text-primary/8 font-mono text-xs font-medium select-none animate-float [animation-delay:5s]">
          npm run dev
        </span>
        <span className="hidden lg:block absolute top-[35%] right-[2%] text-primary/6 dark:text-primary/8 font-mono text-xs font-medium select-none animate-float [animation-delay:3.5s]">
          git commit
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-4rem)] py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-500/8 dark:bg-green-400/8 border border-green-500/25 dark:border-green-400/25 rounded-full text-green-600 dark:text-green-400 text-xs font-semibold mb-6">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground leading-[1.08] mb-3"
            >
              Hi, I&apos;m <span className="text-gradient-animated">Jelyn</span>
              <br />
              <span className="text-foreground">Valcorza</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl font-medium text-muted-foreground mb-2"
            >
              Software Developer &amp; Frontend Developer
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-1.5 text-sm text-muted-foreground mb-6"
            >
              <MapPin
                className="w-3.5 h-3.5 text-primary flex-shrink-0"
                aria-hidden="true"
              />
              <span>Philippines</span>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-base text-muted-foreground max-w-md leading-relaxed mb-8"
            >
              I craft modern, performant web applications with clean code and
              thoughtful design. Specializing in React, Next.js, and TypeScript
              — turning ideas into exceptional digital experiences.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 mb-8"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 h-11 px-6 bg-gradient-to-r from-blue-500 to-violet-600 text-white text-sm font-semibold rounded-xl hover:opacity-90 transition-all duration-200 shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5"
              >
                View Projects
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 h-11 px-6 border border-border text-foreground text-sm font-semibold rounded-xl hover:bg-muted transition-all duration-200 hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" aria-hidden="true" />
                Download CV
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2.5"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-xl border border-border hover:border-blue-500/40 hover:bg-blue-500/5 transition-all duration-200 text-muted-foreground hover:text-blue-500 dark:hover:text-blue-400"
                >
                  <social.icon className="w-4 h-4" aria-hidden="true" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
            className="flex items-center justify-center lg:justify-end"
          >
            <div className="relative">
              <div
                className="absolute -inset-6 rounded-[2.5rem] border border-dashed border-blue-500/25 dark:border-blue-400/20 animate-spin-slow"
                aria-hidden="true"
              />
              <div
                className="absolute -inset-6 rounded-[2.5rem] border border-violet-500/20 dark:border-violet-400/15 animate-spin-slow-reverse"
                aria-hidden="true"
              />

              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-3xl overflow-hidden border-2 border-blue-500/30 dark:border-blue-400/25 shadow-2xl shadow-blue-500/10 dark:shadow-blue-400/10 bg-muted animate-glow-pulse">
                <Image
                  src={profileImage}
                  alt="Jelyn Valcorza — Software Developer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute -left-14 top-10 bg-card border border-blue-500/20 dark:border-blue-400/20 rounded-2xl p-3.5 shadow-xl"
              >
                <p className="text-2xl font-bold text-gradient leading-none">
                  4+
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Years Exp.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="absolute -right-14 bottom-10 bg-card border border-violet-500/20 dark:border-violet-400/20 rounded-2xl p-3.5 shadow-xl"
              >
                <p className="text-2xl font-bold text-gradient leading-none">
                  15+
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">Projects</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 pb-16"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 + i * 0.08 }}
              className="bg-card border border-border rounded-2xl px-4 py-5 text-center card-glow transition-all duration-200"
            >
              <p className="text-2xl font-bold text-gradient">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
