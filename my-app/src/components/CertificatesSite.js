import React from 'react';
import {Link } from 'react-router-dom';
import LG from "../assets/LG_certyfikat.jpg";

const CertificatesSite = () => {
    return (
        <section className="CertyficatesSite" id="CertyficatesSite">
            <div className="container">

                <div className="certyficatesSite_text_container">
                    <h1>Certyfikaty</h1>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="certyficatesSite_items_container">
                    <img src={LG} alt={LG}/>
                   <Link to="/certyfikaty"><button>Zobacz więcej</button></Link>
                </div>
            </div>
        </section>
    );
};

export default CertificatesSite;