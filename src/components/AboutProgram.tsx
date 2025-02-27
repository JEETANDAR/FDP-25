
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
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
            About Faculty Development Program
          </h2>

          <div className="glass-card p-8">
            <p className="text-gray-300 mb-4">
              The International Faculty Development Program is a prestigious initiative designed to enhance the academic and professional capabilities of faculty members across educational institutions worldwide. This program offers a unique platform for knowledge exchange, skill development, and networking among educators from diverse backgrounds.
            </p>
            <p className="text-gray-300 mb-4">
              Participants will engage with cutting-edge research, innovative teaching methodologies, and emerging trends in higher education. The program features intensive workshops, interactive sessions, and hands-on training conducted by leading experts in their respective fields.
            </p>
            <p className="text-gray-300">
              By participating in this program, faculty members can expand their knowledge base, refine their teaching approaches, and develop collaborative relationships with peers from around the globe. The program aims to create a community of educators committed to excellence and continuous improvement in higher education.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
