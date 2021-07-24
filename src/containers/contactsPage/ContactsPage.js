import React, { useState, useEffect } from "react";
import ContactForm from '../../components/contactForm/ContactForm';
import TileList from '../../components/tileList/TileList';

export const ContactsPage = (props) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);

  useEffect(() => {
    const names = props.contacts.map((contact) => contact.name);
    if (names.includes(name)) {
      setDuplicate(true);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if(duplicate) {
      return;
    }

    props.addContact(name, phone, email);
    setName('');
    setPhone('');
    setEmail('');
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm name={name}
                     setName={setName}
                     phone={phone}
                     setPhone={setPhone}
                     email={email}
                     setEmail={setEmail}
                     handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList array={props.contacts} />
      </section>
    </div>
  );
};
