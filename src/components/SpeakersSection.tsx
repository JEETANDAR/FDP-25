import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import SpeakerCard from "./SpeakerCard";
import speakerInfo from '../data/speaker.data';

const speakers = speakerInfo;

export default function SpeakersSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Duplicate the speakers array to create a seamless loop effect
  const duplicatedSpeakers = [...speakers, ...speakers];

  // Auto-scrolling effect
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;
    
    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // Adjust for faster/slower scrolling
    
    const scroll = () => {
      scrollPosition += scrollSpeed;
      
      // Reset scroll position when we've scrolled through the first set of items
      if (scrollPosition >= (scrollContainer.scrollWidth / 2)) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };
    
    animationId = requestAnimationFrame(scroll);
    
    // Pause scrolling when hovering
    const pauseScroll = () => cancelAnimationFrame(animationId);
    const resumeScroll = () => {
      animationId = requestAnimationFrame(scroll);
    };
    
    scrollContainer.addEventListener("mouseenter", pauseScroll);
    scrollContainer.addEventListener("mouseleave", resumeScroll);
    
    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener("mouseenter", pauseScroll);
      scrollContainer.removeEventListener("mouseleave", resumeScroll);
    };
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
        >
          Our Key Speakers
        </motion.h2>
        
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-8 scrollbar-hide"
            style={{ 
              scrollbarWidth: "none", 
              msOverflowStyle: "none",
              // Hide scrollbar for Chrome/Safari/Opera
              WebkitOverflowScrolling: "touch"
            }}
          >
            {/* Use CSS to hide scrollbar for Chrome/Safari/Opera */}
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            
            {duplicatedSpeakers.map((speaker, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: Math.min(index * 0.1, 1) }}
                className="flex-shrink-0"
              >
                <SpeakerCard {...speaker} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}