import { Component, computed, inject } from '@angular/core';
import { LanguageStore } from '../../core/language-store';
import { ThemeStore } from '../../core/theme-store';

/** Bascule clair / sombre. Le bouton affiche le thème vers lequel il bascule. */
@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.html',
  styleUrl: './theme-toggle.css',
})
export class ThemeToggle {
  private readonly themeStore = inject(ThemeStore);

  protected readonly ui = inject(LanguageStore).ui;
  protected readonly isDark = computed(() => this.themeStore.theme() === 'dark');
  protected readonly nextThemeLabel = computed(() =>
    this.isDark() ? this.ui().lightMode : this.ui().darkMode,
  );

  protected toggle(): void {
    this.themeStore.toggle();
  }
}
