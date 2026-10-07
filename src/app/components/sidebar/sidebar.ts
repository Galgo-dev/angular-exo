import { Component, input } from '@angular/core';
import { Contact, EmploymentAid, Language, Profile } from '../../core/cv.model';
import { ContactList } from '../contact-list/contact-list';
import { LanguageList } from '../language-list/language-list';
import { ProfileHeader } from '../profile-header/profile-header';

/** Colonne d'identité : nom, contacts, langues, aide à l'emploi. */
@Component({
  selector: 'app-sidebar',
  imports: [ProfileHeader, ContactList, LanguageList],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  readonly profile = input.required<Profile>();
  readonly contacts = input.required<Contact[]>();
  readonly languages = input.required<Language[]>();
  readonly employmentAid = input.required<EmploymentAid>();
}
