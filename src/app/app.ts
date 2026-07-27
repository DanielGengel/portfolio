import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header-component/header-component';
import { FooterComponent } from './layout/footer-component/footer-component';
import { HeroComponent } from './sections/hero-component/hero-component';
import { AboutComponent } from './sections/about-component/about-component';
import { SkillsComponent } from './sections/skills-component/skills-component';
import { PortfolioComponent } from './sections/portfolio-component/portfolio-component';
import { ReferencesComponent } from './sections/references-component/references-component';
import { ContactComponent } from './sections/contact-component/contact-component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    PortfolioComponent,
    ReferencesComponent,
    ContactComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('portfolio');
}
