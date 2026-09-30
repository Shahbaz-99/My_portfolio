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

export const experience = [
  {
    slug: 'backend-intern',
    org: 'Ethical Intelligence',
    url: 'https://www.ethicalint.com/',
    mono: 'EI',
    role: 'Backend Developer Intern',
    type: 'Internship',
    when: 'Aug 2025 - Present',
    place: 'Bhopal, India (on-site)',
    summary:
      'Developing and maintaining REST APIs with Python, Django and Django REST Framework, implementing authentication and authorization, and containerizing applications with Docker.',
    points: [
      'Developed and maintained REST APIs with Django and Django REST Framework.',
      'Implemented authentication and authorization mechanisms.',
      'Designed database models and optimized application performance.',
      'Containerized applications with Docker and deployed them on Linux-based VPS servers.',
      'Used Git and GitHub for version control, with exposure to CI/CD workflows and Kubernetes fundamentals in a collaborative environment.',
    ],
    skills: ['Python', 'Django', 'Django REST Framework', 'MySQL', 'Docker', 'Git', 'Postman'],
  },
  {
    slug: 'software-trainee',
    org: 'Ethical Intelligence',
    url: 'https://www.ethicalint.com/',
    mono: 'EI',
    role: 'Software Development Trainee',
    type: 'Part-time',
    when: 'Jan 2025 - Jun 2025',
    place: 'Bhopal, India (on-site)',
    summary:
      'Completed a six-month Software Development Training Program focused on backend development fundamentals and practical project implementation.',
    points: [
      'Six-month training program in software development.',
      'Backend development fundamentals with Python and Django REST Framework.',
      'Hands-on, practical project implementation.',
    ],
    skills: ['Python', 'Django', 'Django REST Framework', 'MySQL'],
  },
];

export const education = [
  {
    name: "All Saints' College of Technology",
    mono: 'AS',
    degree: 'B.Tech, Computer Science Engineering',
    when: '2023 - 2027',
    text: 'RGPV University, Bhopal. Expected to graduate in June 2027. Focused on backend development, database management, system design, data structures, algorithms, operating systems and computer networks.',
  },
];

export type Research = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  kind: string;
  org: string;
  url: string;
  tags: string[];
  stats: { value: string; label: string }[];
  toneError: { a: number; b: number };
  buckets: { label: string; n: number; tone: 'good' | 'neutral' | 'bad' }[];
  formula: string;
  sections: { id?: string; title: string; paras?: string[]; items?: { term: string; text: string }[] }[];
  refs: { cite: string; title: string }[];
};

