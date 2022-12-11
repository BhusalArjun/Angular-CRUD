import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  reactiveForm: FormGroup = new FormGroup({});
  submitted: boolean = false;
  constructor(
    private form: FormBuilder
  ) { }

  ngOnInit(): void {
    this.reactiveForm = this.form.group({
      userFirstName: [undefined, Validators.required],
      address: [undefined, Validators.required],
    });
  }

  get forms(): { [key: string]: AbstractControl } {
    return this.reactiveForm.controls;
  }

  onSubmitForm(form: any): void {
    this.submitted = true;
    if (this.reactiveForm.valid) {
      console.log(form.value);
    }
  }
}
