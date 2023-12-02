import React from 'react';
import Samsung from "../assets/Samsung.png"
import Mitsubishi from "../assets/Mitsubishi.png"
import Toshiba from "../assets/Toshiba.png"
import Panasonic from "../assets/Panasonic.png"
import LG from "../assets/LG.png"
import Gree from "../assets/Gree.png"
import Haier from "../assets/Haier.png"
import Daikin from "../assets/Daikin.png"
import Sinclair from "../assets/sinclair-002.png"
import Rotenso from "../assets/46.jpg"
import Aux from "../assets/klimatyzacja-aux1.png"
const Catalogues = () => {
    return (
        <section className="catalogues" id="catalogues">
            <div className="container">
                <div className="catalogues_items_container">
                <div className="catalogues_items">
                    <a href="https://www.samsung.com/pl/business/climate/">
                    <img className="catalogues_item" src={Samsung} alt={Samsung}/>
                    </a>
                    <a href="https://pl.mitsubishielectric.com/pl/products-solutions/air-conditioning/index.html">
                    <img className="catalogues_item"  src={Mitsubishi} alt={Mitsubishi}/>
                    </a>
                    <a href="https://www.toshiba-hvac.pl/">
                    <img className="catalogues_item"  src={Toshiba} alt={Toshiba}/>
                    </a>
                    <a href="https://www.lg.com/pl/business/klimatyzacja?utm_source=google&utm_medium=cpc&utm_campaign=2023HQSEM_HA_PL_Google_AS-HVAC-HVAC-Brand-LC&utm_content=Broad-HVAC-LC-RSA&gad_source=1&gclid=CjwKCAiAx_GqBhBQEiwAlDNAZhj1GzwNPeLsYQpEG05seDsXIBwaw6JEo6kVs5OQqwIubJCFwu1J_xoCNpsQAvD_BwE">
                    <img className="catalogues_item"  src={LG} alt={LG}/>
                    </a>
                    <a href="https://www.daikin.pl/pl_pl/strona.html?gad_source=1&gclid=CjwKCAiAx_GqBhBQEiwAlDNAZuZw94Hcerko1CD3eclkSW8MQBjXcKs0QykFnHG3IK22kiBdis9TNhoCOFAQAvD_BwE">
                        <img className="catalogues_item"  src={Daikin} alt={Daikin}/>
                    </a>
                    <a href="https://www.haier-europe.com/pl_PL/">
                        <img className="catalogues_item"  src={Haier} alt={Haier}/>
                    </a>
                </div>
                <div className="catalogues_items">
                    <a href="https://www.aircon.panasonic.eu/PL_pl/ranges/domestic/">
                    <img className="catalogues_item"  src={Panasonic} alt={Panasonic}/>
                    </a>
                    <a href="https://rotenso.com/pl/?gad_source=1&gclid=CjwKCAiAx_GqBhBQEiwAlDNAZm_R_BU2-uGCjtm13yWUDg_gOI-8v0q8qPjLd1KxeL5wXJmxFNQppRoC9AoQAvD_BwE">
                    <img className="catalogues_item"  src={Rotenso} alt={Rotenso}/>
                    </a>
                    <a href="https://gree.pl/?gad_source=1&gclid=CjwKCAiAx_GqBhBQEiwAlDNAZjGpoxd-VBxX48OsOuowvSq_OuhLWPw7VF8thywePHi_wqhTWRzrbxoCPYoQAvD_BwE">
                    <img className="catalogues_item"  src={Gree} alt={Gree}/>
                    </a>
                    <a href="https://auxcool.pl/">
                    <img className="catalogues_item"  src={Aux} alt={Aux}/>
                    </a>
                    <a href="https://www.sinclair.pl/">
                        <img className="catalogues_item"  src={Sinclair} alt={Sinclair}/>
                    </a>
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