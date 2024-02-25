import React from 'react';
import styled from 'styled-components';
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
import imgTlo3 from "../assets/logo_shading_tło_2.png";

const HomeSection = styled.section`
    background-image: url(${imgTlo3});
    background-size: 100%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center center; // Ustawienie tła na środku w poziomie i pionie
    @media (min-width: 1381px) {
        background-position: 135em 10em; // Ustawienie dla większych ekranów
        background-size: 30%;
    }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1381px) and (orientation: landscape){
    background-size: 40%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: 50% 80%;
  }
  
`;

const Home = () => {
    return (
        <HomeSection className="home">
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
        </HomeSection>
    );
};

export default Home;
