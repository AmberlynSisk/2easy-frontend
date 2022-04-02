import React from "react";

import Soldiers from "../images/soldiers.jpg";

export default function ETS() {
    return (
        <div className="service-wrapper">
            <div className="service-title">
                ETS (Provide Clothing Record)
            </div>
            <div className="service-subtitle">
                (Best option for ETS or Retiring)
            </div>

            <div className="image-wrapper">
                <img src={Soldiers} />
            </div>

            <div className="price-wrapper">
                <div className="timeframe"> 
                    Allow 3 days for turnaround
                </div>
                <div className="price">
                    $200
                </div>
            </div>

            <ul className="service-list">
                <li>We separate everything for you and give you back items that CIF won't need</li>
                <li>Complete inventory of equipment and provide a list of possible missing items</li>
                <li>Removal of trash/dust</li>
                <li>Removal of name tapes</li>
                <li>Removal of tape</li>
                <li>Disassembly of gear (Rucksack, Medium Rucksack, OTVs)</li>
                <li>We take care of all spray painting</li>
            </ul>
        </div>
    )
}