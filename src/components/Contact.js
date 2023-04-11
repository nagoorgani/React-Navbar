import React from 'react'
import './styles/Contact.css'

const Contact = () => {
  return (
    <div className='contact-container'>
        <label htmlFor="">Name</label>
        <input type="text" placeholder='name' />
        <label htmlFor="">Phone</label>
        <input type="text" placeholder='phone' />
        <label htmlFor="">Email</label>
        <input type="text" placeholder='email' />
        <label htmlFor="">Message</label>
        <input type="text" placeholder='message' />
        <button type='submit'>Submit</button>
      
    </div>
  )
}

export default Contact
