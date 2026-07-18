import { Resume } from '../types';

export const resume = {
  labels: {
    experience: 'Expérience Professionnelle',
    education: 'Éducation',
    skills: 'Compétences Techniques',
    projects: 'Projets'
  },
  basics: {
    name: 'Fatima Zahra Benhammou',
    label: 'Ingénieure Logiciel Backend',
    summary:
      'Ingénieure logiciel backend avec plus de 4 ans d’expérience en PHP, transformant des exigences complexes en systèmes maintenables et performants, avec un focus sur la clean architecture, l’optimisation des requêtes et du code prêt pour la production.'
  },

  contact: {
    location: 'Rabat, Maroc',
    email: 'fatimazahranit@gmail.com',
    phone: '+212 6 28 78 56 46',
    website: 'https://www.fatimazahra.dev',
    github: 'https://github.com/Ben-Fatima',
    linkedin: 'https://www.linkedin.com/in/fzbenhammou/'
  },

  languages: [
    { label: 'Arabe', level: 'Langue maternelle' },
    { label: 'Anglais', level: 'Courant' },
    { label: 'Français', level: 'Courant' }
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
      label: 'Outils Dev',
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
      title: 'Ingénieure Logiciel Backend',
      start: '2026-03',
      summary:
        'Conçoit et maintient des applications PHP critiques pour l’entreprise. Implémente des fonctionnalités backend, résout les incidents de production et optimise les requêtes SQL en collaboration avec les équipes QA et frontend.',
      tech: ['PHP', 'SQL', 'REST APIs', 'Azure DevOps', 'Git']
    },
    {
      company: 'SQLI Maroc',
      title: 'Développeuse PHP Backend',
      start: '2022-03',
      end: '2025-09',
      summary:
        'Conception et maintenance de modules backend Magento 2 sur mesure pour des plateformes e-commerce enterprise sur plusieurs projets clients. Implémentation de fonctionnalités métier et d’intégrations tierces, optimisation des requêtes SQL et résolution d’incidents de production avec les équipes QA et frontend.',
      tech: ['PHP', 'Magento 2', 'MySQL', 'JavaScript', 'Docker', 'Git'],
      website: 'https://www.sqli.com'
    },
    {
      company: 'Batha Auto · Stage',
      title: 'Stagiaire Développement Backend',
      start: '2021-07',
      end: '2021-09',
      summary:
        'Conception et développement d’une application interne Laravel pour la gestion des factures, fournisseurs, échéances de paiement et informations de châssis de véhicules, remplaçant les workflows basés sur des tableurs par une solution centralisée.',
      tech: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS']
    }
  ],

  education: [
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

  techSkills: [
    {
      title: 'Développement Backend',
      description:
        'Conception d’applications PHP scalables, d’APIs REST et de systèmes métier avec une architecture propre et du code maintenable.',
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
      title: 'Qualité Logicielle & Performance',
      description:
        'Diagnostic des incidents de production, amélioration des performances applicatives et maintien de logiciels fiables grâce aux tests automatisés et à la revue de code.',
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
      title: 'Bases de données & Caching',
      description:
        'Modélisation de schémas relationnels, optimisation des requêtes et utilisation de caches et de files d’attente pour garder les applications performantes sous charge.',
      tags: ['MySQL', 'Redis', 'Indexing', 'Query Plans', 'Message Queues']
    },
    {
      title: 'Résolution de Problèmes',
      description:
        'Application d’algorithmes, de structures de données et de pensée analytique pour concevoir des solutions logicielles efficaces.',
      tags: ['Algorithms', 'Data Structures', 'Optimization', 'Analytical Thinking']
    }
  ],

  projects: [
    {
      name: 'Backend Engineering Lab',
      stage: 'WIP',
      description:
        'Framework d’apprentissage backend structuré couvrant les internes PHP, HTTP, l’authentification, la conception REST et les systèmes temps réel. Inclut des exercices livrés (sandbox HTTP/CORS, auth sessions/cookies, chat WebSocket) et des projets plus larges comme FileImporter et une API REST d’inventaire event-sourced avec client CLI.',
      repo: 'https://github.com/Ben-Fatima/skill-up',
      tech: ['PHP', 'JavaScript', 'SQL', 'Lumen', 'REST', 'CLI', 'WebSockets']
    },
    {
      name: 'FileImporter',
      stage: 'Done',
      description:
        'Importeur CSV haute performance capable de traiter des fichiers de plus de 500 Mo via une approche en streaming pour minimiser l’usage mémoire. Supporte l’upload par chunks, le traitement asynchrone, le suivi de progression en temps réel et des rapports de validation détaillés.',
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
        'Système d’inventaire event-sourced où les niveaux de stock sont dérivés de mouvements immuables (IN/OUT/ADJUST) plutôt que mutés directement. Expose une API REST Lumen et un client CLI PHP pour gérer les produits, entrepôts et mouvements de stock sur plusieurs emplacements.',
      repo: 'https://github.com/Ben-Fatima/skill-up',
      tech: ['PHP', 'Lumen', 'REST API', 'CLI', 'SQLite']
    },
    {
      name: 'Site Portfolio',
      stage: 'α',
      description:
        'Portfolio personnel présentant l’expérience professionnelle et les projets backend. Réalisé avec Next.js, TypeScript et Tailwind CSS.',
      repo: 'https://github.com/Ben-Fatima/Portfolio',
      demo: 'https://www.fatimazahra.dev',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel']
    }
  ]
} satisfies Resume;
