import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";

export function App() {

  return (

    <div
      style={{
        margin: "100px auto",
        background: 'white',
        padding: '15px',
        width: "600px",
        fontSize: '20px',
        border: '1px solid grey'
      }}
    >
      <h3>Phonebook</h3>
      <ContactForm />
      <hr />
      <h3>Find contacts by name</h3>
      <Filter />
      <h3>My contacts</h3>
      <ContactList />
    </div>

  );
}
