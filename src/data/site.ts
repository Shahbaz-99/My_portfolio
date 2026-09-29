// Single source of truth. Edit here; every page reads from this file.
export const site = {
  name: 'Sahbaj Ali',
  role: 'Python backend developer',
  headline: 'Backend engineer building reliable APIs, now adding AI to them.',
  intro:
    'I design and ship REST APIs with Django and Django REST Framework, containerize them with Docker, and deploy them on Linux servers. I am a final-year B.Tech student and a backend intern.',
  // Display name matches official ID (Sahbaj); goes by Shahbaz in person.
  location: 'Bhopal, India',
  city: 'Bhopal',
  timezone: 'Asia/Kolkata',
  tzLabel: 'IST',
  photo: '', // e.g. '/me.jpg' (square, put file in /public); empty shows initials
  initials: 'SA',
  githubUser: 'Shahbaz-99',
  email: 'sahbaj.swn@gmail.com',
  github: 'https://github.com/Shahbaz-99',
  linkedin: '', // add URL to show it
  resumeUrl: '', // e.g. '/resume.pdf' after adding the file to /public
  openTo: 'internships and full-time backend roles',
  response: {
    stack: ['Python', 'Django', 'DRF', 'MySQL', 'Docker'],
    ships: ['REST APIs', 'Docker on Linux VPS', 'CI/CD'],
    learning: ['Kubernetes', 'AI engineering'],
  },
};

export type Project = {
  slug: string;
  year?: string; // e.g. '2025', shown on the card cover
  title: string;
  summary: string;
  stack: string[];
  repo?: string;
  demo?: string;
  // Fill these to publish a full case-study page at /projects/<slug>
  problem?: string;
  decisions?: string[];
  result?: string;
};

export const projects: Project[] = [
  {
    slug: 'incident-management',
    title: 'Incident Management System',
    summary:
      'REST APIs for tracking and managing incidents, with authentication, full CRUD, and API testing in Postman.',
    stack: ['Django REST Framework', 'Python'],
  },
  {
    slug: 'employee-management',
    title: 'Employee Management System',
    summary:
      'A CLI app and a web app for employee records, both with complete CRUD and a MySQL backend.',
    stack: ['Python', 'Django', 'MySQL'],
  },
];

export const timeline = [
  {
    name: 'Ethical Intelligence',
    mono: 'EI',
    role: 'Python Backend Developer Intern',
    when: 'Aug 2025 - Present',
    text: 'Built and maintained Django REST APIs, designed database models, and shipped Dockerized services to Linux VPS servers.',
    url: '',
  },
  {
    name: 'All Saints College of Technology',
    mono: 'AS',
    role: 'B.Tech, Computer Science Engineering',
    when: '2023 - 2027',
    text: 'RGPV University, Bhopal.',
    url: '',
  },
];

export const skills = [
  { group: 'Backend', items: ['Python', 'Django', 'Django REST Framework', 'REST APIs'] },
  { group: 'Data', items: ['MySQL'] },
  { group: 'Delivery', items: ['Docker', 'Linux VPS', 'Git and GitHub', 'CI/CD', 'Kubernetes (basics)'] },
  { group: 'Testing', items: ['Postman'] },
];

export const education = {
  school: 'All Saints College of Technology (RGPV University), Bhopal',
  degree: 'B.Tech, Computer Science Engineering',
  period: '2023 to 2027',
};

// Add real AI projects here as you ship them.
export const aiWork: { title: string; summary: string; href?: string }[] = [];
