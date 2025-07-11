
import React from 'react';
import { Project, Skill } from './types';

export const GithubIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);

export const LinkedinIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

export const MailIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
);

export const ReactIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" className={className}><circle cx="0" cy="0" r="2.05" fill="#61DAFB"></circle><g stroke="#61DAFB" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"></ellipse><ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse><ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse></g></svg>
);

export const SKILLS: Skill[] = [
    { name: 'React', icon: <ReactIcon className="h-12 w-12" /> },
    { name: 'TypeScript', icon: <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="TypeScript" className="h-12 w-12" /> },
    { name: 'JavaScript', icon: <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript" className="h-12 w-12 rounded-lg" /> },
    { name: 'Tailwind CSS', icon: <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind CSS" className="h-12 w-12" /> },
    { name: 'Node.js', icon: <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node.js" className="h-12 w-12" /> },
    { name: 'Gemini API', icon: <img src="https://www.gstatic.com/a/images/gemini/google_gemini_rebrand_logomark_0.svg" alt="Gemini API" className="h-12 w-12" /> },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Gelişmiş E-Ticaret Platformu',
    description: 'Modern teknolojilerle oluşturulmuş, kullanıcı dostu bir e-ticaret sitesi. Ürün arama, filtreleme ve sepet yönetimi gibi özelliklere sahiptir.',
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    id: 2,
    title: 'AI İçerik Oluşturucu',
    description: 'Google Gemini API kullanarak metin ve görsel içerik üreten bir yapay zeka uygulaması. Kullanıcılara yaratıcı metinler ve görseller sunar.',
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    tags: ['React', 'Gemini API', 'Tailwind CSS'],
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    id: 3,
    title: 'Veri Görselleştirme Paneli',
    description: 'D3.js ve Recharts kullanılarak geliştirilmiş, karmaşık veri setlerini interaktif grafiklerle sunan bir analiz paneli.',
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    tags: ['React', 'D3.js', 'Recharts'],
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    id: 4,
    title: 'Kişisel Blog Platformu',
    description: 'Minimalist ve hızlı bir blog platformu. Markdown desteği ile kolayca içerik oluşturma imkanı tanır.',
    imageUrl: 'https://picsum.photos/seed/project4/600/400',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    liveUrl: '#',
    codeUrl: '#',
  },
];
