import React, { useState } from "react";
import "./Gallery.css";

// VIDEOS
import baseCampJourney from "../assets/baseCampJourney.mp4";
import iceWallAscent from "../assets/iceWallAscent.mp4";
import stormSummitPush from "../assets/stormSummitPush.mp4";

// IMAGES
import glacierCamp from "../assets/glacier-camp.jpg";
import summitView from "../assets/summit-view.jpg";
import iceCave from "../assets/ice-cave-exploration.jpg";
import rockClimb from "../assets/rock-face-climb.jpg";
import alpineSunset from "../assets/alpine-sunset.jpg";

export default function Gallery() {
  const videos = [
    { id: 1, src: baseCampJourney, title: "Base Camp Journey" },
    { id: 2, src: iceWallAscent, title: "Ice Wall Ascent" },
    { id: 3, src: stormSummitPush, title: "Storm Summit Push" },
  ];

  const images = [
    { src: glacierCamp, title: "Glacier Camp", desc: "High altitude base camp" },
    { src: summitView, title: "Summit View", desc: "Peak mountain view" },
    { src: iceCave, title: "Ice Cave", desc: "Frozen exploration" },
    { src: rockClimb, title: "Rock Climb", desc: "Technical climbing" },
    { src: alpineSunset, title: "Alpine Sunset", desc: "Golden mountains" },
  ];

  const [activeVideo, setActiveVideo] = useState(videos[0].src);
  const [fade, setFade] = useState(false);
  const [lightbox, setLightbox] = useState(null);

  const changeVideo = (src) => {
    setFade(true);
    setTimeout(() => {
      setActiveVideo(src);
      setFade(false);
    }, 250);
  };

  return (
    <section className="gallery">

      {/* HEADER */}
      <div className="gallery-header">
        <h1>MOUNTAIN GALLERY</h1>
        <p>Explore extreme environments & expeditions</p>
      </div>

      {/* VIDEO SECTION */}
      <div className="videoBox">

        <video
          key={activeVideo}
          className={`mainVideo ${fade ? "fade-out" : "fade-in"}`}
          controls
          autoPlay
          muted
          loop
        >
          <source src={activeVideo} type="video/mp4" />
        </video>

        <div className="videoControls">
          {videos.map((v) => (
            <button
              key={v.id}
              className={activeVideo === v.src ? "active" : ""}
              onClick={() => changeVideo(v.src)}
              aria-label={`Play ${v.title}`}
            >
              {v.title}
            </button>
          ))}
        </div>

      </div>

      {/* IMAGES GRID */}
      <div className="grid">
        {images.map((img, i) => (
          <div
            className="card"
            key={i}
            onClick={() => setLightbox(img)}
          >
            <img src={img.src} alt={img.title} />
            <div className="overlay">
              <h3>{img.title}</h3>
              <p>{img.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <img src={lightbox.src} alt={lightbox.title} />
          <div className="lightbox-text">
            <h3>{lightbox.title}</h3>
            <p>{lightbox.desc}</p>
          </div>
        </div>
      )}

    </section>
  );
}