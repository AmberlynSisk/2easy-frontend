import React from 'react';
import Home from '../pages/home';
import Contact from '../pages/contact';
import Prices from '../pages/prices';
import About from '../pages/about';

const routes = {
    '/': () => <Home />,
    '/contact': () => <Contact />,
    '/prices': () => <Prices />,
    '/about': () => <About />
}

export default routes;