import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // ✅ Reusable Number
  const phoneNumber = "917073478110";

  return (
    <footer className="bg-black border-t border-[#D4AF37]/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 sm:mb-12">
          
          {/* Brand */}
          <div>
            <h3 className="text-xl sm:text-2xl mb-3 sm:mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              <span className="text-white">The Fuzion</span>
              <span className="block text-[#D4AF37]">Unisex Salon</span>
            </h3>

            <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
              Jaipur's premier luxury beauty destination. Experience world-class services in an elegant ambiance.
            </p>

            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://www.instagram.com/thefuzionunisexsalon?igsh=M3VvbjA0MGVqdHN6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#D4AF37]/10 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-black flex items-center justify-center transition-all duration-300 border border-[#D4AF37]/30"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#D4AF37]/10 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-black flex items-center justify-center transition-all duration-300 border border-[#D4AF37]/30"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["home", "about", "services", "bridal", "gallery"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="text-gray-400 hover:text-[#D4AF37] text-sm sm:text-base"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-lg mb-4">Services</h4>
            <ul className="space-y-3 text-gray-400 text-sm sm:text-base">
              <li>Hair Styling & Color</li>
              <li>Bridal Makeup</li>
              <li>Skin Treatments</li>
              <li>Men's Grooming</li>
              <li>Pre-Wedding Packages</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-lg mb-4">Contact</h4>
            <ul className="space-y-4">
              
              <li className="flex gap-3">
                <MapPin className="text-[#D4AF37] w-5 h-5 mt-1" />
                <p className="text-gray-400 text-sm sm:text-base">
                  Pratap Nagar<br />Jaipur, Rajasthan
                </p>
              </li>

              <li className="flex gap-3">
                <Phone className="text-[#D4AF37] w-5 h-5 mt-1" />
                <a
                  href={`tel:${phoneNumber}`}
                  className="text-gray-400 hover:text-[#D4AF37]"
                >
                  +91 7073478110
                </a>
              </li>

              <li className="flex gap-3">
                <Mail className="text-[#D4AF37] w-5 h-5 mt-1" />
                <a
                  href={`https://wa.me/${phoneNumber}?text=Hi,%20I%20would%20like%20to%20enquire%20about%20your%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#D4AF37]"
                >
                  WhatsApp Us
                </a>
              </li>

            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-8"></div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-500 text-xs sm:text-sm">
          <p>© 2026 The Fuzion Unisex Salon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}