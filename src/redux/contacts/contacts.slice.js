import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "constants/constants";
import { ContactsInitState } from "./contacts.initstate";
import { fetchContacts } from './contacts.thunk'


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: ContactsInitState,
    reducers: {
        addContact: (state, action) => {
            state.contactsRed.push(action.payload);
        },
        removeContact: (state, action) => {
            state.contactsRed = state.contactsRed.filter(item => item.id !== action.payload)
        },
        // contactsLoadingAction: (state) => {
        //     state.status = STAUS.loading
        // },
        // contactsErrorAction: (state) => {
        //     state.status = STAUS.error;
        // },
        // contactsSuccessAction: (state, action) => {
        //     state.status = STAUS.success;
        //     state.item = action.payload;

        // },

    },
    extraReducers: {
        [fetchContacts.pending]: (state) => {
            state.status = STATUS.loading
        },
        [fetchContacts.fulfilled]: (state, action) => {
            state.status = STATUS.success;
            state.item = action.payload;
        },
        [fetchContacts.rejected]: (state) => {
            state.status = STATUS.error;
        },
        ////////////////
        // [addContactThunk.pending]: (state) => {
        //     state.status = STAUS.loading
        // },
        // [addContactThunk.fulfilled]: (state, action) => {
        //     state.status = STAUS.success;
        //     state.item.push(action.payload);
        // },
        // [addContactThunk.rejected]: (state) => {
        //     state.status = STAUS.error;
        // },
        ////////////////
    }
})

export const { addContact, removeContact } = contactsSlice.actions;
// export const { addContact, removeContact, contactsErrorAction, contactsLoadingAction, contactsSuccessAction } = contactsSlice.actions;
export default contactsSlice.reducer;


// const initialState = {
//     contactsRed: [],
// }

// const contactsSlice = createSlice({
//     name: 'contacts',
//     initialState,
//     reducers: {
//         addContact: (state, action) => {
//             state.contactsRed.push(action.payload);
//         },

//         removeContact: (state, action) => {
//             state.contactsRed = state.contactsRed.filter(item => item.id !== action.payload)
//         },

//     },
// })