import React from 'react';

export default function Home() {

    return (
        <div className="home-container">
            <div className="background-img"></div>

            <div className="home-text-box">
                <p className="title">Hate cleaning your gear for CIF?</p>
                <p className="subtitle">We clean your TA-50, <br />so you don't have to!</p>
                <a href="/contact">
                    <button className="btn" type="button">
                        Contact Us Today!
                    </button>
                </a>
            </div>
        </div>
    )
}