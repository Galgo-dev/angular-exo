import { Component, input } from '@angular/core';
import { TimelineItem } from '../../core/cv.model';
import { TagList } from '../tag-list/tag-list';

/** Liste chronologique utilisée pour les expériences et la formation. */
@Component({
  selector: 'app-timeline',
  imports: [TagList],
  templateUrl: './timeline.html',
  styleUrl: './timeline.css',
})
export class Timeline {
  readonly items = input.required<TimelineItem[]>();
}
