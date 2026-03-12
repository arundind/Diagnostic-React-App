import React, { useState } from "react";
import "./Contact.css";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    phone: ""
  });

  const phoneNumber = "917431923720";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message =
`Diagnostic Appointment Request

Name: ${formData.name}
Email: ${formData.email}
Age: ${formData.age}
Phone: ${formData.phone}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <div className="contact-page">

      <div className="contact-overlay">

        <h1>Contact Diagnostic Center</h1>

        <div className="contact-content">

          <div className="contact-info">
            <h2>Contact Information</h2>
            <p><b>Phone:</b> +91 7431923720</p>
            <p><b>Email:</b> arundinda100@gmail.com</p>
            <p><b>Address:</b> Kolkata, India</p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>

            <h2>Book Test</h2>

            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="age"
              placeholder="Enter Age"
              value={formData.age}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Enter Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <button type="submit">
              Send to WhatsApp
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Contact;