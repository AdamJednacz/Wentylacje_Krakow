import React, { useState } from 'react';
import img2 from "./assets/galeriafot1.jpg"
import img3 from "./assets/galeriafot2.jpg"
import img4 from "./assets/galeriafot3.jpg"
import img5 from "./assets/galeriafot4.jpg"
import img6 from "./assets/galeriafot5.jpg"
import img7 from "./assets/galeriafot6.jpg"
import img8 from "./assets/galeriafot7.jpg"
import img9 from "./assets/galeriafot8.jpg"
import img10 from "./assets/galeriafot9.jpg"
import img11 from "./assets/galeriafot10.jpg"
import img12 from "./assets/galeriafot11.jpg"
import img13 from "./assets/galeriafot12.jpg"
import img14 from "./assets/galeriafot13.jpg"
import ImageModal from "./ImageModal";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import logo from "./assets/frozekologo-shading.svg";
import Slider from "react-slick";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Photos = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const openModal = (imageSrc, index) => {
        setSelectedImage(imageSrc);
        setCurrentIndex(index);
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setSelectedImage(null);
        setIsModalOpen(false);
    };
    const SlickButtonFix = ({currentSlide, slideCount, children, ...props}) => (
        <span {...props}>{children}</span>
    );
    const images = [img14, img13, img4, img5,img6,img7,img8,img9,img10,img11,img3,img12,img2]; // Lista obrazków do przeglądania
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow:<SlickButtonFix><FontAwesomeIcon style={{fontSize:"3rem"}}  icon={faAngleLeft}/></SlickButtonFix>,
        nextArrow: <SlickButtonFix><FontAwesomeIcon  style={{fontSize:"3rem"}}  icon={faAngleRight}/></SlickButtonFix>,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 10000,
        cssEase: "linear",
        responsive: [
            {   breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots:false
                }
            },
            {   breakpoint: 480,
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
        <section className="photos" id="photos">
            <div className="container">
                <div className="photos_text">

                    <h1>Galeria</h1>
                    <p>
                        Odkryj niezwykłe chwile z naszej codziennej pracy w naszej galerii. Przejrzyj zdjęcia,
                        które oddają atmosferę, zaangażowanie i profesjonalizm naszego zespołu. Każde zdjęcie
                        opowiada unikalną historię, a my jesteśmy dumni z każdego momentu spędzonego razem.
                        Dołącz do naszego świata i zobacz, jak wspólnie tworzymy sukces!
                    </p>
                </div>
                <div className="photos_items">
                    <Slider {...settings} >
                {images.map((image, index) => (
                        <LazyLoadImage
                            className="photos_item"
                            height={image.height}
                            width={image.width}
                            effect="blur"
                            src={image}
                            alt={image}
                            key={index}
                            onClick={() => openModal(image, index)}
                        />
                ))}
                    </Slider>
                </div>
                <ImageModal
                    isOpen={isModalOpen}
                    closeModal={closeModal}
                    imageSrc={selectedImage}
                    images={images}
                    currentIndex={currentIndex}
                    setCurrentIndex={setCurrentIndex}
                />
            </div>
        </section>
    );
};
export default Photos;
