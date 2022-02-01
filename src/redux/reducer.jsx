import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as actions from './actions';

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [actions.filterContacts]: (_state, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
