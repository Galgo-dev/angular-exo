/*
 * Contenu du CV en anglais : traduction de cv-data.fr.ts, mêmes identifiants et même structure.
 */
import { Cv } from './cv.model';

export const CV_EN: Cv = {
  profile: {
    firstName: 'Guillaume',
    lastName: 'Belle',
    initials: 'GB',
    photo: 'photo-cv.jpg',
    jobTitle: 'Junior web developer & analyst',
    summary: [
      { text: 'Patient, motivated and courageous, I enjoy ' },
      { text: 'teamwork', emphasis: true },
      { text: ' as much as ' },
      { text: 'working independently', emphasis: true },
      { text: '.' },
    ],
  },

  contacts: [
    { id: 'email', label: 'Email', value: 'belle.guillaume.dev@gmail.com', copyable: true },
    { id: 'phone', label: 'Phone', value: '0473 39 82 32', copyable: true },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      value: 'guillaume-belle',
      href: 'https://www.linkedin.com/in/guillaume-belle-6a5413293',
    },
    {
      id: 'github',
      label: 'GitHub',
      value: 'Galgo-dev',
      href: 'https://github.com/Galgo-dev',
    },
    { id: 'location', label: 'Location', value: '5540 Waulsort, Belgium' },
  ],

  languages: [
    { id: 'fr', name: 'French', level: 'C2', levelLabel: 'Native' },
    { id: 'en', name: 'English', level: 'A2', levelLabel: 'A2' },
    { id: 'nl', name: 'Dutch', level: 'A1', levelLabel: 'A1' },
  ],

  employmentAid: {
    label: 'Employment support',
    value: 'Plan Formation Insertion (PFI)',
  },

  experiences: [
    {
      id: 'ai-dev-training',
      period: 'Ongoing',
      title: 'AI development training',
      role: 'Developer',
      tags: ['LLM', 'Prompt engineering', 'AI APIs', 'AI agents'],
    },
    {
      id: 'web-intern',
      period: '2025',
      title: 'Web developer',
      role: 'Intern',
      tags: ['React', 'API', 'Application redesign', 'User process analysis'],
    },
    {
      id: 'youth-leader',
      period: '2019 – 2026',
      title: 'Youth movement leader',
      role: 'Group leader',
      tags: ['Creativity', 'Responsibility', 'Organisation'],
    },
    {
      id: 'warehouse',
      period: '2016 – 2017',
      title: 'Warehouse worker',
      role: 'Student job',
      tags: ['Thoroughness', 'Sorting'],
    },
  ],

  education: [
    {
      id: 'bachelor',
      period: '2020 – 2025',
      title: "Bachelor's degree in Computer Science",
      description: 'Specialisation in application development',
    },
    {
      id: 'first-aid',
      period: '2021',
      title: 'European First Aid Certificate',
    },
    {
      id: 'cess',
      period: '2014 – 2020',
      title: 'CESS',
      description: 'Upper secondary education certificate',
    },
  ],

  skillGroups: [
    {
      id: 'languages',
      title: 'Programming languages',
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
      title: 'Artificial intelligence',
      items: ['LLM', 'Prompt engineering', 'AI APIs', 'AI agents'],
    },
    {
      id: 'modeling',
      title: 'Modelling',
      items: ['BPMN', 'Use case', 'Sequence diagram', 'State diagram', 'Database schema'],
    },
    {
      id: 'office',
      title: 'Office tools',
      items: ['Word', 'PowerPoint', 'Outlook', 'Google Docs', 'Google Sheets', 'Gmail'],
    },
  ],

  hobbies: ['Youth movement leadership', 'Reading science fiction', 'Video games', 'Coin collecting'],
};
