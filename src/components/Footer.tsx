import { Facebook, Twitter, Linkedin, Youtube, Github, Instagram } from "lucide-react";

export default function Page() {
  const collegeIframeURL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15548.06785683368!2d77.48690725541988!3d13.034591600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a27af073972e739%3A0x2bfbd772ea477cbb!2sST%20PAULS%20COLLEGE!5e0!3m2!1sen!2sin!4v1740840904646!5m2!1sen!2sin"; 
  
  const socialLinks = [
    { Icon: Facebook, href: "#" },
    { Icon: Twitter, href: "#" },
    { Icon: Linkedin, href: "#" },
    { Icon: Youtube, href: "#" },
    { Icon: Github, href: "#" },
    { Icon: Instagram, href: "#" },
  ];

  return (
    <>
      <footer className="bg-primary py-12 flex flex-col items-center">
        <div className="container mx-auto px-4 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-semibold text-lg mb-4 text-center">About Us</h3>
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
            <div className="w-full md:w-3/4">
              <h3 className="text-white font-semibold text-lg mb-4 text-center">Locate Us</h3>
              <iframe
                src={collegeIframeURL}
                title="College Location"
                className="w-full h-60 md:h-80 border-2 border-gray-700 rounded-lg shadow-lg"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-gray-400">
              © {new Date().getFullYear()} Department of Computer Science. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}