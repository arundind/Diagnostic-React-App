import React from "react";

function Home() {
  return (
    <div>

      {/* Hero Section */}
      <div style={styles.hero}>
        <div style={styles.heroText}>
          <h1>Welcome to Diagnostic Center</h1>
          <p>
            We provide accurate and reliable medical diagnostic services using
            modern technology and experienced doctors.
          </p>

          <button style={styles.btn}>
            Book Test Now
          </button>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1581595219315-a187dd40c322"
            alt="diagnostic lab"
            style={styles.image}
          />
        </div>
      </div>

      {/* Features Section */}
      <div style={styles.section}>
        <h2>Our Features</h2>

        <div style={styles.cardContainer}>

          <div style={styles.card}>
            <h3>Advanced Lab Equipment</h3>
            <p>Modern diagnostic machines for accurate results.</p>
          </div>

          <div style={styles.card}>
            <h3>Experienced Doctors</h3>
            <p>Qualified medical experts and professional staff.</p>
          </div>

          <div style={styles.card}>
            <h3>Quick Report Delivery</h3>
            <p>Fast and reliable test report delivery system.</p>
          </div>

        </div>
      </div>

      {/* Services Section */}
      <div style={styles.section}>
        <h2>Our Diagnostic Services</h2>

        <ul style={styles.serviceList}>
          <li>Blood Test</li>
          <li>X-Ray</li>
          <li>MRI Scan</li>
          <li>CT Scan</li>
          <li>Full Body Checkup</li>
        </ul>
      </div>

    </div>
  );
}

const styles = {

  hero:{
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    padding:"40px",
    background:"#f4f8ff",
    flexWrap:"wrap"
  },

  heroText:{
    maxWidth:"500px"
  },

  image:{
    width:"400px",
    borderRadius:"10px"
  },

  btn:{
    marginTop:"20px",
    padding:"12px 20px",
    background:"#0a6ebd",
    color:"white",
    border:"none",
    borderRadius:"6px",
    cursor:"pointer",
    fontSize:"16px"
  },

  section:{
    padding:"40px",
    textAlign:"center"
  },

  cardContainer:{
    display:"flex",
    justifyContent:"center",
    gap:"20px",
    flexWrap:"wrap",
    marginTop:"20px"
  },

  card:{
    width:"250px",
    padding:"20px",
    background:"white",
    borderRadius:"10px",
    boxShadow:"0 4px 10px rgba(0,0,0,0.1)"
  },

  serviceList:{
    listStyle:"none",
    padding:"0",
    marginTop:"20px",
    fontSize:"18px"
  }

};

export default Home;