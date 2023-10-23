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
                        <p>Zaufaj naszemu doświadczeniu i ekspertyzie. Oferujemy kompleksowy montaż klimatyzacji, zapewniając optymalną wydajność i niezawodność. Daj nam zadanie, a stworzymy idealne warunki klimatyczne w Twoim otoczeniu.</p>
                    </div>
                    <div className="offer_item">
                        <h2>Serwis</h2>
                        <img src={img3} alt={img3}/>
                        <p>Nasi wykwalifikowani technicy stoją są do Twojej dyspozycji. Gwarantujemy fachowy i szybki serwis klimatyzacji, aby utrzymać ją w doskonałej formie. Twój komfort jest naszym priorytetem.</p>
                    </div>
                    <div className="offer_item">
                        <h2>Sprzedaż</h2>
                        <img src={img4} alt={img4}/>
                        <p>Oferujemy najnowocześniejsze urządzenia klimatyzacyjne od renomowanych producentów. Nasz zespół doradców pomoże Ci znaleźć idealny model, spełniający Twoje potrzeby. Daj nam szansę dostarczenia Ci komfortu przez cały rok.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Offer;