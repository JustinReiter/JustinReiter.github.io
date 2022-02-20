
export interface HTMLLink {
  href: string;
  type: 'github' | 'link';
}

export interface Project {
  name: string;
  links: HTMLLink[];
  description: string;
  keywords: string[];
} 

export interface Experience {
  company: string;
  title: string;
  description: string;
  keywords: string[];
}