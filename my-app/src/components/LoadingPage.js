import React, { useState, useEffect } from 'react';
import logo from "../assets/frozeko logo-shading.svg"

const LoadingPage = () => {
    const [showFrozer, setShowFrozer] = useState(true);
    const [showWitamy, setShowWitamy] = useState(false);

    useEffect(() => {
        // Po 4 sekundach zmień widoczność elementów
        const timeout = setTimeout(() => {
            setShowFrozer(false);
            setShowWitamy(true);
        }, 4000);

        // Oczyść timer w przypadku odmontowania komponentu
        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return (

        <section className="loadingpage">

            <div className="container">
                <img alt={logo} src={logo}/>
                {showFrozer && (
                    <h1 className="h1_Frozer" datatype="Frozeko...">
                        Frozeko...
                    </h1>
                )}
                {showWitamy && (
                    <h1 className="h1_Witamy" datatype="Witamy">
                        Witamy
                    </h1>
                )}
            </div>
        </section>
    );
};

export default LoadingPage;
