import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Correct WhatsApp URL (NO SPACE + encoded message)
  const message = encodeURIComponent(
    "Hi, I would like to book an appointment at The Fuzion Unisex Salon."
  );

  const whatsappUrl = `https://wa.me/917073978110?text=${message}`;

  return (
    <>
      {/* Floating Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
          aria-label="WhatsApp Chat"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={28} />
              </motion.div>
            ) : (
              <motion.div
                key="whatsapp"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle
                  size={28}
                  className="group-hover:animate-bounce"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </button>

        {!isOpen && (
          <div className="absolute inset-0 w-16 h-16 bg-[#25D366] rounded-full animate-ping opacity-20"></div>
        )}
      </motion.div>

      {/* Popup Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-28 right-6 z-50 w-80 bg-white rounded-lg shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#25D366] p-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <MessageCircle className="text-[#25D366]" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium">
                    The Fuzion Unisex Salon
                  </h4>
                  <p className="text-white/80 text-sm">
                    Typically replies instantly
                  </p>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 bg-[#ECE5DD]">
              <div className="bg-white p-4 rounded-lg rounded-tl-none shadow-sm mb-4">
                <p className="text-gray-800 mb-2">Hello! 👋</p>
                <p className="text-gray-800">
                  Welcome to{" "}
                  <span className="text-[#D4AF37] font-medium">
                    The Fuzion Unisex Salon
                  </span>
                  . How can we help you today?
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 bg-white border-t border-gray-200">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle size={20} />
                Start Chat
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}