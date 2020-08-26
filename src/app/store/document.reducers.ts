
import { Details } from './document.models';
import { Action, createReducer, on } from '@ngrx/store';
import * as fromActions from './document.actions';
import * as _ from 'lodash';

export const documentFeatureKey = 'document';
export const initialState: Details ={
  userId: undefined,
  id: undefined,
  title: undefined,
  body: undefined
}
export const reducer = createReducer(
  initialState,
  on(
    fromActions.loadDocumentSuccess,
    (state, { documents }) => ({
      ...state,
      Documents: documents
    })
  ),
);
