import { STAUS } from "constants/constants";

export const ContactsInitState = {
    contacts: {
        status: STAUS.idle,
        items: [],
        isLoading: false,
        error: null
    },
    filter: ""
}