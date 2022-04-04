import React from "react";

import Tags from "../images/tags.jpg";

export default function PCS() {
    return (
        <div className="service-wrapper pcs">
            <div className="service-title">
                PCS (Provide Clothing Record)
            </div>
            <div className="service-subtitle">
                Transition to your new duty station with ease!
            </div>

            <div className="image-wrapper">
                <img src={Tags} style={{
                    height: "462px",
                    width: "359px",
                }} />
            </div>

            <div className="price-wrapper">
                <div className="timeframe"> 
                    Allow 2 days<br /> for turnaround
                </div>
                <div className="price">
                    $120 - $160
                </div>
            </div>

            <ul className="service-list">
                <li>Complete cleaning of PCS items</li>
                <li>Complete inventory of equipment</li>
                <li>Removal of trash/dust</li>
                <li>Removal of name tapes</li>
                <li>Removal of tape</li>
                <li>Disassembly of gear (Rucksack, Medium Rucksack, OTVs)</li>
                <li>Price varies depending on PCS orders</li>
            </ul>
        </div>
    )
}