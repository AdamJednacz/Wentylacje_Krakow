
import './scss/App.scss';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Offer from './components/Offer';
import Contact from './components/Contact';
import Plus from './components/Plus';
import Certificates from "./components/Certificates";
import Modal from 'react-modal';

function App() {



    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/plusy" element={<Plus />} />
                <Route path="/oferta" element={<Offer />} />
                <Route path="/certyfikaty" element={<Certificates />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
