
import './scss/App.scss';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Offer from './components/Offer';
import Contact from './components/Contact';
import Plus from './components/Plus';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/plusy" element={<Plus />} />
                <Route path="/oferta" element={<Offer />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
