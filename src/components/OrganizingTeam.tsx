import React from "react";
import { FaLinkedin } from "react-icons/fa";

const teamMembers = [
  { name: "Emily Brown", role: "Event Manager", image: "https://via.placeholder.com/150", linkedin: "#" },
  { name: "Michael Green", role: "Logistics Head", image: "https://via.placeholder.com/150", linkedin: "#" },
  { name: "Sophia White", role: "Marketing Lead", image: "https://via.placeholder.com/150", linkedin: "#" },
  { name: "Daniel Black", role: "Sponsorship Head", image: "https://via.placeholder.com/150", linkedin: "#" },
  { name: "Olivia Gray", role: "Volunteer Coordinator", image: "https://via.placeholder.com/150", linkedin: "#" },
  { name: "William Blue", role: "Technical Director", image: "https://via.placeholder.com/150", linkedin: "#" },
  { name: "Ava Silver", role: "Design Lead", image: "https://via.placeholder.com/150", linkedin: "#" },
  { name: "James Gold", role: "Operations Manager", image: "https://via.placeholder.com/150", linkedin: "#" },
];

const OrganizingTeam: React.FC = () => {
  return (
    <div className="w-full py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Organizing Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-xl shadow-lg p-6 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 border border-gray-300"
          >
            <img
              src={member.image}
              alt={member.name}
              width={150}
              height={150}
              className="rounded-lg object-cover p-2 bg-white mb-4"
            />
            <div className="text-center">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 mt-2 inline-block">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrganizingTeam;
