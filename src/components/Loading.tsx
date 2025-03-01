import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

function Loading() {
  const [fillPercentage, setFillPercentage] = useState(0);
  
  useEffect(() => {
    // Animate the fill effect
    const fillInterval = setInterval(() => {
      setFillPercentage(prev => {
        if (prev >= 100) {
          clearInterval(fillInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 50);
    
    return () => {
      clearInterval(fillInterval);
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#fbd1a2] flex flex-col items-center justify-center overflow-hidden">
      {/* Ambient background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gray-300 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-400 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-40 h-40 bg-gray-300 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center p-8">
        {/* PEGASUS text with liquid fill effect */}
        <div className="relative mb-8">
          {/* Mobile vertical orientation */}
          <div className="block md:hidden">
            <div className="relative flex flex-col">
              {['P', 'E', 'G', 'A', 'S', 'U', 'S'].map((letter, index) => (
                <div key={index} className="relative text-5xl font-bold text-transparent mb-1" style={{ WebkitTextStroke: '1.5px #3b82f6' }}>
                  {letter}
                  <div 
                    className="absolute top-0 left-0 text-5xl font-bold text-blue-500 overflow-hidden transition-all duration-300 ease-out"
                    style={{ 
                      height: `${Math.max(0, Math.min(100, fillPercentage - (index * 5)))}%`,
                      WebkitBackgroundClip: 'text',
                      backgroundImage: 'linear-gradient(to top, #60a5fa, #3b82f6)',
                      color: 'transparent',
                      filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))'
                    }}
                  >
                    {letter}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Desktop horizontal orientation */}
          <div className="hidden md:block">
            <div className="relative">
              <div className="text-8xl font-bold text-transparent" style={{ WebkitTextStroke: '2px #3b82f6' }}>
                PEGASUS
              </div>
              <div 
                className="absolute top-0 left-0 text-8xl font-bold text-blue-500 overflow-hidden transition-all duration-300 ease-out"
                style={{ 
                  width: `${fillPercentage}%`,
                  WebkitBackgroundClip: 'text',
                  backgroundImage: 'linear-gradient(to right, #60a5fa, #3b82f6)',
                  color: 'transparent',
                  filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))'
                }}
              >
                PEGASUS
              </div>
            </div>
          </div>
        </div>
        
        {/* Tagline */}
        <div className="flex items-center space-x-2 text-gray-700 font-light tracking-wider text-sm md:text-xl">
          <span>CODE</span>
          <span className="text-blue-500">•</span>
          <span>INNOVATE</span>
          <span className="text-blue-500">•</span>
          <span>TRANSFORM</span>
        </div>
        
        {/* Sparkle icon */}
        <div className="mt-8 text-blue-400 animate-pulse">
          <Sparkles size={24} />
        </div>
      </div>
    </div>
  );
}

export default Loading;
