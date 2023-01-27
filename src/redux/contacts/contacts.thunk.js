import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = "https://63d386248d4e68c14eac842f.mockapi.io";

export const fetchContacts = createAsyncThunk('contacts', async () => {
    const { data } = await axios.get('/contacts');
    return data;
})


// export const addContactThunk = createAsyncThunk(
//     "contacts/addContact",
//     async (contact) => {
//         const { data } = await axios.post("/contacts", contact);
//         return data
//     }
// );





// export const addContactThunk = createAsyncThunk(
//     "tasks/addTask",
//     async (text, thunkAPI) => {
//         try {
//             const { data } = await axios.post("/contacts", { text });
//             return data;
//         } catch (e) {
//             return thunkAPI.rejectWithValue(e.message);
//         }
//     }
// );




// import { contactsErrorAction, contactsLoadingAction, contactsSuccessAction } from './contacts.slice'

// export const contactsApi = async (dispatch) => {
//     dispatch(contactsLoadingAction())
//     try {
//         const { data } = await axios.get('https://63d386248d4e68c14eac842f.mockapi.io/contacts')
//         dispatch(contactsSuccessAction(data))
//     } catch {
//         dispatch(contactsErrorAction())
//     }
// }