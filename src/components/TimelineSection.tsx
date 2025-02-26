
import { motion } from "framer-motion";

const timelineData = [
  {
    day: "Day 1",
    topic: "Introduction to AI and Machine Learning",
    speaker: "Dr. Sarah Johnson"
  },
  {
    day: "Day 2",
    topic: "Deep Learning Fundamentals",
    speaker: "Prof. Michael Chen"
  },
  {
    day: "Day 3",
    topic: "Natural Language Processing",
    speaker: "Dr. Emily Roberts"
  },
  {
    day: "Day 4",
    topic: "Computer Vision Applications",
    speaker: "Prof. James Wilson"
  },
  {
    day: "Day 5",
    topic: "Future of AI and Ethics",
    speaker: "Dr. Sarah Johnson"
  }
];

export default function TimelineSection() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
        >
          Topics
        </motion.h2>

        <div className="neon-timeline pl-8">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative mb-12 last:mb-0"
            >
              <div className="timeline-dot" />
              <div className="glass-card p-6">
                <h3 className="text-blue-500 font-semibold mb-2">{item.day}</h3>
                <h4 className="text-white text-xl font-bold mb-2">{item.topic}</h4>
                <p className="text-gray-400">Speaker: {item.speaker}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
