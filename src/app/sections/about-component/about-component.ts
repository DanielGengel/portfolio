import { Component, inject } from '@angular/core';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-about-component',
  imports: [TranslatePipe],
  templateUrl: './about-component.html',
  styleUrl: './about-component.scss',
})
export class AboutComponent {

  private translate = inject(TranslateService);

}
