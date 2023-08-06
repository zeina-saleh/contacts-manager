import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./components/styles/App.css"
import ContactsContainer from './components/ContactsContainer';
import FormSubmit from './components/FormSubmit';
import Modal from './components/Modal';
import Hero from './components/Hero';

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/');
      setContacts(response.data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  return (
    <div className="App">
      <Hero/>
      <div className='modal'>
        <Modal/>
      </div>
      <FormSubmit fetchContacts={fetchContacts} />
      <ContactsContainer contacts={contacts} fetchContacts={fetchContacts} />
    </div>
  );
}
export default App;
