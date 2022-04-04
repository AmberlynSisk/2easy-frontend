import React from 'react';

import Logo from './images/2E-Logo.png';

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="three-col">
                <div className="name">
                    2 EASY - MGC
                </div>

                <div className="logo-wrapper">
                    <img src={Logo} />
                </div>

                <div className="location">
                    KILLEEN, TX 76549
                </div>
            </div>
        </div>
    )
}