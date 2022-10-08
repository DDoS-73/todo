import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from "@angular/forms";
import { Store } from '@ngrx/store';
import { RegistrationPageAction } from "../store/user.actions";
import { User } from "../../../core/models/user.model";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  constructor(
    private fb: FormBuilder,
    private store: Store,
    ) {}

  registrationForm = this.fb.group({
    name: [''],
    username: [''],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern('^(?:\\+38)?(0[5-9][0-9]\\d{7})$')]],
    address: this.fb.group({
      street: [''],
      suite: [''],
      city: [''],
      zipcode: ['']
    })
  });

  get email(): AbstractControl | null {
    return this.registrationForm.get('email');
  }

  get phone(): AbstractControl | null {
    return this.registrationForm.get('phone');
  }

  onSubmit(): void {
    const user: User = this.registrationForm.value as User;
    this.store.dispatch(RegistrationPageAction.registrationUser({user}));
  }
}
