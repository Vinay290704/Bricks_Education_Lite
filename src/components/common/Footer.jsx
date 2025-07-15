
import React, { useEffect } from 'react';

const Footer = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .footer-glass {
        background: rgba(15, 15, 23, 0.9);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border-top: 1px solid rgba(255, 255, 255, 0.1);
      }
      .footer-gradient-text {
        background: linear-gradient(135deg, #9333ea 0%, #06b6d4 50%, #22c55e 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      .footer-accent {
        background: linear-gradient(135deg, #06b6d4 0%, #22c55e 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      .footer-link:hover {
        background: linear-gradient(135deg, #9333ea 0%, #06b6d4 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-shadow: 0 0 10px rgba(147, 51, 234, 0.3);
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  return (
    <footer className="footer-glass text-white py-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-cyan-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4 footer-gradient-text">
              BRICKS EDUCATION
            </h3>
            <p className="text-gray-300 italic text-lg leading-relaxed">
              Learning by Doing, Leading by Thinking!
            </p>
          </div>

          <div className="text-center md:text-left">
            <div className="mb-6 p-4 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10">
              <span className="font-semibold text-white block mb-2">Phone:</span>
              <a
                href="tel:+919462311937"
                className="footer-accent text-xl font-medium transition-all duration-300 hover:scale-105 footer-link"
              >
                +91 94623 11937
              </a>
            </div>

            <div className="p-4 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10">
              <span className="font-semibold text-white block mb-2">Email:</span>
              <a
                href="mailto:aryan@bricks.org.in"
                className="footer-accent text-xl font-medium transition-all duration-300 hover:scale-105 footer-link"
              >
                aryan@bricks.org.in
              </a>
            </div>
          </div>

          <div className="text-center md:text-left">
            <div className="p-4 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10">
              <p className="text-sm text-gray-300 leading-relaxed">
                <strong className="text-white block mb-2">Note:</strong> 
                Our team will capture key moments from the
                workshop through photos and videos. The school is welcome to use
                this content on their website, social media, or in promotional
                materials.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom border with gradient */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Bricks Education. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;