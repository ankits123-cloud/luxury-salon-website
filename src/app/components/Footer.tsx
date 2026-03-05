import { Instagram, Facebook, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-[#D4AF37]/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 sm:mb-12">
          {/* Brand Column */}
          <div>
            <h3
              className="text-xl sm:text-2xl mb-3 sm:mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <span className="text-white">The Fuzion</span>
              <span className="block text-[#D4AF37]">Unisex Salon</span>
            </h3>
            <p
              className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Jaipur's premier luxury beauty destination. Experience world-class services in an elegant ambiance.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://www.instagram.com/thefuzionunisexsalon?igsh=M3VvbjA0MGVqdHN6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-[#D4AF37]/10 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-black flex items-center justify-center transition-all duration-300 border border-[#D4AF37]/30"
                aria-label="Instagram"
              >
                <Instagram size={16} className="sm:size-20" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-[#D4AF37]/10 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-black flex items-center justify-center transition-all duration-300 border border-[#D4AF37]/30"
                aria-label="Facebook"
              >
                <Facebook size={16} className="sm:size-20" />
              </a>
              
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-white text-lg mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 text-sm sm:text-base py-1"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 text-sm sm:text-base py-1"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 text-sm sm:text-base py-1"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('bridal')}
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 text-sm sm:text-base py-1"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Bridal
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 text-sm sm:text-base py-1"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Gallery
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-white text-lg mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <p
                  className="text-gray-400 text-sm sm:text-base"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Hair Styling & Color
                </p>
              </li>
              <li>
                <p
                  className="text-gray-400 text-sm sm:text-base"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Bridal Makeup
                </p>
              </li>
              <li>
                <p
                  className="text-gray-400 text-sm sm:text-base"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Skin Treatments
                </p>
              </li>
              <li>
                <p
                  className="text-gray-400 text-sm sm:text-base"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Men's Grooming
                </p>
              </li>
              <li>
                <p
                  className="text-gray-400 text-sm sm:text-base"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Pre-Wedding Packages
                </p>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="text-white text-lg mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-2 sm:gap-3">
                <div className="w-4 h-4 sm:w-5 sm:h-5">
                  <MapPin className="text-[#D4AF37] flex-shrink-0 mt-0.5 sm:mt-1 w-full h-full" />
                </div>
                <p
                  className="text-gray-400 text-sm sm:text-base"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Pratap Nagar<br />
                  Jaipur, Rajasthan
                </p>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <div className="w-4 h-4 sm:w-5 sm:h-5">
                  <Phone className="text-[#D4AF37] flex-shrink-0 mt-0.5 sm:mt-1 w-full h-full" />
                </div>
                <a
                  href="tel:70739 78110"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 text-sm sm:text-base py-1"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  +917073978110
                </a>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <div className="w-4 h-4 sm:w-5 sm:h-5">
                  <Mail className="text-[#D4AF37] flex-shrink-0 mt-0.5 sm:mt-1 w-full h-full" />
                </div>
                <a
                  href="https://wa.me/917073978110?text=Hi,%20I%20would%20like%20to%20enquire%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 text-sm sm:text-base py-1"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p
            className="text-gray-500 text-center sm:text-left text-xs sm:text-sm"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            © 2026 The Fuzion Unisex Salon. All rights reserved.
          </p>
          <p
            className="text-gray-500 text-center sm:text-right text-xs sm:text-sm"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
          
          </p>
        </div>
      </div>
    </footer>
  );
}
