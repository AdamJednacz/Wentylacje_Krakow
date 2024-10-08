import React from 'react';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
const center = [50.022270, 19.926915];
const markerPosition = [50.022270, 19.926915];
const zoom = 15;
const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="container">
                <div className="contact_text_container">
                    <div className="contact_text">
                        <h2>Kontakt</h2>
                        <p>Tel. +48 531 049 317</p>
                        <p>pon. - pt: 08:00 - 17:00</p>
                        <p>frozeko.klima@gmail.com</p>
                    </div>
                    <div className="map">
                    <MapContainer
                        center={center}
                        zoom={zoom}
                        style={{height: '200px', width: 'auto',zIndex:"1"}}
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
                        <p>F.H.U Frozeko Paweł Adamczak</p>
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
