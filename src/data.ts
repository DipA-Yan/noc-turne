// =====================================================================
//  ⚠ PLACEHOLDER / DUMMY DATA
//  Everything below is filler. Replace it with your real information.
//  Images live in /public/images — drop your own files with the same
//  names (hero.png, about.jpg, project-1..6.jpg) to swap the art.
// =====================================================================

export const NAV = [
  { id: 'home', label: 'Home', jp: '家' },
  { id: 'about', label: 'About', jp: '自分' },
  { id: 'education', label: 'Education', jp: '経歴' },
  { id: 'skills', label: 'Skills', jp: '技能' },
  { id: 'projects', label: 'Projects', jp: '作品' },
  { id: 'contact', label: 'Contact', jp: '連絡' },
] as const;

export const NAV_IDS = NAV.map((n) => n.id);

export const roles = [
  'Full-Stack Developer',
  'UI / UX Designer',
  'Creative Coder',
  'Anime Enthusiast',
];

export const profile = {
  firstName: 'KAI', // TODO: your name
  lastName: 'NAKAMURA', // TODO: your name
  name: 'Kai Nakamura',
  alias: 'KAIRO',
  jpName: '中村カイ',
  jpIntro: 'やあ、俺は',
  role: 'Full-Stack Developer',
  tagline:
    'I build fast, sharp, story-driven web experiences — code with protagonist energy and a dark-mode-only lifestyle.',
  location: 'Neo-Tokyo, Earth', // TODO: your city
  email: 'kai@nakamura.dev', // TODO: your email
  phone: '+00 123 456 789', // TODO: your phone
  status: 'OPEN TO WORK',
  level: '21',
  resumeUrl: '#contact', // TODO: link to your real CV / resume PDF
};

export type SocialIcon = 'github' | 'linkedin' | 'twitter' | 'instagram';
export type Social = { label: string; handle: string; href: string; icon: SocialIcon };

export const socials: Social[] = [
  { label: 'GitHub', handle: '@your-github', href: 'https://github.com/', icon: 'github' },
  { label: 'LinkedIn', handle: '/in/your-name', href: 'https://www.linkedin.com/', icon: 'linkedin' },
  { label: 'Twitter / X', handle: '@your-handle', href: 'https://twitter.com/', icon: 'twitter' },
  { label: 'Instagram', handle: '@your-handle', href: 'https://www.instagram.com/', icon: 'instagram' },
];

export const stats = [
  { label: 'Projects Shipped', value: 24, suffix: '+' },
  { label: 'Years of Coding', value: 4, suffix: '+' },
  { label: 'Happy Clients', value: 15, suffix: '+' },
  { label: 'Ramen Consumed', value: 999, suffix: '+' },
];

export const about = {
  p1: "Yo — I'm Kai . A full-stack developer who treats every build like an anime arc: a cold open, rising stakes, a training montage of debugging and a finale that ships on time. I live at the intersection of clean engineering and loud visuals.",
  p2: 'By day I craft responsive web apps with React, TypeScript and Node. By night I experiment with shaders, 3D interfaces and motion design — because a portfolio should feel like a key visual not a spreadsheet. Currently accepting side quests and main-story missions alike.',
  details: [
    { k: 'Name', v: 'Kai Nakamura' },
    { k: 'Alias', v: 'KAIRO' },
    { k: 'Age', v: '21 (placeholder)' },
    { k: 'Based In', v: 'Neo-Tokyo, Earth' },
    { k: 'Email', v: 'your.name@placeholder.dev' },
    { k: 'Status', v: 'Open to Work' },
  ],
};

export const education = [
  {
    period: '2022 — 2026',
    school: 'Placeholder University of Technology',
    degree: 'B.Sc. Computer Science',
    note: 'Focus on web engineering & human-computer interaction. Swap with your real degree, school and grades.',
    grade: 'GPA 3.8 / 4.0',
  },
  {
    period: '2020 — 2022',
    school: 'Placeholder High School',
    degree: 'Science Major — Math & Physics',
    note: 'Led the computer club and built my first gloriously terrible website here.',
    grade: 'TOP 5%',
  },
  {
    period: '2023',
    school: 'FreeCodeCamp + Udemy Arc',
    degree: 'Full-Stack Web Development',
    note: '300+ certified hours across JavaScript, React, Node and databases.',
    grade: 'CERTIFIED',
  },
  {
    period: 'ONGOING',
    school: 'Academy of Hard Knocks',
    degree: 'Self-Taught Sorcery',
    note: 'Docs, side quests, open-source raids and late-night debugging arcs.',
    grade: '∞ XP',
  },
];

