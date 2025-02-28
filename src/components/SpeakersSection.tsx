import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import SpeakerCard from "./SpeakerCard";
import speakerInfo from '../data/speaker.data';

const speakers = speakerInfo;

export default function SpeakersSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(true); // Track whether auto-scrolling should be active

  // Duplicate the speakers array for seamless scrolling
  const duplicatedSpeakers = [...speakers, ...speakers];

  // Auto-scrolling effect
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 1; // Adjust speed

    const scroll = () => {
      if (!isScrolling) return; // Stop scrolling when interacting
      scrollPosition += scrollSpeed;

      // Reset scroll position when fully scrolled
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };

    if (isScrolling) {
      animationId = requestAnimationFrame(scroll);
    }

    // Pause on hover or touch
    const pauseScroll = () => setIsScrolling(false);
    const resumeScroll = () => setIsScrolling(true);

    scrollContainer.addEventListener("mouseenter", pauseScroll);
    scrollContainer.addEventListener("mouseleave", resumeScroll);
    scrollContainer.addEventListener("touchstart", pauseScroll);
    scrollContainer.addEventListener("touchend", resumeScroll);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener("mouseenter", pauseScroll);
      scrollContainer.removeEventListener("mouseleave", resumeScroll);
      scrollContainer.removeEventListener("touchstart", pauseScroll);
      scrollContainer.removeEventListener("touchend", resumeScroll);
    };
  }, [isScrolling]);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-black text-center mb-12"
        >
          Our Key Speakers
        </motion.h2>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-8 scrollbar-hide touch-pan-x"
            style={{ 
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
              touchAction: "pan-x", // Allow horizontal scrolling
            }}
          >
            <style>{`
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
                onTouchStart={() => setIsScrolling(false)}
                onTouchEnd={() => setIsScrolling(true)}
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
