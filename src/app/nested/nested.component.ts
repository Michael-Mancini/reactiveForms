import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nested',
  templateUrl: './nested.component.html',
  styleUrls: ['./nested.component.css']
})
export class NestedComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    const phone = this.fb.group({
      area: '',
      prefix: [],
      line: []
    });

    this.myForm = this.fb.group({
      email: 'e',
      homePhone: phone,
      cellPhone: phone
    });

    this.myForm.valueChanges.subscribe(console.log);
  }

}
