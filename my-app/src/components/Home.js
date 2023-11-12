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
import background from "../assets/pexels-robert-șerban-11279737.jpg";
const Home = () => {

        return (


        <section className="home" >
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