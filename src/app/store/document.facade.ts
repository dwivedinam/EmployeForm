import { Details } from './document.models';
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromSelector from './document.selectors';
import * as fromActions from './document.actions';

@Injectable({
  providedIn: 'root',
})
export class documentDetailsFacade{
  constructor(private store: Store<Details>) {}

  getSummaryDoctorsList$ = this.store.select(fromSelector.getSelectedResources)

 getAllData() {
  this.store.dispatch(fromActions.selectDocuments())
}

}
