import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const FormSubmit = ({ fetchContacts }) => {

  const [newContact, setNewContact] = useState({ name: '', phone: '', latitude: '', longitude: '' });

  const handleInputChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setNewContact((prevContact) => ({ ...prevContact, [name]: value, }));
  };

  const handleAddContact = async () => {
    if (newContact.name && newContact.phone) {
      try {
        const response = await axios.post('http://localhost:8000/api/add', newContact);
        if (response.status === 200) {
          setNewContact({ name: '', phone: '', latitude: '', longitude: '' });
          await fetchContacts();
        }
      } catch (error) {
        console.error('Error adding contact:', error);
      }
    }
  };
  return (
    <div className='flex center m-top30'>
      <div className='card column width50 gap20 center'>
        <h2>Add Contact</h2>
        <div className='flex gap10'>
          <input className='input' type="text" name="name" value={newContact.name} placeholder="Name" onChange={handleInputChange} />
          <input className='input' type="text" name="phone" value={newContact.phone} placeholder="Phone" onChange={handleInputChange} />
        </div>
        <div className='flex gap10'>
          <input className='input' type="text" name="latitude" value={newContact.latitude} placeholder="Latitude" onChange={handleInputChange} />
          <input className='input' type="text" name="longitude" value={newContact.longitude} placeholder="Longitude" onChange={handleInputChange} />
        </div>
        <div>
          <button className='btn pointer' onClick={handleAddContact}>Add Contact</button>
        </div>
      </div>
    </div>
  )
}

export default FormSubmit