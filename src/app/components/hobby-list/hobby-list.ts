import { Component, input } from '@angular/core';

@Component({
  selector: 'app-hobby-list',
  templateUrl: './hobby-list.html',
  styleUrl: './hobby-list.css',
})
export class HobbyList {
  readonly hobbies = input.required<string[]>();
}
