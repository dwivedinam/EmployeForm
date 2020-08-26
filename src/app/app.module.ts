import { DocuemntEffects } from './store/document.effects';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgrxComponent } from './ngrx/ngrx.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';
import * as fromScheduleAppointmentStore from './store/document.reducers';
import { NameEditerComponent } from './name-editer/name-editer.component';
import { EditTableComponent } from './edit-table/edit-table.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ReactiveDynamicFormComponent } from './reactive-dynamic-form/reactive-dynamic-form.component';
import {MatInputModule} from '@angular/material/input';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { EJAngular2Module } from 'ej-angular2';
@NgModule({
  declarations: [
    AppComponent,
    NgrxComponent,
    NameEditerComponent,
    EditTableComponent,
    DynamicFormComponent,
    ReactiveDynamicFormComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    DropDownListModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatTableModule,
    MatInputModule,
    HttpClientModule,
    ReactiveFormsModule,
    EJAngular2Module.forRoot(),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([
      DocuemntEffects
    ]),
    StoreModule.forFeature(
      fromScheduleAppointmentStore.documentFeatureKey,
      fromScheduleAppointmentStore.reducer
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
