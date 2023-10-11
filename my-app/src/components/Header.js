import React from 'react';
import { Link } from 'react-scroll';
const Header = () => {
    return (
        <section className="header sticky">
            <div className="container">
                <h1>Logo/Nazwa</h1>
                <div className="menu">
                    <Link to="aboutus" smooth={true} duration={500}><p className="menu_item">O nas</p></Link>
                    <Link to="plusy" smooth={true} duration={500}><p className="menu_item">Plusy</p></Link>
                    <Link to="offer" smooth={true} duration={500}><p className="menu_item">Oferta</p></Link>
                    <Link to="photos" smooth={true} duration={500}><p className="menu_item">Galeria</p></Link>
                    <Link to="certyfikaty" smooth={true} duration={500}><p className="menu_item">Certyfikaty</p></Link>
                    <Link to="kontakt"><p className="menu_item">Kontakt</p></Link>
                </div>
                <div className="contact">
                    <p>Telefon: 500 500 500</p>
                    <p>Email: adamjednacz4@gmail.com</p>
                </div>
            </div>
        </section>
    );
};
export default Header;
