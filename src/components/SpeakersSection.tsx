
import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SpeakerCard from "./SpeakerCard";

const speakers = [
  {
    name: "Dr. Sarah Johnson",
    title: "AI Research Director",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
  },
  {
    name: "Prof. Michael Chen",
    title: "Machine Learning Expert",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  },
  {
    name: "Dr. Emily Roberts",
    title: "Data Science Lead",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    name: "Prof. James Wilson",
    title: "Cybersecurity Specialist",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  },
];

export default function SpeakersSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 relative">
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
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-8 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {speakers.map((speaker, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="snap-center"
              >
                <SpeakerCard {...speaker} />
              </motion.div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
