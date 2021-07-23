import React from "react";


const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label for='name'>Name</label>
      <input type='text' 
             id='name' 
             onChange={(e) => setName(e.target.value)}
             value={name} />
      <label for='phone'>Phone number</label>
      <input type='text' 
             id='phone' 
             pattern='^[2-9]\d{2}-\d{3}-\d{4}$' 
             onChange={(e) => setPhone(e.target.value)}
             value={phone} />
      <label for='email'>Email</label>
      <input type='text' 
             id='email' 
             onChange={(e) => setEmail(e.target.value)}
             value={email} />
      <button type='submit' value='submit'>Submit</button>
    </form>
  );
};

export default ContactForm;
