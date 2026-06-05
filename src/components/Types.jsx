import "./Types.css";

import alpine from "../assets/types/alpine.jpg";
import expedition from "../assets/types/expedition.jpg";
import ice from "../assets/types/ice.jpg";
import rock from "../assets/types/rock.jpg";
import ski from "../assets/types/ski.jpg";
import highAltitude from "../assets/types/high-altitude.jpg";

const styles = [
  {
    number: "01",
    title: "Alpine Climbing",
    tag: "Mixed Terrain",
    image: alpine,
    text: "Fast, technical climbing across rock, snow, ice, and exposed alpine ridges.",
  },
  {
    number: "02",
    title: "Expedition Climbing",
    tag: "Long Journey",
    image: expedition,
    text: "Large mountain objectives that demand planning, camps, teamwork, and endurance.",
  },
  {
    number: "03",
    title: "Ice Climbing",
    tag: "Frozen Walls",
    image: ice,
    text: "Ascending frozen waterfalls and icy faces using axes, crampons, and ropes.",
  },
  {
    number: "04",
    title: "Rock Climbing",
    tag: "Vertical Skill",
    image: rock,
    text: "Climbing steep natural rock using balance, strength, focus, and protection gear.",
  },
  {
    number: "05",
    title: "Ski Mountaineering",
    tag: "Snow Freedom",
    image: ski,
    text: "A cinematic blend of climbing, skiing, navigation, and snowy mountain travel.",
  },
  {
    number: "06",
    title: "High Altitude Climbing",
    tag: "Death Zone",
    image: highAltitude,
    text: "Extreme climbing where oxygen is limited, weather is brutal, and every step matters.",
  },
];

function Types() {
  return (
    <section className="types-section" id="types">
      <div className="types-header">
        <p className="types-kicker">Explore The Wild Heights</p>
        <h2>Mountaineering Styles</h2>
        <span>Six ways to face the mountain.</span>
      </div>

      <div className="cinematic-grid">
        {styles.map((style) => (
          <article className="style-poster" key={style.title}>
            <img src={style.image} alt={style.title} />

            <div className="poster-overlay"></div>

            <div className="poster-content">
              <span className="poster-number">{style.number}</span>
              <p className="poster-tag">{style.tag}</p>
              <h3>{style.title}</h3>
              <p className="poster-text">{style.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Types;