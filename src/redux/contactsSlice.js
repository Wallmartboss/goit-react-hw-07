import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from './contactsOps';
import { selectNameFilter } from "./filtersSlice";

const initialState = {
    items: [],
    loading: false,
    error: null
	}
// console.log(initialState.contacts.items);

const handlePending = (state) => { state.loading = true };

const handleRejected = (state, action) => {
    state.loading = false;
    state.error = action.payload;
 };

const contactSlice = createSlice({
    name: "contacts",
    initialState,
    extraReducers: (builder) => {
     builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const index = state.items.findIndex(item => item.id === action.payload.id);
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, handleRejected)
    }
});
export const contactsReducer = contactSlice.reducer;
export const selectContacts = (state) =>  state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector([selectContacts, selectNameFilter], (contacts, filter) => {
            return contacts.filter(item => 
              item.name.toLowerCase().includes(filter.toLowerCase())
          );
});

