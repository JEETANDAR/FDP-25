import React from "react";
import Marquee from "react-fast-marquee";
import speakerInfo from '../data/speaker.data.js';

const speakers = speakerInfo;

const SpeakersSection = () => {
  return (
    <div className="w-full py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Our Speakers</h2>
      <Marquee gradient={false} speed={40} pauseOnClick={true}>
        <div className="flex gap-6 px-4">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-xl shadow-lg p-6 mx-4 h-auto flex flex-col border border-gray-300 hover:shadow-xl transition-shadow duration-300"
              style={{
                minWidth: "250px",
                maxWidth: speaker.name.length > 20 ? "350px" : "300px", // Adjust width dynamically
              }}
            >
              <div className="flex flex-col items-center p-4">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  width={180}
                  height={180}
                  className="shadow-lg shadow-gray-10/50 rounded-2xl object-cover mb-2 p-2 bg-red aspect-[1]"
                />
                <h3
                  className="text-xl font-semibold text-center whitespace-nowrap overflow-hidden text-ellipsis"
                  style={{ maxWidth: "90%" }}
                >
                  {speaker.name}
                </h3>
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
