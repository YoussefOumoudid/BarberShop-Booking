import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ContactUs.css";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(""); 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation des champs
    if (!name || !email || !message) {
      setError("Please fill in all fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email.");
      return;
    }

    // Si tout est valide, envoyer le message
    console.log("Message sent:", { name, email, message });

    // Réinitialiser les champs
    setName("");
    setEmail("");
    setMessage("");
    setError(""); 

    // Rediriger vers la page d'accueil après soumission
    navigate("/");
  };

  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        {error && <p className="error">{error}</p>}
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactUs;
