import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const WhatsAppButton = () => {
  const message = encodeURIComponent(
    "Hi sir, could you please provide details about the course structure, schedule, fees, and any prerequisites?"
  );
  const whatsappLink = `https://wa.me/+918334835908?text=${message}`;

  return (
    <div>
      <div className="fixed md:bottom-6 md:right-6 bottom-4 right-4">
        <a href={whatsappLink} target="_blank" rel="noreferrer">
          <FontAwesomeIcon
            icon={faWhatsapp}
            className="text-white bg-[#25D366] rounded-full p-4 text-3xl transition duration-300 ease-in-out transform hover:scale-110"
          />
        </a>
      </div>
    </div>
  );
};

export default WhatsAppButton;
