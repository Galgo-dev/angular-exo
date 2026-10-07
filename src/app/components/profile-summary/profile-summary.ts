import { Component, input } from '@angular/core';
import { SummarySegment } from '../../core/cv.model';

/** Phrase d'accroche ; les segments `emphasis` sont mis en avant. */
@Component({
  selector: 'app-profile-summary',
  templateUrl: './profile-summary.html',
  styleUrl: './profile-summary.css',
})
export class ProfileSummary {
  readonly segments = input.required<SummarySegment[]>();
}
