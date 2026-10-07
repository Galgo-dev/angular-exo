/*
 * Contenu du CV par langue : la seule source de données du site.
 * Pour mettre le CV à jour, on modifie cv-data.fr.ts et cv-data.en.ts —
 * les composants ne contiennent aucun texte de contenu.
 */
import { CV_EN } from './cv-data.en';
import { CV_FR } from './cv-data.fr';
import { Cv } from './cv.model';
import { Lang } from './i18n';

export const CV: Record<Lang, Cv> = { fr: CV_FR, en: CV_EN };
