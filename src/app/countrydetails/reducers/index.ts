import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';
import * as fromCountry from './country';
import * as fromRoot from './country';

export interface CountryDteails{
  country: fromCountry.State;

}

export interface State extends fromRoot.State {
  country: CountryDteails;
}

export const reducers: ActionReducerMap<CountryDteails> = {
  country: fromCountry.reducer,
};

export const getCountryState = createFeatureSelector<CountryDteails>(
  'country'
);

export const getCurrencyEntitiesState = createSelector(
  getCountryState,
  (state) => state.country
);
