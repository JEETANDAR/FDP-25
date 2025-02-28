import React from "react";

const advisoryMembers = [
  "Dr. John Smith - Senior Advisor",
  "Prof. Emily Johnson - Research Consultant",
  "Mr. Robert Williams - Industry Expert",
  "Dr. Sarah Brown - Innovation Strategist",
  "Ms. Linda Davis - Policy Analyst",
  "Prof. Michael Wilson - Technical Consultant",
  "Dr. Jennifer Clark - Ethics & Compliance",
  "Mr. James Martinez - Financial Advisor"
];

const AdvisoryMembers: React.FC = () => {
  return (
    <div className="w-full py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Advisory Members</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 max-w-6xl mx-auto">
        {advisoryMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 text-center border border-gray-300 hover:shadow-lg transition-transform duration-300 hover:-translate-y-2"
          >
            <h3 className="text-lg font-semibold text-gray-800">{member}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvisoryMembers;