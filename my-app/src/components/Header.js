import React, {useState} from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from 'react-responsive';
const Header = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const [isMenuVisible, setMenuVisible] = useState(false);
    const toggleMenu = () => {
        setMenuVisible(!isMenuVisible);
    };
    return (
        <section className="header sticky">
            <div className="container">
                {isMobile ? (
                    <>
                        <div className="h1_hamburg">
                        <h1>Frozer</h1>
                        <div className="hamburger-menu" onClick={toggleMenu}>
                            {isMenuVisible ? (
                                <FontAwesomeIcon icon={faTimes} style={{ fontSize: "2em" }} />
                            ) : (
                                <FontAwesomeIcon icon={faBars} style={{ fontSize: "2em" }} />
                            )}
                        </div>
                            </div>
                    <div className="hamburger_menu_items">
                        {isMenuVisible && (
                            <div className="menu">
                                <Link to="aboutus" smooth={true} duration={500}><p className="menu_item">O nas</p></Link>
                                <Link to="plusy" smooth={true} duration={500}><p className="menu_item">Plusy</p></Link>
                                <Link to="offer" smooth={true} duration={500}><p className="menu_item">Oferta</p></Link>
                                <Link to="catalogues" smooth={true} duration={500}><p className="menu_item">Klimatyzatory</p></Link>
                                <Link to="photos" smooth={true} duration={500}><p className="menu_item">Galeria</p></Link>
                                <Link to="certyfikaty" smooth={true} duration={500}><p className="menu_item">Certyfikaty</p></Link>
                                <Link to="contact" smooth={true} duration={500}><p className="menu_item">Kontakt</p></Link>
                            </div>
                        )}
                    </div>
                    </>
                ) : (
                    <>
                    <h1>Frozer</h1>
                    <div className="menu">
                        <Link to="aboutus" smooth={true} duration={500}><p className="menu_item">O nas</p></Link>
                        <Link to="plusy" smooth={true} duration={500}><p className="menu_item">Plusy</p></Link>
                        <Link to="offer" smooth={true} duration={500}><p className="menu_item">Oferta</p></Link>
                        <Link to="catalogues" smooth={true} duration={500}><p className="menu_item">Klimatyzatory</p></Link>
                        <Link to="photos" smooth={true} duration={500}><p className="menu_item">Galeria</p></Link>
                        <Link to="certyfikaty" smooth={true} duration={500}><p className="menu_item">Certyfikaty</p></Link>
                        <Link to="contact" smooth={true} duration={500}><p className="menu_item">Kontakt</p></Link>
                    </div>
                    </>
                )}
                <div className="contact_header">
                    <p>
                        <FontAwesomeIcon icon={faPhone} /> Telefon: 500 500 500
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faEnvelope} /> Email: adamjednacz4@gmail.com
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Header;
