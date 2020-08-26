import { Component,Input, OnInit, Output,EventEmitter} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-table',
  templateUrl: './edit-table.component.html',
  styleUrls: ['./edit-table.component.scss']
})
export class EditTableComponent implements OnInit {
  id: any;
  name: any;
  mobileno: any;
  ids: any = [];
  newdata: any;
  public searchText: string;
  term: string;
  displayedColumns: string[] = ['position', 'id', 'name', 'mobileno'];
employes: any = [{
  id: '1', name: 'nam', mobileno: '233242342'},
{id: '2', name: 'namw', mobileno: '233242342'},
{id: '3', name: 'dwi', mobileno: '233242342'},
{id: '4', name: 'vinu', mobileno: '233242342'},
{id: '5', name: 'dwi', mobileno: '233242342'},
{id: '6', name: 'vinu', mobileno: '233242342'}];
  constructor() { }

  profileForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    mobileno: new FormControl('')

  });


  ngOnInit(): void {

  }

  onRegisterSubmit() {
    const index: number = this.employes.findIndex(x => x.id === this.profileForm.value.id);
    if (index !== -1) {
      this.employes[index].name = this.profileForm.value.name;
      this.employes[index].mobileno = this.profileForm.value.mobileno;
  } else {
    this.employes.push(this.profileForm.value);
  }

  }

  onEdit(user: any, i){
  this.profileForm.patchValue({
    index: i,
    id: user.id,
    name: user.name,
    mobileno: user.mobileno
});
  }
  onDelete(id){
    const index: number = this.employes.findIndex(x => x.id === id);
    console.log(index);
    if (index !== -1) {
        this.employes.splice(index, 1);
        this.profileForm.reset();
    }
    }

//  public   onSearch(searchtext: any){
//     const searchdata = this.employes.filter(x => x.name === searchtext || x.name === searchtext);
//     this.employes = searchdata;
//     }
}










