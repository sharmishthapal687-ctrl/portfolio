export type ProjectCategory = 'all' | 'dev' | 'design' | 'iot' | 'ai';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  category: 'dev' | 'design' | 'iot' | 'ai';
  tags: string[];
  featured: boolean;
  badge?: string;
  metrics?: string;
  demoUrl?: string;
  githubUrl?: string;
  figmaUrl?: string;
  highlights: string[];
  accentColor: string;
}

export interface WorkItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  imageUrl?: string;
  tools?: string[];
  year?: string;
}

export interface DesignCategory {
  id: string;
  name: string;
  shortDesc: string;
  badge: string;
  works: WorkItem[];
}

export interface SkillItem {
  name: string;
  highlight?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: SkillItem[];
}

export interface Experience {
  role: string;
  organization: string;
  type: string;
  period: string;
  location?: string;
  description: string;
  bullets: string[];
  tags: string[];
}

export interface Achievement {
  title: string;
  event: string;
  date: string;
  badge: string;
  description: string;
  icon: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  details: string[];
}
