import { Component } from '@angular/core';
import { HeroComponent } from '../../sections/hero-component/hero-component';
import { AboutComponent } from '../../sections/about-component/about-component';
import { SkillsComponent } from '../../sections/skills-component/skills-component';
import { PortfolioComponent } from '../../sections/portfolio-component/portfolio-component';
import { ReferencesComponent } from '../../sections/references-component/references-component';
import { ContactComponent } from '../../sections/contact-component/contact-component';
import { ArrowComponent } from '../../sections/arrow-component/arrow-component';


@Component({
  selector: 'app-home-component',
  imports: [HeroComponent,
    AboutComponent,
    ArrowComponent,
    SkillsComponent,
    PortfolioComponent,
    ReferencesComponent,
    ContactComponent],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss',
})
export class HomeComponent {}
