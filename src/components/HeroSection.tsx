
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="min-h-screen relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8 md:mb-10 lg:mb-12">
          <img 
            src="src\components\pegasus.png" 
            alt="Department Logo" 
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 object-contain" 
          />
          <img 
            src="src\components\spc_white.png" 
            alt="College Logo" 
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 object-contain" 
          />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mt-8 md:mt-10"
        >
          <h3 className="text-blue-500 text-md sm:text-lg font-semibold tracking-wider mb-4">
            DEPARTMENT OF COMPUTER SCIENCE 
          </h3>
          <h4 className="text-blue-100 text-md sm:text-lg font-semibold tracking-wider mb-4">
             PRESENTS
          </h4>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
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
