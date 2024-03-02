import './scss/App.scss';
import React, {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Offer from './components/Offer';
import Contact from './components/Contact';
import Plus from './components/Plus';
import Certificates from "./components/Certificates";
import Modal from 'react-modal';
import LoadingPage from "./components/LoadingPage";
function App() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 4000);
    }, []);
    return (
        <BrowserRouter>
                {isLoading ? (
                    <Routes>
                      <Route path="/" element={<LoadingPage />} />
                    </Routes>
                ) : (
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/aboutus" element={<AboutUs />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/plusy" element={<Plus />} />
                        <Route path="/oferta" element={<Offer />} />
                        <Route path="/certyfikaty" element={<Certificates />} />
                    </Routes>
                )}
        </BrowserRouter>
    );
}
export default App;