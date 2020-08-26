import { createFeatureSelector, createSelector } from '@ngrx/store';
import { documentFeatureKey } from './document.reducers';
import { Details } from './document.models';


export const documentDetails = createFeatureSelector<Details>(
  documentFeatureKey
);
export const getSelectedResources = createSelector(
  documentDetails,
  (data: Details) => data
);
