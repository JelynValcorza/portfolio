import type { Service } from "@/src/types";

export const services: Service[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    description:
      "Building modern, responsive user interfaces with React and Next.js. Every pixel crafted with precision and attention to detail.",
    icon: "code",
    features: [
      "React & Next.js applications",
      "TypeScript development",
      "Responsive design",
      "Performance optimization",
      "Component libraries",
    ],
  },
  {
    id: "software",
    title: "Software Development",
    description:
      "End-to-end software solutions from architecture design to deployment, with clean code and scalable patterns that grow with your business.",
    icon: "layers",
    features: [
      "Full-stack development",
      "System architecture design",
      "Code refactoring & optimization",
      "Performance tuning",
      "Technical documentation",
    ],
  },
  {
    id: "uiux",
    title: "UI/UX Implementation",
    description:
      "Transforming designs into pixel-perfect, interactive interfaces. From Figma to production-ready code with smooth animations.",
    icon: "palette",
    features: [
      "Figma to code conversion",
      "Interactive prototypes",
      "Accessibility (WCAG) implementation",
      "Design system creation",
      "Animation & micro-interactions",
    ],
  },
  {
    id: "responsive",
    title: "Responsive Websites",
    description:
      "Websites that look and function beautifully on all devices — from 320px mobile screens to 4K displays. No compromises.",
    icon: "monitor",
    features: [
      "Mobile-first design approach",
      "Cross-browser compatibility",
      "SEO optimization",
      "Fast loading performance",
      "CMS integration",
    ],
  },
  {
    id: "erp",
    title: "ERP Development",
    description:
      "Custom enterprise resource planning solutions to streamline your business operations, reduce costs, and improve team efficiency.",
    icon: "building",
    features: [
      "Custom ERP modules",
      "Inventory management systems",
      "HR & payroll integration",
      "Reporting & analytics",
      "System integrations",
    ],
  },
  {
    id: "api",
    title: "API Integration",
    description:
      "Seamlessly connecting services and building robust API solutions. Clean, documented, and secure APIs that power modern applications.",
    icon: "zap",
    features: [
      "RESTful API development",
      "Third-party service integrations",
      "API documentation (Swagger)",
      "Authentication & security",
      "Webhook implementations",
    ],
  },
];
