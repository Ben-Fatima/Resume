export type Language = {
  label: string;
  level: string;
};

export type ToolCategory = {
  label: string;
  items: { name: string; level: number }[];
};

export type ExperienceItem = {
  company: string;
  title: string;
  start: string;
  end?: string;
  summary: string;
  tech: string[];
  website?: string;
};

export type EducationItem = {
  start: string;
  end: string;
  school: string;
  degree: string;
  location: string;
};

export type SkillGroup = {
  title: string;
  description: string;
  tags: string[];
};

export type Stage = 'WIP' | 'α';

export type ProjectItem = {
  name: string;
  description: string;
  tech: string[];
  repo?: string;
  demo?: string;
  stage?: Stage;
};

export const resume = {
  basics: {
    name: 'Fatima Zahra Benhammou',
    label: 'Software Engineer',
    summary:
      'I’m a software engineer with a passion for performance tuning and knowledge-sharing. Currently bridging Magento & Laravel worlds.'
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
        { name: 'JavaScript', level: 80 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'SQL', level: 75 },
        { name: 'Python', level: 60 }
      ]
    },
    {
      label: 'Frameworks',
      items: [
        { name: 'Laravel', level: 90 },
        { name: 'Magento', level: 80 },
        { name: 'React', level: 60 },
        { name: 'Next', level: 60 },
        { name: 'TailwindCSS', level: 72 }
      ]
    },
    {
      label: 'Tools',
      items: [
        { name: 'Docker', level: 70 },
        { name: 'Git', level: 20 }
      ]
    }
  ],

  experience: <ExperienceItem[]>[
    {
      company: 'SQLI Morocco',
      title: 'Magento 2 Developer',
      start: '2022-03',
      summary:
        'Designed and built an order-splitting module driven by a custom product attribute in Adobe Commerce (Magento 2).',
      tech: ['PHP', 'Magento 2', 'MySQL', 'Docker', 'Git'],
      website: 'https://www.sqli.com'
    },
    {
      company: 'Batha Auto · Internship',
      title: 'Full-Stack Developer Intern',
      start: '2021-07',
      end: '2021-09',
      summary:
        'Created an information system to track payment deadlines, invoices, suppliers and chassis data for an auto-parts retailer.',
      tech: ['PHP', 'Laravel', 'MySQL', 'Tailwind CSS']
    },
    {
      company: 'Mahkamaty · Internship',
      title: 'Software Engineer Intern',
      start: '2020-07',
      end: '2020-08',
      summary:
        'Built a predictive-analytics web app that forecasts future site metrics (visits, responses, questions, users).',
      tech: ['React', 'Redux', 'Node.js', 'Tailwind CSS'],
      website: 'https://mahkamaty.com'
    }
  ],

  education: <EducationItem[]>[
    {
      start: '2019',
      end: '2022',
      school: 'National School of Computer Science and Systems Analysis (ENSIAS)',
      degree: 'Engineering Cycle, e-Logistics track',
      location: 'Rabat, Morocco'
    },
    {
      start: '2017',
      end: '2019',
      school: 'Al Khawarizmi Preparatory Classes (CPGE)',
      degree: 'Mathematics & Physics (MP) stream',
      location: 'Rabat, Morocco'
    },
    {
      start: '2016',
      end: '2017',
      school: 'Moulay Rachid High School',
      degree: 'Baccalaureate, Mathematics A',
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
      demo: 'https://databridge.dev',
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
};
