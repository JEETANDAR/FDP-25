
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="min-h-screen relative overflow-hidden pt-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-16">
          <img src="/placeholder.svg" alt="Left Logo" className="w-24 h-24 object-contain" />
          <img src="/placeholder.svg" alt="Right Logo" className="w-24 h-24 object-contain" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mt-20"
        >
          <h4 className="text-blue-500 text-sm font-semibold tracking-wider mb-4">
            DEPARTMENT OF COMPUTER SCIENCE
          </h4>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            International Faculty Development Program
          </h1>
          <p className="text-gray-400 text-lg md:text-xl">
            Join us for an enriching academic experience
          </p>
        </motion.div>
      </div>
    </section>
  );
}
