import React, { useState } from 'react';
import dyplom1 from "../assets/dyplom_page-0001.jpg";
import RotensoH2 from "../assets/Rotenso_handlowy_certyfikat.jpg";
import RotensoI3 from "../assets/Rotenso_instalacja_certyfikat.jpg";
import RotensoP4 from "../assets/Rotenso_pompy_certyfikat.jpg";
import RotensoS5 from "../assets/Rotenso_serwis_certyfikat.jpg";
import GreeP6 from "../assets/Gree_pompy_certyfikat.jpg";
import GreeS7 from "../assets/Gree_serwis_certyfikat.jpg";
import Gazy8 from "../assets/gazy_certyfikat.jpg";
import Sinclair9 from "../assets/Sinclair_montaż_i_serwis_certyfikat.jpg";
import Mitsubishi10 from "../assets/Mitsubishi_montaż_i_serwis_certyfikat.jpg";
import LG11 from "../assets/LG_certyfikat.jpg";
import Samsung from "../assets/Certyfikat_Samsung_page-0001.jpg";
import Haier from "../assets/Certyfikat autoryzowany HAIER_page-0001.jpg";
import ImageModal from './ImageModal';

const Certificates = () => {

    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = (imageSrc, index) => {
        setSelectedImage(imageSrc);
        setCurrentIndex(index);// Aktualizacja imageIndex na podstawie indeksu klikniętego obrazka
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setIsModalOpen(false);
    };

    const images = [RotensoH2, RotensoS5, RotensoI3, RotensoP4, GreeP6, GreeS7, Sinclair9, LG11 ,dyplom1,Gazy8, Mitsubishi10,Samsung,Haier ];

    return (
        <section className="Certificates" id="certyfikaty">
            <div className="container">
                <h1>Certyfikaty</h1>
                <div className="Certificates_items">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={image}
                            className="Certificates_item"
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
                currentIndex={currentIndex} // Przekazujemy currentIndex
                setCurrentIndex={setCurrentIndex}
            />
        </section>
    );
};

export default Certificates;
