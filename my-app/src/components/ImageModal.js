import React from 'react';
import Modal from 'react-modal';

const ImageModal = ({ isOpen, closeModal, imageSrc }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel="Image Modal"
            className="ImageModal"
            overlayClassName="ImageModalOverlay"
        >
            <button className="ImageModalClose" onClick={closeModal}>
                &#x2715;
            </button>
            <img src={imageSrc} alt="Powiększony obrazek" />
        </Modal>
    );
};

export default ImageModal;
