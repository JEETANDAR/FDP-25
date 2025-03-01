import React from "react";
import { advisoryBoard } from '../data/ourTeam.data.js';

const advisoryMembers = advisoryBoard;

const AdvisoryMembers: React.FC = () => {
  return (
    <div className="w-full py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Advisory Members</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 max-w-2x1 mx-auto">
        {advisoryMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 text-center border border-gray-300 hover:shadow-lg transition-transform duration-300 hover:-translate-y-1 mx-auto"
          >
            <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
            <hr style={{ backgroundColor: "black", height: "2px", border: "none", marginTop: "5px", marginBottom: "10px"}} />
            <p style={{ textAlign: "center" }}>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvisoryMembers;