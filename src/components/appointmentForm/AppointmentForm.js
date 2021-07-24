import React from "react";
import ContactPicker from '../contactPicker/ContactPicker';

const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label for='title'>Title</label>
      <input type='text' 
             id='title'
             onChange={(e) => setTitle(e.target.value)}
             value={title} />
      <label for='date'>Date</label>
      <input type='text' 
             id='date'
             onChange={(e) => setDate(e.target.value)}
             value={date}
             min={getTodayString()} />
      <label for='time'>Time</label>
      <input type='text' 
             id='time'
             onChange={(e) => setTime(e.target.value)}
             value={time} />
      <ContactPicker contacts={contacts}
                     onChange={(e) => setContact(e.target.value)}
                     value={contact} />
      <button type='submit' value='submit'>Submit</button>
    </form>
  );
};

export default AppointmentForm
