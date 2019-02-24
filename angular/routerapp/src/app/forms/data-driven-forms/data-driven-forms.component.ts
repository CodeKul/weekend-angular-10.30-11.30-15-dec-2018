import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-data-driven-forms',
  templateUrl: './data-driven-forms.component.html',
  styleUrls: ['./data-driven-forms.component.css']
})
export class DataDrivenFormsComponent implements OnInit {

  fg: FormGroup

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.fg = this.fb.group({
      myNm: this.fb.control('', Validators.compose(
        [Validators.required, MyValidators.myVali]
      )),
      pass: this.fb.control('', Validators.required),
      mobile: this.fb.control('', Validators.required)
    })
  }

  mySub() {
    console.log(this.fg)
  }
}

export class MyValidators {
  static myVali(control: AbstractControl): ValidationErrors | null {
    if (control.value.charAt(0) === 'a' || control.value.charAt(0) === 'A') {
      return null
    }
    return {
      isA: false
    }
  }
}
