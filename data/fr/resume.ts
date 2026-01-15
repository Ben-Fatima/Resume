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
        { name: 'Lumen', level: 80 },
        { name: 'Magento', level: 80 },
        { name: 'Adonis', level: 60 },
        { name: 'React', level: 60 },
        { name: 'Next', level: 40 },
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
      end: '2025-09',
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
      name: 'Skill-Up (Framework)',
      stage: 'WIP' as Stage, // framework en cours
      description:
        'Framework structuré de “level-up” basé sur de petits projets pratiques pour maîtriser les fondamentaux backend. Inclut des exercices livrés (HTTP/CORS, mini-app auth sessions/cookies, WebSocket open chat) et des projets plus larges (FileImporter, Inventory API + CLI).',
      repo: 'https://github.com/Ben-Fatima/skill-up',
      tech: ['PHP', 'JavaScript', 'SQL', 'Lumen', 'REST', 'CLI', 'WebSockets']
    },
    {
      name: 'FileImporter (Skill-Up Project 1)',
      stage: 'Done' as Stage,
      description:
        'Importe un gros CSV (500MB+) vers SQLite en streaming. Inclut une UI web avec upload par chunks (~10MB), exécution d’import asynchrone, suivi de progression (polling) et rapport d’erreurs actionnable pour les lignes invalides.',
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
      stage: 'WIP' as Stage,
      description:
        'Système d’inventaire multi-emplacements où le stock est dérivé des mouvements (IN/OUT/ADJUST). API REST (Lumen) + client CLI PHP consommant l’API pour gérer produits, emplacements et mouvements de stock.',
      repo: 'https://github.com/Ben-Fatima/skill-up',
      tech: ['Lumen', 'PHP', 'REST API', 'CLI', 'SQLite']
    },
    {
      name: 'Site Portfolio',
      stage: 'α' as Stage, // alpha
      description:
        'Portfolio personnel réalisé avec Next.js et Tailwind CSS (fatimazahra.dev).',
      repo: 'https://github.com/Ben-Fatima/Portfolio',
      demo: 'https://www.fatimazahra.dev',
      tech: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Vercel Deploy']
    }
  ]
} satisfies Resume;
