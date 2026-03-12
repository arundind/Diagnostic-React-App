import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">

      <div className="about-hero">
        <h1>About Our Diagnostic Center</h1>
      </div>

      <div className="about-section">

        <div className="about-text">

          <p>
            Our diagnostic center is dedicated to providing high-quality
            laboratory testing services. We use advanced medical technology
            and certified technicians to ensure accurate and reliable results.
          </p>

          <p>
            Our mission is to provide fast, safe, and affordable diagnostic
            services for patients. We offer a wide range of tests including
            Blood Tests, X-Ray, MRI, CT Scan and Full Body Checkups.
          </p>

          <p>
            With modern equipment and experienced staff, we ensure
            quality healthcare services for everyone.
          </p>

        </div>

        <div className="about-image">

          <img
            src="https://images.unsplash.com/photo-1581595219315-a187dd40c322"
            alt="Diagnostic Lab"
          />

        </div>

      </div>


      <div className="about-features">

        <h2>Why Choose Us</h2>

        <div className="feature-cards">

          <div className="card">
            <h3>Advanced Technology</h3>
            <p>Modern diagnostic machines for accurate test results.</p>
          </div>

          <div className="card">
            <h3>Expert Doctors</h3>
            <p>Experienced doctors and certified technicians.</p>
          </div>

          <div className="card">
            <h3>Fast Reports</h3>
            <p>Quick and reliable report delivery system.</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default About;