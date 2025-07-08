import {
  Language,
  ToolCategory,
  ExperienceItem,
  EducationItem,
  SkillGroup,
  ProjectItem,
  Stage,
  Resume
} from '../types';

export const resume = {
  labels: {
    experience: 'Expérience Professionnelle',
    education: 'Éducation',
    skills: 'Compétences Techniques',
    projects: 'Projets'
  },

  /* ───── Informations de base ───── */
  basics: {
    name: 'Fatima Zahra Benhammou',
    label: 'Ingénieure Logiciel',
    summary:
      'Ingénieure logiciel qui convertit des exigences complexes en code propre et performant. Passionnée par l’architecture lisible, l’optimisation des requêtes et la livraison de fonctionnalités durables.'
  },

  /* ───── Classements ───── */
  ranks: [
    {
      label: 'Chess.com',
      value: '800 rapide',
      url: 'https://www.chess.com/member/oressama'
    },
    { label: 'Codeforces', value: 1012, url: 'https://codeforces.com/profile/Ta-mo' }
  ],

  /* ───── Contact ───── */
  contact: {
    location: 'Rabat, Maroc',
    email: 'fatimazahranit@gmail.com',
    phone: '+212 6 28 78 56 46',
    website: 'https://www.fatimazahra.dev',
    github: 'https://github.com/Ben-Fatima',
    linkedin: 'https://www.linkedin.com/in/fzbenhammou/'
  },

  /* ───── Langues ───── */
  languages: <Language[]>[
    { label: 'Arabe', level: 'Langue maternelle' },
    { label: 'Anglais', level: 'Courant' },
    { label: 'Français', level: 'Courant' }
  ],

  /* ───── Outils & niveaux ───── */
  tools: <ToolCategory[]>[
    {
      label: 'Langages',
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
        { name: 'Next', level: 60 },
        { name: 'TailwindCSS', level: 60 }
      ]
    },
    {
      label: 'Outils',
      items: [
        { name: 'Docker', level: 80 },
        { name: 'Git', level: 70 }
      ]
    }
  ],

  /* ───── Expérience ───── */
  experience: <ExperienceItem[]>[
    {
      company: 'SQLI Maroc',
      title: 'Développeuse PHP/Magento2',
      start: '2022-03',
      summary:
        'Conçu et refondu des modules réutilisables pour des applications web à fort trafic, intégré des services tiers, réduit les temps de chargement et assuré des parcours utilisateurs fluides grâce à une maintenance proactive.',
      tech: ['PHP', 'Magento 2', 'SQL', 'JavaScript', 'Docker', 'Git'],
      website: 'https://www.sqli.com'
    },
    {
      company: 'Batha Auto · Stage',
      title: 'Stagiaire Développeuse Full-Stack',
      start: '2021-07',
      end: '2021-09',
      summary:
        'Mis en place d’un système interne suivant factures, fournisseurs, échéances et données de châssis, remplaçant les tableurs manuels et accélérant les recherches.',
      tech: ['PHP', 'Laravel', 'MySQL', 'Tailwind CSS']
    },
    {
      company: 'Mahkamaty · Stage',
      title: 'Stagiaire Développeuse Full-Stack',
      start: '2020-07',
      end: '2020-08',
      summary:
        'Créé un tableau de bord analytique prédictif anticipant les visites, questions et taux de réponse, offrant aux managers une vision précoce des tendances de croissance.',
      tech: ['React', 'Redux', 'Node.js', 'Tailwind CSS'],
      website: 'https://mahkamaty.com'
    }
  ],

  /* ───── Formation ───── */
  education: <EducationItem[]>[
    {
      start: '2019',
      end: '2022',
      school:
        "École Nationale Supérieure d'Informatique et d'Analyse des Systèmes (ENSIAS)",
      degree: 'Cycle Ingénieur (Smart Supply Chain & Logistique)',
      location: 'Rabat, Maroc'
    },
    {
      start: '2017',
      end: '2019',
      school: 'Classes Préparatoires Al Khawarizmi (CPGE)',
      degree: 'Classes Préparatoires – Maths/Physique (MP)',
      location: 'Rabat, Maroc'
    },
    {
      start: '2016',
      end: '2017',
      school: 'Lycée Moulay Rachid',
      degree: 'Baccalauréat, option Mathématiques',
      location: 'Erfoud, Maroc'
    }
  ],

  /* ───── Compétences techniques ───── */
  techSkills: <SkillGroup[]>[
    {
      title: 'Développement Web Full-Stack',
      description: 'Conception et réalisation d’applications web et d’APIs modernes.',
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
      title: 'Support & Maintenance Applicative',
      description:
        'Diagnostic d’incidents, refactorisation du code, optimisation des requêtes et automatisation des tâches récurrentes.',
      tags: ['Debugging', 'Refactoring', 'Query Optimisation', 'Code Review', 'New Relic']
    },
    {
      title: 'Résolution Algorithmique',
      description:
        'Résolution de problèmes complexes grâce à des algorithmes et structures de données efficaces.',
      tags: [
        'Algorithms',
        'Data Structures',
        'Math',
        'Optimisation Methods',
        'Competitive Programming'
      ]
    }
  ],

  /* ───── Projets ───── */
  projects: <ProjectItem[]>[
    {
      name: 'DataBridge',
      stage: 'WIP' as Stage,
      description:
        'Lit des fichiers CSV/Excel fournisseurs, nettoie les données et pousse les mises à jour vers Magento, Shopify ou WooCommerce.',
      repo: 'https://github.com/Ben-Fatima/Databridge',
      tech: ['Laravel 11', 'Vue 3', 'Docker', 'CI/CD', 'Pest', 'Tailwind CSS']
    },
    {
      name: 'Codeforces Tracker',
      stage: 'WIP' as Stage,
      description:
        'Application web affichant l’historique de rating et les statistiques de concours Codeforces pour tout handle.',
      repo: 'https://github.com/Ben-Fatima/codeforces-tracker',
      tech: ['Laravel 11', 'Scheduler', 'JavaScript', 'Tailwind CSS', 'Pest']
    },
    {
      name: 'Site Portfolio',
      stage: 'α' as Stage,
      description:
        'Portfolio personnel réalisé avec Next.js et Tailwind CSS (fatimazahra.dev).',
      repo: 'https://github.com/Ben-Fatima/Portfolio',
      demo: 'https://www.fatimazahra.dev',
      tech: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Vercel Deploy']
    },
    {
      name: 'shipIt',
      description:
        'Kit de démarrage Laravel avec authentification, UI Tailwind, tests et CI GitHub Actions.',
      repo: 'https://github.com/Ben-Fatima/shipIt',
      tech: ['Laravel 8', 'Tailwind CSS', 'PHPUnit', 'CI/CD']
    },
    {
      name: 'Job-Shop Scheduling Demo',
      description:
        'Démo Flask calculant l’ordre optimal de tâches pour le problème classique de Job-Shop.',
      repo: 'https://github.com/Ben-Fatima/jobShopScheduling',
      tech: ['Python', 'Flask', 'Algorithms']
    }
  ]
} satisfies Resume;
