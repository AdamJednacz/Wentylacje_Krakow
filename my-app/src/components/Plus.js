import React, { useState } from 'react';

const Plus = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleChange = (index) => {
        setActiveTab(index);
    };

    return (
        <section className="plus" id="plusy">
            <div className="container">
                <div className="top">
                    <h1>Jakie są plusy korzystania z klimatyzacji ?</h1>
                    <div className="h2_help_container">
                        <h2
                            onClick={() => handleChange(0)}
                            style={{
                                border: activeTab === 0 ? ' 1px solid #707070' : 'none',
                                borderRadius: '1em',
                            }}
                        >
                            Komfort i wygoda
                        </h2>
                        <h2
                            onClick={() => handleChange(1)}
                            style={{
                                border: activeTab === 1 ? ' 1px solid #707070' : 'none',
                                borderRadius: '1em',
                            }}
                        >
                            Zdrowie i bezpieczeństwo
                        </h2>
                        <h2
                            onClick={() => handleChange(2)}
                            style={{
                                border: activeTab === 2 ? ' 1px solid #707070' : 'none',
                                borderRadius: '1em',
                            }}
                        >
                            Ekologia i oszczędność
                        </h2>
                    </div>
                </div>
                <div
                    className={`examples ${
                        activeTab === 0 ? 'fade-in active' : 'fade-in'
                    }`}
                    style={{ display: activeTab === 0 ? 'flex' : 'none' }}
                >
                    <div className="example">
                        <div className="left_side">
                            <h3>Temperatura na życzenie:</h3>
                            <p>
                                Klimatyzacja umożliwia dostosowanie temperatury w pomieszczeniach do własnych preferencji. W gorące dni można schłodzić pomieszczenie, a w zimne dni podgrzać je, co zapewnia wyjątkowy komfort.
                            </p>
                        </div>
                    </div>
                    <div className="example">
                        <div className="left_side">
                            <h3>Lepsza jakość powietrza:</h3>
                            <p>
                                Współczesne klimatyzatory często wyposażone są w filtry powietrza, które usuwają zanieczyszczenia z powietrza. Dzięki temu zapewniają lepszą jakość powietrza w pomieszczeniach, co jest szczególnie ważne dla osób cierpiących na alergie.
                            </p>
                        </div>
                    </div>
                    <div className="example">
                        <div className="left_side">
                            <h3>Sen i wydajność:</h3>
                            <p>
                                Klimatyzacja może pomóc poprawić jakość snu i wydajność w pracy. Optymalna temperatura pomieszczenia sprzyja snu, a w pracy zapewnia komfort i skupienie, co z kolei przekłada się na lepszą wydajność.
                            </p>
                        </div>
                    </div>
                </div>

                <div
                    className={`examples ${
                        activeTab === 1 ? 'fade-in active' : 'fade-in'
                    }`}
                    style={{ display: activeTab === 1 ? 'flex' : 'none' }}
                >
                    <div className="example">
                        <div className="left_side">
                            <h3>Zapobieganie przegrzaniu:</h3>
                            <p>
                                Klimatyzacja jest szczególnie ważna w okresach upałów, ponieważ pomaga zapobiegać przegrzaniu organizmu. Dla osób starszych, dzieci i osób o słabym zdrowiu jest to istotne z punktu widzenia zdrowia i bezpieczeństwa.
                            </p>
                        </div>
                    </div>
                    <div className="example">
                        <div className="left_side">
                            <h3>Redukcja wilgoci:</h3>
                            <p>
                                Klimatyzacja usuwa nadmierną wilgoć z powietrza, co może pomóc w zapobieganiu rozwojowi pleśni i grzybów w pomieszczeniach. To z kolei poprawia jakość życia i zdrowie mieszkańców.
                            </p>
                        </div>
                    </div>
                    <div className="example">
                        <div className="left_side">
                            <h3>Lepsza koncentracja w ruchu:</h3>
                            <p>
                                Klimatyzacja w samochodach jest niezwykle ważna dla kierowców, ponieważ pomaga utrzymać koncentrację i zwiększa bezpieczeństwo na drodze, zwłaszcza podczas długich podróży w upalne dni.
                            </p>
                        </div>
                    </div>
                </div>

                <div
                    className={`examples ${
                        activeTab === 2 ? 'fade-in active' : 'fade-in'
                    }`}
                    style={{ display: activeTab === 2 ? 'flex' : 'none' }}
                >
                    <div className="example">
                        <div className="left_side">
                            <h3>Efektywne zużycie energii:</h3>
                            <p>
                                Nowoczesne klimatyzatory są zaprojektowane tak, aby były bardziej energooszczędne, co pozwala zmniejszyć koszty energii elektrycznej i obciążenie sieci energetycznych.
                            </p>
                        </div>
                    </div>
                    <div className="example">
                        <div className="left_side">
                            <h3>Alternatywa dla otwierania okien:</h3>
                            <p>
                                W niektórych przypadkach klimatyzacja może być bardziej efektywną opcją niż otwieranie okien, szczególnie w przypadku dużego hałasu z ulicy lub w miejscach o wysokim poziomie zanieczyszczenia powietrza.
                            </p>
                        </div>
                    </div>
                    <div className="example">
                        <div className="left_side">
                            <h3>Redukcja emisji:</h3>
                            <p>
                                Klimatyzacja może pomóc w ograniczeniu emisji gazów cieplarnianych, ponieważ pozwala utrzymać komfortową temperaturę w budynkach bez konieczności korzystania z ogrzewania lub chłodzenia przy wykorzystaniu innych źródeł energii.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="carousel_numbers">
                    <div
                        onClick={() => handleChange(0)}
                        style={{
                            border: activeTab === 0 ? '1px solid #707070' : 'none',
                            borderRadius: '1em',
                        }}
                        className="number"
                    >
                        1
                    </div>
                    <div
                        onClick={() => handleChange(1)}
                        style={{
                            border: activeTab === 1 ? '1px solid #707070' : 'none',
                            borderRadius: '1em',
                        }}
                        className="number"
                    >
                        2
                    </div>
                    <div
                        onClick={() => handleChange(2)}
                        style={{
                            border: activeTab === 2 ? '1px solid #707070' : 'none',
                            borderRadius: '1em',
                        }}
                        className="number"
                    >
                        3
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Plus;

