import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import speakerInfo from '../data/speaker.data';

const timelineData = speakerInfo;

export default function TimelineSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-20" id="topics"> 
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-black text-center mb-12"
      >
        Topics
      </motion.h2>
      <div className="container mx-auto px-4 flex justify-center">
      <div className="w-full max-w-2xl bg-white/60 shadow-lg rounded-lg p-6 border border-gray-200">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative flex items-start space-x-4 mb-8 last:mb-0"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl">
                  {index + 1}
                </div>
                {index < timelineData.length - 1 && (
                  <div className="w-0.5 h-20 bg-blue-500/30"></div>
                )}
              </div>
              <div className="bg-white/90 p-4 rounded-lg shadow-md border border-gray-300 w-full">
                <h3 className="text-gray-700 font-semibold">{item.day}</h3>
                <h3 className="text-blue-700 font-semibold">{item.day}</h3>
                <h4 className="text-black text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-gray-600">Speaker: {item.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}