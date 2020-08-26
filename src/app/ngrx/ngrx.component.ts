import { documentDetailsFacade } from './../store/document.facade';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NgrxService } from '../ngrx.service';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';




@Component({
  selector: 'app-ngrx',
  templateUrl: './ngrx.component.html',
  styleUrls: ['./ngrx.component.scss']
})




export class NgrxComponent implements OnInit {
  displayedColumns: string[] = ['id', 'userid', 'title', 'body'];
  dataSource;


constructor(private documentfacde: documentDetailsFacade){}

  ngOnInit(): void {
    // this.NgrxService.getValues().subscribe((data) => {
    //   this.marketList = data;
    //   console.log((JSON.stringify(this.marketList)));
    //   this.displayedColumns = Object.keys(this.marketList[1]);
    //   this.dataSource = new MatTableDataSource(this.marketList);


    // }, (err) => {
    //   console.log(err);
    // });


    this.documentfacde.getAllData();
    this.documentfacde.getSummaryDoctorsList$.subscribe((data) => {
      // console.log(data);
      this.dataSource = data['Documents'];
    })
  }

  updateField(index, field) {
    const control = this.getControl(index, field);


}


getControl(index, fieldName) {
  // const a  = this.controls.at(index).get(fieldName) as FormControl;
  // return this.controls.at(index).get(fieldName) as FormControl;
}
}
