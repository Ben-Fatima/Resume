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
      name: 'DataBridge',
      stage: 'WIP', // in progress
      description:
        'Reads vendor CSV/Excel files, cleans the data, and pushes updates to Magento, Shopify, or WooCommerce.',
      repo: 'https://github.com/Ben-Fatima/Databridge',
      tech: ['Laravel 11', 'Vue 3', 'Docker', 'CI/CD', 'Pest', 'Tailwind CSS']
    },
    {
      name: 'Codeforces Tracker',
      stage: 'WIP', // in progress
      description:
        'Web app that will display Codeforces rating history and contest stats for any handle.',
      repo: 'https://github.com/Ben-Fatima/codeforces-tracker',
      tech: ['Laravel 11', 'Scheduler', 'Javascript', 'Tailwind CSS', 'Pest']
    },
    {
      name: 'Portfolio Site',
      stage: 'α', // alpha release
      description:
        'Personal portfolio built with Next.js and Tailwind CSS (fatimazahra.dev).',
      repo: 'https://github.com/Ben-Fatima/Portfolio',
      demo: 'https://www.fatimazahra.dev',
      tech: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Vercel Deploy']
    },
    {
      name: 'shipIt',
      description:
        'Laravel starter kit with auth, Tailwind UI, tests, and GitHub Actions CI.',
      repo: 'https://github.com/Ben-Fatima/shipIt',
      tech: ['Laravel 8', 'Tailwind CSS', 'PHPUnit', 'CI/CD']
    },
    {
      name: 'Job-Shop Scheduling Demo',
      description:
        'Flask demo that calculates an optimal job order for the classic scheduling problem.',
      repo: 'https://github.com/Ben-Fatima/jobShopScheduling',
      tech: ['Python', 'Flask', 'Algorithms']
    }
  ]
} satisfies Resume;
