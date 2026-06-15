import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { hubs } from "./data/clubsData";
import "./OrganizationsSection.css";

/* =========================
   BOOKING MODAL (IMPROVED)
========================= */
const BookingModal = ({ club, onClose }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    participants: "",
    level: "Beginner"
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const isStep1Valid =
    form.name.trim().length >= 3 &&
    form.email.includes("@");

  const isStep2Valid =
    form.phone.trim().length >= 6 &&
    Number(form.participants) > 0;

  const nextStep = () => {
    if (step === 1 && !isStep1Valid)
      return toast.error("Enter valid name & email");

    if (step === 2 && !isStep2Valid)
      return toast.error("Enter valid phone & participants");

    setStep((s) => s + 1);
  };

  const handleConfirm = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast.success("Booking Confirmed Successfully!");
      onClose();
    }, 1200);
  };

  return (
    <AnimatePresence>
      <div className="modal-overlay" onClick={onClose}>
        <motion.div
          className="modal-box"
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
        >
          <h2>🏔 {club.name}</h2>

          {/* STEP 1 */}
          {step === 1 && (
            <div className="modal-step">
              <input
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
              />
              <input
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
              />
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="modal-step">
              <input
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
              />
              <input
                name="participants"
                type="number"
                placeholder="Participants"
                value={form.participants}
                onChange={handleChange}
              />
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="modal-step">
              <select
                name="level"
                value={form.level}
                onChange={handleChange}
              >
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Pro</option>
              </select>

              <div className="summary">
                <p>{form.name}</p>
                <p>{form.email}</p>
                <p>{form.participants} participants</p>
                <p>{form.level}</p>
              </div>
            </div>
          )}

          {/* ACTIONS */}
          <div className="modal-actions">
            {step > 1 && (
              <button onClick={() => setStep(step - 1)}>
                Back
              </button>
            )}

            {step < 3 ? (
              <button onClick={nextStep}>Next</button>
            ) : (
              <button
                className="confirm"
                onClick={handleConfirm}
                disabled={loading}
              >
                {loading ? "Booking..." : "Confirm Booking"}
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

/* =========================
   MAIN SECTION
========================= */
export default function OrganizationsSection() {
  const [search, setSearch] = useState("");
  const [level, setLevel] = useState("All");
  const [selected, setSelected] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("fav")) || [];
    setFavorites(saved);
  }, []);

  const toggleFav = (id) => {
    const updated = favorites.includes(id)
      ? favorites.filter((f) => f !== id)
      : [...favorites, id];

    setFavorites(updated);
    localStorage.setItem("fav", JSON.stringify(updated));
  };

  /* SMART FILTER (IMPROVED) */
  const filtered = useMemo(() => {
    return hubs.filter((h) => {
      const matchSearch =
        `${h.name} ${h.loc} ${h.level}`
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchLevel =
        level === "All" || h.level === level;

      return matchSearch && matchLevel;
    });
  }, [search, level]);

  return (
    <section className="org-wrapper">
      <Toaster />

      <h1 className="title">GLOBAL ALPINE HUBS</h1>

      {/* CONTROLS */}
      <div className="controls">
        <input
          placeholder="Search by name, country, level..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <select onChange={(e) => setLevel(e.target.value)}>
          <option value="All">All Levels</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Pro">Pro</option>
        </select>
      </div>

      {/* GRID */}
      <div className="grid">
        {filtered.map((club) => (
          <motion.div
            key={club.id}
            className="card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div
              className="fav"
              onClick={() => toggleFav(club.id)}
            >
              {favorites.includes(club.id)
                ? "❤️"
                : "🤍"}
            </div>

            <h3>{club.name}</h3>
            <p>{club.loc}</p>

            <div className="meta">
              <span>⭐ 4.9</span>
              <span>{club.alt}</span>
            </div>

            <div className="buttons">
              <button onClick={() => setSelected(club)}>
                BOOK
              </button>

              <button
                onClick={() =>
                  window.open(
                    `https://www.google.com/maps/search/?api=1&query=${club.loc}`,
                    "_blank"
                  )
                }
              >
                MAP
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      {selected && (
        <BookingModal
          club={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}