import React, { lazy} from 'react';
import styled from 'styled-components';
import imgTlo3 from "../assets/logo_shading_tło_2.png";
import Main from "./Main";
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
const Footer = lazy(() => import("./Footer"));
const Catalogues = lazy(() => import("./Catalogues"));
const CertificatesSite = lazy(() => import("./CertificatesSite"));
const Form = lazy(() => import("./Form"));



const Home = () => {
    return (
        <>

            <div className="bg">
            <Header/>
            <Main/>
            </div>
            <AboutUs/>
            <Plus/>
            <Offer/>
            <Catalogues/>
            <Photos/>
            <CertificatesSite/>
            <Form/>

            <Footer/>

        </>
    );
};

export default Home;
