/** Échelle du Cadre européen commun de référence pour les langues (CECR), du plus bas au plus haut. */
export const CEFR_LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as const;

export type CefrLevel = (typeof CEFR_LEVELS)[number];

/** Segment du résumé : ceux marqués `emphasis` sont mis en couleur. */
export interface SummarySegment {
  text: string;
  emphasis?: boolean;
}

export interface Profile {
  firstName: string;
  lastName: string;
  initials: string;
  /** Chemin de la photo (dossier public/) ; à défaut, les initiales sont affichées. */
  photo?: string;
  jobTitle: string;
  summary: SummarySegment[];
}

export interface Contact {
  id: string;
  label: string;
  value: string;
  href?: string;
  copyable?: boolean;
}

export interface Language {
  id: string;
  name: string;
  /** Niveau CECR atteint. */
  level: CefrLevel;
  /** Texte affiché. */
  levelLabel: string;
}

export interface EmploymentAid {
  label: string;
  value: string;
}

/** Élément de la frise chronologique (expériences et formation). */
export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  role?: string;
  description?: string;
  tags?: string[];
}

export interface SkillGroup {
  id: string;
  title: string;
  /** `component` affiche les éléments comme des composants (<Angular />). */
  variant?: 'component';
  items: string[];
}

export interface Cv {
  profile: Profile;
  contacts: Contact[];
  languages: Language[];
  employmentAid: EmploymentAid;
  experiences: TimelineItem[];
  education: TimelineItem[];
  skillGroups: SkillGroup[];
  hobbies: string[];
}
