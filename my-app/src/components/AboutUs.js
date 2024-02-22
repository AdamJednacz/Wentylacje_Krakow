import React from 'react';
import img1 from "../assets/AdobeStock_206545192-1024x711.jpeg"
import {Link} from "react-scroll";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import logo from "../assets/frozekologo-shading.svg"
const AboutUs = () => {
    return (
        <section id="aboutus" className="about_us"  >
            <div className="container">
                <div className="about_us_items">
                    <LazyLoadImage
                        className="about_us_img"
                        alt={img1.alt}
                        src={img1}
                        height={img1.height}
                        widht={img1.width}
                    />
                    <div className="about_us_text_item">
                        <img className="about_us_logo" alt={logo} src={logo}/>
                        <h1>O nas</h1>
                        <p>Oto nasza nowa firma, która powstała z pasji do klimatyzacji i zaangażowania w dostarczanie najlepszych rozwiązań. Jesteśmy ekspertami w dziedzinie montażu, sprzedaży i serwisu urządzeń klimatyzacyjnych. Naszym celem jest zapewnienie Ci idealnego klimatu w Twoim otoczeniu, bez względu na porę roku.</p>
                        <p>Jeżeli masz już jakieś pytania to:</p>
                        <Link to="contact" smooth={true} duration={500}><button>Zadzwoń</button></Link>
                    </div>
                </div>
            </div>
        </section>

    );
};
export default AboutUs;