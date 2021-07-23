import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };


  const[contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);
  /*
  Implement functions to add data to
  contacts and appointments
  */

  const addContact = (name, phoneNumber, email) => {
    const contact = {
      name: name,
      phoneNumber: phoneNumber,
      email: email
    };

    setContacts = ((prev) => {
      return [...prev, contact];
    })
  };

  const addAppointment = (title, contact, date, time) => {
    const appointment = {
      title: title,
      contact: contact,
      date: date,
      time: time
    }

    setAppointments = ((prev) => {
      return [...prev, appointment];
    })
  };

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage contacts={contacts} 
                          addContact={addContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage appointments={appointments}
                              addAppointment={addAppointment} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
