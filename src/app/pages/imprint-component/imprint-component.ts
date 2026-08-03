import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import { HeaderComponent } from '../../layout/header-component/header-component';
import { FooterComponent } from '../../layout/footer-component/footer-component';
@Component({
  selector: 'app-imprint-component',
  imports: [HeaderComponent, FooterComponent, TranslatePipe],
  templateUrl: './imprint-component.html',
  styleUrl: './imprint-component.scss',
})
export class ImprintComponent {}
