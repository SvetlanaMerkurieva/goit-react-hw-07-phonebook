import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('ADD_CONTACT', payload => ({
  payload: {
    id: shortid.generate(),
    ...payload,
  },
}));

export const deleteContact = createAction('DELETE_CONTACT');

export const filterContacts = createAction('CHANGE_FILTER');
