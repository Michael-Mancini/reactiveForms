import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      email: '',
      phones: this.fb.array([])
    });

    this.myForm.valueChanges.subscribe(console.log);
  }

  get phoneForms() {
    return this.myForm.get('phones') as FormArray;
  }

  addPhone() {
    const phone = this.fb.group({
      area: [],
      prefix: [],
      line: []
    });

    this.phoneForms.push(phone);
  }

  removePhone(i) {
    this.phoneForms.removeAt(i);
  }

}
