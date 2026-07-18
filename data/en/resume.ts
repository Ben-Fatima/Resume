import { Resume } from '../types';

export const resume = {
  labels: {
    experience: 'Work Experience',
    education: 'Education',
    skills: 'Technical Skills',
    projects: 'Projects'
  },
  basics: {
    name: 'Fatima Zahra Benhammou',
    label: 'Backend Software Engineer',
    summary:
      'Backend Software Engineer with 4+ years of PHP experience turning complex requirements into maintainable, high-performance systems, focused on clean architecture, query optimization, and production-ready code.'
  },

  contact: {
    location: 'Rabat, Morocco',
    email: 'fatimazahranit@gmail.com',
    phone: '+212 6 28 78 56 46',
    website: 'https://www.fatimazahra.dev',
    github: 'https://github.com/Ben-Fatima',
    linkedin: 'https://www.linkedin.com/in/fzbenhammou/'
  },

  languages: [
    { label: 'Arabic', level: 'Native' },
    { label: 'English', level: 'Fluent' },
    { label: 'French', level: 'Fluent' }
  ],

  tools: [
    {
      label: 'Backend',
      items: [
        { name: 'PHP', level: 90 },
        { name: 'Laravel', level: 80 },
        { name: 'Lumen', level: 80 },
        { name: 'Magento 2', level: 85 },
        { name: 'SQL', level: 85 },
        { name: 'REST APIs', level: 85 },
        { name: 'Redis', level: 75 },
        { name: 'PHPUnit', level: 80 },
        { name: 'Pest', level: 70 }
      ]
    },
    {
      label: 'Frontend',
      items: [
        { name: 'JavaScript', level: 80 },
        { name: 'React', level: 60 },
        { name: 'Angular', level: 50 },
        { name: 'TailwindCSS', level: 70 },
        { name: 'HTML/CSS', level: 80 }
      ]
    },
    {
      label: 'Dev Tools',
      items: [
        { name: 'Docker', level: 80 },
        { name: 'Git', level: 80 },
        { name: 'Azure DevOps', level: 80 },
        { name: 'Composer', level: 85 },
        { name: 'Nginx', level: 75 }
      ]
    }
  ],

  experience: [
    {
      company: 'Viveris Technologies',
      title: 'Backend Software Engineer',
      start: '2026-03',
      summary:
        'Builds and maintains business-critical PHP applications. Implements backend features, resolves production issues and optimizes SQL queries in collaboration with QA and frontend teams.',
      tech: ['PHP', 'SQL', 'REST APIs', 'Azure DevOps', 'Git']
    },
    {
      company: 'SQLI Morocco',
      title: 'PHP Backend Developer',
      start: '2022-03',
      end: '2025-09',
      summary:
        'Built and maintained custom Magento 2 backend modules for enterprise e-commerce platforms across multiple client projects. Implemented business features and third-party integrations, optimized SQL queries and resolved production incidents with QA and frontend teams.',
      tech: ['PHP', 'Magento 2', 'MySQL', 'JavaScript', 'Docker', 'Git'],
      website: 'https://www.sqli.com'
    },
    {
      company: 'Batha Auto · Internship',
      title: 'Backend Developer Intern',
      start: '2021-07',
      end: '2021-09',
      summary:
        'Designed and developed an internal Laravel application for managing invoices, suppliers, payment deadlines and vehicle chassis information, replacing spreadsheet-based workflows with a centralized solution.',
      tech: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS']
    }
  ],

  education: [
    {
      start: '2019',
      end: '2022',
      school: 'National School of Computer Science and Systems Analysis (ENSIAS)',
      degree: 'Engineering Cycle (smart supply chain and Logistics)',
      location: 'Rabat, Morocco'
    },
    {
      start: '2017',
      end: '2019',
      school: 'Al Khawarizmi Preparatory Classes (CPGE)',
      degree: 'Preparatory Classes – Maths/Physics (MP)',
      location: 'Rabat, Morocco'
    },
    {
      start: '2016',
      end: '2017',
      school: 'Moulay Rachid High School',
      degree: 'Baccalaureate, Mathematics Option',
      location: 'Erfoud, Morocco'
    }
  ],

  techSkills: [
    {
      title: 'Backend Development',
      description:
        'Building scalable PHP applications, REST APIs and business systems with clean architecture and maintainable code.',
      tags: [
        'PHP 8',
        'Laravel 11',
        'Lumen',
        'Magento 2',
        'REST APIs',
        'MySQL',
        'Redis',
        'SQL',
        'MVC',
        'Docker'
      ]
    },
    {
      title: 'Software Quality & Performance',
      description:
        'Troubleshooting production issues, improving application performance and maintaining reliable software through automated tests and code review.',
      tags: [
        'PHPUnit',
        'Pest',
        'Debugging',
        'Query Optimisation',
        'Code Review',
        'Refactoring'
      ]
    },
    {
      title: 'Databases & Caching',
      description:
        'Modeling relational schemas, tuning queries and using caches and queues to keep applications fast under load.',
      tags: ['MySQL', 'Redis', 'Indexing', 'Query Plans', 'Message Queues']
    },
    {
      title: 'Problem Solving',
      description:
        'Applying algorithms, data structures and analytical thinking to design efficient software solutions.',
      tags: ['Algorithms', 'Data Structures', 'Optimization', 'Analytical Thinking']
    }
  ],

  projects: [
    {
      name: 'Backend Engineering Lab',
      stage: 'WIP',
      description:
        'A structured backend learning framework covering PHP internals, HTTP, authentication, REST design and real-time systems. Includes completed exercises (HTTP/CORS sandbox, session/cookie auth, WebSocket chat) and larger projects such as FileImporter and an event-sourced inventory REST API with CLI client.',
      repo: 'https://github.com/Ben-Fatima/skill-up',
      tech: ['PHP', 'JavaScript', 'SQL', 'Lumen', 'REST', 'CLI', 'WebSockets']
    },
    {
      name: 'FileImporter',
      stage: 'Done',
      description:
        'High-performance CSV importer capable of processing files larger than 500 MB using a streaming approach to minimize memory usage. Supports chunked uploads, asynchronous processing, live progress tracking and detailed validation reports.',
      repo: 'https://github.com/Ben-Fatima/skill-up/tree/file-importer',
      tech: [
        'PHP',
        'SQLite',
        'Composer',
        'PSR-4',
        'Filesystem',
        'Chunk Upload',
        'Tailwind CSS',
        'Vanilla JavaScript'
      ]
    },
    {
      name: 'Inventory REST API + CLI',
      stage: 'WIP',
      description:
        'Event-sourced inventory system where stock levels are derived from immutable movements (IN/OUT/ADJUST) rather than mutated directly. Exposes a Lumen REST API and a PHP CLI client for managing products, warehouses and stock movements across multiple locations.',
      repo: 'https://github.com/Ben-Fatima/skill-up',
      tech: ['PHP', 'Lumen', 'REST API', 'CLI', 'SQLite']
    },
    {
      name: 'Portfolio Website',
      stage: 'α',
      description:
        'Personal portfolio showcasing professional experience and backend projects. Built with Next.js, TypeScript and Tailwind CSS.',
      repo: 'https://github.com/Ben-Fatima/Portfolio',
      demo: 'https://www.fatimazahra.dev',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel']
    }
  ]
} satisfies Resume;
