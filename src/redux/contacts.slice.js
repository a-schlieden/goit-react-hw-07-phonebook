import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contactsRed: [],
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: (state, action) => {
            state.contactsRed.push(action.payload);
        },

        removeContact: (state, action) => {
            state.contactsRed = state.contactsRed.filter(item => item.id !== action.payload)
        },

    },
})

export const { addContact, removeContact } = contactsSlice.actions;
export default contactsSlice.reducer;