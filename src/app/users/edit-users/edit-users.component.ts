import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UsersListResponseModel } from '../models/user-list-response.model';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.scss']
})
export class EditUsersComponent implements OnInit {

  userForm: FormGroup = new FormGroup({});
  userId: string | undefined;
  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      console.log('user id from params: ', params); // {id: 1}
      this.userId = params.id;
      this.getUserDetailsById();
    });
    this.initForm();
  }

  get forms(): { [key: string]: AbstractControl } {
    return this.userForm.controls;
  }

  get getContactForm(): FormArray {
    return (this.userForm.get('contacts') as FormArray);
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      name:[undefined],
      email:[undefined],
      password:[undefined],
      mobileNumber:[undefined],
      contacts: new FormArray([])
    });
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

  addMore() {
    this.initContacts();
  }
  
  deleteContactForm(i: number) {
    (this.userForm.get('contacts') as FormArray).removeAt(i);
  }

  getUserDetailsById() {
    this.userService.getUserDetailsById(this.userId).subscribe((user: any) => {
      console.info('userdetails by id: ', user);
      this.setUserExistingDetails(user);
    }, (error: any) => {
      console.error('user details by id error: ', error);
    });
  }

  setUserExistingDetails(user: UsersListResponseModel) {
    this.userForm.patchValue({
      name: user.name,
      email: user.email,
      password: user.password,
      mobileNumber: user.mobileNumber,
    });
    

    if (user.contacts.length == 0) {
      return;
    }

    user?.contacts?.map((value) => {
      (this.userForm.get('contacts') as FormArray).push(
        this.formBuilder.group({
          mobileNumber: value?.mobileNumber,
          email: value?.email,
          id: value?.id,
          userId: value?.userId
        })
      );
    });
  }

  onEditUser(userDetails: UsersListResponseModel) {
    console.log(userDetails);
    this.userService.onEditUser(userDetails, this.userId).subscribe((response: any) => {
      console.log('edit success: ', response);
      this.router.navigate(['/home/users']);
    }, (error: any) => {
      console.log('error while saving user details: ', error);
    });
  }

  goBack() {
    this.location.back();
  }

}
