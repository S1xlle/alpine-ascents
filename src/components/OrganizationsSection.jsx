import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { hubs } from "./data/clubsData";
import "./OrganizationsSection.css";

const BookingModal = ({ club, onClose }) => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: "", email: "", phone: "", participants: "", level: "Beginner" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  
  const isStep1Valid = form.name.trim() && form.email.trim();
  const isStep2Valid = form.phone.trim() && form.participants > 0;

  const handleConfirm = () => {
    if (!isStep1Valid || !isStep2Valid) {
      toast.error("Please complete all required fields");
      return;
    }
    toast.success("Booking Confirmed Successfully!");
    onClose();
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
          {step === 1 && (
            <div className="modal-step">
              <input name="name" placeholder="Full Name" onChange={handleChange} />
              <input name="email" placeholder="Email" onChange={handleChange} />
              {!isStep1Valid && <p className="error">Name & Email required</p>}
            </div>
          )}
          {step === 2 && (
            <div className="modal-step">
              <input name="phone" placeholder="Phone Number" onChange={handleChange} />
              <input name="participants" type="number" placeholder="Participants" onChange={handleChange} />
              {!isStep2Valid && <p className="error">Fill phone & participants</p>}
            </div>
          )}
          {step === 3 && (
            <div className="modal-step">
              <select name="level" onChange={handleChange}>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Pro</option>
              </select>
            </div>
          )}
          <div className="modal-actions">
            {step > 1 && <button onClick={() => setStep(step - 1)}>Back</button>}
            {step < 3 ? (
              <button onClick={() => { if (step === 1 && !isStep1Valid) return; if (step === 2 && !isStep2Valid) return; setStep(step + 1); }}>Next</button>
            ) : (
              <button className="confirm" onClick={handleConfirm}>Confirm Booking</button>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

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
    const updated = favorites.includes(id) ? favorites.filter((f) => f !== id) : [...favorites, id];
    setFavorites(updated);
    localStorage.setItem("fav", JSON.stringify(updated));
  };

  const filtered = useMemo(() => {
    return hubs.filter((h) => h.name.toLowerCase().includes(search.toLowerCase()) && (level === "All" || h.level === level));
  }, [search, level]);

  return (
    <section className="org-wrapper">
      <Toaster />
      <h1 className="title">GLOBAL ALPINE HUBS</h1>
      <div className="controls">
        <input placeholder="Search..." onChange={(e) => setSearch(e.target.value)} />
        <select onChange={(e) => setLevel(e.target.value)}>
          <option value="All">All Levels</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Pro">Pro</option>
        </select>
      </div>
      <div className="grid">
        {filtered.map((club) => (
          <motion.div key={club.id} className="card" whileHover={{ scale: 1.05 }}>
            <div className="fav" onClick={() => toggleFav(club.id)}>{favorites.includes(club.id) ? "❤️" : "🤍"}</div>
            <h3>{club.name}</h3>
            <p>{club.loc}</p>
            <div className="meta"><span>⭐ 4.9</span><span>{club.alt}</span></div>
            <div className="buttons">
              <button onClick={() => setSelected(club)}>BOOK</button>
              <button onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${club.loc}`, "_blank")}>MAP</button>
            </div>
          </motion.div>
        ))}
      </div>
      {selected && <BookingModal club={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}