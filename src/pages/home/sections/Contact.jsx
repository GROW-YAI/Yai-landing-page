import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="py-16 px-8 border-b-2">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-8">
          Get in touch with us through any of the following ways.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Phone */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center h-86 w-65 max-md:h-65 max-md:w-120 max-md:p-3 mx-auto">
          <div className="flex items-center justify-center w-28 h-28 mx-auto mb-12 max-md:mb-7 rounded-full border-2 border-blue-500" 
               style={{ background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.3))" }}>
            <FaPhoneAlt className="text-white text-3xl" />
          </div>
          <h3 className="text-lg font-semibold mb-4 max-md:mb-5">Phone</h3>
          <a href="" className="text-gray-600 pt-2">+123 456 7890</a>
        </div>

        {/* Email */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center h-86 w-65 max-md:h-65 max-md:w-120 max-md:p-3 mx-auto">
          <div className="flex items-center justify-center w-28 h-28 mx-auto mb-12 max-md:mb-7 rounded-full border-2 border-blue-500" 
               style={{ background: "linear-gradient(rgba(0, 0, 0, 0.61), rgba(0, 0, 0, 0.37))" }}>
            <FaEnvelope className="text-white text-3xl" />
          </div>
          <h3 className="text-lg font-semibold mb-4 max-md:mb-5">Email</h3>
          <a href="" className="text-gray-600 pt-2">info@example.com</a>
        </div>

        {/* Address */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center h-86 w-65 max-md:h-65 max-md:w-120 max-md:p-3 mx-auto">
          <div className="flex items-center justify-center w-28 h-28 mx-auto mb-12 max-md:mb-7 rounded-full border-2 border-blue-500" 
               style={{ background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.3))" }}>
            <FaMapMarkerAlt className="text-white text-3xl" />
          </div>
          <h3 className="text-lg font-semibold mb-4 max-md:mb-5">Address</h3>
          <p className="text-gray-600 pt-2">123 Main Street, City, Country</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
