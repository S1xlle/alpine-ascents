import { useEffect } from "react";
import "./History.css";

const history = [
  {
    year: "Ancient",
    title: "Sacred Ascents",
    text: "Ancient mountain ascents were often connected to religion and spiritual beliefs.",
  },
  {
    year: "18th Century",
    title: "Modern Mountaineering",
    text: "Modern mountaineering began to develop in Europe during the 18th century.",
  },
  {
    year: "1786",
    title: "Mont Blanc",
    text: "The ascent of Mont Blanc became one of the greatest milestones in climbing history.",
  },
  {
    year: "1854–1865",
    title: "Golden Age",
    text: "The Golden Age of Alpinism marked a legendary era of first ascents.",
  },
  {
    year: "Worldwide",
    title: "Global Expansion",
    text: "Mountaineering later spread worldwide across the Himalayas, Andes, and beyond.",
  },
];

function History() {
  useEffect(() => {
    const elements = document.querySelectorAll(".history-point, .history-path");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.25 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="history-section" id="history">
      <div className="history-title">
        <p>The Ascent Through Time</p>
        <h2>History of Mountaineering</h2>
        <span>From sacred peaks to global expeditions.</span>
      </div>

      <div className="mountain-story">
        <div className="big-mountain"></div>

        <svg className="history-path" viewBox="0 0 500 700">
          <path
            d="M245 650 C120 560 390 505 250 430 C120 360 380 315 250 250 C145 190 330 145 250 75"
            fill="none"
          />
        </svg>

        {history.map((item, index) => (
          <div className={`history-point point-${index + 1}`} key={item.title}>
            <div className="dot"></div>
            <div className="history-text">
              <span>{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default History;