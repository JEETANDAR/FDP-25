import React, { useState } from "react";
import { motion } from "framer-motion";

export default function AboutCollege() {
  const [isExpanded, setIsExpanded] = useState(false);

  const paragraphs = [
    "ST PAULS COLLEGE, Bengaluru, is a premier institution established by the Society of St Paul, a global Catholic organization founded in 1914 by Blessed James Alberione. Spread across 39 countries, the Society is committed to excellence in education.",
    "Affiliated with Bangalore University and recognized by the Government of Karnataka, the college is located in Nagasandra, near Bengaluru's Peenya Industrial Area, with excellent connectivity via road and Namma Metro. Accredited with a B++ Grade (CGPA 2.97) by NAAC, it is renowned for its quality education and innovative practices."
  ];

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

          <div className="glass-card p-8 bg-white/40 rounded-lg text-black shadow-lg border border-gray-700 flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Placeholder for Image on the left side */}
            <div className="w-full md:w-1/3">
              {/* Add your image here manually */}
              <img src="https://scontent.fblr1-9.fna.fbcdn.net/v/t39.30808-6/440343004_960191102782198_3383943898261859210_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=_UkCFmBpDVoQ7kNvgFyZADo&_nc_oc=Adjc0UKxIVlW8ZSzW3Ftm4RpWCs8tdeG3wBBZIcYnFqCG0smFRPyDS1vTY0anXE1lfZ0sMs7HanXV9hHPoqAxhEZ&_nc_zt=23&_nc_ht=scontent.fblr1-9.fna&_nc_gid=AksD4bRx4lq0yRcnKmOlFJR&oh=00_AYBVIJLOUN5dixKs4RQtQbvDqH3NbTOvmxKq68cKR5ryCQ&oe=67C8F86D" alt="" 
              className="w-full h-60 md:h-90 border-2 border-gray-700 rounded-lg shadow-lg object-cover" />
            </div>

            {/* Text on the right side */}
            <div className="w-full md:w-2/3">
              {paragraphs.map((paragraph, index) => (
                <p className="text-black mb-4 text-center" key={`paragraph-${index}`}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
