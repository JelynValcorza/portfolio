export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  github: string;
  demo?: string;
  features: string[];
  category: string;
  year: number;
}

export type SkillCategory = "frontend" | "backend" | "database" | "tools" | "languages" | "uiux";

export interface Skill {
  id: string;
  name: string;
  level: number;
  category: SkillCategory;
}

export interface SkillGroup {
  category: SkillCategory;
  label: string;
  skills: Skill[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string | null;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  location: string;
  type: "full-time" | "part-time" | "internship" | "freelance";
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  url?: string;
  credentialId?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}
