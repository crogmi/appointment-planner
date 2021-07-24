import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  const[contacts, setContacts] = useState([{name: 'Chris', phone: '909-999-3330', email: 'chris@gmail.com'}, {name: 'Pat', phone: '909-937-9238', email: 'pat@gmail.com'}]);
  const [appointments, setAppointments] = useState([{title: 'Chris', contact: '909-999-3330', date: 'September 30, 2021', time: '7:00 PM'}, {title: 'Pat', contact: '909-937-9238', date: 'October 30, 2021', time: '8:00 PM'}]);

  const addContact = (name, phone, email) => {
    let contact = {
      name: name,
      phone: phone,
      email: email
    };

    setContacts((prev) => {
      return [...prev, contact];
    })
  };

  const addAppointment = (title, contact, date, time) => {
    let appointment = {
      title: title,
      contact: contact,
      date: date,
      time: time
    }

    setAppointments((prev) => {
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
            <ContactsPage contacts={contacts} 
                          addContact={addContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage appointments={appointments}
                              contacts={contacts}
                              addAppointment={addAppointment} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
