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
                <div className="photos_text">
                  <h1>Galeria</h1>
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
               <div className="photos_items_container">
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
            </div>
            <ImageModal isOpen={isModalOpen} closeModal={closeModal} imageSrc={selectedImage} />

        </section>
    );
};

export default Photos;