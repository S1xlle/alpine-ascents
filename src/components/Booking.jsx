import { useState } from "react";
import "./Booking.css";

import alpine from "../assets/booking/alpine-book.jpg";
import expedition from "../assets/booking/expedition-book.jpg";
import ice from "../assets/booking/ice-book.jpg";
import rock from "../assets/booking/rock-book.jpg";
import ski from "../assets/booking/ski-book.jpg";
import highAltitude from "../assets/booking/high-altitude-book.jpg";
import solo from "../assets/booking/solo.jpg";
import team from "../assets/booking/team.jpg";
import confirmation from "../assets/booking/confirmation-video.mp4";



const trips = [
  { id: "alpine", title: "Alpine", level: "Intermediate", img: alpine },
  { id: "expedition", title: "Expedition", level: "Advanced", img: expedition },
  { id: "ice", title: "Ice", level: "Advanced", img: ice },
  { id: "rock", title: "Rock", level: "Beginner+", img: rock },
  { id: "ski", title: "Ski", level: "Intermediate", img: ski },
  { id: "high", title: "High Altitude", level: "Expert", img: highAltitude },
];

function Booking({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [tripType, setTripType] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [members, setMembers] = useState([]);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    age: "",
    nationality: "",
    passport: "",
    experience: "",
    medical: "",
    emergencyName: "",
    emergencyPhone: "",
    groupSize: "",
  });

  if (!isOpen) return null;

  const updateForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleGroupSize = (e) => {
  const size = Number(e.target.value);

  setForm({ ...form, groupSize: e.target.value });

  if (!size || size < 1) {
    setMembers([]);
    return;
  }

  setMembers(
    Array.from({ length: size }, (_, index) => ({
      name: members[index]?.name || "",
      age: members[index]?.age || "",
      passport: members[index]?.passport || "",
      experience: members[index]?.experience || "",
    }))
  );
};

const updateMember = (index, field, value) => {
  const updatedMembers = [...members];
  updatedMembers[index][field] = value;
  setMembers(updatedMembers);
};

  const validateStep3 = () => {
  if (
    !form.fullName ||
    !form.email ||
    !form.phone ||
    !form.age ||
    !form.nationality ||
    !form.passport
  ) {
    setError("⚠ Please complete all required fields.");
    return;
  }

  if (tripType === "Team Expedition") {
    if (!form.groupSize || members.length === 0) {
      setError("⚠ Please enter your group size.");
      return;
    }

    const incompleteMember = members.some(
      (member) =>
        !member.name ||
        !member.age ||
        !member.passport ||
        !member.experience
    );

    if (incompleteMember) {
      setError("⚠ Please complete all team members information.");
      return;
    }
  }

  setError("");
  nextStep();
};

