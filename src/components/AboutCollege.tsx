import React, { useState } from "react";
import text from "../data/department.data";
import { motion } from "framer-motion";

export default function AboutCollege() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const paragraphs = [
    "The Department of Computer Science at our institution is committed to excellence in education, research, and innovation. Founded with a vision to create technology leaders of tomorrow, we offer a comprehensive curriculum that blends theoretical knowledge with practical skills.",
    "Our faculty comprises renowned experts in various domains of computer science, including artificial intelligence, machine learning, cybersecurity, and software engineering. We pride ourselves on providing state-of-the-art facilities and a conducive learning environment.",
    "The Pegasus symbol represents our aspiration to soar high and achieve greatness in the field of computer science and technology. It embodies our commitment to excellence, innovation, and the pursuit of knowledge without boundaries.",
    "Our students benefit from hands-on experience through internships, research opportunities, and industry collaborations. We maintain strong ties with leading technology companies to ensure our curriculum remains relevant to industry needs.",
    "The department regularly hosts seminars, workshops, and hackathons to foster a culture of continuous learning and innovation. Our alumni network spans across the globe, with graduates making significant contributions to the tech industry."
  ];

  // Show only first two paragraphs when not expanded
  const visibleParagraphs = isExpanded ? paragraphs : paragraphs.slice(0, 2);

  return (
    <section className="py-20 relative" id="about-program">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
            About Our College
          </h2>
          
          <div className="glass-card p-8">
              
            {text.map((item, index) => (
              <p className="text-gray-300 mb-4" key={index}>
                {item}.
              </p>
            ))}
            <hr className="my-6" />
            
            {/* Display visible paragraphs */}
            {visibleParagraphs.map((paragraph, index) => (
              <p className="text-gray-300 mb-4" key={`paragraph-${index}`}>
                {paragraph}
              </p>
            ))}
            
            {/* Read more button with matching text styling */}
            {!isExpanded && (
              <p className="text-gray-300">
                <span 
                  onClick={() => setIsExpanded(true)}
                  className="text-blue-400 hover:text-blue-300 cursor-pointer"
                >
                  Read more...
                </span>
              </p>
            )}
            
            {/* Read less button (only visible when expanded) */}
            {isExpanded && (
              <p className="text-gray-300">
                <span 
                  onClick={() => setIsExpanded(false)}
                  className="text-blue-400 hover:text-blue-300 cursor-pointer"
                >
                  Read less
                </span>
              </p>
            )}
            
          
          </div>
        </motion.div>
      </div>
    </section>
  );
}