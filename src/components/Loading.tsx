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
            setTimeout(onComplete, 2000); // Wait for full fade-out
          }, 2000); // Extra time before fading
          return prev;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(fillInterval);
  }, [onComplete]);

  return (
    <div
      className={`min-h-screen w-full bg-[#fbd1a2] flex flex-col items-center justify-center ${isFadingOut ? "fade-out" : ""
        }`}
    >
      <style>
        {`
        @keyframes fadeOut {
          0% { opacity: 1; }
          10% { opacity: 0.9; }
          20% { opacity: 0.7; }
          50% { opacity: 0.5; }
          60% { opacity: 0.4; }
          70% { opacity: 0.2; }
          100% { opacity: 0; }
        }
  
        .fade-out {
          animation: fadeOut 2s ease-out forwards;
        }
      `}
      </style>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gray-300 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-400 rounded-full filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-40 h-40 bg-gray-300 rounded-full filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center p-8">
        <div className="relative mb-8">
          <div className="block md:hidden">
            <div className="relative flex flex-col">
              {["P", "E", "G", "A", "S", "U", "S"].map((letter, index) => (
                <div
                  key={index}
                  className="relative text-5xl font-bold text-transparent mb-1"
                  style={{ WebkitTextStroke: "1.5px #3b82f6" }}
                >
                  {letter}
                  <div
                    className="absolute top-0 left-0 text-5xl font-bold text-blue-500 overflow-hidden transition-all duration-300 ease-out"
                    style={{
                      height: `${Math.max(0, Math.min(100, fillPercentage - index * 5))}%`,
                      WebkitBackgroundClip: "text",
                      backgroundImage: "linear-gradient(to top, #60a5fa, #3b82f6)",
                      color: "transparent",
                      filter: "drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))",
                    }}
                  >
                    {letter}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative">
              <div
                className="text-8xl font-bold text-transparent"
                style={{ WebkitTextStroke: "2px #3b82f6" }}
              >
                PEGASUS
              </div>
              <div
                className="absolute top-0 left-0 text-8xl font-bold text-blue-500 overflow-hidden transition-all duration-300 ease-out"
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
        </div>

        <div className="flex items-center space-x-2 text-gray-700 font-light tracking-wider text-sm md:text-xl">
          <span>CODE</span>
          <span className="text-blue-500">•</span>
          <span>INNOVATE</span>
          <span className="text-blue-500">•</span>
          <span>TRANSFORM</span>
        </div>

        <div className="mt-8 text-blue-400 animate-pulse">
          <Sparkles size={24} />
        </div>
      </div>
    </div>
  );
}

export default Loading;
