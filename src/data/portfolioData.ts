import { Project, SkillCategory } from '../types/portfolio';

export const PERSONAL_INFO = {
  fullName: "Kambale Lwayivweka Archipe",
  alias: "Arkipo Serious",
  role: "Étudiant en Licence en Informatique Appliquée à la Gestion (IAG)",
  subRole: "Développeur Web Full-Stack & Passionné de Cybersécurité",
  university: "Université de l'Assomption au Congo (UAC)",
  universityLocation: "Butembo, Nord-Kivu, RDC",
  currentCity: "Butembo",
  arrivalDate: "Octobre 2024",
  originLocation: "Kirumba, Territoire de Lubero, Nord-Kivu, RDC",
  email: "kambalearchippe5@gmail.com",
  phone: "+243 970 000 000",
  location: "Butembo (UAC, depuis oct. 2024) · Originaire de Kirumba (Lubero), Nord-Kivu, RDC",
  country: "République Démocratique du Congo",
  bio: "Étudiant en cycle de licence en Informatique Appliquée à la Gestion (IAG) au sein de l'Université de l'Assomption au Congo (UAC) à Butembo depuis octobre 2024. Originaire de Kirumba (territoire de Lubero, Nord-Kivu), je conçois des applications web modernes, robustes et sécurisées tout en approfondissant la cybersécurité opérationnelle et l'audit de systèmes d'information.",
  avatar: "/assets/aistudio/IMG-20250628-WA0039_a509e505.jpg",
  rootsImage: "/src/assets/images/kirumba_lubero_landscape_1793884621824.jpg",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    email: "mailto:kambalearchippe5@gmail.com",
  }
};

