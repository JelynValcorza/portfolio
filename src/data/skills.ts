import type { SkillGroup } from "@/src/types";

export const skillGroups: SkillGroup[] = [
  {
    category: "frontend",
    label: "Frontend",
    skills: [
      { id: "react", name: "React", level: 90, category: "frontend" },
      { id: "nextjs", name: "Next.js", level: 88, category: "frontend" },
      { id: "typescript", name: "TypeScript", level: 85, category: "frontend" },
      { id: "tailwind", name: "Tailwind CSS", level: 92, category: "frontend" },
      { id: "html", name: "HTML5", level: 95, category: "frontend" },
      { id: "css", name: "CSS3", level: 90, category: "frontend" },
      { id: "framer", name: "Framer Motion", level: 78, category: "frontend" },
      { id: "redux", name: "Redux", level: 72, category: "frontend" },
    ],
  },
  {
    category: "backend",
    label: "Backend",
    skills: [
      { id: "nodejs", name: "Node.js", level: 80, category: "backend" },
      { id: "express", name: "Express.js", level: 78, category: "backend" },
      { id: "php", name: "PHP", level: 82, category: "backend" },
      { id: "laravel", name: "Laravel", level: 80, category: "backend" },
      { id: "python", name: "Python", level: 68, category: "backend" },
    ],
  },
  {
    category: "database",
    label: "Database",
    skills: [
      { id: "mysql", name: "MySQL", level: 85, category: "database" },
      { id: "postgresql", name: "PostgreSQL", level: 78, category: "database" },
      { id: "mongodb", name: "MongoDB", level: 72, category: "database" },
      { id: "firebase", name: "Firebase", level: 75, category: "database" },
      { id: "prisma", name: "Prisma", level: 70, category: "database" },
    ],
  },
  {
    category: "tools",
    label: "Tools & DevOps",
    skills: [
      { id: "git", name: "Git", level: 88, category: "tools" },
      { id: "github", name: "GitHub", level: 88, category: "tools" },
      { id: "docker", name: "Docker", level: 65, category: "tools" },
      { id: "vercel", name: "Vercel", level: 85, category: "tools" },
      { id: "postman", name: "Postman", level: 82, category: "tools" },
      { id: "figma", name: "Figma", level: 75, category: "tools" },
    ],
  },
  {
    category: "languages",
    label: "Programming Languages",
    skills: [
      { id: "javascript", name: "JavaScript", level: 90, category: "languages" },
      { id: "typescript2", name: "TypeScript", level: 85, category: "languages" },
      { id: "php2", name: "PHP", level: 82, category: "languages" },
      { id: "python2", name: "Python", level: 68, category: "languages" },
      { id: "java", name: "Java", level: 62, category: "languages" },
    ],
  },
  {
    category: "uiux",
    label: "UI / UX",
    skills: [
      { id: "figma2", name: "Figma", level: 75, category: "uiux" },
      { id: "responsive", name: "Responsive Design", level: 92, category: "uiux" },
      { id: "accessibility", name: "Accessibility", level: 78, category: "uiux" },
      { id: "wireframing", name: "Wireframing", level: 70, category: "uiux" },
    ],
  },
];
