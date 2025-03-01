import { motion } from "framer-motion";

export default function AboutProgram() {
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
            About Faculty Development Program
          </h2>
          <div className="glass-card p-8 bg-white/40 rounded-lg shadow-lg border border-gray-700">
  <p className="text-black mb-4 text-justify">
    The Department of Computer Science of ST PAULS COLLEGE, known for its commitment to academic excellence and innovation, plays a key role in shaping the future of technology and education. 
    Through this 5-day International Faculty Development Program, the department aims to enhance educators' skills and foster global collaboration for continuous improvement in higher education.
  </p>

  <p className="text-black mb-4 text-justify">
    This program offers a unique platform for knowledge exchange, skill development, and networking among educators from diverse backgrounds. Participants will have the opportunity to engage in understanding, integrating, and applying new technologies in education to enhance teaching methodologies, student engagement, and learning outcomes. The program features workshops, interactive sessions, and hands-on training led by leading experts in their respective fields.
  </p>

  <p className="text-black text-justify">
    By participating, educators can expand their knowledge base, refine their teaching approaches, and develop collaborative relationships with peers globally. The program aims to create a community of educators committed to excellence and continuous improvement in higher education.
  </p>
</div>

        </motion.div>
      </div>
    </section>
  );
}