import React from "react";
import { contact } from '../data/ourTeam.data.js';

const ContactUs: React.FC = () => {
  const contacts = contact;

  return (
    <div className="flex flex-col items-center justify-center p-6">
      {/* Contact title outside the box */}
      <h2 className="text-xl md:text-2xl font-bold text-center w-full pt-4 pb-2 mb-6">Get in touch with us</h2>


      <div className="bg-gray-100/60 p-6 rounded-lg shadow-lg w-full max-w-5xl flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
        <div className="w-full flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md text-center w-full md:w-1/3 text-sm md:text-base"
            >
              <p className="font-semibold">{contact.name}</p>
              <p className="text-gray-600">{contact.tell}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
