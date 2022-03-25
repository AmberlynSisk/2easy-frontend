import React from 'react';
import { A } from 'hookrouter';

import Logo from '../images/2easy.png';

export default function Navigation() {
    return (
        <div className="navigation-container">
            <div className="logo-wrapper">
                <img src={Logo} />
            </div>
            <div className="nav-link-wrapper">
                <div className='nav-link'>
                    <A className="link" href='/'>
                        Home
                    </A>
                </div>
                <div className='nav-link'>
                    <A className="link" href='/about'>
                        About Us
                    </A>
                </div>
                <div className='nav-link'>
                    <A className="link" href='/services'>
                        Services
                    </A>
                </div>
                <div className='nav-link'>
                    <A className="link" href='/contact'>
                        Contact
                    </A>
                </div>
            </div>
        </div>
    )
}