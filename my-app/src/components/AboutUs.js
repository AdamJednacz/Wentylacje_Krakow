import React from 'react';
import img1 from "../assets/AdobeStock_206545192-1024x711.jpeg"
import {Link} from "react-scroll";
const AboutUs = () => {
    return (
        <section id="aboutus" className="about_us">
            <div className="container">
                <div className="about_us_items">
                <img src={img1} alt={img1}/>
                 <div className="about_us_text_item">
                <h1>O nas</h1>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                     <p>Jeżeli masz już jakieś pytania to:</p>

                     <Link to="contact" smooth={true} duration={500}><button>Zadzwoń</button></Link>
                 </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;