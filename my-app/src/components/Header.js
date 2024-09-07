import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from 'react-responsive';
import logo from "./assets/frozekologo-shading.svg";

const Header = () => {
    const isMobile = useMediaQuery({ maxWidth: 1381 });
    const [isMenuVisible, setMenuVisible] = useState(false);
    const [isSticky, setSticky] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!isMenuVisible);
    };

    // Funkcja do monitorowania pozycji scrolla
    const handleScroll = () => {
        if (window.scrollY > 0) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };

    // Dodanie nasłuchiwania scrolla
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className={`header ${isSticky ? 'sticky' : ''}`}>
            <div className="container">
                <div className="h1_hamburg">
                    <div className="h1_logo">
                        <img alt={logo} src={logo} />
                        <h1 lang="pl">Frozeko</h1>
                        {isMobile && (
                            <div className="hamburger-menu" onClick={toggleMenu}>
                                {isMenuVisible ? (
                                    <FontAwesomeIcon className="icon" icon={faTimes} />
                                ) : (
                                    <FontAwesomeIcon className="icon" icon={faBars} />
                                )}
                            </div>
                        )}
                    </div>
                </div>
                <ul className={`menu ${isMenuVisible ? 'open' : ''}`}>
                    <h1 className="menu_title">Menu Główne</h1>
                    <li><Link to="top" smooth={true} duration={250} offset={-window.innerHeight / 2} onClick={toggleMenu}><p className="menu_item">O nas</p></Link></li>
                    <li><Link to="offer" smooth={true} duration={250} offset={-window.innerHeight / 2} onClick={toggleMenu}><p className="menu_item">Oferta</p></Link></li>
                    <li><Link to="catalogues" smooth={true} duration={250} offset={-window.innerHeight / 5} onClick={toggleMenu}><p className="menu_item">Klimatyzatory</p></Link></li>
                    <li><Link to="photos" smooth={true} duration={250} offset={-window.innerHeight / 5} onClick={toggleMenu}><p className="menu_item">Galeria</p></Link></li>
                    <li><Link to="form" smooth={true} duration={250} offset={-window.innerHeight / 5} onClick={toggleMenu}><p className="menu_item">Kontakt</p></Link></li>
                </ul>
                {!isMobile && (
                    <div className="contact_header">
                        <p>+48 531 049 317</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Header;