const validateStep4 = () => {
  if (
    !form.experience ||
    !form.medical ||
    !form.emergencyName ||
    !form.emergencyPhone
  ) {
    setError("⚠ Please complete all safety information.");
    return;
  }

  setError("");
  nextStep();
};

  const bookingId = "AA-" + Math.floor(10000 + Math.random() * 90000);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 5));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const submitBooking = (e) => {
    e.preventDefault();
    setSubmitted(true);
    localStorage.setItem(
      "last_booking",
      JSON.stringify({
        selectedTrip,
        tripType,
        form,
        members,
        bookingId,
      })
    );
  };

  return (
    <div className="booking-overlay">
      <div className="booking-modal">
        <button className="booking-close" onClick={onClose}>×</button>

        {!submitted ? (
          <>
            <div className="booking-head">
              <div>
                <p className="booking-kicker">Expedition Registration</p>
                <h2>Book Your Ascent</h2>
              </div>
              <p className="booking-subtitle">
                Build your mountain journey step by step.
              </p>
            </div>

            <div className="booking-steps">
              <span className={step === 1 ? "active" : ""}>01 Expedition</span>
              <span className={step === 2 ? "active" : ""}>02 Team</span>
              <span className={step === 3 ? "active" : ""}>03 Personal</span>
              <span className={step === 4 ? "active" : ""}>04 Safety</span>
              <span className={step === 5 ? "active" : ""}>05 Confirm</span>
            </div>

            {step === 1 && (
              <div className="booking-layout">
                <aside className="booking-panel">
                  <h3>Choose Expedition</h3>
                  <p>
                    Select the climbing experience that matches your goal and
                    skill level.
                  </p>

                  {selectedTrip && (
                    <div className="booking-summary-mini">
                      <span>Selected</span>
                      <strong>{selectedTrip.title}</strong>
                      <small>{selectedTrip.level}</small>
                    </div>
                  )}

                  <button
                    className="booking-next"
                    disabled={!selectedTrip}
                    onClick={nextStep}
                  >
                    Continue →
                  </button>
                </aside>

                <div className="booking-grid">
                  {trips.map((trip) => (
                    <button
                      key={trip.id}
                      className={`booking-card ${
                        selectedTrip?.id === trip.id ? "selected" : ""
                      }`}
                      onClick={() => setSelectedTrip(trip)}
                    >
                      <img src={trip.img} alt={trip.title} />
                      <div className="card-info">
                        <span>{trip.title}</span>
                        <small>{trip.level}</small>
                      </div>
                      {selectedTrip?.id === trip.id && (
                        <b className="selected-badge">✓</b>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="booking-layout">
                <aside className="booking-panel">
                  <h3>Travel Mode</h3>
                  <p>
                    Choose whether this expedition is a solo challenge or a team
                    journey.
                  </p>

                  <div className="booking-actions">
                    <button className="booking-back" onClick={prevStep}>
                      ← Back
                    </button>
                    <button
                      className="booking-next"
                      disabled={!tripType}
                      onClick={nextStep}
                    >
                      Continue →
                    </button>
                  </div>
                </aside>

                <div className="team-options">
                  <button
                    className={tripType === "Solo Ascent" ? "selected" : ""}
                    onClick={() => setTripType("Solo Ascent")}
                  >
                    <img src={solo} alt="Solo expedition" />
                    <span>Solo Ascent</span>
                  </button>

                  <button
                    className={tripType === "Team Expedition" ? "selected" : ""}
                    onClick={() => setTripType("Team Expedition")}
                  >
                    <img src={team} alt="Team expedition" />
                    <span>Team Expedition</span>
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <form className="booking-form" onSubmit={(e) => e.preventDefault()}>
                <div className="booking-form-title">
                  <h3>Personal Details</h3>
                  <p>Enter traveler information for the expedition record.</p>
                </div>

                <div className="form-grid">
                  <input name="fullName" placeholder="Full Name" value={form.fullName} onChange={updateForm} required />
                  <input name="email" type="email" placeholder="Email" value={form.email} onChange={updateForm} required />
                  <input name="phone" placeholder="Phone Number" value={form.phone} onChange={updateForm} required />
                  <input name="age" type="number" placeholder="Age" value={form.age} onChange={updateForm} required />
                  <input name="nationality" placeholder="Nationality" value={form.nationality} onChange={updateForm} />
                  <select name="passport" value={form.passport} onChange={updateForm} required>
                    <option value="">Passport Available?</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>

                  {tripType === "Team Expedition" && (
                    <input
                     name="groupSize"
                     type="number"
                     min="1"
                     placeholder="Group Size"
                     value={form.groupSize}
                     onChange={handleGroupSize}
                    />
                  )}
                </div>
                
                {tripType === "Team Expedition" && members.length > 0 && (
  <div className="members-box">
    <h4>Team Members Information</h4>

    <div className="members-grid">
      {members.map((member, index) => (
        <div className="member-card" key={index}>
          <span>Member {index + 1}</span>

          <input
            placeholder="Member Name"
            value={member.name}
            onChange={(e) => updateMember(index, "name", e.target.value)}
          />

          <input
            type="number"
            placeholder="Age"
            value={member.age}
            onChange={(e) => updateMember(index, "age", e.target.value)}
          />

          <select
            value={member.passport}
            onChange={(e) => updateMember(index, "passport", e.target.value)}
          >
            <option value="">Passport?</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <select
            value={member.experience}
            onChange={(e) => updateMember(index, "experience", e.target.value)}
          >
            <option value="">Experience</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            <option value="Expert">Expert</option>
          </select>
        </div>
      ))}
    </div>
  </div>
)}

                {error && <p className="form-error">{error}</p>} 
                <div className="booking-actions bottom">
                  <button className="booking-back" type="button" onClick={prevStep}>
                    ← Back
                  </button>
                  <button className="booking-next" type="button" onClick={validateStep3}>
                    Continue →
                  </button>
                </div>
              </form>
            )}

            {step === 4 && (
              <form className="booking-form" onSubmit={(e) => e.preventDefault()}>
                <div className="booking-form-title">
                  <h3>Safety Check</h3>
                  <p>Mountaineering requires emergency and medical readiness.</p>
                </div>

                <div className="form-grid">
                  <select name="experience" value={form.experience} onChange={updateForm} required>
                    <option value="">Experience Level</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                    <option value="Expert">Expert</option>
                  </select>

                  <select name="medical" value={form.medical} onChange={updateForm} required>
                    <option value="">Medical Condition?</option>
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                  </select>

                  <input name="emergencyName" placeholder="Emergency Contact Name" value={form.emergencyName} onChange={updateForm} required />
                  <input name="emergencyPhone" placeholder="Emergency Phone Number" value={form.emergencyPhone} onChange={updateForm} required />
                </div>

                {error && <p className="form-error">{error}</p>}
                <div className="booking-actions bottom">
                  <button className="booking-back" type="button" onClick={prevStep}>
                    ← Back
                  </button>
                  <button className="booking-next" type="button" onClick={validateStep4}>
                    Continue →
                  </button>
                </div>
              </form>
            )}

            {step === 5 && (
              <form className="confirm-step" onSubmit={submitBooking}>
                <div className="expedition-pass">
                  <h3>Expedition Pass</h3>
                  <p><strong>Trip:</strong> {selectedTrip?.title}</p>
                  <p><strong>Mode:</strong> {tripType}</p>
                  <p><strong>Name:</strong> {form.fullName || "Not entered"}</p>
                  <p><strong>Passport:</strong> {form.passport || "Not entered"}</p>
                  <p><strong>Experience:</strong> {form.experience || "Not entered"}</p>
                </div>

                <div className="booking-actions bottom">
                  <button className="booking-back" type="button" onClick={prevStep}>
                    ← Back
                  </button>
                  <button className="booking-next" type="submit">
                    Confirm Booking
                  </button>
                </div>
              </form>
            )}
          </>
        ) : (
          <div className="booking-success">
           <video
            src={confirmation}
            autoPlay
            muted
            loop
            playsInline
            className="confirmation-video"
          />
            <div className="success-content">
              <h2>Expedition Confirmed</h2>
              <p>Your adventure is booked.</p>
              <strong>{bookingId}</strong>
              <button className="booking-next" onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Booking;