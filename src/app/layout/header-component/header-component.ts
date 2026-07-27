
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-component',
  imports: [RouterLink],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss'
})
export class HeaderComponent {
  menuOpen = signal(false);
  language = signal<'de' | 'en'>('en');

  toggleMenu(): void {
    this.menuOpen.update(open => !open);
  }

  closeMenu(menuButton?: HTMLButtonElement): void {
  menuButton?.focus();
  this.menuOpen.set(false);
}

  changeLanguage(language: 'de' | 'en'): void {
    this.language.set(language);
  }
}