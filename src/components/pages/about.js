import React from 'react';

import ACH from '../images/ach.jpg';
import Flag from '../images/flag.jpg';
import HowItWorks from '../banners/howItWorks';

export default function About() {
    return (
        <div className="about-container">
            <div className="title">
                <h1>ABOUT US</h1>
                <hr />
            </div>

            <div className="grid-wrapper">
                <div className="about-img">
                    <img src={ACH} />
                </div>

                <div className="about">
                    <p>We are a veteran owned business, serving the Fort Hood area. Having previously served in the Army, 
                        we know what a pain it is to keep your gear clean and what an even bigger 
                        hassle it is to PCS or ETS. We created this business to help our customers 
                        save their time (and sanity) by cleaning your gear while you take care of 
                        the rest of the clearing process.</p>
                </div>

                <div className="about">
                    <p>Not only do we understand the extreme detail it takes to get the job done, 
                        we also know the CIF standards. Our goal is to get you a first time go at CIF. 
                        We know that your time is valuable, so let us take care of your gear so you can 
                        spend more time doing the things you love. 
                    </p>
                </div>

                <div className="about-img">
                    <img src={Flag} />
                </div>
            </div>

            <HowItWorks />

            <div className="hours-wrapper">
                <div className="hours-title">
                    HOURS OF OPERATION
                </div>
                <div className="hours">
                    Monday 10:00AM - 6:00PM <br /><br />
                    Tuesday 10:00AM - 6:00PM <br /><br />
                    Wednesday 10:00AM - 6:00PM <br /><br />
                    Thursday 10:00AM - 6:00PM <br /><br />
                    Friday 10:00AM - 6:00PM <br /><br />
                    Saturday CLOSED <br /><br />
                    Sunday CLOSED
                </div>
            </div>
        </div>
    )
}