import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  
  userForm: FormGroup = new FormGroup({});

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  get forms(): { [key: string]: AbstractControl } {
    return this.userForm.controls;
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      name:[undefined],
      email:[undefined],
      password:[undefined],
      mobileNumber:[undefined],
      contacts: new FormArray([])
    });
    this.initContacts();
  }

  initContacts() {
    (this.userForm.get('contacts') as FormArray).push(
      this.formBuilder.group({
        mobileNumber:[undefined],
        id:[undefined],
        email:[undefined],
        userId: [undefined],
      })
    )
  }

  get getContactForm(): FormArray {
    return (this.userForm.get('contacts') as FormArray);
  }

  onAddUser(user: any) {
    this.userService.addUsers(user).subscribe(
      (response: any) => {
        console.log(response);
        this.router.navigate(['/home/users']);
      }, error => {
        console.error(error);
      }
    );
  }

  addMore() {
    this.initContacts();
  }

  goBack() {
    this.location.back();
  }

  onChange(event: any) {
    console.log(event.checked);
  }

  deleteContactForm(i: number) {
    (this.userForm.get('contacts') as FormArray).removeAt(i);
  }

}
