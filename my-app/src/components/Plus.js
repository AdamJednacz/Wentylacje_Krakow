import React from 'react';
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
            text0:"Wykorzystanie klimatyzacji do ogrzewania pomieszczeń stało się coraz bardziej popularne z uwagi na szereg korzyści, jakie niesie to rozwiązanie. Oto kilka aspektów związanych z zastosowaniem klimatyzacji do ogrzewania:",
            heading1: "Zrównoważony komfort przez cały rok:",
            text1: "Dzięki funkcji ogrzewania, klimatyzatory zapewniają użytkownikom komfortowe warunki pomieszczeniowe zarówno w ciepłe, jak i zimne dni. Bez potrzeby instalowania oddzielnych systemów grzewczych, użytkownicy mogą cieszyć się zrównoważonym komfortem cieplnym przez cały rok.",
            heading2: "Lepszy sen i wydajność:",
            text2: "Optymalna temperatura zapewniana przez klimatyzację sprzyja lepszemu snu oraz zwiększa wydajność w codziennych czynnościach. Komfortowy klimat sprzyja zarówno odpoczynkowi, jak i skupieniu, co przekłada się na lepszą jakość życia.",
            heading3: "Czyste powietrze:",
            text3: "Wiele nowoczesnych klimatyzatorów wyposażonych jest w zaawansowane filtry, które usuwają zanieczyszczenia z powietrza. Ogrzewanie za pomocą klimatyzacji pozwala więc nie tylko na utrzymanie odpowiedniej temperatury, ale również na poprawę jakości powietrza w pomieszczeniu."
        },
        {
            image: saivings,
            text0:"Ogólnie rzecz biorąc, zastosowanie klimatyzacji do ogrzewania pomieszczeń jest rozwiązaniem wygodnym, efektywnym i przyjaznym dla środowiska, które spełnia potrzeby użytkowników przez cały rok.",
            heading1: "Precyzyjna kontrola temperatury:",
            text1: "Klimatyzatory pozwalają na precyzyjną regulację temperatury w pomieszczeniu. Za pomocą termostatów można łatwo dostosować ustawienia ogrzewania do indywidualnych preferencji, zapewniając optymalny komfort termiczny.",
            heading2: "Regulacja wilgotności powietrza:",
            text2: "Klimatyzacja usuwa nadmierną wilgoć z powietrza, co przeciwdziała rozwojowi pleśni i grzybów, poprawiając jakość powietrza w domu i dbając o zdrowie mieszkańców.",
            heading3: "Poprawa koncentracji i bezpieczeństwa:",
            text3: "Dzięki klimatyzacji w domu zapewniamy komfortowe warunki podczas codziennych czynności, co wpływa na koncentrację i bezpieczeństwo, szczególnie podczas wykonywania prac wymagających skupienia."
        },
        {
            image: health,
            text0:"Coraz więcej klimatyzatorów jest wyposażanych w funkcje inteligentnego sterowania, które umożliwiają zdalne zarządzanie systemem grzewczym za pomocą smartfonów lub innych urządzeń. To pozwala użytkownikom na optymalne wykorzystanie systemu oraz oszczędność energii.",
            heading1: "Efektywność energetyczna:",
            text1: "Nowoczesne klimatyzatory są projektowane z myślą o efektywności energetycznej. Dzięki zaawansowanym technologiom, takim jak inwerterowe kompresory, systemy te mogą osiągać wysoką efektywność nawet podczas ogrzewania, co przekłada się na niższe rachunki za energię.",
            heading2: "Oszczędność miejsca:",
            text2: "Tradycyjne systemy ogrzewania, takie jak piece gazowe czy piece na paliwo stałe, zajmują sporo miejsca w pomieszczeniu. Zastosowanie klimatyzacji do ogrzewania eliminuje potrzebę instalacji dodatkowych urządzeń grzewczych, co pozwala zaoszczędzić cenną przestrzeń.",
            heading3: "Redukcja emisji gazów cieplarnianych:",
            text3: "Klimatyzacja pozwala utrzymać komfortową temperaturę w domu, co może zmniejszyć potrzebę korzystania z ogrzewania lub chłodzenia za pomocą źródeł energii emitujących szkodliwe substancje, przyczyniając się tym samym do ograniczenia emisji gazów cieplarnianych."
        },
    ];

    const isMobile = useMediaQuery({maxWidth: 1381});

    const SlickButtonFix = ({currentSlide, slideCount, children, ...props}) => (
        <span {...props}>{children}</span>
    );



    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:<SlickButtonFix><FontAwesomeIcon style={{fontSize:"3rem"}}  icon={faAngleLeft}/></SlickButtonFix>,
        nextArrow: <SlickButtonFix><FontAwesomeIcon  style={{fontSize:"3rem"}}  icon={faAngleRight}/></SlickButtonFix>,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 10000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots:false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots:false
                }
            }
        ]
    };



    return (
        <section className="plus" id="plusy">
            <div className="container">
                <Slider {...settings} >
                    {carouselData.map((item, index) => (
                        <div className="plus_site_container" key={index}>
                            <div className="plus_site" key={index}>
                                <div className="plus_site_img_info_container">
                                <LazyLoadImage
                                    alt={item.heading1}
                                    src={item.image}
                                    height={item.image.height}
                                    width={item.image.width}
                                    style={!isMobile ? {} : { display: "none" }} // Render image only if not in mobile view
                                />
                                <div className="plus_site_img_info">
                                    <p>{item.text0}</p>
                                </div>
                                </div>
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
