// Single source of truth. Edit here; every page reads from this file.
export const site = {
  name: 'Sahbaj Ali', // matches official ID; goes by Shahbaz in person
  role: 'Python backend developer',
  headline: 'Backend engineer building reliable APIs, now adding AI to them.',
  intro:
    'I design and ship REST APIs with Django and Django REST Framework, containerize them with Docker, and deploy them on Linux servers.',
  location: 'Bhopal, India',
  city: 'Bhopal',
  timezone: 'Asia/Kolkata',
  tzLabel: 'IST',
  photo: '/me.jpg', // put a square image in /public; empty shows initials
  initials: 'SA',
  email: 'sahbaj.swn@gmail.com',
  github: 'https://github.com/Shahbaz-99',
  githubUser: 'Shahbaz-99',
  linkedin: '', // add URL to show it
  resumeUrl: '', // e.g. '/resume.pdf' after adding the file to /public
  openTo: 'internships and full-time backend roles',
};

export type Project = {
  slug: string;
  title: string;
  tagline?: string;
  year?: string;
  summary: string;
  stack: string[];
  repo?: string;
  demo?: string;
  problem?: string;
  roles?: string[];
  highlights?: { title: string; text: string }[];
  flow?: { title: string; text: string }[];
  decisions?: string[];
};

export const projects: Project[] = [
  {
    slug: 'incident-management',
    title: 'Incident Management System',
    tagline: 'Role-based incident tracking, from report to resolution.',
    summary:
      'A backend system for reporting, tracking and resolving incidents across organizational roles, secured with JWT and role-based access control.',
    stack: ['Python', 'Django', 'Django REST Framework', 'JWT', 'SQLite'],
    problem:
      'Organizations need one place to report incidents, assign them to the right people and follow them through to resolution, while making sure each person can only do what their role allows. I designed and built the backend for that: APIs for incident creation, assignment, status updates and resolution, with authentication and permissions enforced at the application level.',
    roles: ['Admin', 'POC', 'Employee'],
    highlights: [
      { title: 'JWT authentication', text: 'Token-based sign-in secures access to the APIs.' },
      { title: 'Role-based access control', text: 'Admins, POCs and Employees each get the permissions their role needs.' },
      { title: 'Incident lifecycle management', text: 'Creation, assignment, status updates and resolution as first-class workflows.' },
      { title: 'RESTful API design', text: 'A maintainable API structure built around the incident workflow.' },
      { title: 'Secure authorization flow', text: 'Permissions are enforced at the application level to match each user responsibility.' },
    ],
    flow: [
      { title: 'Create', text: 'An incident is reported.' },
      { title: 'Assign', text: 'It is routed to the right person.' },
      { title: 'Update', text: 'Status moves as work progresses.' },
      { title: 'Resolve', text: 'The incident is resolved and closed.' },
    ],
    decisions: [
      'JWT for authentication, so every API request carries a verifiable identity.',
      'Role-based authorization enforced at the application level, separating what Admins, POCs and Employees can do.',
      'A maintainable API structure organized around the incident lifecycle.',
    ],
  },
  {
    slug: 'menumint',
    title: 'MenuMint QR Code Generator',
    tagline: 'Print-ready QR codes for restaurant menus.',
    summary:
      'A web application that generates downloadable QR codes linked to restaurant menu URLs, for contactless menu access.',
    stack: ['Python', 'Django', 'QRCode library'],
    problem:
      'Restaurants that want contactless menus need a QR code that reliably points to their menu and can be printed. I built a lightweight Django application that takes a menu URL, validates it and generates a QR code image that can be downloaded and used on standees, table cards and menus.',
    highlights: [
      { title: 'QR code generation', text: 'Turns a menu URL into a scannable QR code.' },
      { title: 'URL validation', text: 'Checks the link before a code is generated.' },
      { title: 'Downloadable QR images', text: 'Crisp, print-ready images for standees, table cards and menus.' },
      { title: 'Lightweight application design', text: 'A simple, efficient workflow with few moving parts.' },
    ],
    flow: [
      { title: 'Enter URL', text: 'Paste the restaurant menu link.' },
      { title: 'Validate', text: 'The URL is checked.' },
      { title: 'Generate', text: 'The backend creates the QR code.' },
      { title: 'Download', text: 'Save the image and print it.' },
    ],
    decisions: [
      'Keep the workflow simple and efficient: one input, one output.',
      'Validate URLs up front so a printed code does not point to a bad link.',
      'Handle QR generation and data handling in the backend.',
    ],
  },
  {
    slug: 'employee-management',
    title: 'Employee Management System',
    tagline: 'The same idea built twice: as a CLI and as a web app.',
    summary:
      'A CLI app and a web app for managing employee records, both with complete CRUD and a MySQL backend.',
    stack: ['Python', 'Django', 'MySQL'],
    problem:
      'Employee records need to be created, viewed, updated and deleted reliably. I built this domain twice, as a command-line application and as a Django web application, both storing data in MySQL.',
    highlights: [
      { title: 'Complete CRUD', text: 'Create, view, update and delete employee records.' },
      { title: 'Two interfaces', text: 'A CLI app and a web app for the same records.' },
      { title: 'MySQL integration', text: 'Records are persisted in a MySQL database.' },
    ],
  },
];

export const timeline = [
  {
    name: 'Ethical Intelligence',
    mono: 'EI',
    role: 'Backend Developer Intern',
    when: 'Aug 2025 - Present',
    text: 'Developing and maintaining REST APIs with Python, Django and Django REST Framework, implementing authentication and authorization, and containerizing applications with Docker.',
    url: '',
  },
  {
    name: 'Ethical Intelligence',
    mono: 'EI',
    role: 'Software Development Trainee',
    when: 'Jan 2025 - Jun 2025',
    text: 'Completed a six-month training program on backend development fundamentals and practical project implementation.',
    url: '',
  },
  {
    name: "All Saints' College of Technology",
    mono: 'AS',
    role: 'B.Tech, Computer Science Engineering',
    when: '2023 - 2027',
    text: 'RGPV University, Bhopal. Focused on backend development, databases, system design, data structures, operating systems and networks.',
    url: '',
  },
];

export const skills = [
  { group: 'Backend', items: ['Python', 'Django', 'Django REST Framework', 'REST APIs', 'JWT', 'OOP'] },
  { group: 'Data', items: ['MySQL', 'SQLite'] },
  { group: 'Delivery', items: ['Docker', 'Linux', 'Git and GitHub', 'CI/CD', 'Kubernetes (basics)', 'Prometheus'] },
  { group: 'Testing', items: ['Postman'] },
];

// Add real AI projects here as you ship them.
export const aiWork: { title: string; summary: string; href?: string }[] = [];
