import { Component, computed, input } from '@angular/core';
import { CEFR_LEVELS, CefrLevel } from '../../core/cv.model';

/** Barre en 6 segments (A1 → C2) remplie jusqu'au niveau atteint. */
@Component({
  selector: 'app-language-level',
  templateUrl: './language-level.html',
  styleUrl: './language-level.css',
})
export class LanguageLevel {
  readonly level = input.required<CefrLevel>();

  protected readonly levels = CEFR_LEVELS;
  protected readonly reachedIndex = computed(() => CEFR_LEVELS.indexOf(this.level()));
}