export const HIGHLIGHT_STATS = [
  { label: "Université", value: "UAC Butembo", detail: "Licence IAG (depuis oct. 2024)" },
  { label: "Spécialités", value: "Web & Cyber", detail: "Développement & Sécurisation" },
  { label: "Origine", value: "Kirumba / Lubero", detail: "Nord-Kivu, RDC" },
  { label: "Statut", value: "Disponible", detail: "Stages, Projets & Consultance" },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "web-dev",
    title: "Développement Web & Architecture Logicielle",
    subtitle: "Création d'interfaces réactives, performantes et sécurisées pour le web moderne.",
    skills: [
      { name: "React & TypeScript", level: 85, description: "Architecture de composants modulaires, typage strict, gestion d'état réactive.", focus: "Frontend Moderne" },
      { name: "HTML5 / Tailwind CSS", level: 90, description: "Intégration responsive respectant l'accessibilité WCAG et des designs épurés.", focus: "UI / UX" },
      { name: "Node.js & Express / PHP", level: 80, description: "Conception d'APIs RESTful, middleware d'authentification, validation des payloads.", focus: "Backend & Services" },
      { name: "Bases de données SQL (MySQL / PostgreSQL)", level: 85, description: "Modélisation relationnelle, normalisation 3NF, requêtes optimisées et procédures.", focus: "Données & Persistance" },
      { name: "Git, GitHub & Déploiement", level: 82, description: "Contrôle de version, flux Git branching, intégration continue et hébergement.", focus: "DevOps & CI/CD" },
    ]
  },
  {
    id: "cybersecurity",
    title: "Cybersécurité & Sécurité des Systèmes",
    subtitle: "Défense en profondeur, prévention des menaces et hygiène numérique rigoureuse.",
    skills: [
      { name: "Audit Web & OWASP Top 10", level: 78, description: "Détection des failles courantes : injections SQL, XSS, CSRF, faiblesses d'authentification.", focus: "Sécurité Applicative" },
      { name: "Sécurité Réseau & Protocoles", level: 80, description: "Compréhension TCP/IP, DNS sécurisé, pare-feu, analyse de trames avec Wireshark.", focus: "Infrastructure" },
      { name: "Systèmes Linux & Scripting Bash", level: 82, description: "Administration serveur, durcissement Debian/Ubuntu, automatisation de tâches et logs.", focus: "Systèmes & Shell" },
      { name: "Cryptographie Appliquée & Hashing", level: 75, description: "Pratique des algorithmes de hachage (SHA-256, bcrypt), certificats SSL/TLS et chiffrement.", focus: "Protection des données" },
      { name: "Sensibilisation & Gestion des Risques", level: 85, description: "Politiques de sécurité de l'information (PSSI), prévention du phishing et sécurité humaine.", focus: "Gouvernance" },
    ]
  },
  {
    id: "gestion-iag",
    title: "Informatique Appliquée à la Gestion (IAG)",
    subtitle: "Pont entre les besoins stratégiques d'entreprise et les technologies logicielles.",
    skills: [
      { name: "Modélisation des SI (Merise / UML)", level: 88, description: "MCD, MLD, MPD, diagrammes de cas d'utilisation et de classes pour systèmes d'information.", focus: "Analyse Conceptuelle" },
      { name: "Comptabilité & Gestion Financière", level: 82, description: "Comptabilité générale et analytique, suivi budgétaire, états financiers OHADA.", focus: "Gestion d'Entreprise" },
      { name: "Gestion de Stock & Flux Commerciaux", level: 85, description: "Algorithmes de réapprovisionnement (FIFO/LIFO), facturation, gestion des inventaires.", focus: "Logistique & Ventes" },
      { name: "Conception d'ERP & Outils Métier", level: 80, description: "Élaboration de solutions adaptées aux réalités des PME locales congolaises.", focus: "Solutions Entreprise" },
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "cyberdefense-console",
    title: "CyberDefense Kivu - Console d'Audit & Vulnérabilités",
    category: "cybersecurity",
    summary: "Plateforme interactive d'analyse de conformité sécuritaire web et détection proactive des failles OWASP.",
    description: "Conçu pour aider les développeurs et administrateurs de systèmes à évaluer la robustesse de leurs applications web. Le projet intègre un scanner d'en-têtes HTTP de sécurité (CSP, HSTS, X-Frame-Options), un vérificateur de complexité de mots de passe conforme aux normes NIST, et un simulateur d'injections pour tests d'intrusion éthiques.",
    image: "/src/assets/images/project_cyber_security_1793884620626.jpg",
    tags: ["Cybersécurité", "Audit Web", "OWASP", "TypeScript", "Node.js"],
    features: [
      "Scanner d'en-têtes de sécurité HTTP avec scoring précis",
      "Générateur et vérificateur de robustesse de hash (SHA-256)",
      "Détection des vecteurs d'injection XSS et validation stricte",
      "Rapport d'audit téléchargeable et recommandations de remédiation"
    ],
    techStack: ["TypeScript", "Node.js", "Express", "Tailwind CSS", "Security APIs"],
    metrics: "12+ contrôles de sécurité automatisés",
    githubUrl: "https://github.com",
    demoUrl: "#terminal"
  },
  {
    id: "corpflow-erp-gestion",
    title: "KivuGestion ERP - Système de Gestion Commerciale & Financière",
    category: "gestion",
    summary: "Logiciel web complet pour la gestion des stocks, des factures et du suivi de trésorerie pour entreprises.",
    description: "Projet pivot de mon cursus en Informatique Appliquée à la Gestion, KivuGestion automatise les processus de vente, d'approvisionnement et de rapprochement financier. Il fournit des tableaux de bord prédictifs, le calcul automatique de TVA, et un grand livre conforme au référentiel OHADA en vigueur en RDC.",
    image: "/src/assets/images/project_erp_gestion_1793884621084.jpg",
    tags: ["IAG", "ERP", "Gestion de Stock", "PostgreSQL", "React"],
    features: [
      "Gestion multi-magasins avec alertes automatiques de seuil critique",
      "Module de facturation proforma et définitive avec reçu PDF",
      "Journal des ventes et états financiers récapitulatifs",
      "Contrôle d'accès par rôle (Caissier, Magasinier, Administrateur)"
    ],
    techStack: ["React", "TypeScript", "PostgreSQL", "Tailwind CSS", "Chart Engine"],
    metrics: "+40% de rapidité dans la clôture de caisse quotidienne",
    githubUrl: "https://github.com"
  },
  {
    id: "kirumba-connect-hub",
    title: "Kirumba Tech Connect - Portail Communautaire & Artisans",
    category: "web",
    summary: "Plateforme web mettant en relation producteurs locaux, artisans et commerçants du territoire de Lubero.",
    description: "Une initiative technologique locale dédiée à la visibilité économique de Kirumba et des environs. Elle offre un annuaire numérique sécurisé, un catalogue de produits locaux (agriculture, café, artisanat) et un canal de communication direct et allégé en bande passante adapté aux réseaux mobiles de la région.",
    image: "/src/assets/images/kirumba_lubero_landscape_1793884621824.jpg",
    tags: ["Web Dév", "Communauté", "Nord-Kivu", "PWA", "Optimisé Mobile"],
    features: [
      "Architecture PWA avec fonctionnement hors-ligne (Offline-First)",
      "Recherche rapide par localité et filière artisanale",
      "Compression d'images automatique pour connexions 3G/2G",
      "Intégration directe WhatsApp pour les commandes directes"
    ],
    techStack: ["React", "Service Workers", "Tailwind CSS", "IndexedDB", "Vite"],
    metrics: "Chargement en moins de 1.2s sur réseau mobile",
    githubUrl: "https://github.com"
  }
];

