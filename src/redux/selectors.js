import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;

export const getFilterValue = state => state.contacts.filter;

export const getVisibleContact = createSelector(
  getContacts,
  getFilterValue,
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);
