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
  // Gives this component access to the translation service.
  private translate = inject(TranslateService);

  // Saves whether the mobile menu is open or closed.
  menuOpen = signal(false);

  // Saves the currently selected language.
  // English is used as the default language.
  language = signal<'de' | 'en'>('en');

  constructor() {
    // localStorage is only available inside the browser.
    if (typeof window !== 'undefined') {
      // Gets the saved language from the browser.
      const savedLanguage = localStorage.getItem('language');

      // Only accepts German or English.
      if (savedLanguage === 'de' || savedLanguage === 'en') {
        this.language.set(savedLanguage);
      }
    }

    // Starts the translation service with the selected language.
    this.translate.use(this.language());
  }

  // Opens the menu when it is closed.
  // Closes the menu when it is open.
  toggleMenu(): void {
    const menuWillOpen = !this.menuOpen();

    this.menuOpen.set(menuWillOpen);

    // Stops the page from scrolling while the menu is open.
    document.body.style.overflow = menuWillOpen ? 'hidden' : '';
  }

  // Closes the menu.
  closeMenu(): void {
    this.menuOpen.set(false);

    // Allows the page to scroll again.
    document.body.style.overflow = '';
  }

  // Changes the current language...
  changeLanguage(language: 'de' | 'en'): void {
    // Updates the language signal...
    this.language.set(language);

    // Shows the translations for the selected language
    this.translate.use(language);

    // localStorage is only available inside the browser.
    if (typeof window !== 'undefined') {
      // Saves the language so it remains selected after a reload.
      localStorage.setItem('language', language);
    }
  }
}