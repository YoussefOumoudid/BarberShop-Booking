import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Booking from "./components/Booking";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
