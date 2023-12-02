import React, { useState } from 'react';
import img2 from "../assets/wykalifikowany.jpg"
import img3 from "../assets/zblizenie-pracownika-fizycznego-w-zakladzie-przemyslowej-linii-produkcyjnej.jpg"
import img4 from "../assets/brodaty-mezczyzna-w-ogolnej-uzyciu-tabletu.jpg"

import ImageModal from "./ImageModal";

const Photos = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const openModal = (imageSrc,index) => {
        setSelectedImage(imageSrc);
        setCurrentIndex(index);
        setIsModalOpen(true);

    };

    const closeModal = () => {
        setSelectedImage(null);
        setIsModalOpen(false);
    };

    const images = [img2,img3,img4]; // Lista obrazków do przeglądania

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
                <div className="photos_items_container">
                    <div className="photos_items">
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={image}
                                className="photos_item"
                                onClick={() => openModal(image,index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <ImageModal isOpen={isModalOpen} closeModal={closeModal} imageSrc={selectedImage} images={images}  currentIndex={currentIndex} // Przekazujemy currentIndex
                        setCurrentIndex={setCurrentIndex} />
        </section>
    );
};

export default Photos;
