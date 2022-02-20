
export interface HTMLLink {
  href: string;
  type: 'github' | 'link';
}

export interface Project {
  name: string;
  links: HTMLLink[];
  description: string;
  keywords: string[];
  img?: string;
} 

export interface Experience {
  company: string;
  title: string;
  date: string;
  description: string;
  keywords: string[];
}