import React, {useState, useEffect} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {LazyLoadImage} from "react-lazy-load-image-component";
import feather from "../assets/feather.jpg";
import health from "../assets/health1.jpg";
import saivings from "../assets/saivings.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight, faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import {useMediaQuery} from "react-responsive";

const Plus = () => {
    const carouselData = [
        {
            image: feather,
            heading1: "Komfort termiczny na życzenie:",
            text1: "Klimatyzacja umożliwia dostosowanie temperatury w domu do własnych preferencji. W gorące dni można schłodzić pomieszczenia, a w chłodniejsze dni podgrzać je, co zapewnia wyjątkowy komfort dla mieszkańców.",
            heading2: "Lepszy sen i wydajność:",
            text2: "Optymalna temperatura zapewniana przez klimatyzację sprzyja lepszemu snu oraz zwiększa wydajność w codziennych czynnościach. Komfortowy klimat sprzyja zarówno odpoczynkowi, jak i skupieniu, co przekłada się na lepszą jakość życia.",
            heading3: "Poprawa jakości powietrza:",
            text3: "Nowoczesne klimatyzatory wyposażone są w filtry powietrza, które eliminują zanieczyszczenia, takie jak kurz czy pyłki roślin, co pozwala cieszyć się lepszą jakością powietrza w domu, co jest szczególnie istotne dla alergików."
        },
        {
            image: saivings,
            heading1: "Ochrona przed przegrzaniem:",
            text1: "Klimatyzacja zapobiega przegrzaniu pomieszczeń, co ma kluczowe znaczenie szczególnie podczas upalnych dni. Jest to istotne dla osób starszych, dzieci i osób o słabym zdrowiu, zapewniając im komfort i bezpieczeństwo w domu.",
            heading2: "Regulacja wilgotności powietrza:",
            text2: "Klimatyzacja usuwa nadmierną wilgoć z powietrza, co przeciwdziała rozwojowi pleśni i grzybów, poprawiając jakość powietrza w domu i dbając o zdrowie mieszkańców.",
            heading3: "Poprawa koncentracji i bezpieczeństwa:",
            text3: "Dzięki klimatyzacji w domu zapewniamy komfortowe warunki podczas codziennych czynności, co wpływa na koncentrację i bezpieczeństwo, szczególnie podczas wykonywania prac wymagających skupienia."
        },
        {
            image: health,
            heading1: "Oszczędne zużycie energii:",
            text1: "Nowoczesne klimatyzatory są zaprojektowane z myślą o efektywnym zużyciu energii, co pozwala obniżyć rachunki za prąd i korzystać z zasobów energetycznych w bardziej ekonomiczny sposób.",
            heading2: "Alternatywa dla otwierania okien:",
            text2: "W niektórych przypadkach klimatyzacja może być preferowaną opcją w porównaniu z otwieraniem okien, szczególnie w obszarach o dużym zanieczyszczeniu powietrza lub głośnym otoczeniu, zapewniając ciszę i czyste powietrze w domu.",
            heading3: "Redukcja emisji gazów cieplarnianych:",
            text3: "Klimatyzacja pozwala utrzymać komfortową temperaturę w domu, co może zmniejszyć potrzebę korzystania z ogrzewania lub chłodzenia za pomocą źródeł energii emitujących szkodliwe substancje, przyczyniając się tym samym do ograniczenia emisji gazów cieplarnianych."
        },
    ];

    const isMobile = useMediaQuery({maxWidth: 1381});
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
        }, 10000);

        return () => {
            clearInterval(intervalId);
        };
    }, [carouselData.length, currentIndex]);

    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <FontAwesomeIcon  icon={faAngleLeft}/>,
        nextArrow: <FontAwesomeIcon  icon={faAngleRight}/>,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 10000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 768, // dla tabletów
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false // Ukryj strzałki dla tabletów
                }
            },
            {
                breakpoint: 480, // dla telefonów
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true // Ukryj strzałki dla telefonów
                }
            }
        ]
    };

    const {image} = carouselData[currentIndex];

    return (
        <section className="plus" id="plusy">
            <div className="container">
                <Slider {...settings}>
                    {carouselData.map((item, index) => (
                        <div className="plus_site_container" key={index}>
                            <div className="plus_site" key={index}>
                                {!isMobile ? (
                                <LazyLoadImage
                                    alt={item.heading1}
                                    src={item.image}
                                    height={image.height}
                                    width={image.width}
                                />
                                ) : (
                                    null )}
                                <div className="plus_site_text_container">
                                    <div className="plus_site_text_box">
                                        <h1>{item.heading1}</h1>
                                        <p>{item.text1}</p>
                                    </div>
                                    <div className="plus_site_text_box">
                                        <h1>{item.heading2}</h1>
                                        <p>{item.text2}</p>
                                    </div>
                                    <div className="plus_site_text_box">
                                        <h1>{item.heading3}</h1>
                                        <p>{item.text3}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};


export default Plus;
