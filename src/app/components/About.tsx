import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Award, Crown, Heart, Users } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-20 sm:py-32 bg-gradient-to-b from-black to-[#1a1a1a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-2xl">
              <img
                src= "/4.jpeg"
                alt="The Fuzion Unisex Salon Interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              {/* Floating Badge */}
              <div className="absolute top-6 right-6 bg-[#D4AF37] text-black px-6 py-3 shadow-lg">
                <p className="text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Jaipur's Premier
                </p>
                <p className="text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Luxury Salon
                </p>
              </div>
            </div>

           
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-6">
              <h3
                className="text-[#D4AF37] text-lg mb-2 tracking-wider uppercase"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                About Us
              </h3>
              <h2
                className="text-4xl sm:text-5xl text-white mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Where Elegance
                <span className="block text-[#D4AF37]">Meets Excellence</span>
              </h2>
            </div>

            <div className="space-y-4 mb-8">
              <p
                className="text-gray-300 text-lg leading-relaxed"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Welcome to <span className="text-[#D4AF37]">The Fuzion Unisex Salon</span>, Jaipur's most distinguished destination for luxury beauty and grooming services. Located in the heart of Pratap Nagar, we are redefining the art of personal transformation.
              </p>
              <p
                className="text-gray-300 text-lg leading-relaxed"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Our world-class team of expert stylists and beauty professionals brings international techniques and premium products to create unforgettable experiences for every client.
              </p>
              <p
                className="text-gray-300 text-lg leading-relaxed"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                From bespoke bridal packages to signature hair transformations, we believe every individual deserves to feel extraordinary.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-6 bg-gradient-to-br from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/20">
                <Award className="mx-auto mb-3 text-[#D4AF37]" size={32} />
                <p className="text-2xl text-white mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                  10+
                </p>
                <p className="text-sm text-gray-400" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Years Experience
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/20">
                <Users className="mx-auto mb-3 text-[#D4AF37]" size={32} />
                <p className="text-2xl text-white mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                  5000+
                </p>
                <p className="text-sm text-gray-400" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Happy Clients
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/20">
                <Crown className="mx-auto mb-3 text-[#D4AF37]" size={32} />
                <p className="text-2xl text-white mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                  500+
                </p>
                <p className="text-sm text-gray-400" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Bridal Makeovers
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/20">
                <Heart className="mx-auto mb-3 text-[#D4AF37]" size={32} />
                <p className="text-2xl text-white mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                  100%
                </p>
                <p className="text-sm text-gray-400" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Satisfaction
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/917073978110?text=Hi,%20I%20would%20like%20to%20enquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-[#D4AF37] text-black hover:bg-[#F5E6CC] transition-all duration-300 transform hover:scale-105"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Enquire Now
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
