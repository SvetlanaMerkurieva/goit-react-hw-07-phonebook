import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  //addContactRequest,
  addContactSuccess,
  //addContactError,
  deleteContactSuccess,
  filterContacts,
} from './actions';

const items = createReducer([], {
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [filterContacts]: (_state, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
