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
  background-repeat: no-repeat;
  background-attachment: fixed; // Ustawienie tła na środku w poziomie i pionie
  @media (min-width: 1381px) {
    background-position: 120% 70%; // Ustawienie dla większych ekranów, tło po prawej stronie
    background-size: 29%
  }
  @media (min-width: 768px) and (max-width: 1381px) and (orientation: landscape) {
    background-position: center center; // Tablet - tło na środku
    background-size: 50%;
  }
  @media (min-width: 768px) and (max-width: 1381px) {
    background-position: center center; // Tablet - tło na środku
    background-size: 70%;
  }
  @media (max-width: 767px) {
    background-position: center center; // Telefon - tło na środku
    background-size: 100%;
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