import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  // ✅ FIXED WhatsApp URL (NO SPACE + encoded message)
  const message = encodeURIComponent(
    "Hi, I would like to book an appointment at The Fuzion Unisex Salon."
  );

  const whatsappUrl = `https://wa.me/917073978110?text=${message}`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1
              className="text-xl sm:text-2xl lg:text-3xl cursor-pointer"
              style={{ fontFamily: "'Playfair Display', serif" }}
              onClick={() => scrollToSection("home")}
            >
              <span className="text-white">The Fuzion</span>
              <span className="text-[#D4AF37]"> Unisex Salon</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {["home","about","services","bridal","gallery","testimonials","contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-white hover:text-[#D4AF37] transition-colors duration-300 capitalize text-sm lg:text-base"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {section}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 lg:px-6 py-2 lg:py-3 bg-[#D4AF37] text-black hover:bg-[#F5E6CC] transition-all duration-300 transform hover:scale-105 text-sm lg:text-base"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md pb-4 sm:pb-6">
            <div className="flex flex-col space-y-2 sm:space-y-4 px-4 pt-4">
              {["home","about","services","bridal","gallery","testimonials","contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-white hover:text-[#D4AF37] transition-colors duration-300 text-left py-2 capitalize text-base"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {section}
                </button>
              ))}

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-[#D4AF37] text-black hover:bg-[#F5E6CC] transition-all duration-300 text-center mt-2 sm:mt-4 text-base"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Book Appointment
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}