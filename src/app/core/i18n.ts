/*
 * Langues du site et textes d'interface (hors contenu du CV, qui vit dans cv-data.<lang>.ts).
 * La première langue est la langue par défaut.
 */
export const LANGS = ['fr', 'en'] as const;

export type Lang = (typeof LANGS)[number];

export const DEFAULT_LANG: Lang = LANGS[0];

/** Libellés du sélecteur : abréviation affichée et nom complet dans la langue elle-même. */
export const LANG_OPTIONS: readonly { id: Lang; short: string; name: string }[] = [
  { id: 'fr', short: 'FR', name: 'Français' },
  { id: 'en', short: 'EN', name: 'English' },
];

export interface UiStrings {
  metaDescription: string;
  languageSwitch: string;
  sections: { experience: string; education: string; skills: string; hobbies: string };
  contactHeading: string;
  languagesHeading: string;
  cefrLevel: string;
  photoOf: string;
  /** Préfixes avec leur ponctuation : l'espace avant « : » n'existe qu'en français. */
  copyPrefix: string;
  copyStatus: { idle: string; copied: string; selected: string };
  lightMode: string;
  darkMode: string;
  switchToPrefix: string;
  ambiancePrefix: string;
  chooseAmbiance: string;
  footerCv: string;
}

export const UI: Record<Lang, UiStrings> = {
  fr: {
    metaDescription: 'CV de Guillaume Belle, analyste développeur web junior.',
    languageSwitch: 'Langue du site',
    sections: {
      experience: 'Expériences',
      education: 'Formation',
      skills: 'Compétences',
      hobbies: 'Loisirs',
    },
    contactHeading: 'Contact',
    languagesHeading: 'Langues · échelle CECR',
    cefrLevel: 'Niveau CECR',
    photoOf: 'Photo de',
    copyPrefix: 'Copier : ',
    copyStatus: { idle: 'Copier', copied: 'Copié', selected: 'Sélectionné' },
    lightMode: 'Mode clair',
    darkMode: 'Mode sombre',
    switchToPrefix: 'Passer en ',
    ambiancePrefix: 'Ambiance : ',
    chooseAmbiance: 'Choisir une ambiance',
    footerCv: 'CV',
  },
  en: {
    metaDescription: 'Resume of Guillaume Belle, junior web developer and analyst.',
    languageSwitch: 'Site language',
    sections: {
      experience: 'Experience',
      education: 'Education',
      skills: 'Skills',
      hobbies: 'Interests',
    },
    contactHeading: 'Contact',
    languagesHeading: 'Languages · CEFR scale',
    cefrLevel: 'CEFR level',
    photoOf: 'Photo of',
    copyPrefix: 'Copy: ',
    copyStatus: { idle: 'Copy', copied: 'Copied', selected: 'Selected' },
    lightMode: 'Light mode',
    darkMode: 'Dark mode',
    switchToPrefix: 'Switch to ',
    ambiancePrefix: 'Style: ',
    chooseAmbiance: 'Choose a style',
    footerCv: 'Resume',
  },
};
