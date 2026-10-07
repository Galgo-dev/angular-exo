import { Component, input } from '@angular/core';
import { CEFR_LEVELS, Language } from '../../core/cv.model';
import { LanguageLevel } from '../language-level/language-level';

@Component({
  selector: 'app-language-list',
  imports: [LanguageLevel],
  templateUrl: './language-list.html',
  styleUrl: './language-list.css',
})
export class LanguageList {
  readonly languages = input.required<Language[]>();

  protected readonly levels = CEFR_LEVELS;
}
