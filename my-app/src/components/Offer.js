import React from 'react';
import img2 from "../assets/wykalifikowany.jpg"
import img3 from "../assets/zblizenie-pracownika-fizycznego-w-zakladzie-przemyslowej-linii-produkcyjnej.jpg"
import img4 from "../assets/brodaty-mezczyzna-w-ogolnej-uzyciu-tabletu.jpg"
    const Offer = () =>{

    return (
        <section className="offer" id="offer">
            <div className="container">
                <h1>Oferta</h1>
                <div className="offer_items">
                    <div className="offer_item">
                        <h2>Montaż</h2>
                        <img src={img2} alt={img2}/>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>

                    <div className="offer_item">
                        <h2>Servis</h2>
                        <img src={img3} alt={img3}/>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>

                    <div className="offer_item">
                        <h2>Sprzedaż</h2>
                        <img src={img4} alt={img4}/>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Offer;