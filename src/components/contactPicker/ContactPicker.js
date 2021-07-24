import React from "react";

const ContactPicker = (props) => {
  
  const contacts = props.contacts;
  const onChange = props.onChange;
  
  return (
    <select onChange={onChange}>
      <option value='No option selected'
              selected='selected'
              key='0'>
                No option selected
      </option>
      {contacts.map((contact, index) => (
        <option value={contact.name} key={index+1}>{contact.name}</option>
      ))}
    </select>
  );
};

export default ContactPicker;
