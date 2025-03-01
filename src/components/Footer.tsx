
import { Facebook, Twitter, Linkedin, Youtube, Github, Instagram } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { Icon: Facebook, href: "#" },
    { Icon: Twitter, href: "#" },
    { Icon: Linkedin, href: "#" },
    { Icon: Youtube, href: "#" },
    { Icon: Github, href: "#" },
    { Icon: Instagram, href: "#" },
  ];

  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">About Us</h3>
            <p className="text-gray-400">
            The Department of Computer Science offers two specialized undergraduate programs: Bachelor of Computer Applications (BCA) and BSc in Computer Science, Psychology and Journalism. These programs are designed to address the increasing demand for skilled professionals in the fast-growing IT and software industries.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#btn" className="text-gray-400 hover:text-white transition-colors">
                  Registration
                </a>
              </li>
              <li>
                <a href="#topics" className="text-gray-400 hover:text-white transition-colors">
                  Program Schedule
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              {socialLinks.map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Department of Computer Science. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
