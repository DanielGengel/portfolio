import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-references-component',
  imports: [TranslatePipe],
  templateUrl: './references-component.html',
  styleUrl: './references-component.scss',
})
export class ReferencesComponent {
  readonly references = [
    {
      name: 'V. Schuster',
      position: 'Team Partner',
      quote:
        'Michael really kept the team together with his great organization and clear communication. We would not have got this far without his commitment.',
    },
    {
      name: 'E. Eichinger',
      position: 'Team Partner',
      quote:
        'Michi was a top team colleague. His positive commitment and willingness to take on responsibility made a significant contribution to us achieving our goals.',
    },
    {
      name: 'I. Nuber',
      position: 'Frontend Engineer',
      quote:
        'It was a great pleasure to work with Michael. He knows how to encourage team members to present their best work, always adding something to brainstorm. He was always present and available to listen and help others.',
    },
  ];
}
