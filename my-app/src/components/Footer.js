import React from 'react';
import logo from "../assets/frozekologo-shading.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-scroll";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                <div className="col">
                    <div className="logo">
                        <img alt={logo} src={logo}/>
                        <h1 lang="pl">Frozeko</h1>
                    </div>
                    <p>Zbrojarzy 30, 30-412 Kraków</p>
                    <p>NIP:9441604737</p>
                </div>
                    <div className="col">
                        <h1>Menu</h1>
                        <p><Link to="about_us" smooth={true} duration={250} offset={-window.innerHeight / 2}
                                  ><p className="menu_item">O nas</p></Link></p>
                        <p><Link to="offer" smooth={true} duration={250} offset={-window.innerHeight / 2}
                                  ><p className="menu_item">Oferta</p></Link></p>
                        <p><Link to="catalogues" smooth={true} duration={250} offset={-window.innerHeight / 5}
                                  ><p className="menu_item">Klimatyzatory</p></Link></p>
                        <p><Link to="photos" smooth={true} duration={250} offset={-window.innerHeight / 5}
                                  ><p className="menu_item">Galeria</p></Link></p>
                        <p><Link to="form" smooth={true} duration={250} offset={-window.innerHeight / 5}
                                  ><p className="menu_item">Kontakt</p></Link></p>

                    </div>
                    <div className="col">
                        <h1>Kontakt</h1>
                        <p><FontAwesomeIcon className="icon" icon={faPhone}/>+48 531 049 317</p>
                        <p><FontAwesomeIcon className="icon" icon={faEnvelope}/>frozeko.klima@gmail.com</p>

                    </div>
                </div>
                <p className="copy">&copy; 2023 Frozeko</p>
            </div>
        </footer>
    );
};

export default Footer;
