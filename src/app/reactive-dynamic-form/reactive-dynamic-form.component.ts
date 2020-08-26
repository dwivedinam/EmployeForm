import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AnyFn } from '@ngrx/store/src/selector';
import { employeModel, Department } from './modal';
import {MatTableModule, MatTableDataSource} from '@angular/material/table';
import { EJComponents } from 'ej-angular2';
@Component({
  selector: 'app-reactive-dynamic-form',
  templateUrl: './reactive-dynamic-form.component.html',
  styleUrls: ['./reactive-dynamic-form.component.scss']
})
export class ReactiveDynamicFormComponent implements OnInit {
  public employeForm: FormGroup;
  public employeDataform: FormGroup;
  colorControl = new FormControl('account');
  employeData = [];
  selectedDepartment: string;
checkedList: any[];
currentSelected: {};
showDropDown;
data: Array<Object> = [];
fieldsvalues: Object;
selectmode: any;

  states: Department[] = [
    { id: 0, name: 'acc0' },
    { id: 1, name: 'acc1' },
    { id: 2, name: 'acc2' },
    { id: 3, name: 'acc3' }
  ];

  title: string[] = [
    'mrs', 'miss', 'mr'
  ];
  emails = [
    { email: 'employed' },
    { email: 'student' },
    { email: 'unemployed' },
    { email: 'xxy' }
    ];

  constructor(private formBuilder: FormBuilder) {
    this.data = [
      { text: 'ListItem 1', value: 'item1' },
      { text: 'ListItem 2', value: 'item2' },
      { text: 'ListItem 3', value: 'item3' },
      { text: 'ListItem 4', value: 'item4' },
      { text: 'ListItem 5', value: 'item5' }
  ];
    this.fieldsvalues = { dataSource: this.data, text: 'text', value: 'value', selected:'selected' };
    this.buildEmployeForm();
  }

  private buildEmployeForm() {
    this.employeForm = this.formBuilder.group({
      id: [''],
      account: [''],
      title: [''],
      name: [''],
      phoneno: [''],
      pemail: [''],
      gender: [''],
      isNew: [''],
      Email: this.formBuilder.array([]),
      Address: this.formBuilder.array([]),
      checkbox: this.formBuilder.array([])
    });
    this.onAddSmail();
    this.onAddAddress();
  }


  onAddSmail() {
    console.log('hi');
    this.smail.push(this.formBuilder.group({
      semail: ['']
    }));
  }

  get smail() {
    return this.employeForm.get('Email') as FormArray;
  }
  ngOnInit(): void {
  }
  onSubmit(data) {
    console.log(this.employeForm.value);
    const id = this.employeForm.get('id').value;
    console.log('id' + id);
    if (id === '') {
      this.employeForm.controls.id.setValue(1);
      this.employeData.push(this.employeForm.value);
      this.employeForm.controls.id.setValue(this.employeData.length + 1);
    } else {
      const empdata = this.employeData.find(x => x.id === this.employeForm.value.id);
      if (empdata) {
        const index: any = this.employeData.findIndex(x => x.id === this.employeForm.value.id);
        this.employeData.splice(index, 1);
        this.employeData.push(this.employeForm.value);
      } else {
        this.employeData.push(this.employeForm.value);
        this.employeForm.controls.id.setValue(this.employeData.length + 1);
      }
    }


  }
  onAddAddress() {
    this.address.push(this.formBuilder.group({
      add1: [''],
      add2: ['']
    }));
  }

  get address() {
    return this.employeForm.get('Address') as FormArray;
  }

  onRemoveSmail(data: any) {
    if (this.smail.length > 1) {
      this.smail.removeAt(data);
    }
  }
  onRemoveAddress(data: any) {
    if (this.address.length > 1) {
      this.address.removeAt(data);
    }
  }

  onEdit(emp: any, i) {
    this.employeForm.patchValue({
      index: i,
      name: emp.name,
      phoneno: emp.phoneno,
      isNew: false
    });
    this.employeForm.controls.id.setValue(emp.id);
  }

  onDelete(index) {
    if (index !== -1) {
      this.employeData.splice(index, 1);
      this.employeForm.reset();
    }
  }


  onChange(email: string, isChecked: boolean) {
    const emailFormArray =  this.employeForm.controls.checkbox as FormArray;

    if (isChecked) {
      emailFormArray.push(new FormControl(email));
    } else {
      const index = emailFormArray.controls.findIndex(x => x.value == email);
      emailFormArray.removeAt(index);
    }
  }

  getSelectedValue(status: Boolean, value: String){
    if (status){
      this.checkedList.push(value);
    }else{
        const index = this.checkedList.indexOf(value);
        this.checkedList.splice(index, 1);
    }

    this.currentSelected = {checked : status, name: value};

    // share checked list
    // this.shareCheckedlist();

    // share individual selected item
    // this.shareIndividualStatus();
}

shareCheckedlist(){
  // this.shareCheckedList.emit(this.checkedList);
}
shareIndividualStatus(){
//  this.shareIndividualCheckedList.emit(this.currentSelected);
}

}
