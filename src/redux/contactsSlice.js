import { createSlice, createSelector } from "@reduxjs/toolkit";
import {
  fetchContactsData,
  addContactData,
  deleteContactData,
} from "./contactsOps";
import { selectFilter } from "./filterSlice";

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactsData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchContactsData.fulfilled, (state, action) => {
        state.error = null;
        state.contacts = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchContactsData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContactData.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
      })
      .addCase(addContactData.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(deleteContactData.fulfilled, (state, action) => {
        const delIndex = state.contacts.findIndex(
          (contact) => contact.id === action.payload.id
        );
        state.contacts.splice(delIndex, 1);
      })
      .addCase(deleteContactData.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const selectItems = (state) => state.contacts;

export const selectFilteredContacts = createSelector(
  [selectItems, selectFilter],
  (items, filter) => {
    return items.contacts.filter((item) => {
      return item.name.toLowerCase().includes(filter.toLowerCase());
    });
  }
);

export const contactsReducer = contactsSlice.reducer;
