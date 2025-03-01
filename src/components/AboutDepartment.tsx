import text from "../data/department.data";
import { motion } from "framer-motion";

export default function AboutDepartment() {
  return (
    <section className="py-20 relative" id="about-department">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-8">
            About Our Department
          </h2>
          
          <div className="glass-card p-8 bg-white/40 rounded-lg shadow-lg border border-gray-700">
  <p className="text-black mb-4 p-2 rounded text-justify">
    The Department of Computer Science offers two specialized undergraduate programs: Bachelor of Computer Applications (BCA) and BSc in Computer Science, Psychology, and Journalism. These programs are designed to address the increasing demand for skilled professionals in the fast-growing IT and software industries.
  </p>
  
  <p className="text-black mb-4 p-2 rounded text-justify">
    The BCA program focuses on building strong technical expertise, including software development, programming languages, web designing, multimedia, databases, and operating systems. The BSc program provides a comprehensive curriculum that blends core computer science principles with interdisciplinary knowledge from psychology and journalism, preparing students for diverse career paths.
  </p>
</div>

        </motion.div>
      </div>
    </section>
  );
}