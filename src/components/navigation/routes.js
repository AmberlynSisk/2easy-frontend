import React from 'react';
import Home from '../pages/home';
import Contact from '../pages/contact';
import About from '../pages/about';
import Services from '../pages/services';

const routes = {
    '/': () => <Home />,
    '/contact': () => <Contact />,
    '/about': () => <About />,
    '/services': () => <Services />
}

export default routes;