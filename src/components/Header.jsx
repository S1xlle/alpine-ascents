import "./Header.css";
import { useEffect, useState } from "react";
import Booking from "./Booking";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [showBooking, setShowBooking] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <a href="#home" className="logo">ALPINE</a>

        <nav className="nav-links">
          <a href="#history">History</a>
          <a href="#types">Types</a>
          <a href="#techniques">Techniques</a>
          <a href="#sheltering">Shelters</a>
          <a href="#hazards">Hazards</a>
          <a href="#records">Records</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          className="book-btn"
          onClick={() => setShowBooking(true)}
        >
          Book Ascent
        </button>
      </header>

      <Booking
        isOpen={showBooking}
        onClose={() => setShowBooking(false)}
      />
    </>
  );
}

export default Header;