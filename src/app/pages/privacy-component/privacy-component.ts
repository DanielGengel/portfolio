import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-privacy-component',
  imports: [TranslatePipe],
  templateUrl: './privacy-component.html',
  styleUrl: './privacy-component.scss',
})
export class PrivacyComponent {}
