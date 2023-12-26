import React from 'react';
import img2 from "../assets/wykalifikowany.jpg"
import img3 from "../assets/zblizenie-pracownika-fizycznego-w-zakladzie-przemyslowej-linii-produkcyjnej.jpg"
import img4 from "../assets/brodaty-mezczyzna-w-ogolnej-uzyciu-tabletu.jpg"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
 const Offer = () =>{
     const offerItems = [
         {
             title: "Montaż",
             image: {
                 alt: "Montaż Image Alt",
                 src: img2,
                 height: img2.height,
                 width: img2.width
             },
             description: "Zaufaj naszemu doświadczeniu i ekspertyzie. Oferujemy kompleksowy montaż klimatyzacji, zapewniając optymalną wydajność i niezawodność."
         },
         {
             title: "Serwis",
             image: {
                 alt: "Serwis Image Alt",
                 src: img3,
                 height: img3.height,
                 width: img3.width
             },
             description: "Nasi wykwalifikowani technicy stoją są do Twojej dyspozycji. Gwarantujemy fachowy i szybki serwis klimatyzacji, aby utrzymać ją w doskonałej formie. Twój komfort jest naszym priorytetem."
         },
         {
             title: "Sprzedaż",
             image: {
                 alt: "Sprzedaż Image Alt",
                 src: img4,
                 height: img4.height,
                 width: img4.width
             },
             description: "Oferujemy najnowocześniejsze urządzenia klimatyzacyjne od renomowanych producentów. Nasz zespół doradców pomoże Ci znaleźć idealny model, spełniający Twoje potrzeby. Daj nam szansę dostarczenia Ci komfortu przez cały rok."
         }
     ];

     return (
        <section className="offer" id="offer">
            <div className="container">
                <h1>Oferta</h1>
                <div className="offer_items">
                    {offerItems.map((item, index) => (
                        <div className="offer_item" key={index}>
                            <h2>{item.title}</h2>
                            <LazyLoadImage
                                alt={item.image.alt}
                                src={item.image.src}
                                height={item.image.height}
                                width={item.image.width}
                                effect="blur"
                            />
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Offer;