import { Component, inject, input } from '@angular/core';
import { Profile } from '../../core/cv.model';
import { LanguageStore } from '../../core/language-store';
import { AmbianceSelect } from '../ambiance-select/ambiance-select';
import { ThemeToggle } from '../theme-toggle/theme-toggle';

/** Photo (ou initiales à défaut), réglages d'affichage (thème, ambiance), nom et intitulé du poste. */
@Component({
  selector: 'app-profile-header',
  imports: [ThemeToggle, AmbianceSelect],
  templateUrl: './profile-header.html',
  styleUrl: './profile-header.css',
})
export class ProfileHeader {
  readonly profile = input.required<Profile>();

  protected readonly ui = inject(LanguageStore).ui;
}
