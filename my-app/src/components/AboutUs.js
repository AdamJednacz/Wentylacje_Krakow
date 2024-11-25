import React from 'react';
import img1 from "../assets/about_us.webp";
import {Link} from "react-scroll";

import 'react-lazy-load-image-component/src/effects/blur.css';
import logo from "../assets/frozekologo-shading.svg";


const AboutUs = () => {
    return (
        <section id="aboutus" className="about_us" >
            <div className="container">
                <div className="about_us_text">
                    <h1>Dlaczego My ?</h1>
                    <p>Oto nasza nowa firma, która powstała z pasji do klimatyzacji i zaangażowania w dostarczanie
                        najlepszych rozwiązań. Jesteśmy ekspertami w dziedzinie montażu, sprzedaży i serwisu
                        urządzeń klimatyzacyjnych. Naszym celem jest zapewnienie Ci idealnego klimatu w Twoim
                        otoczeniu, bez względu na porę roku.</p>
                </div>

            </div>
        </section>
    );
};

export default AboutUs;
