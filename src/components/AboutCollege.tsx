import React, { useState } from "react";
import { motion } from "framer-motion";

import { collegeIframeURL } from '../data/college.data.js';

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
            {/* Iframe on the left side */}
            <div className="w-full md:w-1/3">
              <iframe
                src={collegeIframeURL}
                title="College Image"
                className="w-full h-40 md:h-60 border-2 border-gray-700 rounded-lg shadow-lg"
              ></iframe>
            </div>

            {/* Text on the right side */}
            <div className="w-full md:w-2/3">
              {paragraphs.map((paragraph, index) => (
                <p className="text-black mb-4" key={`paragraph-${index}`}>
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