export const skillBars = [
  { name: 'JavaScript / TypeScript', level: 90 },
  { name: 'React / Next.js', level: 88 },
  { name: 'Node.js / Express', level: 82 },
  { name: 'UI Design / Figma', level: 78 },
  { name: 'Python', level: 72 },
  { name: 'Three.js / WebGL', level: 64 },
];

export const skillGroups = [
  {
    title: 'Frontend',
    jp: '前端',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'Redux', 'Framer Motion'],
  },
  {
    title: 'Backend',
    jp: '後端',
    items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST', 'GraphQL', 'Firebase'],
  },
  {
    title: 'Tools & Misc',
    jp: '道具',
    items: ['Git', 'Docker', 'Figma', 'Linux', 'Vercel', 'Blender', 'Photoshop'],
  },
];

export const learning = ['Three.js', 'Rust', 'WebGPU', 'Shader Art', 'GSAP'];

export type Project = {
  id: string;
  title: string;
  jp: string;
  type: string;
  year: string;
  featured?: boolean;
  image?: string;
  desc: string;
  tags: string[];
  demo: string;
  repo: string;
};

export const projects: Project[] = [
  {
    id: '01',
    title: 'ONI ANALYTICS',
    jp: '鬼',
    type: 'WEB APP',
    year: '2025',
    featured: true,
    image: '/images/project-1.jpg',
    desc: 'A cyber-styled analytics dashboard with real-time charts, custom widget forge and a demon-fast query engine. Built for teams who like their data dark and their insights instant.',
    tags: ['React', 'TypeScript', 'D3.js', 'Node'],
    demo: 'https://example.com',
    repo: 'https://github.com/',
  },
  {
    id: '02',
    title: 'KAGE STORE',
    jp: '影',
    type: 'E-COMMERCE',
    year: '2025',
    image: '/images/project-2.jpg',
    desc: 'Streetwear shop with AR try-on previews, cart combos and drops that sell out like limited Blu-rays.',
    tags: ['Next.js', 'Stripe', 'Tailwind'],
    demo: 'https://example.com',
    repo: 'https://github.com/',
  },
  {
    id: '03',
    title: 'WAVEFORM 夜',
    jp: '夜',
    type: 'MUSIC APP',
    year: '2024',
    image: '/images/project-3.jpg',
    desc: 'Lo-fi music player with live visualizer, focus timer and playlists curated like episode lists.',
    tags: ['React', 'Web Audio', 'PWA'],
    demo: 'https://example.com',
    repo: 'https://github.com/',
  },
  {
    id: '04',
    title: 'KITSUNE AI',
    jp: '狐',
    type: 'AI CHATBOT',
    year: '2024',
    image: '/images/project-4.jpg',
    desc: 'A fox-spirit assistant that answers docs questions with citations — nine tails, zero hallucinations (mostly).',
    tags: ['Python', 'FastAPI', 'LLM', 'React'],
    demo: 'https://example.com',
    repo: 'https://github.com/',
  },
  {
    id: '05',
    title: 'BLADE RUNNER RPG',
    jp: '刃',
    type: 'BROWSER GAME',
    year: '2023',
    image: '/images/project-5.jpg',
    desc: 'Turn-based katana duels in the browser — parry timing, combo stances and a pixel-blood-free rating.',
    tags: ['TypeScript', 'Canvas', 'Zustand'],
    demo: 'https://example.com',
    repo: 'https://github.com/',
  },
  {
    id: '06',
    title: 'TITAN TRAINING',
    jp: '力',
    type: 'FITNESS APP',
    year: '2023',
    image: '/images/project-6.jpg',
    desc: 'Workout tracker that gamifies gains — XP per set, boss-bar PRs and streak flames that refuse to die.',
    tags: ['React Native', 'Firebase'],
    demo: 'https://example.com',
    repo: 'https://github.com/',
  },
];

export const contact = {
  heading: 'Got a quest for me?',
  sub: "Whether it's a full product, a collab, or just to argue about the best seasonal arc — my inbox is always open. Drop a message and I'll reply within 24 hours.",
  availability: 'Available for freelance & full-time',
};

export const marqueeA = ['PORTFOLIO', '作品集', 'FULL-STACK DEV', 'アニメ', 'CREATIVE CODER', '主人公', 'UI DESIGN', '東京'];
export const marqueeB = ['REACT', '反応', 'TYPESCRIPT', '型', 'NODE.JS', 'node', 'THREE.JS', '三次元', 'MOTION', '動き'];
