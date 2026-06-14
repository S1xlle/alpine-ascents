import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Tooltip,
  useMap,
  Polyline
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { hubs } from "./data/clubsData";
import "./InteractiveMap.css";

/* FIX DEFAULT ICON */
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png"
});

function FlyToLocation({ position }) {
  const map = useMap();
  useEffect(() => {
    if (position) map.flyTo(position, 5, { duration: 1.6 });
  }, [position, map]);
  return null;
}

function MapFixer() {
  const map = useMap();
  useEffect(() => {
    const timer = setTimeout(() => map.invalidateSize(), 300);
    return () => clearTimeout(timer);
  }, [map]);
  return null;
}

function InteractiveMap() {
  const [selectedPosition, setSelectedPosition] = useState([30, 20]);
  const [activeId, setActiveId] = useState(null);
  const [search, setSearch] = useState("");

  const filteredHubs = hubs.filter((h) => h.name.toLowerCase().includes(search.toLowerCase()));
  const activeHub = hubs.find((h) => h.id === activeId);

  const routes = hubs
    .filter((h) => h.id !== 3)
    .map((h, i, arr) => (i < arr.length - 1 ? [[arr[i].lat, arr[i].lng], [arr[i + 1].lat, arr[i + 1].lng]] : null))
    .filter(Boolean);

  return (
    <section className="map-section">
      <h2 className="map-title">Global Mountaineering Network</h2>
      <div className="map-layout">
        <div className="map-sidebar">
          <button className="reset-btn" onClick={() => { setSelectedPosition([30, 20]); setActiveId(null); }}>
            🌍 Reset World View
          </button>
          <input className="search-input" placeholder="Search organization..." value={search} onChange={(e) => setSearch(e.target.value)} />
          <h3>Organizations</h3>
          {filteredHubs.map((hub) => (
            <div key={hub.id} className={`hub-item ${activeId === hub.id ? "active" : ""}`} onClick={() => { setSelectedPosition([hub.lat, hub.lng]); setActiveId(hub.id); }}>
              <h4>{hub.name}</h4>
              <p>{hub.loc}</p>
            </div>
          ))}
        </div>
        <div className="map-container">
          <MapContainer center={[30, 20]} zoom={2} className="map-box">
            <MapFixer />
            <FlyToLocation position={selectedPosition} />
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {routes.map((r, i) => <Polyline key={i} positions={r} color="#E67E22" weight={2} opacity={0.6} />)}
            {hubs.map((hub) => (
              <Marker key={hub.id} position={[hub.lat, hub.lng]}>
                <Tooltip>{hub.name}</Tooltip>
                <Popup>
                  <div className="popup-card">
                    <h3>{hub.name}</h3>
                    <p>📍 {hub.loc}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
          {activeHub && (
            <div className="details-panel">
              <h3>{activeHub.name}</h3>
              <p>📍 <strong>{activeHub.loc}</strong></p>
              <p>🎯 {activeHub.level}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default InteractiveMap;