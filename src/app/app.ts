import { Component, inject } from '@angular/core';
import { HobbyList } from './components/hobby-list/hobby-list';
import { LanguageSwitch } from './components/language-switch/language-switch';
import { ProfileSummary } from './components/profile-summary/profile-summary';
import { Section } from './components/section/section';
import { Sidebar } from './components/sidebar/sidebar';
import { SkillGroups } from './components/skill-groups/skill-groups';
import { Timeline } from './components/timeline/timeline';
import { LanguageStore } from './core/language-store';

@Component({
  selector: 'app-root',
  imports: [LanguageSwitch, Sidebar, ProfileSummary, Section, Timeline, SkillGroups, HobbyList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly languageStore = inject(LanguageStore);

  protected readonly cv = this.languageStore.cv;
  protected readonly ui = this.languageStore.ui;
  protected readonly year = new Date().getFullYear();
}
