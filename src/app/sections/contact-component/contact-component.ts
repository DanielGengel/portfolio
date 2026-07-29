import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { email, form, FormField, FormRoot, minLength, required } from '@angular/forms/signals';

interface ContactData {
  name: string;
  email: string;
  message: string;
  privacyAccepted: boolean;
}

@Component({
  selector: 'app-contact-component',
  imports: [FormField, FormRoot, RouterLink],
  templateUrl: './contact-component.html',
  styleUrl: './contact-component.scss',
})
export class ContactComponent {
  private readonly initialModel: ContactData = {
    name: '',
    email: '',
    message: '',
    privacyAccepted: false,
  };

  readonly messageSent = signal(false);

  readonly contactModel = signal<ContactData>({
    ...this.initialModel,
  });

  readonly contactForm = form(
    this.contactModel,

    // Validierung
    (path) => {
      required(path.name, {
        message: 'Please enter your name.',
      });

      required(path.email, {
        message: 'Please enter your email.',
      });

      email(path.email, {
        message: 'Please enter a valid email address.',
      });

      required(path.message, {
        message: 'Please enter a message.',
      });

      minLength(path.message, 10, {
        message: 'Your message must contain at least 10 characters.',
      });

      required(path.privacyAccepted, {
        message: 'Please accept the privacy policy.',
      });
    },

    // Formular absenden
    {
      submission: {
        action: async (field) => {
          this.messageSent.set(false);

          try {
            const response = await fetch('/api/contact', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(field().value()),
            });

            if (!response.ok) {
              return {
                kind: 'serverError',
                message: 'Your message could not be sent. Please try again.',
              };
            }

            this.messageSent.set(true);

            // Werte sowie touched/dirty zurücksetzen
            field().reset({
              ...this.initialModel,
            });

            return;
          } catch {
            return {
              kind: 'serverError',
              message: 'The server is currently unavailable. Please try again later.',
            };
          }
        },
      },
    },
  );
}
