import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function FloatingWhatsApp() {

  const message = encodeURIComponent(
    "Hi, I would like to book an appointment at The Fuzion Unisex Salon."
  );

  const whatsappUrl = `https://wa.me/917073978110?text=${message}`;

  const openWhatsApp = () => {
    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, delay: 1 }}
      className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50"
    >
      <button
        onClick={openWhatsApp}
        className="relative w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="WhatsApp Chat"
      >
        <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7">
          <MessageCircle size={28} />
        </div>

        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
      </button>
    </motion.div>
  );
}