import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const center = [50.0647, 19.9450]; // Współrzędne geograficzne Krakowa
const markerPosition = [50.0647, 19.9450]; // Współrzędne geograficzne markera
const zoom = 15; // Poziom przybliżenia

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="container">
                <h1>Kontakt</h1>

                <div className="contact_text_container">
                    <div className="contact_text">
                        <p>Kraków 31-004</p>
                        <p>ul. Zbrojarzy 4</p>
                        <p>Nip: 5252934414</p>
                        <p>KRS: 0001005456</p>
                    </div>

                        <MapContainer
                            center={center}
                            zoom={zoom}
                            style={{ height: '300px', width: '30%' ,borderRadius:"3em" }}
                            className="map"
                        >
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={markerPosition}>
                                <Popup>Marker na mapie</Popup>
                            </Marker>
                        </MapContainer>

                    <div className="contact_text">
                        <h2>Masz pytania?</h2>
                        <p>+48 500 100 544</p>
                        <p>pon. - pt: 08:00 - 17:00</p>
                        <p>adresemail@gmail.com</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
