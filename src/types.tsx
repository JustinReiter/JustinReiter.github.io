
export interface HTMLLink {
  href: string;
  type: 'github' | 'link' | 'devpost';
}

export interface img {
  src: string;
  alt: string;
}

export interface Project {
  name: string;
  links: HTMLLink[];
  date: string;
  description: string;
  subdescription?: string;
  keywords: string[];
  img?: img;
} 

export interface Experience {
  company: string;
  title: string;
  date: string;
  description: string[];
  keywords: string[];
  img?: img;
}