export const research: Research[] = [
  {
    slug: 'model-drift-supcon',
    title: 'One input, two models: seeing drift live',
    tagline: 'A controlled comparison of a baseline and a lifecycle-tuned model, made visible in embedding space.',
    summary:
      'A model-comparison environment that places a baseline and a lifecycle-tuned model side by side, making systematic drift and its contrastive correction visible.',
    kind: 'Internal demo',
    org: 'Ethical Intelligence',
    url: 'https://www.ethicalint.com/',
    tags: ['Side-by-side comparison', 'Contrastive loss', 'Lifecycle fine-tuning'],
    stats: [
      { value: '51% to 41%', label: 'Tone error on the full pool of novel candidates, baseline versus tuned model' },
      { value: '880', label: 'Novel candidates screened, from which 20 queries were curated' },
      { value: '\u03bb 0.3, \u03c4 0.1', label: 'Weight of the contrastive term and softmax temperature' },
    ],
    toneError: { a: 51, b: 41 },
    buckets: [
      { label: 'Baseline wrong, tuned right', n: 15, tone: 'good' },
      { label: 'Both right', n: 3, tone: 'neutral' },
      { label: 'Both wrong', n: 2, tone: 'bad' },
    ],
    formula: 'L_i = -1/|P(i)| \u00b7 \u03a3_{p \u2208 P(i)} log [ exp(z_i \u00b7 z_p / \u03c4) / \u03a3_{a \u2260 i} exp(z_i \u00b7 z_a / \u03c4) ]',
    sections: [
      {
        title: 'How systematic drift appears',
        paras: [
          'The baseline, Model A, is trained on standard phrasing only. Drift text, meaning slang, emoji and sarcasm that carry the same sentiment, lands away from its standard counterpart in embedding space, and tone accuracy drops.',
        ],
      },
      {
        id: 'compare',
        title: 'Same input, two models',
        paras: [
          'Twenty queries were curated from 880 novel candidates: new subjects and templates, deduplicated against the training data, including held-out sarcasm structures. Every query is answered by both models side by side.',
          'Example: for "the yoga class is straight cringe", the standard-only model replied with cheerful praise, which is the wrong tone. The drift-aware model (drift plus supervised contrastive learning) responded with sympathy, which is the right tone.',
        ],
      },
      {
        title: 'Contrastive lifecycle: anchor, positives, negatives',
        paras: [
          'Each text acts as an anchor. Texts with the same sentiment label are its positives, whether standard or drift phrasing. Texts with the opposite label are its negatives.',
          'Across epochs, with epoch 0 being the baseline, positives are pulled together and negatives pushed apart, so slang and emoji end up next to the standard phrasing of the same sentiment.',
        ],
      },
      {
        id: 'math',
        title: 'The math: how SupCon pulls and pushes',
        paras: [
          'Encoder output is mean-pooled and L2-normalized, so every text becomes a point on a unit hypersphere. The total loss is L = L_gen + \u03bb \u00b7 L_SupCon, with \u03bb = 0.3 and temperature \u03c4 = 0.1. For each anchor i, the supervised contrastive loss is:',
        ],
        items: [
          { term: 'Pull', text: 'The numerator holds the positives, so the loss drops as the anchor gets closer to them.' },
          { term: 'Push', text: 'The denominator also holds the negatives, so the loss drops as their similarity shrinks.' },
          { term: 'Temperature', text: 'A small \u03c4 sharpens the softmax, so the hardest, closest negatives get the biggest push.' },
        ],
      },
      {
        title: 'How it is measured',
        paras: [
          'All plots share one 2-D frame: the sentiment axis (the difference between class centroids) and the top principal component orthogonal to it, fit once on Model A using standard reference points only.',
        ],
        items: [
          { term: 'Cluster quality', text: 'Silhouette score and intra-class versus inter-class cosine.' },
          { term: 'Cross-style alignment', text: 'Cosine between the standard and drift centroids of the same class.' },
          { term: 'Alignment and uniformity', text: 'Geometry of the embedding space, following Wang and Isola (2020).' },
          { term: 'kNN standard to drift', text: 'Whether the standard-style geometry can classify drift points.' },
        ],
      },
    ],
    refs: [
      { cite: 'Khosla et al., 2020', title: 'Supervised Contrastive Learning' },
      { cite: 'Wang and Isola, 2020', title: 'Understanding Contrastive Representation Learning through Alignment and Uniformity on the Hypersphere' },
      { cite: 'Gao et al., 2021', title: 'SimCSE: Simple Contrastive Learning of Sentence Embeddings' },
      { cite: 'Cha et al., 2021', title: 'Co2L: Contrastive Continual Learning' },
    ],
  },
];

export const skills = [
  { group: 'Backend', items: ['Python', 'Django', 'Django REST Framework', 'REST APIs', 'JWT', 'OOP'] },
  { group: 'Data', items: ['MySQL', 'SQLite'] },
  { group: 'Delivery', items: ['Docker', 'Linux', 'Git and GitHub', 'CI/CD', 'Kubernetes (basics)', 'Prometheus'] },
  { group: 'Testing', items: ['Postman'] },
];

// Extra AI projects (optional); shown under Research when present.
export const aiWork: { title: string; summary: string; href?: string }[] = [];
