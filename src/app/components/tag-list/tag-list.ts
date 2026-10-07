import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.html',
  styleUrl: './tag-list.css',
})
export class TagList {
  readonly tags = input.required<string[]>();
}
