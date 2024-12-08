import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">Barbershop</div>
        <ul className="navbar-links">
          <li onClick={() => navigate("/contact")}>Contact Us</li>
          <li onClick={() => navigate("/booking")}>Book Appointment</li>
        </ul>
      </nav>

      <section className="home">
        <img
          src="https://i.imgur.com/wKwJHE8.jpeg"
          alt="Barbershop"
          className="home-image"
        />
        <p className="home-description">
        Welcome to our Barbershop! Discover a unique experience where tradition and modernity meet to offer you the perfect cut. Our services include:
        </p>
        <ul className="services-list">
          <li>✂️ Classic and modern cuts</li>
          <li>🧖‍♂️ Beard care</li>
        </ul>
        <div className="home-buttons">
          <button onClick={() => navigate("/contact")}>Contact Us</button>
          <button onClick={() => navigate("/booking")}>Book Appointment</button>
        </div>
      </section>
    </>
  );
};

export default Home;
