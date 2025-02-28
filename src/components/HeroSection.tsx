import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="w-full p-0 m-0">
        {/* Header with logos */}
        <div className="flex justify-between items-start w-full pt-5 px-4 sm:px-6 md:px-8">
          {/* Left logo - PEGASUS */}
          <div className="p-0 m-0">
            <img
              src="/src/components/pegasus.png"
              alt="PEGASUS Computer Science Association"
              className="w-32 h-auto object-contain sm:w-40 md:w-44 lg:w-48"
            />
          </div>
          
          {/* Right logo - St. Paul's College */}
          <div className="p-0 m-0">
            <img
              src="/src/components/spc_white.png"
              alt="St. Paul's College"
              className="w-36 h-auto object-contain sm:w-44 md:w-52 lg:w-56"
            />
          </div>
        </div>
        
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mt-8 sm:mt-12 md:mt-16 px-4 sm:px-6 md:px-8 mb-1"
        >
          {/* Added spacing above "DEPARTMENT OF COMPUTER SCIENCE" */}
          <h3 className="text-blue-500 text-lg sm:text-md md:text-lg font-semibold tracking-wider mb-6">
            DEPARTMENT OF COMPUTER SCIENCE
          </h3>
          <h4 className="text-blue-100 text-sm sm:text-md md:text-lg font-semibold tracking-wider mb-5">
            PRESENTS
          </h4>
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            International Faculty Development Program
          </h1>
          {/* Reduced spacing after this text */}
          <p className="text-gray-400 text-sm sm:text-md md:text-lg mb-3">
            Join us for an enriching academic experience
          </p>
        </motion.div>
      </div>
    </section>
  );
}