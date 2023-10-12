import React from 'react';
import { withGoogleMap, withScriptjs, GoogleMap, Marker } from 'react-google-maps';

function Map() {
    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: 52.5200, lng: 13.4050 }} // Ustaw swoje współrzędne
        >
            <Marker position={{ lat: 52.5200, lng: 13.4050 }} /> {/* Dodaj znacznik na mapie */}
        </GoogleMap>
    );
}
