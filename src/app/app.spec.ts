import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the name and the sections', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Guillaume Belle');
    const sectionTitles = Array.from(compiled.querySelectorAll('main h2')).map((h2) =>
      h2.textContent?.trim(),
    );
    expect(sectionTitles).toEqual(['Expériences', 'Formation', 'Compétences', 'Loisirs']);
  });
});
