import React from 'react';
import { useRoutes } from 'hookrouter';

import Navigation from './navigation/navigation';
import routes from './navigation/routes';
import Footer from './footer';

export default function App() {
  const routeResult = useRoutes(routes);

  return (
    <div className="app">
      <Navigation />
      {routeResult}
      <Footer />
    </div>
  )
}