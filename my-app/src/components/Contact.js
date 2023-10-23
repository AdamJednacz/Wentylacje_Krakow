import React from 'react';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const center = [50.022270, 19.926915]; // Współrzędne geograficzne Krakowa
const markerPosition = [50.022270, 19.926915]; // Współrzędne geograficzne markera
const zoom = 15; // Poziom przybliżenia

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="container">
                <div className="contact_text_container">
                    <div className="contact_text">
                        <h2>Masz pytania?</h2>
                        <p>Tel. +48 531 049 317</p>
                        <p>pon. - pt: 08:00 - 17:00</p>
                        <p>adresemail@gmail.com</p>
                    </div>
                    <div className="map">
                    <MapContainer
                        center={center}
                        zoom={zoom}
                        style={{height: '300px', width: 'auto', borderRadius: "3em"}}
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={markerPosition}>
                            <Popup>Marker na mapie</Popup>
                        </Marker>
                    </MapContainer>
                    </div>
                    <div className="contact_text">
                        <p>F.H.U Frozer Paweł Adamczak</p>
                        <p>30-412 Kraków</p>
                        <p>ul. Zbrojarzy 30</p>
                        <p>NIP:9441604737</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
