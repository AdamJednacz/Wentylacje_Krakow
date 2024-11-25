import React from 'react';
import {Link} from "react-scroll";

const Main = () => {
    return (
        <section className="main">
            <div className="container">
                <h1><span>Frozeko</span> Zapewnimy Ci<br/> Najlepszy Klimat</h1>
                <p>Jeżeli jesteś zainteresowany i chcesz porozmawiać skontaktuj się z nami!</p>
                <Link to="form" smooth={true} duration={500}>
                    <button>Kontakt</button>
                </Link>
            </div>
        </section>
    );
};

export default Main;
