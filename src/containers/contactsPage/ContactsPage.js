import React, { useState } from "react";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */

    if(checkName(e.target.value)) {
      
    }

  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  const checkName = (name) => {
    let duplicate = false;
    const names = props.contacts.map((contact) => contact.name);
    if (names.includes(name)) {
      duplicate = true;
    }
    return duplicate;
  }

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};
