import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { CV_EN } from './core/cv-data.en';
import { CV_FR } from './core/cv-data.fr';
import { Cv } from './core/cv.model';

function sectionTitles(root: HTMLElement): (string | undefined)[] {
  return Array.from(root.querySelectorAll('main h2')).map((h2) => h2.textContent?.trim());
}

/** Squelette d'un CV : tous les identifiants et le nombre d'éléments de chaque liste. */
function shape(cv: Cv) {
  return {
    contacts: cv.contacts.map((contact) => contact.id),
    languages: cv.languages.map((language) => language.id),
    experiences: cv.experiences.map((item) => [item.id, item.tags?.length]),
    education: cv.education.map((item) => item.id),
    skillGroups: cv.skillGroups.map((group) => [group.id, group.items.length]),
    hobbies: cv.hobbies.length,
  };
}

describe('App', () => {
  beforeEach(async () => {
    localStorage.clear();
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the name and the French sections by default', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Guillaume Belle');
    expect(sectionTitles(compiled)).toEqual(['Expériences', 'Formation', 'Compétences', 'Loisirs']);
    expect(document.documentElement.lang).toBe('fr');
  });

  it('should switch to English and back with the language buttons', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const button = (lang: string) =>
      compiled.querySelector<HTMLButtonElement>(`app-language-switch button[lang="${lang}"]`)!;

    button('en').click();
    await fixture.whenStable();
    expect(sectionTitles(compiled)).toEqual(['Experience', 'Education', 'Skills', 'Interests']);
    expect(button('en').getAttribute('aria-pressed')).toBe('true');
    expect(document.documentElement.lang).toBe('en');
    expect(localStorage.getItem('cv-lang')).toBe('en');

    button('fr').click();
    await fixture.whenStable();
    expect(sectionTitles(compiled)[0]).toBe('Expériences');
  });

  it('should keep the English CV in sync with the French one', () => {
    expect(shape(CV_EN)).toEqual(shape(CV_FR));
  });
});
