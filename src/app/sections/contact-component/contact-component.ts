import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-component',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-component.html',
  styleUrl: './contact-component.scss',
})
export class ContactComponent {
  contactForm = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)],
    }),

    email: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.email,
        // [^\s@]+ → at least one character
        // @ → after that @ neccesarry
        // [^\s@]+ → at least one chracter for domain
        // \. → dot neccesarry
        // [^\s@]{2,} → at least 2 characters after dot
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

    const formData = this.contactForm.getRawValue();

    console.log(formData);

    // Send data...

    this.contactForm.reset();
  }
}
