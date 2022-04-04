import React, { useState } from 'react';
import { A } from 'hookrouter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import FullLogo from '../images/2E-Full-Logo.png';

export default function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleResponsiveClick = () => {
        setMenuOpen(!menuOpen);
    }

    const handleLinkClick = () => {
        setMenuOpen(false)
    }

    return (
        <nav className="NavbarItems">
            <div className="navbar-logo">
                <img src={FullLogo} />
            </div>
            <div className="menu-icon" onClick={handleResponsiveClick}>
                {menuOpen ? <FontAwesomeIcon className="responsive-icon" icon="fa-solid fa-xmark" /> : <FontAwesomeIcon className="responsive-icon" icon="fa-solid fa-bars" />}
            </div>
            <ul className={menuOpen ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <A className="nav-links" href="/" onClick={handleLinkClick}>Home</A>
                </li>
                <li>
                    <A className="nav-links" href="/about" onClick={handleLinkClick}>About</A>
                </li>
                <li>
                    <A className="nav-links" href="/services" onClick={handleLinkClick}>Services</A>
                </li>
                <li>
                    <A className="nav-links" href="/contact" onClick={handleLinkClick}>Contact</A>
                </li>
            </ul>
        </nav>
    )
}