import React from 'react';
import Header from "./Header";
import AboutUs from "./AboutUs";
import Offer from "./Offer";
import Plus from "./Plus";

const Home = () => {
    return (
        <div>
            <Header/>
            <AboutUs/>
            <Plus/>
            <Offer/>
        </div>
    );
};

export default Home;