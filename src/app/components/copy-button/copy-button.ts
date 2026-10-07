import { Component, DestroyRef, inject, input, signal } from '@angular/core';
import { UiStrings } from '../../core/i18n';
import { LanguageStore } from '../../core/language-store';

type CopyStatus = keyof UiStrings['copyStatus'];

const FEEDBACK_DURATION_MS = 1600;

/**
 * Copie `text` ; en cas de refus du navigateur, sélectionne l'élément `target`.
 * `label` décrit ce qui est copié pour les lecteurs d'écran.
 */
@Component({
  selector: 'app-copy-button',
  templateUrl: './copy-button.html',
  styleUrl: './copy-button.css',
})
export class CopyButton {
  readonly text = input.required<string>();
  readonly label = input.required<string>();
  readonly target = input<HTMLElement>();

  protected readonly status = signal<CopyStatus>('idle');
  protected readonly ui = inject(LanguageStore).ui;
  private resetTimer?: ReturnType<typeof setTimeout>;

  constructor() {
    inject(DestroyRef).onDestroy(() => clearTimeout(this.resetTimer));
  }

  protected async copy(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.text());
      this.showStatus('copied');
    } catch {
      this.selectTarget();
      this.showStatus('selected');
    }
  }

  private selectTarget(): void {
    const target = this.target();
    const selection = window.getSelection();
    if (!target || !selection) return;
    const range = document.createRange();
    range.selectNodeContents(target);
    selection.removeAllRanges();
    selection.addRange(range);
  }

  private showStatus(status: CopyStatus): void {
    this.status.set(status);
    clearTimeout(this.resetTimer);
    this.resetTimer = setTimeout(() => this.status.set('idle'), FEEDBACK_DURATION_MS);
  }
}
