import React from 'react';
import img2 from "../assets/wykalifikowany.jpg"
import img3 from "../assets/zblizenie-pracownika-fizycznego-w-zakladzie-przemyslowej-linii-produkcyjnej.jpg"
import img4 from "../assets/brodaty-mezczyzna-w-ogolnej-uzyciu-tabletu.jpg"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import logo from "../assets/frozeko logo-shading.svg"
const Offer = () => {
    return (
        <section className="offer" id="offer">
            <div className="container">
                <img alt={logo} src={logo}/>
                <h1>Oferta</h1>
                <div className="offer_items">
                    <div className="offer_item">
                        <h2>Montaż</h2>
                        <LazyLoadImage
                            alt={img2.alt}
                            src={img2}
                            height={img2.height}
                            width={img2.width}
                            effect="blur"
                        />
                        <p>Zaufaj naszemu doświadczeniu i ekspertyzie. Oferujemy kompleksowy montaż klimatyzacji. Daj nam zadanie, a stworzymy idealne warunki klimatyczne w Twoim otoczeniu.</p>
                    </div>
                    <div className="offer_item">
                        <h2>Serwis</h2>
                        <LazyLoadImage
                            alt={img3.alt}
                            height={img3.height}
                            width={img3.width}
                            src={img3}
                            effect="blur"
                        />
                        <p>Nasi wykwalifikowani technicy stoją są do Twojej dyspozycji. Gwarantujemy fachowy i szybki serwis klimatyzacji. Twój komfort jest naszym priorytetem.</p>
                    </div>
                    <div className="offer_item">
                        <h2>Sprzedaż</h2>
                        <LazyLoadImage
                            alt={img4.alt}
                            height={img4.height}
                            width={img4.width}
                            src={img4}
                            effect="blur"
                        />
                        <p>Oferujemy najnowocześniejsze urządzenia klimatyzacyjne od renomowanych producentów. Nasz zespół doradców pomoże Ci znaleźć idealny model</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Offer;
