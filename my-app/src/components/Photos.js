import React, {useState} from 'react';
import img5 from "../assets/24831890-klimatyzacja-w-domu-czy-warto.jpeg";
import ImageModal from "./ImageModal";

const Photos = () => {

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
        <section className="photos" id="photos">
            <div className="container">
            <h1>Galeria</h1>
             <div className="photos_items">
                 <img src={img5} alt={img5} className="photos_item" onClick={() => openModal(img5)}></img>
                 <img src={img5} alt={img5} className="photos_item" onClick={() => openModal(img5)}></img>
                 <img src={img5} alt={img5} className="photos_item" onClick={() => openModal(img5)}></img>
                 <img src={img5} alt={img5} className="photos_item" onClick={() => openModal(img5)}></img>
             </div>
             <div className="photos_items">
                 <img src={img5} alt={img5} className="photos_item" onClick={() => openModal(img5)}></img>
                 <img src={img5} alt={img5} className="photos_item" onClick={() => openModal(img5)}></img>
                 <img src={img5} alt={img5} className="photos_item" onClick={() => openModal(img5)}></img>
                 <img src={img5} alt={img5} className="photos_item" onClick={() => openModal(img5)}></img>
             </div>
            </div>
            <ImageModal isOpen={isModalOpen} closeModal={closeModal} imageSrc={selectedImage} />

        </section>
    );
};

export default Photos;