import { Project, Certification } from './types';

export const DEFAULT_PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'Internship Portal',
    description: 'A student-focused centralized platform for simplified internship discovery, applications, and custom progress tracking dashboards.',
    category: 'frontend',
    techs: ['React', 'UI', 'Dashboard'],
    link: '#',
    thumbClass: 'from-gold-600/20 to-gold-700/40',
  },
  {
    id: 'proj-2',
    title: 'Parameter Visualizer',
    description: 'Interactive analytics canvas charts that transform technical raw parameter records into clean, understandable visualizations.',
    category: 'backend',
    techs: ['Python', 'Charts', 'Analytics'],
    link: '#',
    thumbClass: 'from-amber-600/20 to-gold-500/30',
  },
  {
    id: 'proj-3',
    title: 'E-Commerce System',
    description: 'An advanced full stack product inventory catalog experience focused on commercial transaction speeds, product sorting, and admin tools.',
    category: 'fullstack',
    techs: ['HTML', 'CSS', 'JS'],
    link: '#',
    thumbClass: 'from-neutral-800 to-gold-600/20',
  },
  {
    id: 'proj-4',
    title: 'UI/UX Design Kit',
    description: 'A modular, high-contrast digital library of Figma components, spacing guidelines, typography pairings, and responsive wireframes.',
    category: 'design',
    techs: ['Figma', 'Wireframes', 'Prototyping'],
    link: '#',
    thumbClass: 'from-gold-500/20 to-neutral-800/40',
  },
  {
    id: 'proj-5',
    title: 'Developer Task Hub',
    description: 'A collaborative, offline-first developer scratchpad and tasks organizer featuring client-side states persistence.',
    category: 'frontend',
    techs: ['React', 'LocalState', 'A11y'],
    link: '#',
    thumbClass: 'from-amber-600/10 to-gold-500/20',
  },
];

export const DEFAULT_CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-1',
    icon: '🏆',
    title: 'UI/UX Design',
    issuer: 'Coursera',
    date: 'Issued: May 2024',
    link: '#',
  },
  {
    id: 'cert-2',
    icon: '📘',
    title: 'Advanced React Patterns',
    issuer: 'Udemy',
    date: 'Issued: Apr 2024',
    link: '#',
  },
  {
    id: 'cert-3',
    icon: '🐍',
    title: 'Python Full Stack Developer',
    issuer: 'Udemy',
    date: 'Issued: Mar 2024',
    link: '#',
  },
  {
    id: 'cert-4',
    icon: '🌐',
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: 'Issued: Jan 2024',
    link: '#',
  },
];

export const PROFILE_DATA = {
  profilePic: '',
  name: 'Sharanya',
  bio: 'I design and develop thoughtful, responsive web experiences that balance performance, usability, and polished visual storytelling.',
  email: 'pvsharanya21@gmail.com',
  phone: '',
  location: 'Bengaluru, India',
  github: '',
  linkedin: '',
  twitter: '',
};
