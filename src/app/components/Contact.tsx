import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { MapPin, Phone, Clock } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const message = encodeURIComponent(
    "Hi, I would like to book an appointment at The Fuzion Unisex Salon."
  );

  const whatsappUrl = `https://wa.me/917073978110?text=${message}`;

  return (
    // ✅ Added relative + z-10 to prevent click blocking
    <section
      id="contact"
      className="relative z-10 py-20 sm:py-32 bg-black"
    >
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
            Visit Us
          </h3>

          <h2 className="text-4xl sm:text-5xl text-white">
            Get in
            <span className="block text-[#D4AF37]">Touch</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

          {/* LEFT SIDE INFO */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl sm:text-3xl text-white mb-6 sm:mb-8">
              Visit Our Luxury Studio
            </h3>

            <div className="space-y-6">

              {/* Location */}
              <div className="flex gap-3 sm:gap-4 p-4 sm:p-6 bg-gradient-to-r from-[#D4AF37]/10 to-transparent border-l-2 border-[#D4AF37]">
                <div className="w-5 h-5 sm:w-6 sm:h-6">
                  <MapPin className="text-[#D4AF37] w-full h-full" />
                </div>
                <div>
                  <h4 className="text-white text-lg mb-2">Location</h4>
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                    The Fuzion Unisex Salon <br />
                    Pratap Nagar <br />
                    Jaipur, Rajasthan <br />
                    India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-3 sm:gap-4 p-4 sm:p-6 bg-gradient-to-r from-[#D4AF37]/10 to-transparent border-l-2 border-[#D4AF37]">
                <div className="w-5 h-5 sm:w-6 sm:h-6">
                  <Phone className="text-[#D4AF37] w-full h-full" />
                </div>
                <div>
                  <h4 className="text-white text-lg mb-2">Phone</h4>
                  <a
                    href="tel:917073978110"
                    className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm sm:text-base"
                  >
                    917073978110
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-3 sm:gap-4 p-4 sm:p-6 bg-gradient-to-r from-[#D4AF37]/10 to-transparent border-l-2 border-[#D4AF37]">
                <div className="w-5 h-5 sm:w-6 sm:h-6">
                  <Clock className="text-[#D4AF37] w-full h-full" />
                </div>
                <div>
                  <h4 className="text-white text-lg mb-2">Hours</h4>
                  <p className="text-gray-400 text-sm sm:text-base">
                    Monday – Sunday <br />
                    10:00 AM – 8:00 PM
                  </p>
                </div>
              </div>

            </div>

            {/* CTA */}
            <div className="mt-6 sm:mt-8">
              <a
                href="https://wa.me/917073978110?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-[#D4AF37] text-black hover:bg-[#F5E6CC] transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              >
                Book Appointment via WhatsApp
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE MAP */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-[400px] sm:h-[450px] lg:h-[500px] xl:h-[550px] rounded-xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.9285315851926!2d75.8219096742266!3d26.81040417670829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc9cd1346a7af%3A0xcd167ad39a5b8b49!2sThe%20fuzion%20unisex%20salon!5e0!3m2!1sen!2sus!4v1771959211891!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}