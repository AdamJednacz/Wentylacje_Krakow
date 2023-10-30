import React, { useState } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const ImageModal = ({ isOpen, closeModal, imageSrc, images, currentIndex, setCurrentIndex }) => {
    const customStyles = {
        content: {
            top: '54%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '95%',
            zIndex: "100",
            padding: "0",
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            zIndex: "100"
        },
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel="Image Modal"
            style={customStyles}
            appElement={document.getElementById('root')}
        >
            <button className="ImageModalClose" onClick={closeModal}>
                &#x2715;
            </button>
            <div className="modal_img_arrow_container">
                <FontAwesomeIcon icon={faAngleLeft} className="modal_icons" onClick={handlePrev} />
                <img
                    src={images[currentIndex]}
                    alt="Powiększony obrazek"
                    style={{ width: '100%', height: 'auto' }}
                />
                <FontAwesomeIcon icon={faAngleRight} className="modal_icons" onClick={handleNext} />
            </div>
        </Modal>
    );
};

export default ImageModal;
