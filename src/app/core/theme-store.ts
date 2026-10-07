import { DOCUMENT, DestroyRef, Injectable, computed, effect, inject, signal } from '@angular/core';
import { readStorage, writeStorage } from './storage';

export type Theme = 'light' | 'dark';

/** Doit rester identique à la clé utilisée dans public/theme-init.js. */
export const THEME_STORAGE_KEY = 'cv-theme';

const DARK_SCHEME_QUERY = '(prefers-color-scheme: dark)';

function readStoredTheme(): Theme | null {
  const value = readStorage(THEME_STORAGE_KEY);
  return value === 'dark' || value === 'light' ? value : null;
}

/**
 * Gère le thème clair / sombre.
 * - Sans choix enregistré, suit le réglage du système (et ses changements).
 * - Un choix explicite est posé sur <html data-theme> et enregistré.
 */
@Injectable({ providedIn: 'root' })
export class ThemeStore {
  private readonly root = inject(DOCUMENT).documentElement;
  /** Absent hors navigateur (tests jsdom) : le thème système vaut alors « clair ». */
  private readonly darkScheme = window.matchMedia?.(DARK_SCHEME_QUERY);
  private readonly storedTheme = signal(readStoredTheme());
  private readonly systemTheme = signal<Theme>(this.darkScheme?.matches ? 'dark' : 'light');

  readonly theme = computed(() => this.storedTheme() ?? this.systemTheme());

  constructor() {
    const handleChange = (event: MediaQueryListEvent) =>
      this.systemTheme.set(event.matches ? 'dark' : 'light');
    this.darkScheme?.addEventListener('change', handleChange);
    inject(DestroyRef).onDestroy(() =>
      this.darkScheme?.removeEventListener('change', handleChange),
    );

    effect(() => {
      const theme = this.storedTheme();
      if (theme) this.root.dataset['theme'] = theme;
    });
  }

  toggle(): void {
    const nextTheme: Theme = this.theme() === 'dark' ? 'light' : 'dark';
    writeStorage(THEME_STORAGE_KEY, nextTheme);
    this.storedTheme.set(nextTheme);
  }
}
