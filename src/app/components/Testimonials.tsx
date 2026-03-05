import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    service: 'Bridal Makeup',
    rating: 5,
    text: "The Fuzion Unisex Salon made my wedding day absolutely magical! The bridal makeup was flawless and lasted throughout the day. The team's attention to detail and professionalism was outstanding.",
    image: 'PS',
  },
  {
    name: 'Rajesh Kumar',
    service: 'Premium Grooming',
    rating: 5,
    text: 'Best grooming experience in Jaipur! The stylists are highly skilled and the ambiance is luxurious. I always leave feeling confident and refreshed. Highly recommend for men who appreciate quality.',
    image: 'RK',
  },
  {
    name: 'Ananya Verma',
    service: 'Hair Styling & Color',
    rating: 5,
    text: 'Absolutely love my new hair color! The stylist understood exactly what I wanted and delivered beyond expectations. The products used are top-notch and the service is premium.',
    image: 'AV',
  },
  {
    name: 'Kavita Meena',
    service: 'Skin Treatment',
    rating: 5,
    text: 'The facial treatments here are incredible! My skin has never looked better. The staff is knowledgeable and uses only the best products. Worth every visit!',
    image: 'KM',
  },
  {
    name: 'Arjun Singh',
    service: 'Wedding Package',
    rating: 5,
    text: 'The pre-wedding grooming package was excellent. From haircut to facial treatments, everything was perfect. The team ensured I looked my best for the big day!',
    image: 'AS',
  },
  {
    name: 'Neha Jain',
    service: 'Bridal Package',
    rating: 5,
    text: 'Exceptional bridal services! The trial session was thorough and the final look was exactly what I dreamed of. The Fuzion team is truly talented and professional.',
    image: 'NJ',
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const whatsappLink =
    "https://wa.me/917073978110?text=Hi%20I%20would%20like%20to%20book%20an%20appointment%20at%20The%20Fuzion%20Unisex%20Salon.";

  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-gradient-to-b from-black to-[#0a0a0a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-[#D4AF37] text-lg mb-2 tracking-wider uppercase">
            Testimonials
          </h3>

          <h2 className="text-4xl sm:text-5xl text-white mb-6">
            What Our Clients
            <span className="block text-[#D4AF37]">Say About Us</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Hear from those who experienced our luxury services
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 p-4 sm:p-6 lg:p-8 hover:border-[#D4AF37]/50 transition-all duration-500"
            >
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 opacity-10">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12">
                  <Quote className="text-[#D4AF37] w-full h-full" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="text-[#D4AF37] fill-[#D4AF37] w-3 h-3 sm:w-4 sm:h-4 lg:w-[18px] lg:h-[18px]" />
                ))}
              </div>

              <p className="text-gray-300 mb-4 sm:mb-6 italic text-sm sm:text-base leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="h-px bg-gradient-to-r from-[#D4AF37] via-[#D4AF37]/50 to-transparent mb-4 sm:mb-6"></div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#D4AF37] to-[#F5E6CC] flex items-center justify-center text-black text-sm sm:text-base font-medium">
                  {testimonial.image}
                </div>

                <div>
                  <h4 className="text-white text-sm sm:text-base">{testimonial.name}</h4>
                  <p className="text-[#D4AF37] text-xs sm:text-sm">
                    {testimonial.service}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 text-base sm:text-lg mb-4 sm:mb-6">
            Join our family of satisfied clients
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-[#D4AF37] text-black hover:bg-[#F5E6CC] transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
          >
            Book Your Experience
          </a>
        </motion.div>

      </div>
    </section>
  );
}