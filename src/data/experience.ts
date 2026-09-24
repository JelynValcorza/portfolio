import type { Experience } from "@/src/types";

export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "TechVault Philippines",
    role: "Junior Software Developer",
    startDate: "2023-06",
    endDate: null,
    description:
      "Working as a Junior Software Developer building enterprise web applications and internal tools for clients across various industries.",
    responsibilities: [
      "Developed and maintained responsive web applications using React and Next.js",
      "Collaborated with UI/UX designers to implement pixel-perfect interfaces",
      "Built and integrated RESTful APIs with Node.js and Express",
      "Participated in code reviews and contributed to technical documentation",
      "Optimized application performance and improved page load times by 40%",
    ],
    achievements: [
      "Led the frontend migration of a legacy PHP system to React, reducing load time by 60%",
      "Implemented CI/CD pipeline that reduced deployment time by 70%",
      "Received 'Rising Star' award for outstanding performance in Q4 2023",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "MySQL", "Docker"],
    location: "Cebu City, Philippines",
    type: "full-time",
  },
  {
    id: "exp-2",
    company: "InnovatePH Solutions",
    role: "Frontend Developer Intern",
    startDate: "2023-01",
    endDate: "2023-05",
    description:
      "Internship focused on frontend development and UI implementation for client projects in an agile environment.",
    responsibilities: [
      "Built responsive landing pages and web interfaces using HTML, CSS, and JavaScript",
      "Assisted in developing React components for an e-commerce platform",
      "Collaborated with senior developers to implement UI designs from Figma mockups",
      "Fixed bugs and wrote unit tests for existing components",
    ],
    achievements: [
      "Successfully delivered 3 client projects ahead of schedule",
      "Received a full-time job offer based on outstanding performance",
    ],
    technologies: ["React", "HTML5", "CSS3", "JavaScript", "Figma", "Bootstrap"],
    location: "Manila, Philippines",
    type: "internship",
  },
  {
    id: "exp-3",
    company: "Self-Employed",
    role: "Freelance Web Developer",
    startDate: "2022-06",
    endDate: "2023-01",
    description:
      "Provided freelance web development services to local businesses and startups, handling projects from requirements gathering to deployment.",
    responsibilities: [
      "Designed and developed custom websites for small businesses",
      "Created and maintained company websites with CMS integration",
      "Provided ongoing website maintenance and technical support",
      "Consulted on technology choices and system architecture",
    ],
    achievements: [
      "Delivered 8+ successful client projects with 5-star ratings",
      "Built a repeat client base with 60% returning customers",
      "Grew monthly revenue by 40% through referrals and portfolio expansion",
    ],
    technologies: ["WordPress", "PHP", "MySQL", "JavaScript", "HTML/CSS"],
    location: "Remote",
    type: "freelance",
  },
];
