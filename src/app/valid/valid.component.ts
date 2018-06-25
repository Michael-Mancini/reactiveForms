import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-valid',
  templateUrl: './valid.component.html',
  styleUrls: ['./valid.component.css']
})
export class ValidComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(4)
      ]],
      age: [null, [
        Validators.required,
        Validators.min(18),
        Validators.max(65)
      ]],
      agree: [false, Validators.requiredTrue]
    });

    this.myForm.valueChanges.subscribe(console.log);
  }

  get email() {
    return this.myForm.get('email');
  }

  get password() {
    return this.myForm.get('password');
  }

  get age() {
    return this.myForm.get('age');
  }

  get agree() {
    return this.myForm.get('agree');
  }

}
