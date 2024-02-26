import React, { useState } from 'react';

import img2 from "../assets/wykalifikowany.jpg"
import img3 from "../assets/zblizenie-pracownika-fizycznego-w-zakladzie-przemyslowej-linii-produkcyjnej.jpg"
import img4 from "../assets/brodaty-mezczyzna-w-ogolnej-uzyciu-tabletu.jpg"
import img5 from "../assets/wykalifikowany.jpg"
import img6 from "../assets/zblizenie-pracownika-fizycznego-w-zakladzie-przemyslowej-linii-produkcyjnej.jpg"
import img7 from "../assets/brodaty-mezczyzna-w-ogolnej-uzyciu-tabletu.jpg"
import img8 from "../assets/wykalifikowany.jpg"
import img9 from "../assets/zblizenie-pracownika-fizycznego-w-zakladzie-przemyslowej-linii-produkcyjnej.jpg"

import ImageModal from "./ImageModal";
import {LazyLoadImage} from 'react-lazy-load-image-component';

import logo from "../assets/frozekologo-shading.svg";
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

    const images = [img2, img3, img4, img5,img6,img7,img8,img9]; // Lista obrazków do przeglądania
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: <FontAwesomeIcon  icon={faAngleLeft}/>,
        nextArrow: <FontAwesomeIcon  icon={faAngleRight}/>,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 10000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1000, // dla tabletów
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true, // Ukryj strzałki dla tabletów
                    dots:false
                }
            },
            {
                breakpoint: 480, // dla telefonów
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true, // Ukryj strzałki dla telefonów
                    dots:false
                }
            }
        ]
    };



    return (
        <section className="photos" id="photos">
            <div className="container">
                <div className="photos_text">
                    <img className="photos_logo" alt={logo} src={logo} />
                    <h1>Galeria</h1>
                    <p>
                        Odkryj niezwykłe chwile z naszej codziennej pracy w naszej galerii. Przejrzyj zdjęcia,
                        które oddają atmosferę, zaangażowanie i profesjonalizm naszego zespołu. Każde zdjęcie
                        opowiada unikalną historię, a my jesteśmy dumni z każdego momentu spędzonego razem.
                        Dołącz do naszego świata i zobacz, jak wspólnie tworzymy sukces!
                    </p>
                </div>

                <div className="photos_items">
                    <Slider {...settings}>
                {images.map((image, index) => (
                        <LazyLoadImage
                            className="photos_item"
                            height={image.height}
                            width={image.width}
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
