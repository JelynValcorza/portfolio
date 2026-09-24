"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, MapPin, Send, Loader2 } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/src/components/ui/social-icons";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { Label } from "@/src/components/ui/label";
import { SectionHeading } from "@/src/components/common/SectionHeading";
import { TechSectionBackground } from "@/src/components/common/TechSectionBackground";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type FormData = z.infer<typeof schema>;

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "jelyn.valcorza@email.com",
    href: "mailto:jelyn.valcorza@email.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Philippines",
    href: null,
  },
  {
    icon: GitHubIcon,
    label: "GitHub",
    value: "github.com/jelynvalcorza",
    href: "https://github.com/jelynvalcorza",
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/jelynvalcorza",
    href: "https://linkedin.com/in/jelynvalcorza",
  },
];

export function Contact() {
  const [sending, setSending] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setSending(true);
    // Simulate network request
    await new Promise((resolve) => setTimeout(resolve, 1400));
    setSending(false);
    reset();
    toast.success("Message sent!", {
      description: "Thanks for reaching out, I'll get back to you shortly.",
    });
    // Prevent unused variable warning
    void data;
  };

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden py-24 lg:py-32 bg-surface"
    >
      <TechSectionBackground tone="cyan" particleCount={34} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Contact"
          title="Get In Touch"
          description="Have a project in mind? Let's talk. I'm always open to new opportunities and collaborations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 max-w-5xl mx-auto">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Let&apos;s work together
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I&apos;m currently available for freelance work and full-time
                positions. If you have a project that needs bringing to life,
                let&apos;s connect.
              </p>
            </div>

            {/* Contact cards */}
            <div className="flex flex-col gap-3">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 p-3.5 bg-card border border-border rounded-xl"
                >
                  <div className="w-9 h-9 bg-blue-500/10 dark:bg-blue-400/8 rounded-lg flex items-center justify-center shrink-0">
                    <item.icon
                      className="w-4 h-4 text-blue-600 dark:text-blue-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={
                          item.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          item.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-sm font-medium text-foreground hover:text-primary transition-colors truncate block"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-foreground">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Availability status */}
            <div className="flex items-center gap-2 px-3.5 py-3 bg-green-500/8 border border-green-500/20 rounded-xl">
              <span
                className="w-2 h-2 bg-green-500 rounded-full animate-pulse shrink-0"
                aria-hidden="true"
              />
              <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                Available for new projects
              </p>
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="bg-card border border-border rounded-2xl p-6 sm:p-7 flex flex-col gap-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="Jelyn Valcorza"
                    autoComplete="name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    {...register("name")}
                  />
                  {errors.name && (
                    <p
                      id="name-error"
                      className="text-xs text-red-500"
                      role="alert"
                    >
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    {...register("email")}
                  />
                  {errors.email && (
                    <p
                      id="email-error"
                      className="text-xs text-red-500"
                      role="alert"
                    >
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  placeholder="Project Inquiry"
                  aria-invalid={!!errors.subject}
                  aria-describedby={
                    errors.subject ? "subject-error" : undefined
                  }
                  {...register("subject")}
                />
                {errors.subject && (
                  <p
                    id="subject-error"
                    className="text-xs text-red-500"
                    role="alert"
                  >
                    {errors.subject.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  className="min-h-35"
                  aria-invalid={!!errors.message}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  {...register("message")}
                />
                {errors.message && (
                  <p
                    id="message-error"
                    className="text-xs text-red-500"
                    role="alert"
                  >
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center justify-center gap-2 h-11 px-6 bg-linear-to-r from-blue-500 to-violet-600 text-white text-sm font-semibold rounded-xl hover:opacity-90 transition-all duration-200 disabled:opacity-60 disabled:pointer-events-none shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 disabled:translate-y-0"
              >
                {sending ? (
                  <>
                    <Loader2
                      className="w-4 h-4 animate-spin"
                      aria-hidden="true"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" aria-hidden="true" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
