import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1770908958875-25fce9f2ae66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBicmlkYWwlMjBtYWtldXAlMjBlbGVnYW50fGVufDF8fHx8MTc3MTkzNDAzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Bridal Elegance',
  },
  {
    url: 'https://images.unsplash.com/photo-1763048208932-cbe149724374?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc3R5bGluZyUyMHNhbG9uJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MTg3ODE5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Hair Styling',
  },
  {
    url: 'https://images.unsplash.com/photo-1722181366197-a033eb62c392?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBicmlkZSUyMHdlZGRpbmclMjBtYWtldXB8ZW58MXx8fHwxNzcxODc0ODI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Wedding Glam',
  },
  {
    url: 'https://images.unsplash.com/photo-1617391654484-2894196c2cc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxvbiUyMGhhaXIlMjBjb2xvciUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NzE5NDE3Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Color Treatment',
  },
  {
    url: 'https://images.unsplash.com/photo-1731514771613-991a02407132?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luJTIwdHJlYXRtZW50JTIwZmFjaWFsJTIwc3BhfGVufDF8fHx8MTc3MTk0MTczOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Skin Treatment',
  },
  {
    url: 'https://images.unsplash.com/photo-1587909209111-5097ee578ec3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwZ3Jvb21pbmclMjBiYXJiZXJ8ZW58MXx8fHwxNzcxOTQxNzQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: "Men's Grooming",
  },
  {
    url: '/4.jpeg',
    title: 'Our Studio',
  },
  {
    url: 'https://images.unsplash.com/photo-1583878543723-dcd6ad8bcb3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwYnJpZGUlMjBqZXdlbHJ5fGVufDF8fHx8MTc3MTk0MTc0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Bridal Beauty',
  },
];

export function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="gallery" className="py-20 sm:py-32 bg-[#0a0a0a]">
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
            Our Work
          </h3>
          <h2
            className="text-4xl sm:text-5xl text-white mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Gallery of
            <span className="block text-[#D4AF37]">Excellence</span>
          </h2>
          <p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            A glimpse into our world of luxury transformations
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden bg-black cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p
                  className="text-white text-lg"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {image.title}
                </p>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
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
            Follow us for daily inspiration and updates
          </p>
          <a
            href="https://wa.me/917073978110?text=Hi,%20I%20would%20like%20to%20enquire%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-[#D4AF37] text-black hover:bg-[#F5E6CC] transition-all duration-300 transform hover:scale-105"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Connect with Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
