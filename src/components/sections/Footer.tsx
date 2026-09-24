"use client";

import { Mail, ArrowUp, Heart } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/src/components/ui/social-icons";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
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

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
          <div className="sm:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white text-sm font-bold select-none">
                JV
              </span>
              <span className="font-semibold text-sm">Jelyn Valcorza</span>
            </div>
            <p className="text-sm text-secondary-foreground/60 leading-relaxed max-w-xs">
              Software Developer &amp; Frontend Developer crafting modern web
              experiences with clean code and thoughtful design.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-secondary-foreground/50 mb-4">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-secondary-foreground/50 mb-4">
              Connect
            </h3>
            <div className="flex flex-col gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    social.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={social.label}
                  className="flex items-center gap-2.5 text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
                >
                  <social.icon className="w-4 h-4" aria-hidden="true" />
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-secondary-foreground/50 flex items-center gap-1.5">
            © {new Date().getFullYear()} Jelyn Valcorza. Built with{" "}
            <Heart className="w-3 h-3 text-red-400 inline" aria-label="love" />{" "}
            using Next.js &amp; Tailwind CSS.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="flex items-center gap-1.5 text-xs text-secondary-foreground/50 hover:text-secondary-foreground transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
