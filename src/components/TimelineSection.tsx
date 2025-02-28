import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { PlusCircle, MinusCircle } from "lucide-react";
import speakerInfo from '../data/speaker.data';

const timelineData = speakerInfo;

export default function TimelineSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-20 relative" id="topics"> 
    <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-black text-center mb-12"
        >
          Topics
        </motion.h2>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 border border-gray-200">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative mb-12 last:mb-0"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 flex flex-col items-center mr-6">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl">
                    {index + 1}
                  </div>
                  {index < timelineData.length - 1 && (
                    <div className="w-0.5 h-28 bg-blue-500/30 mt-2"></div>
                  )}
                </div>
                <div className="flex-grow">
                  <div className="bg-[#f9f9f9] p-6 rounded-lg shadow-sm border border-gray-300">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-black font-semibold mb-2">{item.day}</h3>
                        <h4 className="text-black text-xl font-bold mb-2">{item.title}</h4>
                        <p className="text-black">Speaker: {item.name}</p>
                      </div>
                     
                    </div>
                    <AnimatePresence>
                      {expandedIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 pt-4 border-t border-blue-500/20"
                        >
                          <p className="text-black">{item.description}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}