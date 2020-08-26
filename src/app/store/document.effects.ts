import { NgrxService } from './../ngrx.service';
import { Details } from './document.models';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import * as documentActions from './document.actions';
import {
  switchMap,
  catchError,
  map,
  withLatestFrom,
  debounceTime, exhaustMap
} from 'rxjs/operators';
import * as Selectors from './document.selectors';
import { of } from 'rxjs';

@Injectable()


export class DocuemntEffects {
  constructor(
    private actions$: Actions,
    private store$: Store<Details>,
    private ngrxService: NgrxService
  ) { }

  public getSummaryDoctorsList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(documentActions.selectDocuments),
      exhaustMap((action: any) =>
        this.ngrxService.getValues().pipe(
          map(
            (resp: any) => {
              if (resp) {
                console.log('Data added to NgRx Store');
                console.log(resp);
                return documentActions.loadDocumentSuccess({documents: resp });
              } else {
                return documentActions.loadDocumentFailuar({
                  error: resp,
                });
              }
            },
            catchError((err) =>
              of(documentActions.loadDocumentFailuar({ error: err }))
            )
          )
        )
      )
    );
  }
  );


}

