import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1698864551605-fab9fed03af5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzYWxvbiUyMGludGVyaW9yJTIwZGFyayUyMGVsZWdhbnR8ZW58MXx8fHwxNzcxOTMwNTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
        }}
      >
        <div className="absolute inset-0 bg-black/85"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#D4AF37]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D4AF37]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <Sparkles className="text-[#D4AF37]" size={64} />
              <div className="absolute inset-0 bg-[#D4AF37] blur-xl opacity-50"></div>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to Experience
            <span className="block text-[#D4AF37]">Luxury?</span>
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 text-xl sm:text-2xl mb-12 leading-relaxed"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Transform your look at Jaipur's most prestigious beauty destination.
            <span className="block mt-2 text-[#F5E6CC]">Your journey to elegance begins here.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="https://wa.me/917073978110?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment%20at%20The%20Fuzion%20Unisex%20Salon."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-[#D4AF37] text-black hover:bg-[#F5E6CC] transition-all duration-300 transform hover:scale-105 shadow-2xl text-lg"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Book Your Slot Now
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
            </a>

            <a
              href="tel:917073978110"
              className="inline-flex items-center gap-3 px-10 py-5 bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 text-lg"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Call Us Now
            </a>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12 flex flex-wrap justify-center gap-8 text-gray-400"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
              <p style={{ fontFamily: "'Poppins', sans-serif" }}>Premium Services</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
              <p style={{ fontFamily: "'Poppins', sans-serif" }}>Expert Team</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
              <p style={{ fontFamily: "'Poppins', sans-serif" }}>Luxury Ambiance</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
