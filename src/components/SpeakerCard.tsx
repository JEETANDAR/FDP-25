
import { Facebook, Twitter, Linkedin, Youtube, Github, Instagram } from "lucide-react";
import { motion } from "framer-motion";

interface SpeakerCardProps {
  name: string;
  title: string;
  image: string;
}

export default function SpeakerCard({ name, title, image }: SpeakerCardProps) {
  const socialIcons = [
    { Icon: Facebook, href: "#" },
    { Icon: Twitter, href: "#" },
    { Icon: Linkedin, href: "#" },
    { Icon: Youtube, href: "#" },
    { Icon: Github, href: "#" },
    { Icon: Instagram, href: "#" },
  ];

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="glass-card p-6 min-w-[300px] max-w-[300px] mx-4"
    >
      <div className="relative w-full h-64 mb-4 overflow-hidden rounded-lg">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-white text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-400 mb-4">{title}</p>
      <div className="flex flex-wrap gap-3 justify-center">
        {socialIcons.map(({ Icon, href }, index) => (
          <a
            key={index}
            href={href}
            className="text-gray-400 hover:text-blue-500 transition-colors"
          >
            <Icon size={20} />
          </a>
        ))}
      </div>
    </motion.div>
  );
}
