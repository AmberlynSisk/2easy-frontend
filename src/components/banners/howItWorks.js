import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function HowItWorks() {
    return (
        <div className="banner-wrapper">
            <div className="banner-top">
                HOW IT WORKS
            </div>
            <div className="banner-grid">
                <div className="col col-1">
                    <div className="logo-wrapper">
                        <FontAwesomeIcon icon="fa-brands fa-dropbox" />
                    </div>
                    <div className="step">
                        Collect your gear &<br /> drop it off to us
                    </div>
                </div>

                <div className="col col-2">
                    <div className="logo-wrapper">
                        <FontAwesomeIcon icon="fa-solid fa-spray-can-sparkles" />
                    </div>
                    <div className="step">
                        We clean your<br /> gear for you!
                    </div>
                </div>

                <div className="col col-3">
                    <div className="logo-wrapper">
                        <FontAwesomeIcon icon="fa-solid fa-thumbs-up" />
                    </div>
                    <div className="step">
                        Pick your gear up<br /> and turn it in!
                    </div>
                </div>
            </div>
        </div>
    )
}