export const TIMELINE_EVENTS = [
  {
    period: "Depuis Octobre 2024 (En cours)",
    title: "Cycle de Licence en Informatique Appliquée à la Gestion (IAG)",
    institution: "Université de l'Assomption au Congo (UAC) · Butembo, RDC",
    description: "Poursuite active du cycle de licence en IAG : analyse et modélisation des systèmes d'information d'entreprise (Merise/UML), bases de données relationnelles avancées, comptabilité analytique OHADA, audit informatique et gouvernance numérique.",
    badge: "Formation Universitaire (UAC)"
  },
  {
    period: "Spécialisation continue",
    title: "Laboratoire Personnel Web & Cybersécurité",
    institution: "Arkipo Lab · Butembo & En ligne",
    description: "Pratique intensive du développement d'applications réactives, de la méthodologie de test d'intrusion (pentesting web), et de l'hygiène des infrastructures informatiques.",
    badge: "Recherche & Pratique"
  },
  {
    period: "Racines & Trajectoire",
    title: "Originaire de Kirumba (Territoire de Lubero)",
    institution: "Kirumba · Nord-Kivu, RDC",
    description: "Croissance personnelle et éveil technique au sein d'une région caractérisée par le courage, la résilience et une jeunesse ambitieuse tournée vers le progrès numérique, avant de s'installer à Butembo pour les études supérieures.",
    badge: "Ancrage Culturel"
  }
];

export const ROOT_VALUES = [
  {
    title: "Résilience & Détermination",
    description: "Né et ayant grandi dans le territoire de Lubero, j'ai développé une ténacité à toute épreuve face aux défis techniques et logistiques.",
  },
  {
    title: "Rigueur Informatique",
    description: "L'Informatique Appliquée à la Gestion exige une précision chirurgicale : chaque ligne de code doit protéger l'intégrité des données d'entreprise.",
  },
  {
    title: "Sécurité par Conception",
    description: "Pour Arkipo Serious, la cybersécurité n'est pas une option ajoutée après coup, mais le socle fondamental de toute solution numérique durable.",
  },
  {
    title: "Impact pour le Terroir",
    description: "Mettre la technologie au service des acteurs économiques de Kirumba, du Nord-Kivu et de toute la République Démocratique du Congo.",
  }
];
