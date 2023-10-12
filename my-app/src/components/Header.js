import React from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <section className="header sticky">
            <div className="container">
                <h1>Logo/Nazwa</h1>
                <div className="menu">
                    <Link to="aboutus" smooth={true} duration={500}><p className="menu_item">O nas</p></Link>
                    <Link to="plusy" smooth={true} duration={500}><p className="menu_item">Plusy</p></Link>
                    <Link to="offer" smooth={true} duration={500}><p className="menu_item">Oferta</p></Link>
                    <Link to="catalogues" smooth={true} duration={500}><p className="menu_item">Klimatyzatory</p></Link>
                    <Link to="photos" smooth={true} duration={500}><p className="menu_item">Galeria</p></Link>
                    <Link to="certyfikaty" smooth={true} duration={500}><p className="menu_item">Certyfikaty</p></Link>
                    <Link to="contact" smooth={true} duration={500}><p className="menu_item">Kontakt</p></Link>
                </div>
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
