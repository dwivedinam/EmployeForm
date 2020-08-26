import { createFeatureSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { CountryDetails } from '../models/countrydetails.model';
import { CountryApiActionTypes, CountryApiActionUnion, LoadCountyFail , LoadCountySuccess} from '../actions/countrydeatils-api.actions';

export interface State extends EntityState<CountryDetails> {}
export const adapter: EntityAdapter<CountryDetails> = createEntityAdapter<
CountryDetails
>({
  sortComparer: false,
});

export const initialState: State = adapter.getInitialState();
export function reducer(
  state: State = initialState,
  action: CountryApiActionUnion
): State {
  switch (action.type) {
    case CountryApiActionTypes.LoadCountySuccess: {
      const data = action.payload;
      return adapter.setOne(data, state);
    }

    default: {
      return state;
    }
  }
}

export const getCountry = createFeatureSelector<State>('currency');
export const {
  selectIds: getCountryIds,
  selectEntities: getCurrencyEntities,
  selectAll: getAllCurrency,
} = adapter.getSelectors(getCountry);
