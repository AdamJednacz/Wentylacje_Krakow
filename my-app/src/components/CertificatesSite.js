import React from 'react';
import {Link } from 'react-router-dom';
import LG from "./assets/LG_certyfikat.jpg";


const CertificatesSite = () => {
    return (
        <section className="CertyficatesSite" id="CertyficatesSite">
            <div className="container">
                <div className="certyficatesSite_text">

                    <h1>Certyfikaty</h1>
                    <p>
                        Jesteśmy dumni z licznych certyfikatów, które potwierdzają najwyższą jakość naszych produktów
                        i usług. Każdy z tych certyfikatów reprezentuje nasze zobowiązanie do satysfakcji klienta
                        i stałego doskonalenia naszych standardów. Wspieramy się licznymi rekomendacjami i wyróżnieniami,
                        które zdobyliśmy dzięki ciężkiej pracy i pasji, jaką wkładamy w naszą działalność.
                    </p>
                    <Link to="/certyfikaty"><button>Zobacz więcej</button></Link>
                </div>
                <div className="certyficatesSite_items_container">
                    <img src={LG} alt={LG}/>

                </div>
            </div>
        </section>
    );
};

export default CertificatesSite;
