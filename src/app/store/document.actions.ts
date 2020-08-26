import { createAction, props } from '@ngrx/store';

export const selectDocuments = createAction(
  '[Documents] Select Document',


);

export const loadDocumentSuccess = createAction(
  '[documets - Resources] Load Resources Success',
  props<{ documents: any }>()
);

export const loadDocumentFailuar = createAction(
  '[documets - Resources] Load Resources Success',
  props<{ error: any }>()
);
