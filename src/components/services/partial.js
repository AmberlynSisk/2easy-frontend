import React from "react";

import Bullets from "../images/bullets.jpg";

export default function Partial() {
    return (
        <div className="service-wrapper">
            <div className="service-title">
                Partial Turn-in (Provide CIF Paperwork)
            </div>
            <div className="service-subtitle">
                (Great option for inspections or maintaining gear)
            </div>

            <div className="image-wrapper">
                <img src={Bullets} />
            </div>

            <div className="price-wrapper">
                <div className="timeframe"> 
                    Allow 1-2 days for turnaround
                </div>
                <div className="price">
                    $40 - $160
                </div>
            </div>

            <ul className="service-list">
                <li>This option is for anything else that doesn't match our ETS/PCS options</li>
            </ul>
        </div>
    )
}