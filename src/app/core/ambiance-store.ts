import { DOCUMENT, Injectable, computed, effect, inject, signal } from '@angular/core';
import { AMBIANCES, Ambiance, DEFAULT_AMBIANCE } from './ambiances';
import { readStorage, writeStorage } from './storage';

/** Doit rester identique à la clé utilisée dans public/theme-init.js. */
export const AMBIANCE_STORAGE_KEY = 'cv-ambiance';

function isKnownAmbiance(id: string | null): id is string {
  return AMBIANCES.some((ambiance) => ambiance.id === id);
}

function readStoredAmbiance(): string {
  const value = readStorage(AMBIANCE_STORAGE_KEY);
  return isKnownAmbiance(value) ? value : DEFAULT_AMBIANCE;
}

/**
 * Gère l'ambiance visuelle (jeu de couleurs et de polices), indépendante du clair / sombre.
 * Pose <html data-ambiance="..."> ; l'ambiance par défaut retire l'attribut.
 */
@Injectable({ providedIn: 'root' })
export class AmbianceStore {
  private readonly root = inject(DOCUMENT).documentElement;
  private readonly ambianceId = signal(readStoredAmbiance());

  readonly ambiances = AMBIANCES;
  readonly ambiance = computed<Ambiance>(
    () => AMBIANCES.find((item) => item.id === this.ambianceId()) ?? AMBIANCES[0],
  );

  constructor() {
    effect(() => {
      const id = this.ambianceId();
      if (id === DEFAULT_AMBIANCE) {
        delete this.root.dataset['ambiance'];
      } else {
        this.root.dataset['ambiance'] = id;
      }
    });
  }

  select(id: string): void {
    if (!isKnownAmbiance(id)) return;
    writeStorage(AMBIANCE_STORAGE_KEY, id);
    this.ambianceId.set(id);
  }
}
