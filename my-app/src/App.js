import './scss/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Loading from "./components/Loading";

// Lazy load components
const Home = lazy(() => import('./components/Home'));
const AboutUs = lazy(() => import('./components/AboutUs'));
const Offer = lazy(() => import('./components/Offer'));
const Form = lazy(() => import('./components/Form'));
const Plus = lazy(() => import('./components/Plus'));
const Certificates = lazy(() => import('./components/Certificates'));

function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loading/>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="/contact" element={<Form />} />
                    <Route path="/plusy" element={<Plus />} />
                    <Route path="/oferta" element={<Offer />} />
                    <Route path="/certyfikaty" element={<Certificates />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
