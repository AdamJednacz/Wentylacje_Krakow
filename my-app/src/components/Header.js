import React, {useState} from 'react';
import {Link} from 'react-scroll';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone, faEnvelope, faBars, faTimes,} from '@fortawesome/free-solid-svg-icons';
import {useMediaQuery} from 'react-responsive';
import logo from "../assets/frozekologo-shading.svg"

const Header = () => {
    const isMobile = useMediaQuery({maxWidth: 1381});
    const [isMenuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!isMenuVisible);
    };

    return (
        <section className="header sticky">
            <div className="container">
                        <div className="h1_hamburg">
                            <div className="h1_logo">
                            <img alt={logo} src={logo}/>
                                <h1 lang="pl">Frozeko</h1>
                                {isMobile &&(
                            <div className="hamburger-menu" onClick={toggleMenu}>
                                {isMenuVisible ? (
                                    <FontAwesomeIcon className="icon" icon={faTimes}/>
                                ) : (
                                    <FontAwesomeIcon className="icon" icon={faBars}/>
                                )}
                            </div>
                                )}
                            </div>
                        </div>
                        <ul className={`menu ${isMenuVisible ? 'open' : ''}`} >
                            <li><Link to="aboutus" smooth={true} duration={500}><p className="  menu_item" onClick={toggleMenu}>O nas</p></Link></li>
                            <li><Link to="plusy" smooth={true} duration={500} onClick={toggleMenu}><p className="menu_item">Plusy</p></Link></li>
                            <li><Link to="offer" smooth={true} duration={500} onClick={toggleMenu}><p className="menu_item">Oferta</p></Link></li>
                            <li><Link to="catalogues" smooth={true} duration={500}  onClick={toggleMenu}><p className="menu_item">Klimatyzatory</p></Link></li>
                            <li><Link to="photos" smooth={true} duration={500}><p className="menu_item" onClick={toggleMenu}>Galeria</p></Link></li>
                            <li><Link to="CertyficatesSite" smooth={true} duration={500}><p className="menu_item" onClick={toggleMenu}>Certyfikaty</p></Link></li>
                            <li><Link to="form" smooth={true} duration={500}><p className="menu_item" onClick={toggleMenu}>Pytania</p></Link></li>
                            <li><Link to="contact" smooth={true} duration={500}><p className="menu_item" onClick={toggleMenu}>Kontakt</p></Link></li>
                        </ul>
                {!isMobile && (
                    <div className="contact_header">
                        <p><FontAwesomeIcon className="icon_header" icon={faPhone}/> Telefon: +48 531 049 317</p>
                        <p><FontAwesomeIcon className="icon_header" icon={faEnvelope}/> Email: frozeko.pa@gmail.com</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Header;