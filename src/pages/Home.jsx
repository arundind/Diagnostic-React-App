import React from "react";

function Home() {
  return (
    <div>

      {/* Hero Section */}
      <section style={styles.hero}>

        <div style={styles.overlay}></div>

        <div style={styles.heroContent}>
          <h1 style={styles.title}>Advanced Diagnostic Center</h1>

          <p style={styles.subtitle}>
            Accurate and reliable medical testing with modern equipment
            and experienced doctors.
          </p>

          <button style={styles.btn}>
            Book Test Now
          </button>
        </div>

      </section>


      {/* Features Section */}

      <section style={styles.section}>

        <h2 style={styles.heading}>Why Choose Us</h2>

        <div style={styles.cardContainer}>

          <div style={styles.card}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2785/2785819.png"
              alt="lab"
              style={styles.icon}
            />
            <h3>Advanced Lab Equipment</h3>
            <p>Modern machines ensure accurate and reliable test results.</p>
          </div>

          <div style={styles.card}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
              alt="doctor"
              style={styles.icon}
            />
            <h3>Expert Doctors</h3>
            <p>Qualified doctors and trained medical professionals.</p>
          </div>

          <div style={styles.card}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
              alt="report"
              style={styles.icon}
            />
            <h3>Fast Reports</h3>
            <p>Get your medical reports quickly and securely.</p>
          </div>

        </div>

      </section>


      {/* Services Section */}

      <section style={styles.serviceSection}>

        <h2 style={styles.heading}>Our Diagnostic Services</h2>

        <div style={styles.services}>

          <div style={styles.service}>Blood Test</div>
          <div style={styles.service}>X-Ray</div>
          <div style={styles.service}>MRI Scan</div>
          <div style={styles.service}>CT Scan</div>
          <div style={styles.service}>Full Body Checkup</div>

        </div>

      </section>

    </div>
  );
}

const styles = {

  hero:{
    height:"100vh",
    width:"100%",
    backgroundImage:"url(https://images.unsplash.com/photo-1581595219315-a187dd40c322)",
    backgroundSize:"cover",
    backgroundPosition:"center",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    position:"relative",
    color:"white"
  },

  overlay:{
    position:"absolute",
    top:0,
    left:0,
    width:"100%",
    height:"100%",
    background:"rgba(0,0,0,0.55)"
  },

  heroContent:{
    position:"relative",
    textAlign:"center",
    maxWidth:"700px",
    padding:"20px"
  },

  title:{
    fontSize:"48px",
    marginBottom:"20px"
  },

  subtitle:{
    fontSize:"20px",
    lineHeight:"1.6"
  },

  btn:{
    marginTop:"25px",
    padding:"14px 30px",
    background:"#0a6ebd",
    color:"white",
    border:"none",
    borderRadius:"6px",
    fontSize:"18px",
    cursor:"pointer",
    transition:"0.3s"
  },

  section:{
    padding:"60px 20px",
    background:"#f7f9fc",
    textAlign:"center"
  },

  heading:{
    fontSize:"32px",
    marginBottom:"40px",
    color:"#0a6ebd"
  },

  cardContainer:{
    display:"flex",
    justifyContent:"center",
    gap:"25px",
    flexWrap:"wrap"
  },

  card:{
    width:"280px",
    background:"white",
    padding:"25px",
    borderRadius:"10px",
    boxShadow:"0 4px 15px rgba(0,0,0,0.1)"
  },

  icon:{
    width:"60px",
    marginBottom:"15px"
  },

  serviceSection:{
    padding:"60px 20px",
    textAlign:"center"
  },

  services:{
    display:"flex",
    justifyContent:"center",
    flexWrap:"wrap",
    gap:"20px"
  },

  service:{
    background:"#0a6ebd",
    color:"white",
    padding:"15px 30px",
    borderRadius:"30px",
    fontSize:"18px"
  },
  

};

export default Home;