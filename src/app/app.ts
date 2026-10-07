import { Component } from '@angular/core';
import { HobbyList } from './components/hobby-list/hobby-list';
import { ProfileSummary } from './components/profile-summary/profile-summary';
import { Section } from './components/section/section';
import { Sidebar } from './components/sidebar/sidebar';
import { SkillGroups } from './components/skill-groups/skill-groups';
import { Timeline } from './components/timeline/timeline';
import { CV } from './core/cv-data';

@Component({
  selector: 'app-root',
  imports: [Sidebar, ProfileSummary, Section, Timeline, SkillGroups, HobbyList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly cv = CV;
  protected readonly year = new Date().getFullYear();
}
