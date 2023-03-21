import { createSlice } from '@reduxjs/toolkit';
// import { useSelector } from 'react-redux';

// const contactsState = useSelector(state => state.contacts);

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { value: [] },
  reducers: {
    addContact: (state, action) => {
      state.value.push(action.payload);
    },
    deleteContact: (state, action) => {
      console.log(state);
      state.value = state.value.filter(item => item.id !== action.payload);
    },
    // increment: state => {
    //   state.value += 1;
    // },
    // decrement: state => {
    //   state.value -=
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
