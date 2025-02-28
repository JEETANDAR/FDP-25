import React, { useState } from "react";
import { motion } from "framer-motion";

export default function AboutCollege() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const paragraphs = [
    "ST PAULS COLLEGE, Bengaluru, is a premier institution established by the Society of St Paul, a global Catholic organization founded in 1914 by Blessed James Alberione. Spread across 39 countries, the Society is committed to excellence in education.",
    "Affiliated with Bangalore University and recognized by the Government of Karnataka, the college is located in Nagasandra, near Bengaluru's Peenya Industrial Area, with excellent connectivity via road and Namma Metro. Accredited with a B++ Grade (CGPA 2.97) by NAAC, it is renowned for its quality education and innovative practices."
  ];
  
  // Show only first paragraph when not expanded if needed
  const visibleParagraphs = isExpanded ? paragraphs : paragraphs;
  
  return (
    <section className="py-20 relative" id="about-program">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-8">
            About Our College
          </h2>
          
          <div className="glass-card p-8 bg-black-900">
            {/* Display the paragraphs */}
            {visibleParagraphs.map((paragraph, index) => (
              <p className="text-black mb-4" key={`paragraph-${index}`}>
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}