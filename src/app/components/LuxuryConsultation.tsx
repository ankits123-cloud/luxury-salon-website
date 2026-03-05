import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { MessageCircle, Sparkles, Crown, Heart } from 'lucide-react';

export function LuxuryConsultation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const whatsappLink =
    "https://wa.me/917073978110?text=Hi%20I%20would%20like%20to%20enquire%20about%20your%20services";

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-br from-[#1a1a1a] via-black to-[#1a1a1a] relative overflow-hidden">
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="relative">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16">
                  <Crown className="text-[#D4AF37] w-full h-full" />
                </div>
                <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6">
                  <Sparkles
                    className="text-[#D4AF37] w-full h-full"
                  />
                </div>
              </div>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white mb-4 sm:mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Personalized Luxury
              <span className="block text-[#D4AF37]">Experience</span>
            </h2>

            <p
              className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-8"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Every client deserves a bespoke beauty experience. At The Fuzion Unisex Salon, we believe in creating personalized journeys tailored to your unique style and preferences.
            </p>

            <div className="inline-block px-4 py-2 sm:px-6 sm:py-3 bg-[#D4AF37]/10 border border-[#D4AF37]/30 backdrop-blur-sm">
              <p
                className="text-[#D4AF37] text-sm sm:text-base lg:text-lg"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                No Fixed Packages • Custom Experiences
              </p>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12"
          >
            <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-sm">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-10 lg:h-10 mb-3 sm:mb-4 mx-auto">
                <Heart className="text-[#D4AF37] w-full h-full" />
              </div>
              <h3 className="text-white text-base sm:text-lg lg:text-xl mb-2">
                Tailored Services
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Customized treatments designed specifically for your needs
              </p>
            </div>

            <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-sm">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-10 lg:h-10 mb-3 sm:mb-4 mx-auto">
                <Sparkles className="text-[#D4AF37] w-full h-full" />
              </div>
              <h3 className="text-white text-base sm:text-lg lg:text-xl mb-2">
                Premium Products
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                International brands and luxury formulations
              </p>
            </div>

            <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-sm">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-10 lg:h-10 mb-3 sm:mb-4 mx-auto">
                <Crown className="text-[#D4AF37] w-full h-full" />
              </div>
              <h3 className="text-white text-base sm:text-lg lg:text-xl mb-2">
                Expert Team
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Certified professionals with years of experience
              </p>
            </div>
          </motion.div>

          {/* Main CTA Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-[#D4AF37]/5 border-2 border-[#D4AF37] p-6 sm:p-8 lg:p-12"
          >
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl text-white mb-3 sm:mb-4">
                Let's Discuss Your Vision
              </h3>

              <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8">
                Connect with us on WhatsApp to discuss your requirements, and we'll create a perfect luxury experience just for you.
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-[#D4AF37] text-black hover:bg-[#F5E6CC] transition-all duration-300 transform hover:scale-105 shadow-2xl text-sm sm:text-base lg:text-lg"
              >
                <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6">
                  <MessageCircle className="w-full h-full" />
                </div>
                Chat Now on WhatsApp
              </a>

              <p className="text-gray-400 mt-4 sm:mt-6 text-xs sm:text-sm">
                Available 7 days a week • Quick Response Guaranteed
              </p>
            </div>
          </motion.div>

          {/* Bottom Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-gray-500 italic">
              "Luxury is in each detail. We believe every service should be as unique as you are."
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}