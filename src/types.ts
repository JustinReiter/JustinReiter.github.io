
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
  short_desc: string;
  description: string;
  subdescription?: string;
  keywords: string[];
  priority: number;
  img?: img;
} 

export interface Experience {
  company: string;
  title: string;
  date: string;
  location: string;
  short_desc: string;
  description: string[];
  keywords: string[];
  img?: img;
  link: string;
}