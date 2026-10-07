import { Component, computed, inject } from '@angular/core';
import { ThemeStore } from '../../core/theme-store';

/** Bascule clair / sombre. Le bouton affiche le thème vers lequel il bascule. */
@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.html',
  styleUrl: './theme-toggle.css',
})
export class ThemeToggle {
  private readonly themeStore = inject(ThemeStore);

  protected readonly isDark = computed(() => this.themeStore.theme() === 'dark');
  protected readonly nextThemeLabel = computed(() => (this.isDark() ? 'Mode clair' : 'Mode sombre'));

  protected toggle(): void {
    this.themeStore.toggle();
  }
}
