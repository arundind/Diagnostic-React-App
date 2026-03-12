import React from "react";

function WhatsAppButton() {

  const phoneNumber = "917431923720";

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <button className="whatsapp-btn" onClick={openWhatsApp}>
      Chat on WhatsApp
    </button>
  );
}

export default WhatsAppButton;