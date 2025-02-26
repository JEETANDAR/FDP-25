
import HeroSection from "@/components/HeroSection";
import SpeakersSection from "@/components/SpeakersSection";
import TimelineSection from "@/components/TimelineSection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Index() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-black"
    >
      <HeroSection />
      <SpeakersSection />
      <TimelineSection />
      <Footer />
    </motion.div>
  );
}
