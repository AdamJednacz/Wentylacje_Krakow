import React, { lazy} from 'react';
import styled from 'styled-components';
import imgTlo3 from "./assets/logo_shading_tło_2.png";
// import Header from "./Header";
// import AboutUs from "./AboutUs";
// import Offer from "./Offer";
// import Plus from "./Plus";
// import Catalogues from "./Catalogues";
// import Photos from "./Photos";
// import CertificatesSite from "./CertificatesSite";
// import Form from "./Form";
// import Contact from "./Contact";
// import Footer from "./Footer";

// Lazy load components
const Header = lazy(() => import("./Header"));
const AboutUs = lazy(() => import("./AboutUs"));
const Offer = lazy(() => import("./Offer"));
const Plus = lazy(() => import("./Plus"));
const Photos = lazy(() => import("./Photos"));
const Contact = lazy(() => import("./Contact"));
const Footer = lazy(() => import("./Footer"));
const Catalogues = lazy(() => import("./Catalogues"));
const CertificatesSite = lazy(() => import("./CertificatesSite"));
const Form = lazy(() => import("./Form"));

const HomeSection = styled.section`
    background-image: url(${imgTlo3});
    background-repeat: no-repeat;
    background-attachment: fixed;
    @media (min-width: 1381px) {
        background-position: 120% 70%;
        background-size: 29%;
    }
    @media (min-width: 768px) and (max-width: 1381px) and (orientation: landscape) {
        background-position: center center;
        background-size: 50%;
    }
    @media (min-width: 768px) and (max-width: 1381px) {
        background-position: center center;
        background-size: 70%;
    }
    @media (max-width: 767px) {
        background-position: center center;
        background-size: 100%;
    }
`;

const Home = () => {
    return (
        <HomeSection className="home" id="top">
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
