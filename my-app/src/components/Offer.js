import React from 'react';
import img1 from "./assets/about_us.webp";
import {LazyLoadImage} from 'react-lazy-load-image-component';
// import img2 from
// import img3 from
// import img4 from

const Offer = () => {
    return (
        <section className="offer" id="offer">
            <div className="container">
                <div className="offer_items">
                    <div className="offer_item">
                        <div className="offer_item_title">
                            <LazyLoadImage
                                className="img_bg"
                                src={img1}
                                alt={img1}
                            />
                            <h2>Montaż</h2>
                        </div>
                        <p>Nasze doświadczenie gwarantuje profesjonalny montaż klimatyzacji. Tworzymy idealne warunki
                            dla Twojego komfortu, dostosowując każdą instalację do specyficznych potrzeb użytkownika.</p>
                    </div>
                    <div className="offer_item">
                        <div className="offer_item_title">
                            <LazyLoadImage
                                className="img_bg"
                                src={img1}
                                alt={img1}
                            />
                            <h2>Serwis</h2>
                        </div>
                        <p>Wykwalifikowani technicy zapewniają szybką naprawę klimatyzacji, z pełnym zaangażowaniem.
                            Dbamy o Twój komfort, oferując natychmiastową pomoc w razie jakichkolwiek problemów.</p>
                    </div>
                    <div className="offer_item">
                        <div className="offer_item_title">
                            <LazyLoadImage
                                className="img_bg"
                                src={img1}
                                alt={img1}
                            />
                            <h2>Sprzedaż</h2>
                        </div>
                        <p>Oferujemy nowoczesne klimatyzatory od renomowanych producentów, dostosowane do Twoich potrzeb.
                            Nasi doradcy pomogą Ci wybrać idealne urządzenie dla Twojego domu i biura.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Offer;
