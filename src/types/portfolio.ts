export interface Project {
  id: string;
  title: string;
  category: 'web' | 'cybersecurity' | 'gestion';
  summary: string;
  description: string;
  image: string;
  tags: string[];
  features: string[];
  techStack: string[];
  metrics?: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  skills: {
    name: string;
    level: number; // 0 - 100
    description: string;
    focus: string;
  }[];
}

export interface TerminalOutput {
  id: string;
  command: string;
  response: string;
  type: 'info' | 'success' | 'warning' | 'error';
  timestamp: string;
}
