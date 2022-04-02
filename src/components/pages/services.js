import React from 'react';

import ETS from '../services/ets';
import PCS from '../services/pcs';
import Partial from '../services/partial';

export default function Services() {
    return (
        <div className="services-container">
            <div className="title">
                <h1>SERVICES</h1>
                <hr />
            </div>

            <div className="service-lists">
                <ETS />
                <PCS />
                <Partial />
            </div>
        </div>
    )
}