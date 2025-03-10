import { Facebook, Twitter, Linkedin, Youtube, Github, Instagram } from "lucide-react";

interface SpeakerCardProps {
  name: string;
  title: string;
  image: string;
}

export default function SpeakerCard({ name, role, image }: SpeakerCardProps) {
  const socialIcons = [
    { Icon: Facebook, href: "#" },
    { Icon: Twitter, href: "#" },
    { Icon: Linkedin, href: "#" },
    { Icon: Youtube, href: "#" },
    { Icon: Github, href: "#" },
    { Icon: Instagram, href: "#" },
  ];
  
  return (
    <div
      className="bg-gray-200 rounded-xl shadow-lg p-6 min-w-[300px] max-w-[300px] mx-4 h-[500px] flex flex-col transition-transform duration-300 hover:-translate-y-2 border border-gray-300"
    >
      <div className="relative w-full h-64 mb-4 overflow-hidden rounded-lg">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-black text-xl font-semibold mb-2">{name}</h3>
      <div className="h-24 overflow-auto mb-4">
        <p className="text-gray-600 text-sm leading-tight">{role}</p>
      </div>
      {/* <div className="flex flex-wrap gap-3 justify-center mt-auto">
        {socialIcons.map(({ Icon, href }, index) => (
          <a
            key={index}
            href={href}
            className="text-gray-500 hover:text-blue-500 transition-colors duration-300"
          >
            <Icon size={20} />
          </a>
        ))}
      </div> */}
    </div>
  );
}