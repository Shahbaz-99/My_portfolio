// Single source of truth. Edit here; every page reads from this file.
export const site = {
  name: 'Sahbaj Ali',
  role: 'Python backend developer',
  headline: 'Backend engineer building reliable APIs, now adding AI to them.',
  intro:
    'I design and ship REST APIs with Django and Django REST Framework, containerize them with Docker, and deploy them on Linux servers. I am a final-year B.Tech student and a backend intern.',
  location: 'Bhopal, India',
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

export const experience = {
  role: 'Python Backend Developer Intern',
  org: 'Ethical Intelligence, Bhopal',
  period: 'Aug 2025 to present',
  points: [
    'Built and maintained REST APIs with Django and Django REST Framework.',
    'Designed database models and optimized application performance.',
    'Containerized applications with Docker and deployed them on Linux VPS servers.',
    'Worked with Git and GitHub, CI/CD workflows, and Kubernetes fundamentals in a team.',
  ],
};

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
