export interface ProfileData {
  profilePic: string;
  name: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  twitter: string;
}

export type ProjectCategory = 'all' | 'frontend' | 'backend' | 'fullstack' | 'design';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: Exclude<ProjectCategory, 'all'>;
  techs: string[];
  link: string;
  thumbClass: string;
}

export interface Comment {
  id: string;
  name: string;
  text: string;
  date: string;
}

export interface Testimonial {
  id: string;
  stars: number;
  text: string;
  author: string;
  role: string;
  avatar: string;
}

export interface BlogArticle {
  id: string;
  date: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export interface Certification {
  id: string;
  icon: string;
  title: string;
  issuer: string;
  date: string;
  link: string;
}
