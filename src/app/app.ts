import { Component, signal, ApplicationConfig } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header-component/header-component';
import { FooterComponent } from './layout/footer-component/footer-component';
import { TranslatePipe } from '@ngx-translate/core';
import { ViewportScroller } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})



export class App {
  protected readonly title = signal('portfolio');

  constructor(viewportScroller: ViewportScroller) {
    // If menu links clicked, scroll to 90px above header, to avoid
    // section heading hiding behind header.
    viewportScroller.setOffset([0, 90]);
  }
}

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient()],
};

