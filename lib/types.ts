export interface AboutData {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  github: string;
  linkedin: string;
}

export interface Skill {
  name: string;
  category: "Languages" | "Frameworks" | "Databases" | "DevOps";
}

export interface SkillsData {
  skills: Skill[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
}

export interface ExperienceData {
  experiences: Experience[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
}

export interface ProjectsData {
  projects: Project[];
}
