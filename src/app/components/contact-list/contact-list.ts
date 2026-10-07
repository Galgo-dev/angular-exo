import { Component, input } from '@angular/core';
import { Contact } from '../../core/cv.model';
import { CopyButton } from '../copy-button/copy-button';

@Component({
  selector: 'app-contact-list',
  imports: [CopyButton],
  templateUrl: './contact-list.html',
  styleUrl: './contact-list.css',
})
export class ContactList {
  readonly contacts = input.required<Contact[]>();
}
