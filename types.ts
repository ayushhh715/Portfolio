export interface Project {
  title: string;
  description: string;
  techStack: string[];
  links: {
    github?: string;
    live?: string;
  };
  highlights: string[];
  video?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  image?: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}