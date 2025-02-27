import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="min-h-screen relative overflow-hidden pt-0 mt-0">
      <div className="w-full p-0 m-0">
        {/* Header with logos - added 5px padding top */}
        <div className="flex justify-between items-start w-full p-0 pt-5 m-0">
          {/* Left logo - PEGASUS */}
          <div className="p-0 m-0">
            <img
              src="/src/components/pegasus.png"
              alt="PEGASUS Computer Science Association"
              className="w-44 h-auto object-contain"
            />
          </div>
          
          {/* Right logo - St. Paul's College */}
          <div className="p-0 m-0">
            <img
              src="/src/components/spc_white.png"
              alt="St. Paul's College"
              className="w-40 h-auto object-contain"
            />
          </div>
        </div>
        
        {/* Text content - moved Department of Computer Science down */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mt-12 sm:mt-16 md:mt-20"
        >
          <h3 className="text-blue-500 text-sm sm:text-md md:text-lg font-semibold tracking-wider mb-2">
            DEPARTMENT OF COMPUTER SCIENCE
          </h3>
          <h4 className="text-blue-100 text-sm sm:text-md md:text-lg font-semibold tracking-wider mb-2">
            PRESENTS
          </h4>
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-2 leading-tight">
            International Faculty Development Program
          </h1>
          {/* Removed spacing after this text */}
          <p className="text-gray-400 text-sm sm:text-md md:text-lg mb-0">
            Join us for an enriching academic experience
          </p>
        </motion.div>
      </div>
    </section>
  );
}