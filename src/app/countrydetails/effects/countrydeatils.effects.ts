import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, exhaustMap } from 'rxjs/operators';
import { CountryDetails } from '../models/countrydetails.model';
import { CountryPageActionType } from '../actions/countrydeatils.actions';
import { LoadCountySuccess, LoadCountyFail}  from '../actions/countrydeatils-api.actions';
import { Action } from 'rxjs/internal/scheduler/Action';
import {NgrxService} from '../../ngrx.service';

@Injectable()
export class CountryPageEffects {
  constructor(
    private actions$: Actions,
    private CountryService: NgrxService
  ) {}
  LoadCountrydetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CountryPageActionType.LoadCountrydetails),
      exhaustMap(() =>
        this.CountryService.getValues().pipe(
          map(
            (countries: CountryDetails) => new LoadCountySuccess(countries),
            catchError((error) => of(new LoadCountyFail(error)))
          )
        )
      )
    )
  );
}
