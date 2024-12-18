import React, { useState } from 'react';
import img2 from "../assets/galeriafot1.jpg"
import img3 from "../assets/galeriafot2.jpg"
import img4 from "../assets/galeriafot3.jpg"
import img5 from "../assets/galeriafot4.jpg"
import img6 from "../assets/galeriafot5.jpg"
import img7 from "../assets/galeriafot6.jpg"
import img8 from "../assets/galeriafot7.jpg"
import img9 from "../assets/galeriafot8.jpg"
import img10 from "../assets/galeriafot9.jpg"
import img11 from "../assets/galeriafot10.jpg"
import img12 from "../assets/galeriafot11.jpg"
import img13 from "../assets/galeriafot12.jpg"
import img14 from "../assets/galeriafot13.jpg"
import ImageModal from "./ImageModal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import useScroolAnimation from "./useScroolAnimation";

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

    const images = [img14, img13, img4, img5, img6, img7, img8, img9, img10, img11, img3, img12, img2];


    useScroolAnimation(".photos .container")
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
                <div className="photos_items">
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={1}
                        navigation
                        autoplay={{ delay: 5000 }}
                        loop={true}
                        modules={[Navigation,  Scrollbar, A11y]}
                        breakpoints={{
                            320:{slidesPerView:1,spaceBetween:50},
                            640: { slidesPerView: 1, spaceBetween: 50 },
                            768: { slidesPerView: 1, spaceBetween: 30 },
                            1024: { slidesPerView: 2, spaceBetween: 40 },
                            1280: { slidesPerView: 2, spaceBetween: 50 },
                        }}
                    >
                        {images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <LazyLoadImage
                                    className="photos_item"
                                    height={image.height}
                                    width={image.width}
                                    effect="blur"
                                    src={image}
                                    alt={image}
                                    onClick={() => openModal(image, index)}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <ImageModal
                    isOpen={isModalOpen}
                    closeModal={closeModal}
                    imageSrc={selectedImage}
                    images={images}
                    currentIndex={currentIndex}
                    setCurrentIndex={setCurrentIndex}
                />
            </div>
        </section>
    );
};

export default Photos;
