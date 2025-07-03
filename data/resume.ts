export type Language = {
  label: string;
  level: string;
};

export type ToolCategory = {
  label: string;
  items: { name: string; level: number }[];
};

export const resume = {
  basics: {
    name: 'Fatima Zahra Benhammou',
    label: 'Software Engineer'
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
    linkedin: 'https://linkedin.com/in/fatimazahranit'
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
  ]
};
