import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-name-editer',
  templateUrl: './name-editer.component.html',
  styleUrls: ['./name-editer.component.scss']
})
export class NameEditerComponent implements OnInit {

  name = new FormControl('');
  profileForm1 =  new FormGroup({
    firstname: new FormControl(''),
    lastName: new FormControl('')

  });
  profileForm2 = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });

  profileForm3 = this.fb.group({
    firstName: ['' , Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
  });

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.updatename();
    this.profileForm.patchValue({
      firstName: 'firstName'
     });
  }

  updatename(){
    this.name.setValue('vinoda');
  }
onSubmit(){
  console.warn(this.profileForm.value);
}

updateProfile(data: any) {

  this.profileForm.patchValue({
    firstName: data.firstName,
    address: {
      street: data?.address?.street
    }
  });
}
}
