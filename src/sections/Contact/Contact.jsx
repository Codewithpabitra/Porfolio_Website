import React from 'react'
import './Contact.css'
import ContactForm from '../../components/ContactForm'

const Contact = () => {
  return (
    <div className='contact-page' id='contact'>
      <h3 className='text-center text-3xl text-blue-500 '>Contact Me.</h3>
      <ContactForm />
    </div>
  )
}

export default Contact
