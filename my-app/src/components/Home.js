import React from 'react';
import Header from "./Header";
import AboutUs from "./AboutUs";
import Offer from "./Offer";
import Plus from "./Plus";
import Photos from "./Photos";

import Contact from "./Contact";
import Footer from "./Footer";
import Catalogues from "./Catalogues";
import CertificatesSite from "./CertificatesSite";
import Form from "./Form";
import imgTlo from "../assets/43258.jpg"
import imgTlo1 from "../assets/tło1.jpg"
import imgTlo2 from "../assets/tło2.jpg"
import imgTlo3 from "../assets/frozekologo-shading.svg"

const Home = () => {
    const stylTla = {
        backgroundImage: `url(${imgTlo3})`,
        backgroundSize: '90% 90%',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: "fixed",
        backgroundPositionX:"85em",
        backgroundPositionY:"10em"


    };
        return (


        <section style={stylTla} className="home"  >
            <Header/>
            <AboutUs/>
            <Plus/>
            <Offer/>
            <Catalogues/>
            <Photos/>
            <CertificatesSite/>
            <Form/>
            <Contact/>
            <Footer/>
        </section>
    );
};

export default Home;