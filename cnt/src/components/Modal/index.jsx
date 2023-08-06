import React from 'react'
import './style.css'

const Modal = () => {
  return (
      <div className='container'>
        <div className='form' style={{ backgroundColor: 'lightblue' }}>
          <div className='editContact'>
            <div>Edit Contact</div>
            <div><a href="">Close</a></div>
          </div>
          <div>
            <input type="text" name="name" value="" placeholder="Name" />
            <input type="text" name="phone" value="" placeholder="Phone" />
          </div>
          <div>
            <input type="text" name="latitude" value="" placeholder="Latitude" />
            <input type="text" name="longitude" value="" placeholder="Longitude" />
          </div>
          <button>Edit Contact</button>
        </div>
      </div>
      )
}

      export default Modal