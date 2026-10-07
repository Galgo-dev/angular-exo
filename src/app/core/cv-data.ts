/*
 * Contenu du CV : la seule source de données du site.
 * Pour mettre le CV à jour, on modifie ce fichier — les composants ne contiennent aucun texte de contenu.
 */
import { Cv } from './cv.model';

export const CV: Cv = {
  profile: {
    firstName: 'Guillaume',
    lastName: 'Belle',
    initials: 'GB',
    photo: 'photo-cv.jpg',
    jobTitle: 'Analyste développeur web junior',
    summary: [
      { text: "Patient, motivé et courageux, j'aime " },
      { text: 'le travail en équipe', emphasis: true },
      { text: ' autant que ' },
      { text: "l'autonomie", emphasis: true },
      { text: '.' },
    ],
  },

  contacts: [
    { id: 'email', label: 'E-mail', value: 'belle.guillaume.dev@gmail.com', copyable: true },
    { id: 'phone', label: 'Téléphone', value: '0473 39 82 32', copyable: true },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      value: 'guillaume-belle',
      href: 'https://www.linkedin.com/in/guillaume-belle-6a5413293',
    },
    { id: 'location', label: 'Localisation', value: '5540 Waulsort, Belgique' },
  ],

  languages: [
    { id: 'fr', name: 'Français', level: 'C2', levelLabel: 'Maternelle' },
    { id: 'en', name: 'Anglais', level: 'A2', levelLabel: 'A2' },
    { id: 'nl', name: 'Néerlandais', level: 'A1', levelLabel: 'A1' },
  ],

  employmentAid: {
    label: "Aide à l'emploi",
    value: 'Plan Formation Insertion (PFI)',
  },

  experiences: [
    {
      id: 'ai-dev-training',
      period: 'En cours',
      title: 'Formation en développement IA',
      role: 'Développeur',
      tags: ['LLM', 'Prompt engineering', "API d'IA", 'Agents IA'],
    },
    {
      id: 'web-intern',
      period: '2025',
      title: 'Développeur web',
      role: 'Stagiaire',
      tags: ['React', 'API', "Refonte d'application", 'Analyse des processus utilisateur'],
    },
    {
      id: 'youth-leader',
      period: '2019 – 2026',
      title: 'Animateur en mouvement de jeunesse',
      role: 'Chef',
      tags: ['Créativité', 'Responsabilité', 'Organisation'],
    },
    {
      id: 'warehouse',
      period: '2016 – 2017',
      title: 'Magasinier',
      role: 'Job étudiant',
      tags: ['Rigueur', 'Triage'],
    },
  ],

  education: [
    {
      id: 'bachelor',
      period: '2020 – 2025',
      title: 'Bachelier en informatique',
      description: "Orientation développement d'applications",
    },
    {
      id: 'first-aid',
      period: '2021',
      title: 'Brevet européen des premiers secours',
    },
    {
      id: 'cess',
      period: '2014 – 2020',
      title: 'CESS',
      description: "Certificat d'enseignement secondaire supérieur",
    },
  ],

  skillGroups: [
    {
      id: 'languages',
      title: 'Langages',
      items: ['C', 'C#', 'Java', 'JavaScript', 'SQL', 'Prolog', 'HTML', 'CSS', 'PHP'],
    },
    {
      id: 'frameworks',
      title: 'Frameworks',
      variant: 'component',
      items: ['React', 'Node.js', 'Spring', 'Robot Framework'],
    },
    {
      id: 'ai',
      title: 'Intelligence artificielle',
      items: ['LLM', 'Prompt engineering', "API d'IA", 'Agents IA'],
    },
    {
      id: 'modeling',
      title: 'Modélisation',
      items: [
        'BPMN',
        "Cas d'utilisation",
        'Diagramme de séquence',
        "Diagramme d'état",
        'Schéma de base de données',
      ],
    },
    {
      id: 'office',
      title: 'Bureautique',
      items: ['Word', 'PowerPoint', 'Outlook', 'Google Docs', 'Google Sheets', 'Gmail'],
    },
  ],

  hobbies: [
    'Animation en mouvement de jeunesse',
    'Lecture de science-fiction',
    'Jeux vidéo',
    'Collection de pièces',
  ],
};
