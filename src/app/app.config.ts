import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  inject,
  provideAppInitializer,
} from '@angular/core';

import {
  provideRouter,
  withInMemoryScrolling,
} from '@angular/router';

import { routes } from './app.routes';

import { provideHttpClient } from '@angular/common/http';

import {
  provideTranslateService,
  TranslateService,
} from '@ngx-translate/core';

import {
  provideTranslateHttpLoader,
} from '@ngx-translate/http-loader';

// This is the main configuration of the Angular application.
export const appConfig: ApplicationConfig = {
  providers: [
    // Listens for errors that happen inside the browser.
    provideBrowserGlobalErrorListeners(),

    // Adds the Angular router to the application.
    provideRouter(
      routes,

      // Controls what happens when the route changes.
      withInMemoryScrolling({
        // Allows links such as "#about" to scroll to an element.
        anchorScrolling: 'enabled',

        // Restores the previous scroll position when navigating back.
        scrollPositionRestoration: 'enabled',
      }),
    ),

    // Allows the application to make HTTP requests.
    // The translation loader needs this to load the JSON files.
    provideHttpClient(),

    // Adds ngx-translate to the application.
    provideTranslateService({
      // Eng. is the initial language.
      lang: 'en',

      // English is used if a translation is missing.
      fallbackLang: 'en',

      // Loads the translations from JSON files.
      loader: provideTranslateHttpLoader({
        // Folder containing the translation files.
        prefix: './i18n/',

        // File type of the translation files.
        suffix: '.json',
      }),
    }),

    // Runs when the application starts.
    provideAppInitializer(() => {
      // Gives access to the translation service.
      const translate = inject(TranslateService);

      // Gets the browser language and uses it for the application.
      // English is used if the browser language cannot be found.
      translate.use(translate.getBrowserLang() || 'en');
    }),
  ],
};