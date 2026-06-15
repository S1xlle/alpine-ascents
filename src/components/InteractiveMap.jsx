import React, { useEffect, useState, useMemo } from "react";
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

/* FIX ICON */
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png"
});

/* Fly animation */
function FlyToLocation({ position }) {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.flyTo(position, 5, { duration: 1.6 });
    }
  }, [position, map]);

  return null;
}

/* Fix map render */
function MapFixer() {
  const map = useMap();

  useEffect(() => {
    const t = setTimeout(() => map.invalidateSize(), 300);
    return () => clearTimeout(t);
  }, [map]);

  return null;
}

function InteractiveMap() {
  const [selectedPosition, setSelectedPosition] = useState([30, 20]);
  const [activeId, setActiveId] = useState(null);
  const [search, setSearch] = useState("");

  /* تحسين البحث */
  const filteredHubs = useMemo(() => {
    return hubs.filter((h) =>
      `${h.name} ${h.loc} ${h.level}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search]);

  const activeHub = hubs.find((h) => h.id === activeId);

  /* Routes نظيفة (كل النقاط مع بعض) */
  const routes = useMemo(() => {
    return hubs.slice(0, -1).map((h, i) => [
      [h.lat, h.lng],
      [hubs[i + 1].lat, hubs[i + 1].lng]
    ]);
  }, []);

  return (
    <section className="map-section">

      <h2 className="map-title">Global Mountaineering Network</h2>

      <div className="map-layout">

        {/* SIDEBAR */}
        <div className="map-sidebar">

          <button
            className="reset-btn"
            onClick={() => {
              setSelectedPosition([30, 20]);
              setActiveId(null);
            }}
          >
            🌍 Reset World View
          </button>

          <input
            className="search-input"
            placeholder="Search organization..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <h3>Organizations</h3>

          {filteredHubs.map((hub) => (
            <div
              key={hub.id}
              className={`hub-item ${activeId === hub.id ? "active" : ""}`}
              onClick={() => {
                setSelectedPosition([hub.lat, hub.lng]);
                setActiveId(hub.id);
              }}
            >
              <h4>{hub.name}</h4>
              <p>{hub.loc}</p>
            </div>
          ))}
        </div>

        {/* MAP */}
        <div className="map-container">

          <MapContainer center={[30, 20]} zoom={2} className="map-box">

            <MapFixer />
            <FlyToLocation position={selectedPosition} />

            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {/* Routes */}
            {routes.map((r, i) => (
              <Polyline
                key={i}
                positions={r}
                color="#E67E22"
                weight={2}
                opacity={0.6}
              />
            ))}

            {/* Markers */}
            {hubs.map((hub) => (
              <Marker key={hub.id} position={[hub.lat, hub.lng]}>
                <Tooltip>{hub.name}</Tooltip>

                <Popup>
                  <div className="popup-card">
                    <h3>{hub.name}</h3>
                    <p>📍 {hub.loc}</p>
                    <p>🏔 Alt: {hub.alt}</p>
                    <p>🌡 Weather: {hub.weather}</p>
                    <p>🎯 Level: {hub.level}</p>
                  </div>
                </Popup>

              </Marker>
            ))}

          </MapContainer>

          {/* DETAILS PANEL */}
          {activeHub && (
            <div className="details-panel">
              <h3>{activeHub.name}</h3>
              <p>📍 {activeHub.loc}</p>
              <p>🏔 Altitude: {activeHub.alt}</p>
              <p>🌡 Weather: {activeHub.weather}</p>
              <p>🎯 Level: {activeHub.level}</p>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}

export default InteractiveMap;