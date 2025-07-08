export type Basics = { name: string; label: string; summary: string };
export type Rank = { label: string; value: string | number; url: string };
export type Contact = {
  location: string;
  email: string;
  phone: string;
  website: string;
  github: string;
  linkedin: string;
};

export type Language = { label: string; level: string };
export type ToolCategory = { label: string; items: { name: string; level: number }[] };

export type ExperienceItem = {
  company: string;
  title: string;
  start: string;
  end?: string;
  summary: string;
  tech: string[];
  website?: string;
};

export type EducationItem = {
  start: string;
  end: string;
  school: string;
  degree: string;
  location: string;
};

export type SkillGroup = { title: string; description: string; tags: string[] };

export type Stage = 'WIP' | 'α';

export type ProjectItem = {
  name: string;
  description: string;
  tech: string[];
  repo?: string;
  demo?: string;
  stage?: Stage;
};

/* master object */
export interface Resume {
  labels: { experience: string; education: string; skills: string; projects: string };
  basics: Basics;
  ranks: Rank[];
  contact: Contact;
  languages: Language[];
  tools: ToolCategory[];
  experience: ExperienceItem[];
  education: EducationItem[];
  techSkills: SkillGroup[];
  projects: ProjectItem[];
}
