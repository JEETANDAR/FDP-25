import React, { useState } from "react";
import { motion } from "framer-motion";


export default function AboutTemplate({
  title,
  paragraphs,
  image,
}: {
  title: string;
  paragraphs: string[];
  image: object;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

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
            {title}
          </h2>

          <div className="glass-card p-8 bg-white/40 rounded-lg text-black shadow-lg border border-gray-700 flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Iframe on the left side */}
            <div className="w-full md:w-1/3 border-2 border-gray-700 rounded-lg shadow-lg overflow-hidden">
              <img
                src={image}
                alt="College Image"
                className="w-full h-40 md:h-60 object-cover"
              />
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
