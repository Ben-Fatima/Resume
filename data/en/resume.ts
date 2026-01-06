import {
  EducationItem,
  ExperienceItem,
  Language,
  ProjectItem,
  Resume,
  SkillGroup,
  ToolCategory
} from '../types';

export const resume = {
  labels: {
    experience: 'Work Experience',
    education: 'Education',
    skills: 'Technical Skills',
    projects: 'Projects'
  },
  basics: {
    name: 'Fatima Zahra Benhammou',
    label: 'Software Engineer',
    summary: `Software engineer who converts complex requirements into clean, high-performance code across the full stack. Passionate about readable architecture, query optimisation, and delivering maintainable features.`
  },

  ranks: [
    {
      label: 'Chess.com',
      value: '800 rapid',
      url: 'https://www.chess.com/member/oressama'
    },

    {
      label: 'Codeforces',
      value: 1012,
      url: 'https://codeforces.com/profile/Ta-mo'
    }
  ],

  contact: {
    location: 'Rabat, Morocco',
    email: 'fatimazahranit@gmail.com',
    phone: '+212 6 28 78 56 46',
    website: 'https://www.fatimazahra.dev',
    github: 'https://github.com/Ben-Fatima',
    linkedin: 'https://www.linkedin.com/in/fzbenhammou/'
  },

  languages: <Language[]>[
    { label: 'Arabic', level: 'Native' },
    { label: 'English', level: 'Fluent' },
    { label: 'French', level: 'Fluent' }
  ],

  tools: <ToolCategory[]>[
    {
      label: 'Languages',
      items: [
        { name: 'PHP', level: 90 },
        { name: 'JavaScript', level: 70 },
        { name: 'HTML/CSS', level: 70 },
        { name: 'SQL', level: 80 },
        { name: 'Python', level: 60 }
      ]
    },
    {
      label: 'Frameworks',
      items: [
        { name: 'Laravel', level: 80 },
        { name: 'Lumen', level: 80 },
        { name: 'Magento', level: 80 },
        { name: 'Adonis', level: 60 },
        { name: 'React', level: 60 },
        { name: 'Next', level: 40 },
        { name: 'TailwindCSS', level: 60 }
      ]
    },
    {
      label: 'Tools',
      items: [
        { name: 'Docker', level: 80 },
        { name: 'Git', level: 70 }
      ]
    }
  ],

  experience: <ExperienceItem[]>[
    {
      company: 'SQLI Morocco',
      title: 'PHP/Magento2 Developer',
      start: '2022-03',
      end: '2025-09',
      summary:
        'Built and refactored reusable modules for high-traffic web applications, integrated third-party services, cut load times, and ensured smooth user flows through proactive maintenance.',
      tech: ['PHP', 'Magento 2', 'SQL', 'Javascript', 'Docker', 'Git'],
      website: 'https://www.sqli.com'
    },
    {
      company: 'Batha Auto · Internship',
      title: 'Full-Stack Developer Intern',
      start: '2021-07',
      end: '2021-09',
      summary:
        'Delivered an internal system that tracks invoices, supplier accounts, payment deadlines, and chassis data, replacing manual spreadsheets and speeding up look-ups.',
      tech: ['PHP', 'Laravel', 'MySQL', 'Tailwind CSS']
    },
    {
      company: 'Mahkamaty · Internship',
      title: 'Full-Stack Developer Intern',
      start: '2020-07',
      end: '2020-08',
      summary:
        'Created a predictive-analytics dashboard that forecasts site visits, user questions, and response rates, giving managers early insight into growth trends.',
      tech: ['React', 'Redux', 'Node.js', 'Tailwind CSS'],
      website: 'https://mahkamaty.com'
    }
  ],

  education: <EducationItem[]>[
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

  techSkills: <SkillGroup[]>[
    {
      title: 'Full-Stack Web Development',
      description: 'Designing and building modern web applications and APIs.',
      tags: [
        'Magento 2',
        'Laravel 11',
        'PHP 8',
        'TypeScript',
        'React.js',
        'Next.js',
        'Vue 3',
        'Tailwind CSS',
        'REST APIs',
        'MySQL',
        'Docker'
      ]
    },
    {
      title: 'Application Support & Maintenance',
      description:
        'Troubleshooting issues, refactoring code, improving queries and automating routine tasks.',
      tags: ['Debugging', 'Refactoring', 'Query Optimisation', 'Code Review', 'New Relic']
    },
    {
      title: 'Algorithmic Problem Solving',
      description:
        'Solving tough problems with efficient algorithms and data structures.',
      tags: [
        'Algorithms',
        'Data Structures',
        'Math',
        'Optimisation Methods',
        'Competitive Programming'
      ]
    }
  ],

  projects: <ProjectItem[]>[
    {
      name: 'Skill-Up (Framework)',
      stage: 'WIP', // ongoing framework
      description:
        'A structured “level-up” framework of small, practical projects to master backend fundamentals. Includes shipped exercises (HTTP/CORS, sessions/cookies auth mini-app, WebSocket open chat) and larger projects (FileImporter, Inventory API + CLI).',
      repo: 'https://github.com/Ben-Fatima/skill-up',
      tech: ['PHP', 'Javascript', 'SQL', 'Lumen', 'REST', 'CLI', 'WebSockets']
    },
    {
      name: 'FileImporter (Skill-Up Project 1)',
      stage: 'Done',
      description:
        'Imports a large CSV (500MB+) into SQLite using a streaming approach. Includes a web UI with chunked uploads (~10MB parts), async import execution, live progress polling, and an actionable error report for failed rows.',
      repo: 'https://github.com/Ben-Fatima/skill-up/tree/file-importer',
      tech: [
        'PHP (Vanilla)',
        'SQLite',
        'Composer (PSR-4)',
        'Filesystem',
        'Chunked Upload',
        'Progress Polling',
        'Tailwind CSS',
        'Vanilla JS'
      ]
    },
    {
      name: 'Inventory REST API + CLI (Skill-Up Project 2)',
      stage: 'WIP',
      description:
        'Multi-location inventory system where stock is derived from movements (IN/OUT/ADJUST). REST API (Lumen) plus a PHP CLI client that consumes the API to manage products, locations, and stock movements.',
      repo: 'https://github.com/Ben-Fatima/skill-up',
      tech: ['Lumen', 'PHP', 'REST API', 'CLI', 'SQLite']
    },
    {
      name: 'Portfolio Site',
      stage: 'α', // alpha release
      description:
        'Personal portfolio built with Next.js and Tailwind CSS (fatimazahra.dev).',
      repo: 'https://github.com/Ben-Fatima/Portfolio',
      demo: 'https://www.fatimazahra.dev',
      tech: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Vercel Deploy']
    }
  ]
} satisfies Resume;
