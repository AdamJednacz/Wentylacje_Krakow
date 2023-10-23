import React, { useState } from 'react';
import dyplom from "../assets/dyplom_page-0001.jpg";
import RotensoH from "../assets/Rotenso_handlowy_certyfikat.jpg";
import RotensoI from "../assets/Rotenso_instalacja_certyfikat.jpg";
import RotensoP from "../assets/Rotenso_pompy_certyfikat.jpg";
import RotensoS from "../assets/Rotenso_serwis_certyfikat.jpg";
import GreeP from "../assets/Gree_pompy_certyfikat.jpg";
import GreeS from "../assets/Gree_serwis_certyfikat.jpg";
import Gazy from "../assets/gazy_certyfikat.jpg";
import Sinclair from "../assets/Sinclair_montaż_i_serwis_certyfikat.jpg";
import Mitsubishi from "../assets/Mitsubishi_montaż_i_serwis_certyfikat.jpg";
import LG from "../assets/LG_certyfikat.jpg";
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
                        src={RotensoH}
                        alt={RotensoH}
                        className="Certificates_item"
                        onClick={() => openModal(RotensoH)}
                    />
                    <img
                        src={RotensoI}
                        alt={RotensoI}
                        className="Certificates_item"
                        onClick={() => openModal(RotensoI)}
                    />
                    <img
                        src={RotensoP}
                        alt={RotensoP}
                        className="Certificates_item"
                        onClick={() => openModal(RotensoP)}
                    />
                    <img
                        src={RotensoS}
                        alt={RotensoS}
                        className="Certificates_item"
                        onClick={() => openModal(RotensoS)}
                    />
                    <img
                        src={GreeP}
                        alt={GreeP}
                        className="Certificates_item"
                        onClick={() => openModal(GreeP)}
                    />
                    <img
                        src={GreeS}
                        alt={GreeS}
                        className="Certificates_item"
                        onClick={() => openModal(GreeS)}
                    />

                    <img
                        src={Sinclair}
                        alt={Sinclair}
                        className="Certificates_item"
                        onClick={() => openModal(Sinclair)}
                    />

                    <img
                        src={LG}
                        alt={LG}
                        className="Certificates_item"
                        onClick={() => openModal(LG)}
                    />
                    <img
                        src={Mitsubishi}
                        alt={Mitsubishi}
                        className="Certificates_item"
                        onClick={() => openModal(Mitsubishi)}
                    />
                    <img
                        src={dyplom}
                        alt={dyplom}
                        className="Certificates_item"
                        onClick={() => openModal(dyplom)}
                    />
                    <img
                        src={Gazy}
                        alt={Gazy}
                        className="Certificates_item"
                        onClick={() => openModal(Gazy)}
                    />
                </div>
            </div>
            <ImageModal isOpen={isModalOpen} closeModal={closeModal} imageSrc={selectedImage} />
        </section>
    );
};

export default Certificates;
