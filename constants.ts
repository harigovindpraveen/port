
// FIX: Import React to enable JSX syntax used below.
import React from 'react';
import type { Skill, Project, EducationItem } from './types';
import ReactIcon from './components/icons/ReactIcon';
// FIX: Corrected the typo in the import path.
import TypeScriptIcon from './components/icons/TypeScriptIcon';
import NodeJsIcon from './components/icons/NodeJsIcon';
import TailwindIcon from './components/icons/TailwindIcon';
import GeminiIcon from './components/icons/GeminiIcon';
import GitHubIcon from './components/icons/GitHubIcon';

export const SKILLS: Skill[] = [
  // Frontend
  { name: 'React', icon: ReactIcon, category: 'Frontend' },
  { name: 'JavaScript', icon: TypeScriptIcon, category: 'Frontend' },
  { name: 'HTML', icon: ReactIcon, category: 'Frontend' }, // Using ReactIcon as a placeholder for web tech
  { name: 'CSS', icon: TailwindIcon, category: 'Frontend' },
  
  // Backend
  { name: 'Java', icon: NodeJsIcon, category: 'Backend' }, // Using NodeJsIcon as a placeholder for backend tech
  { name: 'C', icon: NodeJsIcon, category: 'Backend' },
  { name: 'C++', icon: NodeJsIcon, category: 'Backend' },
  { name: 'Python', icon: NodeJsIcon, category: 'Backend' },
  { name: 'SQL', icon: NodeJsIcon, category: 'Backend' },
  
  // Tools
  { name: 'Git', icon: GitHubIcon, category: 'Tools' },
  { name: 'Gemini API', icon: GeminiIcon, category: 'Tools' },
  { name: 'Figma', icon: ReactIcon, category: 'Tools' }, // Using ReactIcon as a placeholder for design tools
  { name: 'Canva', icon: ReactIcon, category: 'Tools' },
  { name: 'DaVinci Resolve', icon: ReactIcon, category: 'Tools' },
];

export const PROJECTS: Project[] = [
  {
    title: 'Personal Portfolio Website',
    description: 'The portfolio you are currently exploring, designed to showcase my skills and projects in a modern, brutalist-inspired interface.',
    detailedDescription: 'This portfolio was built from the ground up using React, TypeScript, and Tailwind CSS, and is deployed with Vite. The design philosophy follows brutalist principles, emphasizing raw, functional, and striking aesthetics. It features smooth animations, a responsive layout, and interactive elements like the particle canvas on the hero section to create an engaging user experience.',
    imageUrl: 'https://picsum.photos/seed/portfolio/400/300',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    date: '2024-07-15',
  },
  {
    title: 'ZERONE IEEE Event Website',
    description: 'A promotional website developed for the ZERONE event as part of the selection process for the IEEE Student Branch executive committee.',
    detailedDescription: 'This project was a time-sensitive task for the IEEE executive committee selection process. The goal was to create a dynamic and informative website for the "ZERONE" event. I utilized my skills in HTML, CSS, TypeScript, and JSX to build the frontend, with JSON for managing event data. The site had to be visually appealing and provide all necessary information about the event, including schedules, speaker bios, and registration links.',
    imageUrl: 'https://picsum.photos/seed/zerone/400/300',
    tags: ['HTML', 'CSS', 'JSON', 'TypeScript', 'JSX'],
    date: '2023-09-20',
    liveUrl: '#',
    videoUrl: 'https://cdn.pixabay.com/video/2023/10/10/185250-873111818_large.mp4',
  },
  {
    title: 'College Website Redesign',
    description: 'A conceptual redesign of a college website, created as a task during a web development workshop.',
    detailedDescription: 'As part of a web development workshop, I was tasked with redesigning and building a static website for a college. This project focused on fundamental web development skills using HTML and CSS. The primary objectives were to create a clean, professional, and user-friendly interface that was fully responsive and accessible, ensuring that prospective students and faculty could easily navigate and find information.',
    imageUrl: 'https://picsum.photos/seed/college/400/300',
    tags: ['HTML', 'CSS'],
    date: '2022-05-10',
    liveUrl: '#',
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'College of Engineering, Kidangoor',
    date: '2024 - Present',
    description: 'Currently pursuing my undergraduate degree, focusing on core computer science principles and software development.',
  },
  {
    degree: 'Higher Secondary (11th & 12th)',
    institution: 'N.S.S. H.S.S., Karukachal',
    date: '2021 - 2023',
    description: 'Completed my higher secondary education with a focus on science and mathematics, laying the groundwork for my engineering studies.',
  },
  {
    degree: 'Secondary Schooling (Class 1-10)',
    institution: "St. John the Baptist's C.B.S.E. School, Nedumkunnam",
    date: '2011 - 2021',
    description: 'Completed my foundational education, developing a strong academic base and a passion for learning.',
  },
];