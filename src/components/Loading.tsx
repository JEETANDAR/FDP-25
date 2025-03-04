import React, { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

function Loading({ onComplete }: { onComplete: () => void }) {
  const [fillPercentage, setFillPercentage] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const fillInterval = setInterval(() => {
      setFillPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(fillInterval);
          setTimeout(() => {
            setIsFadingOut(true);
            setTimeout(onComplete,2000);
          }, 2000);
          return prev;
        }
        return prev + 1.5;
      });
    }, 50);

    return () => clearInterval(fillInterval);
  }, [onComplete]);

  return (
    <div
      className={`min-h-screen w-full bg-[#000000] flex flex-col items-center justify-center px-4 ${
        isFadingOut ? "fade-out" : ""
      }`}
    >
      <style>
        {`
        @keyframes fadeOut {
          0% { opacity: 1; }
          100% { opacity: 0; }
        }
        .fade-out {
          animation: fadeOut 2s ease-out forwards;
        }
      `}
      </style>

      <div className="relative z-10 flex flex-col items-center justify-center p-4 sm:p-8">
        <div
          className="text-center text-lg sm:text-xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-2 tracking-widest uppercase"
        >
          ST PAULS COLLEGE
        </div>

        <div className="text-center text-sm sm:text-lg md:text-xl font-semibold text-blue-200 mb-4 tracking-widest uppercase font-serif">
          DEPARTMENT OF COMPUTER SCIENCE
        </div>

        <div className="relative mb-6 md:mb-8 w-full flex justify-center">
          <div className="relative">
            <div
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-transparent whitespace-nowrap"
              style={{ WebkitTextStroke: "2px #3b82f6" }}
            >
              PEGASUS
            </div>

            <div
              className="absolute top-0 left-0 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-blue-500 overflow-hidden transition-all duration-300 ease-out"
              style={{
                width: `${fillPercentage}%`,
                WebkitBackgroundClip: "text",
                backgroundImage: "linear-gradient(to right, #60a5fa, #3b82f6)",
                color: "transparent",
                filter: "drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))",
              }}
            >
              PEGASUS
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center space-x-1 sm:space-x-2 text-white font-light tracking-wider text-xs sm:text-sm md:text-lg">
          <span>CODE</span>
          <span className="text-blue-700">•</span>
          <span>INNOVATE</span>
          <span className="text-blue-700">•</span>
          <span>TRANSFORM</span>
        </div>

        <div className="mt-6 sm:mt-8 text-blue-400 animate-pulse">
        <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 animate-pulse" />


        </div>
      </div>
    </div>
  );
}

export default Loading;
