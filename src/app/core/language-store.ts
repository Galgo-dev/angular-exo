import { DOCUMENT, Injectable, computed, effect, inject, signal } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { CV } from './cv-data';
import { DEFAULT_LANG, LANGS, Lang, UI } from './i18n';
import { readStorage, writeStorage } from './storage';

/** Doit rester identique à la clé utilisée dans public/theme-init.js. */
export const LANG_STORAGE_KEY = 'cv-lang';

function isKnownLang(value: string | null): value is Lang {
  return LANGS.some((lang) => lang === value);
}

function readStoredLang(): Lang {
  const value = readStorage(LANG_STORAGE_KEY);
  return isKnownLang(value) ? value : DEFAULT_LANG;
}

/**
 * Langue du site (français / anglais), modifiable sans rechargement.
 * Expose le contenu du CV et les textes d'interface de la langue active,
 * et tient à jour <html lang> et la meta description.
 */
@Injectable({ providedIn: 'root' })
export class LanguageStore {
  private readonly document = inject(DOCUMENT);
  private readonly meta = inject(Meta);

  readonly lang = signal(readStoredLang());
  readonly cv = computed(() => CV[this.lang()]);
  readonly ui = computed(() => UI[this.lang()]);

  constructor() {
    effect(() => {
      this.document.documentElement.lang = this.lang();
      this.meta.updateTag({ name: 'description', content: this.ui().metaDescription });
    });
  }

  select(lang: Lang): void {
    writeStorage(LANG_STORAGE_KEY, lang);
    this.lang.set(lang);
  }
}
