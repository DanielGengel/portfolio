import { Component, signal, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header-component',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss',
})
export class HeaderComponent {
  menuOpen = signal(false);
  language = signal<'de' | 'en'>('en');

  // toggleMenu(): void {
  //   this.menuOpen.update((open) => !open);
  // }

  // closeMenu(menuButton?: HTMLButtonElement): void {
  //   menuButton?.focus();
  //   this.menuOpen.set(false);
  // }

  toggleMenu(): void {
    const menuWillOpen = !this.menuOpen();

    this.menuOpen.set(menuWillOpen);

    document.body.style.overflow = menuWillOpen ? 'hidden' : '';
  }

  closeMenu(): void {
    this.menuOpen.set(false);
    document.body.style.overflow = '';
  }

  private translate = inject(TranslateService);

  changeLanguage(language: 'de' | 'en'): void {
    this.language.set(language);
    this.translate.use(language);
  }

  // private translate = inject(TranslateService);

  // useLanguage(language: string): void {
  //     this.translate.use(language);
  // }
}
