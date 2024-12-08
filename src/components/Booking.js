import React, { useState } from "react";
import "../styles/Booking.css";

const Booking = () => {
  // États pour gérer les différentes étapes du processus
  const [step, setStep] = useState(1); 
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    forWho: "self",
  });
  const [paymentMethod, setPaymentMethod] = useState("");
  const [reservationDetails, setReservationDetails] = useState(null);

  // Tarifs pour les prestations
  const services = [
    { id: 1, name: "Haircut", price: 20 },
    { id: 2, name: "Shave", price: 15 },
    { id: 3, name: "Haircut & Shave", price: 30 },
  ];

  // Gérer la sélection d'une prestation
  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setStep(2); 
  };

  // Gérer les changements du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(3); 
  };

  // Gérer la sélection de la méthode de paiement
  const handlePayment = (method) => {
    setPaymentMethod(method);
    setStep(4); 
  };

  // Gérer la soumission de la réservation
  const handleConfirmation = () => {
    if (!selectedService) {
      alert("Please select a service before proceeding.");
      return;
    }

    setReservationDetails({
      ...formData,
      service: selectedService.name,
      price: selectedService.price,
      paymentMethod: paymentMethod,
    });
    setStep(5); 
  };

  // Gérer le retour à l'accueil ou au contact
  const handleNavigation = (destination) => {
    if (destination === "home") {
      
      window.location.href = "/"; 
    } else if (destination === "contact") {
      window.location.href = "/contact"; 
    }
  };

  return (
    <div className="booking">
      {step === 1 && (
        <div>
          <h2>Select Your Service</h2>
          <ul>
            {services.map((service) => (
              <li key={service.id}>
                <button onClick={() => handleServiceSelect(service)}>
                  {service.name} - ${service.price}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {step === 2 && selectedService && (
        <div>
          <h2>Booking Form</h2>
          <form onSubmit={handleSubmit}>
            <label>
              First Name:
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Last Name:
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Phone Number:
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              For Who are you booking? (optional)
              <select
                name="forWho"
                value={formData.forWho}
                onChange={handleChange}
              >
                <option value="self">I am the main client</option>
                <option value="other">I am booking for another client</option>
              </select>
            </label>
            <br />
            <br />
            <button type="submit">Next</button>
          </form>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2>Payment Method</h2>
          <button onClick={() => handlePayment("Cash")}>Pay with Cash</button>
          <button onClick={() => handlePayment("Card")}>Pay with Card</button>
        </div>
      )}

      {step === 4 && paymentMethod && (
        <div>
          <h2>Confirm Payment</h2>
          {paymentMethod === "Card" ? (
            <div>
              <h3>Enter your Card Details</h3>
              <input type="text" placeholder="Card Number" />
              <input type="text" placeholder="Expiration Date" />
              <input type="text" placeholder="CVV" />
              <button onClick={handleConfirmation}>Confirm Reservation</button>
            </div>
          ) : (
            <div>
              <h3>Paying with cash at the barbershop on the day of your appointment</h3>
              <button onClick={handleConfirmation}>Confirm Reservation</button>
            </div>
          )}
        </div>
      )}

      {step === 5 && reservationDetails && (
        <div>
          <h2>Reservation Confirmation</h2>
          <p><strong>Service:</strong> {reservationDetails.service}</p>
          <p><strong>Price:</strong> ${reservationDetails.price}</p>
          <p><strong>Name:</strong> {reservationDetails.firstName} {reservationDetails.lastName}</p>
          <p><strong>Email:</strong> {reservationDetails.email}</p>
          <p><strong>Phone:</strong> {reservationDetails.phone}</p>
          <p><strong>Payment Method:</strong> {reservationDetails.paymentMethod}</p>
          <p>Your appointment has been successfully booked!</p>

          <div>
            <button onClick={() => handleNavigation("home")}>Return to Home</button>
            <button onClick={() => handleNavigation("contact")}>Go to Contact Us</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;
