import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contactsList, filterValue) => {
    return filterValue
      ? contactsList.filter(contact =>
          contact.name.toLowerCase().includes(filterValue)
        )
      : contactsList;
  }
);
