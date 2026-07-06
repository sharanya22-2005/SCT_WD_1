import { Project, Certification } from './types';

export const DEFAULT_PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'Chemical Equipment Data Visualization',
    description: 'Developed a hybrid web & desktop application to visualize and manage chemical equipment data. Designed interactive dashboards for graphical analysis and integrated backend data processing.',
    category: 'fullstack',
    techs: ['HTML', 'CSS', 'JavaScript', 'Python'],
    link: '#',
    thumbClass: 'from-amber-600/20 to-gold-500/30',
  },
  {
    id: 'proj-2',
    title: 'Heart Rate Prediction',
    description: 'Implemented Lagrange polynomial interpolation algorithms in Python to estimate missing values in heart rate datasets and created rich visualizations for accurate trend analysis.',
    category: 'backend',
    techs: ['Python', 'NumPy', 'Matplotlib'],
    link: '#',
    thumbClass: 'from-gold-600/20 to-gold-700/40',
  }
];

export const DEFAULT_CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-1',
    icon: '☕',
    title: 'Java Programming Fundamentals',
    issuer: 'Infosys',
    date: 'Issued: 2026',
    link: '#',
  },
  {
    id: 'cert-2',
    icon: '🐧',
    title: 'Complete UNIX & Linux OS Fundamentals Training',
    issuer: 'Infosys',
    date: 'Issued: 2025',
    link: '#',
  },
  {
    id: 'cert-3',
    icon: '🐍',
    title: 'Basics of Python',
    issuer: 'Infosys',
    date: 'Issued: 2025',
    link: '#',
  },
  {
    id: 'cert-4',
    icon: '📊',
    title: 'Data Structures and Algorithms',
    issuer: 'Infosys',
    date: 'Issued: 2026',
    link: '#',
  },
];

export const PROFILE_DATA = {
  profilePic: '',
  name: 'Sharanya P V',
  bio: 'Information Science and Engineering student proficient in C, C++, Java, and Python, with practical experience in web development. Passionate about building scalable systems and applying analytical problem-solving skills.',
  email: 'pvsharanya21@gmail.com',
  phone: '8431588936',
  location: 'Bengaluru, India',
  github: 'https://github.com/sharanya22-2005',
  linkedin: 'https://linkedin.com/in/sharanya-p-v-17555235a',
  twitter: '',
};
