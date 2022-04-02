import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

import SuccessfulEmail from '../modals/successfulEmail';
import ErrorEmail from '../modals/errorEmail';

export default function ContactForm() {
    const [successMessage, setSuccessMessage] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)
    const form = useRef()
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_oei7it9', '2easy_template', form.current, 'nIzI8KHMKY5nzi59E')
          .then((result) => {
                setSuccessMessage(true);
          }, (error) => {
                setErrorMessage(true);
          });
          e.target.reset()
      };

    const handleModalClose = () => {
        setSuccessMessage(false);
        setErrorMessage(false);
    }

    return (
        <div className="contact-wrapper">
            <form ref={form} onSubmit={sendEmail}>
                <h1 className="title">Let's Connect!</h1>
                <input type="text" name="name" placeholder="Name" />
                <input type="email" name="email" placeholder="Email" />
                <input type="text" name="number" placeholder="Phone Number" />
                <textarea name="message" placeholder="Message" />
                <button className="btn" type="submit">Submit</button>
            </form>
            <div className="email-message">
                <SuccessfulEmail successMessage={successMessage} handleModalClose={handleModalClose}/>
                <ErrorEmail errorMessage={errorMessage} handleModalClose={handleModalClose}/>
            </div>
        </div>
    )
}