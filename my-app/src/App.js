import './scss/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

// Lazy load components
const Home = lazy(() => import('./components/Home'));
const AboutUs = lazy(() => import('./components/AboutUs'));
const Offer = lazy(() => import('./components/Offer'));
const Contact = lazy(() => import('./components/Contact'));
const Plus = lazy(() => import('./components/Plus'));
const Certificates = lazy(() => import('./components/Certificates'));

function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/plusy" element={<Plus />} />
                    <Route path="/oferta" element={<Offer />} />
                    <Route path="/certyfikaty" element={<Certificates />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
