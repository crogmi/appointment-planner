import React, { useState, useEffect } from "react";
import ContactForm from '../../components/contactForm/ContactForm';
import TileList from '../../components/tileList/TileList';

export const ContactsPage = (props) => {

  const contacts = props.contacts;
  const addContact = props.addContact;
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */

    if(!duplicate) {
      addContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    }
  };

  useEffect(() => {
    const names = contacts.map((contact) => contact.name);
    if (names.includes(name)) {
      setDuplicate(true);
    }
  }, [contacts, name])

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm name={name} 
                     phone={phone}
                     email={email}
                     onSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts} />
      </section>
    </div>
  );
};
