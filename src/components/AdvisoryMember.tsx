import React from "react";
import { advisoryBoard } from '../data/ourTeam.data.js';

const advisoryMembers = advisoryBoard;

const AdvisoryMembers: React.FC = () => {
  return (
    <div className="w-full py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
        Advisory Members
      </h2>
      <div className="flex flex-wrap justify-center gap-6 px-6">
        {advisoryMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-14 text-center border border-gray-300 hover:shadow-lg transition-transform duration-300 hover:-translate-y-1 w-full sm:w-[350px] md:w-[300px] lg:w-[280px]"
          >
            <h3 className="text-lg font-semibold text-gray-800">
              {member.name}
            </h3>
            <hr className="bg-black h-[2px] border-none mt-4 mb-4 w-4/5 mx-auto" />
            <p className="text-base">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvisoryMembers;
