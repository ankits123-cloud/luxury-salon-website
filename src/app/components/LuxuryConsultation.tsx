import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { MessageCircle, Sparkles, Crown, Heart } from 'lucide-react';

export function LuxuryConsultation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Crown className="text-[#D4AF37]" size={64} />
                <Sparkles
                  className="absolute -top-2 -right-2 text-[#D4AF37]"
                  size={24}
                />
              </div>
            </div>

            <h2
              className="text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Personalized Luxury
              <span className="block text-[#D4AF37]">Experience</span>
            </h2>

            <p
              className="text-gray-300 text-xl leading-relaxed max-w-3xl mx-auto mb-8"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Every client deserves a bespoke beauty experience. At The Fuzion Unisex Salon, we believe in creating personalized journeys tailored to your unique style and preferences.
            </p>

            <div className="inline-block px-6 py-3 bg-[#D4AF37]/10 border border-[#D4AF37]/30 backdrop-blur-sm">
              <p
                className="text-[#D4AF37] text-lg"
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
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            <div className="text-center p-6 bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-sm">
              <Heart className="mx-auto mb-4 text-[#D4AF37]" size={40} />
              <h3
                className="text-white text-xl mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Tailored Services
              </h3>
              <p
                className="text-gray-400"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Customized treatments designed specifically for your needs
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-sm">
              <Sparkles className="mx-auto mb-4 text-[#D4AF37]" size={40} />
              <h3
                className="text-white text-xl mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Premium Products
              </h3>
              <p
                className="text-gray-400"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                International brands and luxury formulations
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-sm">
              <Crown className="mx-auto mb-4 text-[#D4AF37]" size={40} />
              <h3
                className="text-white text-xl mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Expert Team
              </h3>
              <p
                className="text-gray-400"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Certified professionals with years of experience
              </p>
            </div>
          </motion.div>

          {/* Main Content Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-[#D4AF37]/5 border-2 border-[#D4AF37] p-8 sm:p-12"
          >
            <div className="text-center">
              <h3
                className="text-3xl text-white mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Let's Discuss Your Vision
              </h3>
              <p
                className="text-gray-300 text-lg mb-8"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Connect with us on WhatsApp to discuss your requirements, and we'll create a perfect luxury experience just for you. Whether it's a special occasion or regular pampering, we're here to bring your vision to life.
              </p>

              <a
                href="https://wa.me/9170739 78110?text=Hi,%20I%20would%20like%20to%20enquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 bg-[#D4AF37] text-black hover:bg-[#F5E6CC] transition-all duration-300 transform hover:scale-105 shadow-2xl text-lg"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                <MessageCircle size={24} />
                Chat Now on WhatsApp
              </a>

              <p
                className="text-gray-400 mt-6 text-sm"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
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
            <p
              className="text-gray-500 italic"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              "Luxury is in each detail. We believe every service should be as unique as you are."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
