import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filterContacts',
  initialState: { value: '' },
  reducers: {
    showContacts: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { showContacts } = filterSlice.actions;

// Selectors
export const getFilterContactsValue = state => state.filterContacts.value;
