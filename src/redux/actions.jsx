import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('ADD_CONTACT', ({ name, number }) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

export const deleteContact = createAction('DELETE_CONTACT');

export const filterContacts = createAction('CHANGE_FILTER');
