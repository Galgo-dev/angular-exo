import { Component, inject } from '@angular/core';
import { LANG_OPTIONS, Lang } from '../../core/i18n';
import { LanguageStore } from '../../core/language-store';

/** Bascule FR / EN, fixée dans le coin supérieur droit de la fenêtre. */
@Component({
  selector: 'app-language-switch',
  templateUrl: './language-switch.html',
  styleUrl: './language-switch.css',
})
export class LanguageSwitch {
  private readonly languageStore = inject(LanguageStore);

  protected readonly options = LANG_OPTIONS;
  protected readonly lang = this.languageStore.lang;
  protected readonly ui = this.languageStore.ui;

  protected select(lang: Lang): void {
    this.languageStore.select(lang);
  }
}
