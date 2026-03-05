import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  const message = encodeURIComponent(
    "Hi, I would like to book an appointment at The Fuzion Unisex Salon."
  );

  const whatsappUrl = `https://wa.me/917073978110?text=${message}`;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ✅ Background Image */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/pic2.jpeg"
          alt="Salon Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80"></div>
      </div>

      {/* ✅ Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex justify-center mb-4 sm:mb-6"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
            <Sparkles className="text-[#D4AF37] w-full h-full" />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-4 sm:mb-6 px-2"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Jaipur's Signature
          <span className="block text-[#D4AF37] mt-1 sm:mt-2">
            Luxury Beauty Studio
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mb-6 sm:mb-8 px-4"
        >
          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#F5E6CC] mb-2"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Premium Hair • Skin • Bridal • Grooming Experience
          </p>
          <p
            className="text-sm sm:text-base md:text-lg text-gray-300"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Where Luxury Meets Perfection
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
        >
          {/* WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#D4AF37] text-black hover:bg-[#F5E6CC] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#D4AF37]/50 text-sm sm:text-base"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Book Appointment
            <div className="w-4 h-4 sm:w-5 sm:h-5">
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform w-full h-full"
              />
            </div>
          </a>

          {/* Scroll Button */}
          <button
            onClick={() => scrollToSection("services")}
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 text-sm sm:text-base"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            View Services
          </button>
        </motion.div>
      </div>
    </section>
  );
}