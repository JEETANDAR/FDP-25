
import { motion } from "framer-motion";
import { useState } from "react";
import { PlusCircle, MinusCircle } from "lucide-react";

const timelineData = [
  {
    day: "Day 1",
    topic: "Introduction to AI and Machine Learning",
    speaker: "Dr. Sarah Johnson",
    description: "This session covers the fundamental concepts of Artificial Intelligence and Machine Learning. Participants will learn about the historical development of AI, key algorithms, and practical applications in various domains. The session also explores the ethical considerations and future directions of AI technology."
  },
  {
    day: "Day 2",
    topic: "Deep Learning Fundamentals",
    speaker: "Prof. Michael Chen",
    description: "Deep Learning has revolutionized the field of AI in recent years. This comprehensive session introduces neural networks, backpropagation, convolutional neural networks (CNNs), and recurrent neural networks (RNNs). Participants will gain insights into training deep models and applying them to solve complex problems."
  },
  {
    day: "Day 3",
    topic: "Natural Language Processing",
    speaker: "Dr. Emily Roberts",
    description: "Natural Language Processing (NLP) enables computers to understand, interpret, and generate human language. This session covers text preprocessing, word embeddings, sentiment analysis, and language models. Practical applications in chatbots, machine translation, and text summarization will be demonstrated."
  },
  {
    day: "Day 4",
    topic: "Computer Vision Applications",
    speaker: "Prof. James Wilson",
    description: "Computer Vision empowers machines to interpret and understand visual information from the world. This session explores image processing techniques, object detection, image classification, and facial recognition. Real-world applications in autonomous vehicles, medical imaging, and surveillance systems will be discussed."
  },
  {
    day: "Day 5",
    topic: "Future of AI and Ethics",
    speaker: "Dr. Sarah Johnson",
    description: "This final session examines the future trajectory of AI and the ethical implications of advanced technologies. Topics include AI governance, privacy concerns, algorithmic bias, and responsible AI development. Participants will engage in discussions about creating AI systems that are fair, transparent, and beneficial to society."
  }
];

export default function TimelineSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <section className="py-20 relative" id="topics">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
        >
          Topics
        </motion.h2>

        <div className="max-w-3xl mx-auto">
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
                  <div className="glass-card p-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-blue-500 font-semibold mb-2">{item.day}</h3>
                        <h4 className="text-white text-xl font-bold mb-2">{item.topic}</h4>
                        <p className="text-gray-400">Speaker: {item.speaker}</p>
                      </div>
                      <button 
                        onClick={() => toggleExpand(index)}
                        className="transition-all duration-300 ease-in-out"
                        aria-label={expandedIndex === index ? "Collapse details" : "Expand details"}
                      >
                        {expandedIndex === index ? (
                          <MinusCircle className="w-8 h-8 text-blue-300 md:w-10 md:h-10 hover:text-blue-400 hover:scale-110" />
                        ) : (
                          <PlusCircle className="w-8 h-8 text-blue-300 md:w-10 md:h-10 hover:text-blue-400 hover:scale-110" />
                        )}
                      </button>
                    </div>
                    
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-blue-500/20"
                      >
                        <p className="text-gray-300">{item.description}</p>
                      </motion.div>
                    )}
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
