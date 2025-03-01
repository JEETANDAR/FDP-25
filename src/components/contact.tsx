import React from "react";

const ContactUs: React.FC = () => {
  const contacts = [
    { name: "John Doe", number: "+1 555-123-4567" },
    { name: "Jane Smith", number: "+1 555-987-6543" },
    { name: "David Johnson", number: "+1 555-654-3210" },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-6 " id="contact">
      {/* Contact title outside the box */}
      <h2 className="text-xl md:text-2xl font-bold text-center w-full pt-4 pb-2 mb-6">Get in touch with us</h2>

      
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-5xl flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
        <div className="w-full flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
          {contacts.map((contact, index) => (
            <div 
              key={index}
              className="bg-white p-4 rounded-lg shadow-md text-center w-full md:w-1/3 text-sm md:text-base"
            >
              <p className="font-semibold">{contact.name}</p>
              <p className="text-gray-600">{contact.number}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
