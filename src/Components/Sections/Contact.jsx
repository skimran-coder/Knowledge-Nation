import React from "react";
import Underline from "../DesignElement/Underline";
import { LOCATION_URL } from "../../Constant";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <div className="w-screen bg-gray-50">
      <div className=" pt-10 pb-20 w-11/12 lg:w-3/4 mx-auto py-12 ">
      
      <div className="flex flex-col items-center  mb-16">
        <h2 className=" text-4xl lg:text-5xl font-extrabold text-gray-800">Contact Us</h2>
        <Underline bgColor={"bg-myOrange"}/>
        <p className="text-gray-600 text-sm mt-2 lg:text-base">Have Questions? We're Just a Message Away.</p>
      </div>

      <div className="flex flex-col gap-16 lg:flex-row">
        {/* Location Map */}
      <div className="lg:w-1/2 flex flex-col gap-6">
        <h2 className=" text-3xl lg:text-4xl font-semibold text-gray-800">Find Us</h2>
        <iframe
          title="location"
          src={LOCATION_URL}
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="rounded-md shadow-lg"
        ></iframe>
        <p className=" text-lg lg:text-xl text-gray-700 leading-relaxed">ROOM NO.102, AASHIYANA APARTMENT, 59C, Gulam Jilani Khan Rd, Block k, Topsia, Kolkata, West Bengal 700039</p>
      </div>

        {/* Contact form */}
      <div className="lg:w-1/2 flex flex-col gap-6">
        <h2 className="text-3xl lg:text-4xl font-semibold text-gray-800">Get in Touch</h2>
      <ContactForm/>
      </div>

      </div>
    </div>
    </div>
  );
};

export default ContactUs;

