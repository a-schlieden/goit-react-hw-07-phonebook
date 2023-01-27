import React from "react"
import { useEffect } from 'react';
import style from './ContactList.module.css';
import { ContactListItem } from "components/ContactListItem/ContactListItem";
import { useSelector, useDispatch } from "react-redux";
import { removeContact } from "../../redux/contacts/contacts.slice"
import { SelectedContacts } from "../../redux/selectors"
import { fetchContacts } from "redux/contacts/contacts.thunk";

export const ContactList = () => {


    const dispatch = useDispatch()

    const allContacts = useSelector(state => state.contacts.item)
    const status = useSelector(state => state.contacts.status)
    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])

    const FilteredContacts = useSelector(SelectedContacts)


    const onDeleteContact = (id) => {
        dispatch(removeContact(id))
    }
    console.log(status)
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

            <br />
            <hr />
            <br />
            {allContacts.length === 0 ?
                (<p> No saved contacts fromback </p>) :
                (<ul className={style.contactList}>
                    <h3>Contacts from backend</h3>
                    {allContacts.map(item => (
                        <li key={item.id} className={style.contactListItem}>
                            <ContactListItem name={item.name} number={item.number} deleteContact={() => onDeleteContact(item.id)} />
                        </li>
                    ))}
                </ul>)

            }
        </>
    );
};




