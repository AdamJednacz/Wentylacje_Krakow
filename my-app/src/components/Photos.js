import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img2 from "../assets/wykalifikowany.jpg"
import img3 from "../assets/zblizenie-pracownika-fizycznego-w-zakladzie-przemyslowej-linii-produkcyjnej.jpg"
import img4 from "../assets/brodaty-mezczyzna-w-ogolnej-uzyciu-tabletu.jpg"
import img5 from "../assets/wykalifikowany.jpg"
import img6 from "../assets/zblizenie-pracownika-fizycznego-w-zakladzie-przemyslowej-linii-produkcyjnej.jpg"
import img7 from "../assets/brodaty-mezczyzna-w-ogolnej-uzyciu-tabletu.jpg"
import img8 from "../assets/wykalifikowany.jpg"
import img9 from "../assets/zblizenie-pracownika-fizycznego-w-zakladzie-przemyslowej-linii-produkcyjnej.jpg"
import img10 from "../assets/brodaty-mezczyzna-w-ogolnej-uzyciu-tabletu.jpg"
import ImageModal from "./ImageModal";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import logo from "../assets/frozekologo-shading.svg";


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

    const images = [img2, img3, img4, img5, img6, img7, img8, img9, img10]; // Lista obrazków do przeglądania

    const handleSliderChange = (index) => {
        setCurrentIndex(index);
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
                <div className="photos_items_container">
                    <div className="photos_items">

                        {images.map((image, index) => (
                            <LazyLoadImage
                                height={image.height}
                                width={image.width}
                                effect="blur"
                                key={index}
                                src={image}
                                alt={image}
                                className="photos_item"
                                onClick={() => openModal(image, index)}
                            />
                        ))}
                    </div>
                </div>
                <ImageModal
                    isOpen={isModalOpen}
                    closeModal={closeModal}
                    imageSrc={selectedImage}
                    images={images}
                    currentIndex={currentIndex}
                    setCurrentIndex={setCurrentIndex}
                />
                <Slider
                    min={0}
                    max={images.length - 1}
                    value={currentIndex}
                    onChange={handleSliderChange}
                />
            </div>
        </section>
    );
};

export default Photos;
