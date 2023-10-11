import React, { useState } from 'react';
import img4 from "../assets/PEFC - logo.png";
import ImageModal from './ImageModal';

const Certificates = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const openModal = (imageSrc) => {
        setSelectedImage(imageSrc);
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setSelectedImage(null);
        setIsModalOpen(false);
    };
    return (
        <section className="Certificates" id="certyfikaty">
            <div className="container">
                <h1>Certyfikaty</h1>
                <div className="Certificates_items">
                    <img
                        src={img4}
                        alt={img4}
                        className="Certificates_item"
                        onClick={() => openModal(img4)}
                    />
                    <img
                        src={img4}
                        alt={img4}
                        className="Certificates_item"
                        onClick={() => openModal(img4)}
                    />
                </div>
            </div>
            <ImageModal isOpen={isModalOpen} closeModal={closeModal} imageSrc={selectedImage} />
        </section>
    );
};

export default Certificates;
