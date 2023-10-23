import React from 'react';
import Modal from 'react-modal';
const ImageModal = ({ isOpen, closeModal, imageSrc }) => {
    const customStyles = {
        content: {
            top: '54%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '60%', // Maksymalna szerokość modalu na desktopie
            zIndex:"100",
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            zIndex: "100"// Przykrycie tła z poziomem przezroczystości
        },
    };
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel="Image Modal"
            style={customStyles} // Stosowanie niestandardowych stylów
        >
            <button className="ImageModalClose" onClick={closeModal}>
                &#x2715;
            </button>
            <img
                src={imageSrc}
                alt="Powiększony obrazek"
                style={{ width: '60%', height: 'auto',  }} // Dostosowanie rozmiaru obrazka
            />
        </Modal>
    );
};

export default ImageModal;
