import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './InteractiveMap.css';

const InteractiveMap = () => {
    // إحداثيات بعض نوادي التسلق العالمية (مثال)
    const clubs = [
        { name: "Chamonix Alpine Club", lat: 45.9237, lng: 6.8694 },
        { name: "Nepal Mountaineering Association", lat: 27.7172, lng: 85.3240 }
    ];

    return (
        <div className="map-wrapper">
            <h2 className="map-title">Global Alpine Hubs</h2>
            <MapContainer center={[30.0, 20.0]} zoom={2} className="map-box">
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {clubs.map((club, index) => (
                    <Marker key={index} position={[club.lat, club.lng]}>
                        <Popup>
                            <div className="popup-content">
                                <h3>{club.name}</h3>
                                <button onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${club.name}`)}>
                                    Navigate Now
                                </button>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default InteractiveMap;