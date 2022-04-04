import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ContactForm from '../forms/contactForm';

export default function Contact() {
    return (
        <div className="contact-container">
            <div className="title">
                <h1>CONTACT</h1>
                <hr />
            </div>

            <div className="contact-grid">
                <div className="left-column">
                    <ContactForm />
                </div>

                <div className="right-column">
                    <div className="contact-title">
                        We serve the Fort Hood, TX area!<br />
                        Give us a call or shoot us an email to set up an appointment today!
                    </div>
                    <a href="mailto:2easy.militarygear@gmail.com" className="info-wrapper">
                        <div className="info-logo">
                            <FontAwesomeIcon icon="fa-solid fa-envelope" />
                        </div>
                        <div className="info">
                            2easy.militarygear@gmail.com
                        </div>
                    </a>
                    <a href="tel:2543457322" className="info-wrapper">
                        <div className="info-logo">
                            <FontAwesomeIcon icon="fa-solid fa-phone" />
                        </div>
                        <div className="info">
                            254-345-7322
                        </div>
                    </a>
                    <a href="https://www.facebook.com/2-EASY-Military-Gear-Cleaners-109799651679304" target="_blank" className="info-wrapper">
                        <div className="info-logo">
                            <FontAwesomeIcon icon="fa-brands fa-facebook" />
                        </div>
                        <div className="info">
                            Visit Us On Facebook!
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}