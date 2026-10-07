import { Component, ElementRef, computed, effect, inject, signal, viewChild } from '@angular/core';
import { AmbianceStore } from '../../core/ambiance-store';
import { LanguageStore } from '../../core/language-store';
import { uniqueId } from '../../core/unique-id';

/**
 * Bouton + liste déroulante pour choisir l'ambiance.
 * Clavier : Entrée / Espace / ↓ ouvrent, ↑ ↓ naviguent, Entrée valide, Échap ferme.
 */
@Component({
  selector: 'app-ambiance-select',
  templateUrl: './ambiance-select.html',
  styleUrl: './ambiance-select.css',
  host: {
    '(document:pointerdown)': 'onDocumentPointerDown($event)',
  },
})
export class AmbianceSelect {
  private readonly ambianceStore = inject(AmbianceStore);
  private readonly languageStore = inject(LanguageStore);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly button = viewChild.required<ElementRef<HTMLButtonElement>>('button');
  private readonly list = viewChild<ElementRef<HTMLUListElement>>('list');

  protected readonly listId = uniqueId('ambiance-list');
  protected readonly lang = this.languageStore.lang;
  protected readonly ui = this.languageStore.ui;
  protected readonly ambiance = this.ambianceStore.ambiance;
  protected readonly ambiances = this.ambianceStore.ambiances;
  protected readonly isOpen = signal(false);
  protected readonly activeIndex = signal(0);

  private readonly selectedIndex = computed(() =>
    this.ambiances.findIndex((item) => item.id === this.ambiance().id),
  );

  constructor() {
    // Focus sur la liste dès qu'elle est rendue, pour la navigation au clavier.
    effect(() => this.list()?.nativeElement.focus());
  }

  protected previewGradient(colors: string[]): string {
    return `linear-gradient(120deg, ${colors.join(', ')})`;
  }

  protected toggle(): void {
    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  }

  protected choose(index: number): void {
    this.ambianceStore.select(this.ambiances[index].id);
    this.close();
  }

  protected onButtonKeyDown(event: KeyboardEvent): void {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      this.open();
    }
  }

  protected onListKeyDown(event: KeyboardEvent): void {
    const count = this.ambiances.length;
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        this.activeIndex.update((index) => (index + 1) % count);
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.activeIndex.update((index) => (index - 1 + count) % count);
        break;
      case 'Home':
        event.preventDefault();
        this.activeIndex.set(0);
        break;
      case 'End':
        event.preventDefault();
        this.activeIndex.set(count - 1);
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        this.choose(this.activeIndex());
        break;
      case 'Escape':
        event.preventDefault();
        this.close();
        break;
      case 'Tab':
        this.close({ refocus: false });
        break;
    }
  }

  /** Ferme la liste au clic en dehors. */
  protected onDocumentPointerDown(event: PointerEvent): void {
    if (this.isOpen() && !this.host.nativeElement.contains(event.target as Node)) {
      this.close({ refocus: false });
    }
  }

  private open(): void {
    this.activeIndex.set(this.selectedIndex());
    this.isOpen.set(true);
  }

  private close({ refocus = true } = {}): void {
    this.isOpen.set(false);
    if (refocus) this.button().nativeElement.focus();
  }
}
