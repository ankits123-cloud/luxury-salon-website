import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Scissors, Sparkles, Crown, User, Gift } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Hair Styling & Color',
    description: 'Expert cuts, premium coloring, and transformative styling by our master stylists. From classic elegance to bold trends.',
    image: 'https://images.unsplash.com/photo-1617391654484-2894196c2cc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxvbiUyMGhhaXIlMjBjb2xvciUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NzE5NDE3Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    icon: Sparkles,
    title: 'Skin Treatments',
    description: 'Rejuvenating facials, advanced treatments, and luxury skincare rituals for radiant, glowing skin.',
    image: 'https://images.unsplash.com/photo-1731514771613-991a02407132?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luJTIwdHJlYXRtZW50JTIwZmFjaWFsJTIwc3BhfGVufDF8fHx8MTc3MTk0MTczOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    icon: Crown,
    title: 'Bridal Makeup',
    description: 'Exquisite bridal artistry with premium products. We create timeless beauty for your most special day.',
    image: 'https://images.unsplash.com/photo-1770908958875-25fce9f2ae66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBicmlkYWwlMjBtYWtldXAlMjBlbGVnYW50fGVufDF8fHx8MTc3MTkzNDAzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    icon: User,
    title: 'Grooming for Men',
    description: 'Sophisticated grooming services including precision haircuts, beard styling, and luxury spa treatments.',
    image: 'https://images.unsplash.com/photo-1587909209111-5097ee578ec3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwZ3Jvb21pbmclMjBiYXJiZXJ8ZW58MXx8fHwxNzcxOTQxNzQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    icon: Gift,
    title: 'Pre-Wedding Packages',
    description: 'Complete beauty transformation packages for brides and grooms. Personalized treatments for your wedding journey.',
    image: 'https://images.unsplash.com/photo-1722181366197-a033eb62c392?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBicmlkZSUyMHdlZGRpbmclMjBtYWtldXB8ZW58MXx8fHwxNzcxODc0ODI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="services" className="py-20 sm:py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3
            className="text-[#D4AF37] text-lg mb-2 tracking-wider uppercase"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Our Services
          </h3>
          <h2
            className="text-4xl sm:text-5xl text-white mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Signature Luxury
            <span className="block text-[#D4AF37]">Experiences</span>
          </h2>
          <p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Indulge in world-class beauty services tailored to perfection
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-[#1a1a1a] to-black border border-[#D4AF37]/20 overflow-hidden hover:border-[#D4AF37] transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                {/* Icon */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-[#D4AF37] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-black" size={24} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="text-2xl text-white mb-3 group-hover:text-[#D4AF37] transition-colors duration-300"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {service.title}
                </h3>

                <p
                  className="text-gray-400 mb-6 leading-relaxed"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {service.description}
                </p>

                {/* Hover Line */}
                <div className="h-0.5 bg-gradient-to-r from-[#D4AF37] to-transparent w-0 group-hover:w-full transition-all duration-500"></div>

                {/* Button */}
                <a
                  href="https://wa.me/9170739 78110?text=Hi,%20I%20would%20like%20to%20enquire%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-[#D4AF37] hover:text-[#F5E6CC] transition-colors duration-300"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Enquire Now →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p
            className="text-gray-300 text-lg mb-6"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Looking for something specific? Let's create your perfect experience.
          </p>
          <a
            href="https://wa.me/9170739 78110?text=Hi,%20I%20would%20like%20to%20enquire%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Chat with Us on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
