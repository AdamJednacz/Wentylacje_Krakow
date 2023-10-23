import React from 'react';
import Header from "./Header";
import AboutUs from "./AboutUs";
import Offer from "./Offer";
import Plus from "./Plus";
import Photos from "./Photos";
import Certificates from "./Certificates";
import Contact from "./Contact";
import Footer from "./Footer";
import Catalogues from "./Catalogues";
const Home = () => {
    return (
        <div>
            <Header/>
            <AboutUs/>
            <Plus/>
            <Offer/>
            <Catalogues/>
            <Photos/>
            <Certificates/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;