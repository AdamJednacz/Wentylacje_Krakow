import React from 'react';
import img1 from "./assets/about_us.webp";
import {Link} from "react-scroll";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import logo from "./assets/frozekologo-shading.svg";

const AboutUs = () => {
    return (
        <section id="aboutus" className="about_us" >
            <div className="container">
                <LazyLoadImage
                    className="about_us_img"
                    effect="blur"
                    src={img1}
                    alt={img1}


                />
                <div className="about_us_text_item">
                    <h1>O nas</h1>
                    <p>Oto nasza nowa firma, która powstała z pasji do klimatyzacji i zaangażowania w dostarczanie
                        najlepszych rozwiązań. Jesteśmy ekspertami w dziedzinie montażu, sprzedaży i serwisu
                        urządzeń klimatyzacyjnych. Naszym celem jest zapewnienie Ci idealnego klimatu w Twoim
                        otoczeniu, bez względu na porę roku.</p>
                    <Link to="form" smooth={true} duration={500}>
                        <button>Skontatkuj się z nami !</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
