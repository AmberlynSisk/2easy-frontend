import React from 'react';

import Logo from './images/logo.png';

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="three-col">
                <div className="name">
                    2 EASY - MILITARY GEAR CLEANERS
                </div>

                <div className="logo-wrapper">
                    <img src={Logo} />
                </div>

                <div className="location">
                    KILLEEN, TEXAS 76549
                </div>
            </div>
        </div>
    )
}