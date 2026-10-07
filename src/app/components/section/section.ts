import { Component, input } from '@angular/core';
import { uniqueId } from '../../core/unique-id';

/** Section du contenu principal, avec un titre relié pour l'accessibilité. */
@Component({
  selector: 'app-section',
  templateUrl: './section.html',
  styleUrl: './section.css',
})
export class Section {
  readonly heading = input.required<string>();
  protected readonly headingId = uniqueId('section-title');
}
