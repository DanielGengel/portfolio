import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-footer-component',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './footer-component.html',
  styleUrl: './footer-component.scss'
})
export class FooterComponent {}