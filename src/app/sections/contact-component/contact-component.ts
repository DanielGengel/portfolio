import { Component, inject, signal } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-contact-component',
  imports: [RouterLink, TranslatePipe, ReactiveFormsModule],
  templateUrl: './contact-component.html',
  styleUrl: './contact-component.scss',
})
export class ContactComponent {
  private http = inject(HttpClient);

  private readonly contactUrl = '/api/send-mail.php';

  sendStatus = signal<'idle' | 'sending' | 'sent' | 'error'>('idle');

  contactForm = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(3),
        // [\p{L}\p{M}]+ -> Name must beginn with letters
        // [ '’\-] -> Allow the following in name: space, straight apostrophe,
        // curly apostrophe and hyphen
        // [\p{L}\p{M}]+ -> After every seperator must be a letter
        Validators.pattern(/^[\p{L}\p{M}]+(?:[ '’\-][\p{L}\p{M}]+)*$/u),
      ],
    }),

    email: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.email,
        // [^\s@]+ -> at least one character
        // @ -> after that @ neccesarry
        // [^\s@]+ -> at least one chracter for domain
        // \. -> dot neccesarry
        // [^\s@]{2,} -> at least 2 characters after dot
        Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/),
      ],
    }),

    message: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(10)],
    }),

    privacyAccepted: new FormControl(false, {
      nonNullable: true,
      validators: [Validators.requiredTrue],
    }),
  });

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.sendStatus.set('sending');

    const formData = this.contactForm.getRawValue();

    // PHP only needs these three properties.
    const requestData = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    this.http
  .post<{ success: boolean }>(this.contactUrl, requestData)
  .pipe(timeout(15000))
  .subscribe({
    next: (response) => {
      console.log('Response received:', response);

      if (response.success === true) {
        this.sendStatus.set('sent');
        this.contactForm.reset();
      } else {
        this.sendStatus.set('error');
      }
    },

    error: (error) => {
      console.error('Request failed:', error);
      this.sendStatus.set('error');
    },
  });

    this.contactForm.reset();
  }
}
