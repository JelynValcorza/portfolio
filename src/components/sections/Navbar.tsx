"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { useScrollPosition } from "@/src/hooks/useScrollPosition";
import { ThemeToggle } from "@/src/components/common/ThemeToggle";
import { cn } from "@/src/lib/utils";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isScrolled } = useScrollPosition();

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-transparent",
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className="flex items-center justify-between h-16"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#home");
              }}
              className="flex items-center gap-2.5 font-bold text-foreground hover:opacity-80 transition-opacity"
              aria-label="Jelyn Valcorza - home"
            >
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white text-sm font-bold select-none shadow-sm shadow-blue-500/20">
                JV
              </span>
              <span className="hidden sm:block text-sm font-semibold">
                Jelyn Valcorza
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted/60 transition-all duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <a
                href="/resume.pdf"
                download
                className="hidden sm:inline-flex items-center gap-1.5 h-9 px-3.5 text-xs font-semibold bg-gradient-to-r from-blue-500 to-violet-600 text-white rounded-xl hover:opacity-90 transition-colors shadow-sm shadow-blue-500/20"
              >
                <Download className="w-3.5 h-3.5" />
                Resume
              </a>
              <button
                aria-label="Toggle navigation menu"
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2 rounded-xl border border-border hover:bg-muted transition-colors"
                aria-expanded={menuOpen}
              >
                {menuOpen ? (
                  <X className="w-4 h-4" />
                ) : (
                  <Menu className="w-4 h-4" />
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="fixed top-16 left-0 right-0 z-30 bg-background/98 backdrop-blur-md border-b border-border md:hidden shadow-lg"
          >
            <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-0.5">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => {
                    scrollTo(link.href);
                    setMenuOpen(false);
                  }}
                  className="flex w-full px-3 py-2.5 text-sm text-foreground hover:bg-muted rounded-xl transition-colors text-left"
                >
                  {link.label}
                </motion.button>
              ))}
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 mt-2 px-3 py-2.5 text-sm font-semibold bg-primary text-primary-foreground rounded-xl"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
