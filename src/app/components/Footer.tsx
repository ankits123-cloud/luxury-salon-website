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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <h3
              className="text-2xl mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <span className="text-white">The Fuzion</span>
              <span className="block text-[#D4AF37]">Unisex Salon</span>
            </h3>
            <p
              className="text-gray-400 mb-6 leading-relaxed"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Jaipur's premier luxury beauty destination. Experience world-class services in an elegant ambiance.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#D4AF37]/10 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-black flex items-center justify-center transition-all duration-300 border border-[#D4AF37]/30"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#D4AF37]/10 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-black flex items-center justify-center transition-all duration-300 border border-[#D4AF37]/30"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#D4AF37]/10 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-black flex items-center justify-center transition-all duration-300 border border-[#D4AF37]/30"
                aria-label="YouTube"
              >
                <Youtube size={20} />
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
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('bridal')}
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Bridal
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300"
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
                  className="text-gray-400"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Hair Styling & Color
                </p>
              </li>
              <li>
                <p
                  className="text-gray-400"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Bridal Makeup
                </p>
              </li>
              <li>
                <p
                  className="text-gray-400"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Skin Treatments
                </p>
              </li>
              <li>
                <p
                  className="text-gray-400"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Men's Grooming
                </p>
              </li>
              <li>
                <p
                  className="text-gray-400"
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
              <li className="flex items-start gap-3">
                <MapPin className="text-[#D4AF37] flex-shrink-0 mt-1" size={18} />
                <p
                  className="text-gray-400"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Pratap Nagar<br />
                  Jaipur, Rajasthan
                </p>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="text-[#D4AF37] flex-shrink-0 mt-1" size={18} />
                <a
                  href="tel:70739 78110"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-[#D4AF37] flex-shrink-0 mt-1" size={18} />
                <a
                  href="https://wa.me/9170739 78110?text=Hi,%20I%20would%20like%20to%20enquire%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300"
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
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p
            className="text-gray-500 text-center md:text-left"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            © 2026 The Fuzion Unisex Salon. All rights reserved.
          </p>
          <p
            className="text-gray-500 text-center md:text-right"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
          
          </p>
        </div>
      </div>
    </footer>
  );
}
