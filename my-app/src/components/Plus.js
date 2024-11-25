import React from 'react';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import star from "../assets/star.gif";
import calendar from "../assets/calendar.gif";
import shield from "../assets/shield.gif";

const Plus = () => {
    return (
        <section className="home_icons">
            <div className="container">
                <div className="box">
                    <h1>Jakość Pracy</h1>
                    <LazyLoadImage className="icon" src={star} alt="star" effect='blur'/>
                    <p>Najlepsze techniki i produkty</p>
                </div>
                <div className="box">
                    <h1>Doświadczenie</h1>
                    <LazyLoadImage className="icon" src={calendar} alt="caledna" effect='blur'/>
                    <p>Ponad <span>+100</span> wykonanych realizacji</p>
                </div>
                <div className="box">
                    <h1>Zaufanie</h1>
                    <LazyLoadImage className="icon" src={shield} alt="shield" effect='blur'/>
                    <p>Wiele rekomendacji</p>
                </div>
            </div>
        </section>);
};

export default Plus;
