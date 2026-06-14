import React, { useState } from "react";
import "./Gallery.css";

const Gallery = () => {
  // فيديوهات من الإنترنت (لن تحتاجي لمجلد assets بعد الآن)
  const [activeVideo, setActiveVideo] = useState("https://www.w3schools.com/html/mov_bbb.mp4");

  const videos = [
    { id: 1, src: "https://www.w3schools.com/html/mov_bbb.mp4", title: "Base Camp" },
    { id: 2, src: "https://www.w3schools.com/html/movie.mp4", title: "Ice Ascent" },
    { id: 3, src: "https://www.w3schools.com/html/mov_bbb.mp4", title: "Summit Push" },
  ];

  const images = [
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    "https://images.unsplash.com/photo-1502784444187-359ac186c5bb",
    "https://images.unsplash.com/photo-1530521954074-e64f6810b32d",
    "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5",
    "https://images.unsplash.com/photo-1522163182402-834f877f8558",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  ];

  return (
    <section className="gallery">
      <div className="header" style={{textAlign: 'center', marginBottom: '40px'}}>
        <h1 style={{color: '#102542'}}>MOUNTAIN GALLERY</h1>
        <p>Explore extreme environments and expeditions</p>
      </div>

      {/* VIDEO SECTION */}
      <div className="videoBox" style={{textAlign: 'center', marginBottom: '50px'}}>
        <video className="mainVideo" controls autoPlay muted loop style={{width: '80%', borderRadius: '20px'}}>
          <source src={activeVideo} type="video/mp4" />
        </video>
        <div className="videoControls" style={{marginTop: '20px'}}>
          {videos.map((v) => (
            <button key={v.id} onClick={() => setActiveVideo(v.src)} style={{margin: '0 10px', padding: '10px 20px', cursor: 'pointer'}}>
              {v.title}
            </button>
          ))}
        </div>
      </div>

      {/* IMAGES GRID */}
      <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', padding: '0 10%' }}>
        {images.map((src, i) => (
          <div className="card" key={i} style={{ overflow: 'hidden', borderRadius: '15px', height: '250px' }}>
            <img src={src} alt="Mountain" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;