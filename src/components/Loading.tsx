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
            setTimeout(onComplete, 500); // Wait for fade-out animation
          }, 2000); // Extra 2s before fading out
          return prev;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(fillInterval);
  }, [onComplete]);

  return (
    <div
      className={`min-h-screen w-full bg-[#fbd1a2] flex flex-col items-center justify-center transition-opacity duration-500 ${
        isFadingOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center justify-center p-8">
        <div className="relative mb-8">
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
