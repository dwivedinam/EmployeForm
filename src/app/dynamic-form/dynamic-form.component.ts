import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {fieldName} from './modal';
@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
public userForm: FormGroup;
constructor(private formBuilder: FormBuilder) {
  this.buildUserForm();

 }
 private buildUserForm() {
  this.userForm = this.formBuilder.group({
    Users: this.formBuilder.array([])
  });
  this.onAddUser();
}

onAddUser() {
  this.users.push(this.formBuilder.group({
    Name: [''],
    Salary: [''],
    Age: ['']
  }));
}


get users() {
  return this.userForm.get('Users') as FormArray;
}

  ngOnInit(): void {
    // this.dataarray.push(this.home);
  }
  public onSubmit() {
    console.log(this.userForm.value);
  }

}
