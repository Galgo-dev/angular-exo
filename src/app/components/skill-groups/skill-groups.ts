import { Component, input } from '@angular/core';
import { SkillGroup } from '../../core/cv.model';

/** Grille de groupes de compétences. `variant: 'component'` affiche <Item />. */
@Component({
  selector: 'app-skill-groups',
  templateUrl: './skill-groups.html',
  styleUrl: './skill-groups.css',
})
export class SkillGroups {
  readonly groups = input.required<SkillGroup[]>();
}
