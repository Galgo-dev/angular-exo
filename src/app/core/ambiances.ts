/*
 * Liste des ambiances disponibles, dans l'ordre du menu.
 * Ajouter une ambiance :
 *   1. créer src/styles/ambiances/<id>.css (sélecteur :root[data-ambiance="<id>"])
 *   2. l'importer dans src/styles.css
 *   3. l'ajouter ici.
 * `preview` : couleurs de l'aperçu affiché dans le menu (dégradé de l'ambiance en clair).
 * La première entrée est l'ambiance par défaut (aucun attribut sur <html>).
 */
import { Lang } from './i18n';

export interface Ambiance {
  id: string;
  label: Record<Lang, string>;
  preview: string[];
}

export const AMBIANCES: readonly Ambiance[] = [
  {
    id: 'electric',
    label: { fr: 'Électrique', en: 'Electric' },
    preview: ['#2F5BEA', '#7B3FE4'],
  },
  {
    id: 'spring',
    label: { fr: 'Printemps', en: 'Spring' },
    preview: ['#2E8B57', '#5DB37E', '#E07AA8'],
  },
  {
    id: 'summer',
    label: { fr: 'Été', en: 'Summer' },
    preview: ['#0E8796', '#E9A21A', '#EE5E3A'],
  },
  {
    id: 'autumn',
    label: { fr: 'Automne', en: 'Autumn' },
    preview: ['#8E2C1A', '#C2531C', '#D4921C'],
  },
  {
    id: 'winter',
    label: { fr: 'Hiver', en: 'Winter' },
    preview: ['#1B2F4E', '#2A6F97', '#7FB8D8'],
  },
];

export const DEFAULT_AMBIANCE = AMBIANCES[0].id;
