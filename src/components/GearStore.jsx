import "./GearStore.css";
import { useEffect, useState } from "react";
import { gsap } from "gsap";

import alpineHelmet from "../assets/alpine-gear/alpine-helmet.png";
import alpineHarness from "../assets/alpine-gear/alpine-harness.png";
import alpineRope from "../assets/alpine-gear/alpine-rope.png";

import expeditionGps from "../assets/alpine-gear/expedition-gps.png";
import expeditionTent from "../assets/alpine-gear/expedition-tent.png";
import expeditionBag from "../assets/alpine-gear/expedition-sleeping-bag.png";

import iceAxe from "../assets/alpine-gear/ice-axe.png.png";
import iceCrampons from "../assets/alpine-gear/ice-crampons.png.png";
import iceHelmet from "../assets/alpine-gear/ice-helmet.png.png";

import rockShoes from "../assets/alpine-gear/rock-shoes.png.png";
import rockRope from "../assets/alpine-gear/rock-rope.png.png";
import rockQuickdraws from "../assets/alpine-gear/rock-quickdraws.png.png";

import skiBeacon from "../assets/alpine-gear/ski-beacon.png.png";
import skiProbe from "../assets/alpine-gear/ski-probe.png.png";
import skiShovel from "../assets/alpine-gear/ski-shovel.png.png";

import highBoots from "../assets/alpine-gear/high-boots.png.png";
import highOxygen from "../assets/alpine-gear/high-oxygen.png.png";
import highSuit from "../assets/alpine-gear/high-downsuit.png.png";

const gear = {
  Alpine: [
    { name: "Alpine Helmet", price: 120, sizes: ["S", "M", "L"], img: alpineHelmet },
    { name: "Climbing Harness", price: 95, sizes: ["XS", "S", "M", "L"], img: alpineHarness },
    { name: "Dynamic Rope", price: 180, sizes: ["50m", "60m", "70m"], img: alpineRope },
  ],
  Expedition: [
    { name: "GPS Navigator", price: 260, sizes: ["Standard"], img: expeditionGps },
    { name: "Expedition Tent", price: 340, sizes: ["2P", "3P", "4P"], img: expeditionTent },
    { name: "Sleeping Bag", price: 210, sizes: ["-10°C", "-20°C"], img: expeditionBag },
  ],
  Ice: [
    { name: "Ice Axe", price: 210, sizes: ["55cm", "60cm", "65cm"], img: iceAxe },
    { name: "Ice Crampons", price: 160, sizes: ["38-40", "41-43", "44-46"], img: iceCrampons },
    { name: "Ice Helmet", price: 135, sizes: ["S", "M", "L"], img: iceHelmet },
  ],
  Rock: [
    { name: "Rock Shoes", price: 145, sizes: ["36", "38", "40", "42", "44"], img: rockShoes },
    { name: "Rock Rope", price: 175, sizes: ["60m", "70m"], img: rockRope },
    { name: "Quickdraw Set", price: 130, sizes: ["6 Pack", "12 Pack"], img: rockQuickdraws },
  ],
  Ski: [
    { name: "Avalanche Beacon", price: 299, sizes: ["One Size"], img: skiBeacon },
    { name: "Snow Probe", price: 95, sizes: ["240cm", "280cm"], img: skiProbe },
    { name: "Snow Shovel", price: 89, sizes: ["Compact", "Pro"], img: skiShovel },
  ],
  "High Altitude": [
    { name: "High Boots", price: 420, sizes: ["39", "40", "41", "42", "43", "44"], img: highBoots },
    { name: "Oxygen System", price: 680, sizes: ["Standard Kit"], img: highOxygen },
    { name: "Down Suit", price: 540, sizes: ["S", "M", "L", "XL"], img: highSuit },
  ],
};

function GearStore() {
  const [active, setActive] = useState("Alpine");
  const [selectedSizes, setSelectedSizes] = useState({});
  const [loadout, setLoadout] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      ".store-product",
      { opacity: 0, y: 35 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" }
    );
  }, [active]);

  const addToLoadout = (item) => {
    const size = selectedSizes[item.name] || item.sizes[0];

    setLoadout((prev) => [
      ...prev,
      {
        ...item,
        selectedSize: size,
      },
    ]);
  };

  const total = loadout.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="gear-store" id="gear">
      <div className="store-header">
        <div>
          <p>ELITE EXPEDITION EQUIPMENT</p>
          <h2>Gear Store</h2>
        </div>

        <button className="loadout-btn" onClick={() => setShowCart(true)}>
          View Loadout <span>{loadout.length}</span>
        </button>
      </div>

      <div className="store-tabs">
        {Object.keys(gear).map((cat) => (
          <button
            key={cat}
            className={active === cat ? "active" : ""}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="store-grid">
        {gear[active].map((item) => (
          <div className="store-product" key={item.name}>
            <div className="product-visual">
              <img src={item.img} alt={item.name} />
            </div>

            <div className="product-details">
              <span>{active}</span>
              <h3>{item.name}</h3>

              <div className="product-price-row">
                <strong>${item.price}</strong>
                <small>Premium mountain gear</small>
              </div>

              <div className="size-picker">
                {item.sizes.map((size) => (
                  <button
                    key={size}
                    className={
                      (selectedSizes[item.name] || item.sizes[0]) === size
                        ? "selected"
                        : ""
                    }
                    onClick={() =>
                      setSelectedSizes({ ...selectedSizes, [item.name]: size })
                    }
                  >
                    {size}
                  </button>
                ))}
              </div>

              <button className="add-btn" onClick={() => addToLoadout(item)}>
                Add to Loadout
              </button>
            </div>
          </div>
        ))}
      </div>

      {showCart && (
        <div className="loadout-overlay">
          <div className="loadout-panel">
            <button className="close-cart" onClick={() => setShowCart(false)}>
              ×
            </button>

            <p>EXPEDITION LOADOUT</p>
            <h3>Your Selected Gear</h3>

            {loadout.length === 0 ? (
              <span className="empty-cart">No gear added yet.</span>
            ) : (
              <div className="cart-items">
                {loadout.map((item, index) => (
                  <div className="cart-item" key={`${item.name}-${index}`}>
                    <img src={item.img} alt={item.name} />

                    <div>
                      <strong>{item.name}</strong>
                      <small>Size: {item.selectedSize}</small>
                    </div>

                    <b>${item.price}</b>
                  </div>
                ))}
              </div>
            )}

            <div className="cart-total">
              <span>Total</span>
              <strong>${total}</strong>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default GearStore;