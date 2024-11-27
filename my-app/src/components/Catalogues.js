import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import useScrollAnimation from "./useScroolAnimation";

const images = [
    { src: require("../assets/Samsung.png"), link: "https://www.samsung.com/pl/business/climate/" },
    { src: require("../assets/Mitsubishi.png"), link: "https://pl.mitsubishielectric.com/pl/products-solutions/air-conditioning/index.html" },
    { src: require("../assets/Toshiba.png"), link: "https://www.toshiba-hvac.pl/" },
    { src: require("../assets/LG.png"), link: "https://www.lg.com/pl/business/klimatyzacja?utm_source=google&utm_medium=cpc&utm_campaign=2023HQSEM_HA_PL_Google_AS-HVAC-HVAC-Brand-LC&utm_content=Broad-HVAC-LC-RSA&gad_source=1&gclid=CjwKCAiAx_GqBhBQEiwAlDNAZhj1GzwNPeLsYQpEG05seDsXIBwaw6JEo6kVs5OQqwIubJCFwu1J_xoCNpsQAvD_BwE" },
    { src: require("../assets/Daikin.png"), link: "https://www.daikin.pl/pl_pl/strona.html?gad_source=1&gclid=CjwKCAiAx_GqBhBQEiwAlDNAZuZw94Hcerko1CD3eclkSW8MQBjXcKs0QykFnHG3IK22kiBdis9TNhoCOFAQAvD_BwE" },
    { src: require("../assets/Haier.png"), link: "https://www.haier-europe.com/pl_PL/" },
    { src: require("../assets/Panasonic.png"), link: "https://www.aircon.panasonic.eu/PL_pl/ranges/domestic/" },
    { src: require("../assets/46.jpg"), link: "https://rotenso.com/pl/?gad_source=1&gclid=CjwKCAiAx_GqBhBQEiwAlDNAZm_R_BU2-uGCjtm13yWUDg_gOI-8v0q8qPjLd1KxeL5wXJmxFNQppRoC9AoQAvD_BwE" },
    { src: require("../assets/Gree.png"), link: "https://gree.pl/?gad_source=1&gclid=CjwKCAiAx_GqBhBQEiwAlDNAZjGpoxd-VBxX48OsOuowvSq_OuhLWPw7VF8thywePHi_wqhTWRzrbxoCPYoQAvD_BwE" },
    { src: require("../assets/klimatyzacja-aux1.png"), link: "https://auxcool.pl/" },
    { src: require("../assets/sinclair-002.png"), link: "https://www.sinclair.pl/" }
];

const CatalogueItem = ({ imageUrl, link }) => (
    <a href={link}>
        <LazyLoadImage
            className="catalogues_item"
            src={imageUrl}
            alt={imageUrl}
            effect="blur"
        />
    </a>
);

const Catalogues = () => {
    useScrollAnimation(".catalogues .container")
    return (
        <section className="catalogues" id="catalogues">
            <div className="container">
                <div className="catalogues_items_container">
                    <div className="catalogues_items">
                        {images.map((image, index) => (
                            <CatalogueItem key={index} imageUrl={image.src} link={image.link} />
                        ))}
                    </div>
                </div>
                <div className="catalogues_text">
                    <h1>Oferta Klimatyzatorów</h1>
                    <p className="text">
                        Zanurz się w świat komfortu klimatycznego z naszą ofertą najnowocześniejszych klimatyzatorów
                        od renomowanych producentów. Oferujemy szeroki wybór urządzeń, które nie tylko skutecznie
                        utrzymają optymalną temperaturę, ale także zapewnią Ci świeże i czyste powietrze w każdym pomieszczeniu.
                        Nasza oferta obejmuje produkty od takich marek jak Samsung, Mitsubishi, Toshiba, LG i wiele innych.
                        Wybierając nasze klimatyzatory, inwestujesz w wyjątkową wydajność, niezawodność i nowoczesny design.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Catalogues;
