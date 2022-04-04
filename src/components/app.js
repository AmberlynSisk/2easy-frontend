import React from 'react';
import { useRoutes } from 'hookrouter';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFlagUsa, faSprayCanSparkles, faThumbsUp, faPhone, faEnvelope, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faDropbox } from "@fortawesome/free-brands-svg-icons";

import Navigation from './navigation/navigation';
import routes from './navigation/routes';
import Footer from './footer';

library.add(faFlagUsa, 
            faFacebook, 
            faSprayCanSparkles, 
            faDropbox, 
            faThumbsUp, 
            faPhone,
            faEnvelope,
            faBars,
            faXmark);

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