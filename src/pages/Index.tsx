import { motion } from "framer-motion";

import HeroSection from "@/components/HeroSection";
import AboutDepartment from "@/components/AboutDepartment";
import AboutTemplate from "@/components/AboutTemplate";
import AboutProgram from "@/components/AboutProgram";
import SpeakersSection from "@/components/SpeakersSection";
import TimelineSection from "@/components/TimelineSection";
import OrganizingTeam from "@/components/OrganizingTeam";
import AdvisoryMembers from "@/components/AdvisoryMember";
import Button from "@/components/button";
import ContactUs from "@/components/contact";
import Footer from "@/components/Footer";

import clgPhot from '../../staticFiles/aboutSection/collegePhoto.jpeg';
import deptPhot from '../../staticFiles/aboutSection/aboutDept.jpg';
import fdpPhot from '../../staticFiles/aboutSection/aboutFDP.jpeg';

const aboutInfo = [
  {
    title: "About Our College",
    paragraphs: [
      "ST PAULS COLLEGE, Bengaluru, is a premier institution established by the Society of St Paul, a global Catholic organization founded in 1914 by Blessed James Alberione. Spread across 39 countries, the Society is committed to excellence in education.",
      "Affiliated with Bangalore University and recognized by the Government of Karnataka, the college is located in Nagasandra, near Bengaluru's Peenya Industrial Area, with excellent connectivity via road and Namma Metro. Accredited with a B++ Grade (CGPA 2.97) by NAAC, it is renowned for its quality education and innovative practices."
    ],
    image: clgPhot,
  },
  {
    title: "About Our Department",
    paragraphs: [
      "The Department of Computer Science offers two specialized undergraduate programs: Bachelor of Computer Applications (BCA) and BSc in Computer Science, Psychology and Journalism. These programs are designed to address the increasing demand for skilled professionals in the fast-growing IT and software industries."
    ],
    image: deptPhot,
  },
  {
    title: "About Faculty Development Program",
    paragraphs: [
      "The International Faculty Development Program is a prestigious initiative designed to enhance members' academic and professional capabilities across educational institutions worldwide. This program offers a unique platform for knowledge exchange, skill development, and networking among educators from diverse backgrounds.",
      "Participants will engage in understanding, integrating, and applying new technologies in education to enhance teaching methodologies, student engagement, and learning outcomes. The program features workshops, interactive sessions, and hands-on training from leading experts in their respective fields.",
      "By participating in this program, members can expand their knowledge base, refine their teaching approaches, and develop collaborative relationships with peers from around the globe. The program aims to create a community of educators committed to excellence and continuous improvement in higher education."
    ],
    image: fdpPhot,
  }
]

export default function Index() {
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <HeroSection />

        {
          aboutInfo.map((info, index) => <AboutTemplate {...info} key={index} />)
        }
        <SpeakersSection />
        <OrganizingTeam />
        <AdvisoryMembers />
        <TimelineSection />
        <Button />
        <ContactUs />
        <Footer />
      </motion.div>
    </div>
  );
}
