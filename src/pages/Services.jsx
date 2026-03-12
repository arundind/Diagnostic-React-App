import React from "react";
import "./Services.css";

function Services() {
  return (
    <div className="services-page">

      <h1>Our Diagnostic Services</h1>

      <div className="services-container">

        <div className="service-card">
          <img
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
            alt="Blood Test"
          />
          <h3>Blood Test</h3>
          <p>Accurate blood testing using modern laboratory equipment.</p>
        </div>

        <div className="service-card">
          <img
            src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b"
            alt="X-Ray"
          />
          <h3>X-Ray</h3>
          <p>High-quality digital X-Ray imaging for fast diagnosis.</p>
        </div>

        <div className="service-card">
          <img
            src="https://images.unsplash.com/photo-1580281657527-47b72c9fef7f"
            alt="MRI"
          />
          <h3>MRI Scan</h3>
          <p>Advanced MRI scanning technology for detailed reports.</p>
        </div>

        <div className="service-card">
          <img
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118"
            alt="CT Scan"
          />
          <h3>CT Scan</h3>
          <p>Accurate CT scan imaging with modern machines.</p>
        </div>

        <div className="service-card">
          <img
            src="https://images.unsplash.com/photo-1584982751601-97dcc096659c"
            alt="Full Body Checkup"
          />
          <h3>Full Body Checkup</h3>
          <p>Complete health checkup packages for early diagnosis.</p>
        </div>

      </div>

    </div>
  );
}

export default Services;