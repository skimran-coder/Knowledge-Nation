import React from "react";
import Underline from "../DesignElement/Underline";
import { LOCATION_URL } from "../../Constant";
import ContactForm from "../ContactForm";

const ContactUs = () => {
  return (
    <div className="w-3/4 mx-auto pt-10 pb-20">
      
      <div className="flex flex-col items-center pb-20">
        <h2 className="text-4xl font-bold">Contact Us</h2>
        <Underline/>
        <p>Have Questions? We're Just a Message Away</p>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Location Map */}
      <div className="lg:w-1/2 flex flex-col gap-4">
        <h2 className="text-3xl font-bold">Find Us</h2>
        <iframe
          title="location"
          src={LOCATION_URL}
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <p className="text-lg">ROOM NO.102, AASHIYANA APARTMENT, 59C, Gulam Jilani Khan Rd, Block k, Topsia, Kolkata, West Bengal 700039</p>
      </div>

        {/* Contact form */}
      <div className="lg:w-1/2 flex flex-col gap-4">
        <h2 className="text-3xl font-bold">Get in Touch</h2>
      <ContactForm/>
      </div>

      </div>
    </div>
  );
};

export default ContactUs;

