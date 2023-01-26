import React from "react"
import style from './ContactList.module.css';
import { ContactListItem } from "components/ContactListItem/ContactListItem";
import { useSelector, useDispatch } from "react-redux";
import { removeContact } from "../../redux/contacts.slice"
import { SelectedContacts } from "../../redux/selectors"

export const ContactList = () => {

    const FilteredContacts = useSelector(SelectedContacts)

    const dispatch = useDispatch()

    const onDeleteContact = (id) => {
        dispatch(removeContact(id))
    }

    return (
        <>
            {FilteredContacts.length === 0 ?
                (<p> No saved contacts </p>) :
                (<ul className={style.contactList}>
                    {FilteredContacts.map(item => (
                        <li key={item.id} className={style.contactListItem}>
                            <ContactListItem name={item.name} number={item.number} deleteContact={() => onDeleteContact(item.id)} />
                        </li>
                    ))}
                </ul>)

            }
        </>
    );
};




