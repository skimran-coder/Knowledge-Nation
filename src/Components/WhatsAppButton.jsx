import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const WhatsAppButton = () => {
  const handleClick = () => {
    const phoneNumber = "+918334835908";
    const message = encodeURIComponent("Hi sir, could you please provide details about the course structure, schedule, fees, and any prerequisites?");
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <div
      className="fixed bottom-4 right-4 bg-[#25D366] p-4 rounded-full shadow-lg cursor-pointer "
      onClick={handleClick}
      title="Chat with us on WhatsApp"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="text-white text-2xl " />
    </div>
  );
};

export default WhatsAppButton;
