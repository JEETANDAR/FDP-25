import { motion } from "framer-motion";
import AI from '../../staticFiles/heroPage/AIBg.png'
import collegeLogo from "/src/components/st pauls final black.png";
import deptLogo from "/src/components/pegasus black.png";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Theme */}


      <div className="fixed inset-0 -z-10">

        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-80 to-purple-50" />
        <img
          className="absolute right-0 top-0 w-full opacity-70 h-full object-cover sm:w-1/2 sm:right-0 sm:translate-x-0 translate-x-[-25%]"
          src={AI}
          alt="AIIMG"
        />





        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(38, 89, 171, 0.8)_1px,transparent_1px),linear-gradient(to_right,rgba(30, 62, 113, 0.61)_1px,transparent_10px)] bg-[size:64px_64px]" />

        {/* Subtle glow effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-200/30 rounded-full filter blur-[128px] animate-pulse" />
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-200/30 rounded-full filter blur-[128px] animate-pulse delay-700" />
        </div>
      </div>

      <div className="w-full p-0 m-0">
        {/* Header with logos */}
        <div className="flex justify-between items-start w-full pt-5 px-4 sm:px-6 md:px-8">
          {/* Left logo - PEGASUS */}
          <div className="p-0 m-0">
            <img
              src={deptLogo}
              alt="PEGASUS Computer Science Association"
              className="w-24 h-auto object-contain sm:w-28 md:w-32 lg:w-36"
            />
          </div>

          {/* Right logo - St. Paul's College */}
          <div className="p-0 m-0">
            <img
              src={collegeLogo}
              alt="St. Paul's College"
              className="w-36 h-auto object-contain sm:w-44 md:w-52 lg:w-64 xl:w-72"
            />
          </div>
        </div>

        {/* Text content */}
        <motion.div
          initial={{ opacity: 9, y: 90 }}
          animate={{ opacity: 10, y: 0 }}
          transition={{ duration: 1.8 }}
          className="text-center max-w-4xl mx-auto mt-8 sm:mt-12 md:mt-16 px-4 sm:px-6 md:px-8 mb-3"
        >
          {/* Added spacing above "DEPARTMENT OF COMPUTER SCIENCE" */}
          <h3 className="text-blue-900 text-lg sm:text-md md:text-lg lg:text-xl font-bold tracking-widest mb-4 font-mono">
            DEPARTMENT OF COMPUTER SCIENCE
          </h3>


          <h4 className="text-blue-950 text-md sm:text-lg md:text-xl lg:text-2xl font-bold tracking-widest mb-5 font-mono">
            PRESENTS
          </h4>



          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold text-black mb-4 leading-tight font-serif relative">
            <span className="absolute top-1 left-1 text-gray-900 opacity-40 blur-sm">International Faculty Development Program</span>
            International Online Faculty Development Program
          </h1>


          {/* Reduced spacing after this text */}
          <p className="text-gray-600 text-sm sm:text-md md:text-lg mb-3">
            Join us for an enriching academic experience
          </p>
        </motion.div>
      </div>
    </section>
  );
}