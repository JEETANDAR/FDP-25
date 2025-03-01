import { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";

import Loading from "@/components/Loading";
import HeroSection from "@/components/HeroSection";
import AboutDepartment from "@/components/AboutDepartment";
import AboutCollege from "@/components/AboutCollege";
import AboutProgram from "@/components/AboutProgram";
import SpeakersSection from "@/components/SpeakersSection";
import TimelineSection from "@/components/TimelineSection";
import OrganizingTeam from "@/components/OrganizingTeam";
import AdvisoryMembers from "@/components/AdvisoryMember";
import Button from "@/components/button";
import ContactUs from "@/components/contact";
import Footer from "@/components/Footer";

export default function Index() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 6000); // 15 seconds loading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-900/20 to-black animate-gradient" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        {/* Animated glow effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-[128px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-[128px] animate-pulse delay-700" />
        </div>
      </div>

      {/* Main content */}
      {loading ? (
        <Loading />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <Suspense fallback={<Loading />}> 
            <HeroSection />
            <AboutCollege />
            <AboutDepartment />
            <AboutProgram />
            <SpeakersSection />
            <OrganizingTeam />
            <AdvisoryMembers />
            <TimelineSection />
            <Button />
            <ContactUs />
            <Footer />
          </Suspense>
        </motion.div>
      )}
    </div>
  );
}
