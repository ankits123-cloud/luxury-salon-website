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

  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-gradient-to-b from-black to-[#0a0a0a]">
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
            Testimonials
          </h3>
          <h2
            className="text-4xl sm:text-5xl text-white mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            What Our Clients
            <span className="block text-[#D4AF37]">Say About Us</span>
          </h2>
          <p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Hear from those who experienced our luxury services
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 p-8 hover:border-[#D4AF37]/50 transition-all duration-500"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote size={48} className="text-[#D4AF37]" />
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-[#D4AF37] fill-[#D4AF37]"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p
                className="text-gray-300 mb-6 leading-relaxed italic"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                "{testimonial.text}"
              </p>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-[#D4AF37] via-[#D4AF37]/50 to-transparent mb-6"></div>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#F5E6CC] flex items-center justify-center text-black">
                  <span
                    className="text-sm"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {testimonial.image}
                  </span>
                </div>

                {/* Name and Service */}
                <div>
                  <h4
                    className="text-white mb-1"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {testimonial.name}
                  </h4>
                  <p
                    className="text-[#D4AF37] text-sm"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {testimonial.service}
                  </p>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p
            className="text-gray-300 text-lg mb-6"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Join our family of satisfied clients
          </p>
          <a
            href="https://wa.me/9170739 78110?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment%20at%20The%20Fuzion%20Unisex%20Salon."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-[#D4AF37] text-black hover:bg-[#F5E6CC] transition-all duration-300 transform hover:scale-105"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Book Your Experience
          </a>
        </motion.div>
      </div>
    </section>
  );
}
