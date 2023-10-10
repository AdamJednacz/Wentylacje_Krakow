import React from 'react';
import Header from "./Header";
import AboutUs from "./AboutUs";
import Offer from "./Offer";
import Plus from "./Plus";
import Price from "./Price";
import Certificates from "./Certificates";

const Home = () => {
    return (
        <div>
            <Header/>
            <AboutUs/>
            <Plus/>
            <Offer/>
            <Price/>
            <Certificates/>
        </div>
    );
};

export default Home;