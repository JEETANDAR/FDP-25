import React from "react";
import Marquee from "react-fast-marquee";

const speakers = [
  {
    name: "John Doe",
    role: "CEO, Tech Corp",
    image: "https://via.placeholder.com/200",
  },
  {
    name: "Jane Smith",
    role: "CTO, InnovateX",
    image: "https://via.placeholder.com/200",
  },
  {
    name: "Alice Johnson",
    role: "Lead Engineer, DevCo",
    image: "https://via.placeholder.com/200",
  },
  {
    name: "Bob Williams",
    role: "Product Manager, BuildIt",
    image: "https://via.placeholder.com/200",
  },
];

const SpeakersSection = () => {
  return (
    <div className="w-full py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Our Speakers</h2>
      <Marquee gradient={false} speed={50} pauseOnHover={true}>
        <div className="flex gap-6 px-4">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-xl shadow-lg p-6 min-w-[300px] max-w-[300px] mx-4 h-auto flex flex-col border border-gray-300 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center p-4">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  width={180}
                  height={180}
                  className="rounded-lg object-cover mb-2 p-2 bg-white"
                />
                <h3 className="text-xl font-semibold text-center">{speaker.name}</h3>
                <p className="text-gray-600 text-center">{speaker.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default SpeakersSection;
