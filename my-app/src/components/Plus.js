import React, { useState, useEffect } from 'react';
import feather from "../assets/feather.jpg";
import health from "../assets/health1.jpg";
import saivings from "../assets/saivings.jpg";
import {LazyLoadImage} from "react-lazy-load-image-component";

const Plus = () => {
    const carouselData = [
        {
            image: feather,
            heading1: "Temperatura na życzenie:",
            text1: "Klimatyzacja umożliwia dostosowanie temperatury w pomieszczeniach do własnych preferencji. W gorące dni można schłodzić pomieszczenie, a w zimne dni podgrzać je, co zapewnia wyjątkowy komfort.",

            heading2: "Sen i wydajność:",
            text2: "Klimatyzacja może pomóc poprawić jakość snu i wydajność w pracy. Optymalna temperatura pomieszczenia sprzyja snu, a w pracy zapewnia komfort i skupienie, co z kolei przekłada się na lepszą wydajność.",

            heading3: "Lepsza jakość powietrza:",
            text3: "Współczesne klimatyzatory często wyposażone są w filtry powietrza, które usuwają zanieczyszczenia z powietrza. Dzięki temu zapewniają lepszą jakość powietrza w pomieszczeniach, co jest szczególnie ważne dla osób cierpiących na alergie.",

        },
        {
            image: saivings,
            heading1: "Zapobieganie przegrzaniu:",
            text1: "Klimatyzacja jest szczególnie ważna w okresach upałów, ponieważ pomaga zapobiegać przegrzaniu organizmu. Dla osób starszych, dzieci i osób o słabym zdrowiu jest to istotne z punktu widzenia zdrowia i bezpieczeństwa.",

            heading2: "Redukcja wilgoci:",
            text2:"Klimatyzacja usuwa nadmierną wilgoć z powietrza, co może pomóc w zapobieganiu rozwojowi pleśni i grzybów w pomieszczeniach. To z kolei poprawia jakość życia i zdrowie mieszkańców.",

            heading3: "Lepsza koncentracja w ruchu:",
            text3:  "Klimatyzacja w samochodach jest niezwykle ważna dla kierowców, ponieważ pomaga utrzymać koncentrację i zwiększa bezpieczeństwo na drodze, zwłaszcza podczas długich podróży w upalne dni.",
        },
        {
            image: health,
            heading1:"Efektywne zużycie energii:",
            text1:"Nowoczesne klimatyzatory są zaprojektowane tak, aby były bardziej energooszczędne, co pozwala zmniejszyć koszty energii elektrycznej i obciążenie sieci energetycznych",

            heading2: "Alternatywa dla otwierania okien:",
            text2:"W niektórych przypadkach klimatyzacja może być bardziej efektywną opcją niż otwieranie okien, szczególnie w przypadku dużego hałasu z ulicy lub w miejscach o wysokim poziomie zanieczyszczenia powietrza.",

            heading3:"Redukcja emisji:",
            text3: "Klimatyzacja może pomóc w ograniczeniu emisji gazów cieplarnianych, ponieważ pozwala utrzymać komfortową temperaturę w budynkach bez konieczności korzystania z ogrzewania lub chłodzenia przy wykorzystaniu innych źródeł energii.",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setFadeIn(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
                setFadeIn(false);
            }, 1500);
        }, 10000);

        return () => {
            clearInterval(intervalId);
        };
    }, [carouselData.length, currentIndex]);

    const { image, heading1, heading2, heading3, text1, text2, text3 } = carouselData[currentIndex];

    return (
        <section className="plus" id="plusy">
            <div className="container">
            <div className={`plus_site ${fadeIn ? 'fade-in' : ''}`}>
                <LazyLoadImage
                    className={fadeIn ? 'fade-in' : ''}
                    alt={heading1.alt}
                    src={image}
                    height={image.height}
                    width={image.width} // Poprawiona literówka tutaj
                />

                <div className={`plus_site_text_container ${fadeIn ? 'fade-in' : ''}`}>
                    <div className="plus_site_text_box">
                        <h1>{heading1}</h1>
                        <p>{text1}</p> {/* Poprawione, aby używać text1 */}
                    </div>
                    <div className="plus_site_text_box">
                        <h1>{heading2}</h1>
                        <p>{text2}</p>
                    </div>
                    <div className="plus_site_text_box">
                        <h1>{heading3}</h1>
                        <p>{text3}</p>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
};


export default Plus;
