import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Heart, Star, Crown } from "lucide-react";

export function BridalShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // ✅ FIXED WhatsApp URL (NO SPACE + encoded message)
  const bridalMessage = encodeURIComponent(
    "Hi, I would like to book a bridal consultation at The Fuzion Unisex Salon."
  );

  const bridalWhatsappUrl = `https://wa.me/917073978110?text=${bridalMessage}`;

  return (
    <section
      id="bridal"
      className="py-20 sm:py-32 bg-gradient-to-br from-black via-[#1a1a1a] to-black relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Content Side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8">
                  <Crown className="text-[#D4AF37] w-full h-full" />
                </div>
                <h3 className="text-[#D4AF37] text-sm sm:text-base lg:text-lg tracking-wider uppercase">
                  Bridal Excellence
                </h3>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white mb-4 sm:mb-6 leading-tight">
                Your Dream Wedding
                <span className="block text-[#D4AF37]">Starts Here</span>
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                At <span className="text-[#D4AF37]">The Fuzion Unisex Salon</span>, we understand that your wedding day is the most precious moment of your life.
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                From traditional elegance to contemporary glamour, we specialize in timeless bridal artistry using premium products.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-[#D4AF37]/10 to-transparent border-l-2 border-[#D4AF37]">
                <div className="w-5 h-5 sm:w-6 sm:h-6 mt-0.5 sm:mt-1">
                  <Star className="text-[#D4AF37] w-full h-full" />
                </div>
                <div>
                  <h4 className="text-white text-base sm:text-lg mb-1">
                    Pre-Wedding Trials
                  </h4>
                  <p className="text-gray-400 text-sm sm:text-base">
                    Personalized trial sessions
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-[#D4AF37]/10 to-transparent border-l-2 border-[#D4AF37]">
                <div className="w-5 h-5 sm:w-6 sm:h-6 mt-0.5 sm:mt-1">
                  <Star className="text-[#D4AF37] w-full h-full" />
                </div>
                <div>
                  <h4 className="text-white text-base sm:text-lg mb-1">
                    Complete Bridal Package
                  </h4>
                  <p className="text-gray-400 text-sm sm:text-base">
                    Hair, makeup & styling included
                  </p>
                </div>
              </div>
            </div>

            {/* ✅ WhatsApp Button */}
            <a
              href={bridalWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-[#D4AF37] text-black hover:bg-[#F5E6CC] transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
            >
              <div className="w-4 h-4 sm:w-5 sm:h-5">
                <Heart className="w-full h-full" />
              </div>
              Book Bridal Consultation
            </a>
          </motion.div>

          {/* Image Side (unchanged) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="col-span-1 sm:col-span-2 h-[300px] sm:h-[350px] lg:h-[400px] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1583878543723-dcd6ad8bcb3f"
                  alt="Bridal Makeup"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="h-[200px] sm:h-[225px] lg:h-[250px] overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1770908958875-25fce9f2ae66"
                  alt="Bridal Services"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="h-[200px] sm:h-[225px] lg:h-[250px] overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1722181366197-a033eb62c392"
                  alt="Wedding Makeup"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}