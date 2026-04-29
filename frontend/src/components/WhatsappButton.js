import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsappButton.css";

function WhatsappButton() {
  const handleClick = () => {
    window.open("https://wa.me/91YOURNUMBER", "_blank");
  };

  return (
    <div className="whatsapp-float" onClick={handleClick}>
      <FaWhatsapp size={28} />
    </div>
  );
}

export default WhatsappButton;