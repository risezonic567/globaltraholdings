import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
 
export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-20 right-5 z-[9999]">
      <div className="relative">
        <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping opacity-70"></span>
 
        <motion.a
          href="https://wa.me/918588809690"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="relative flex items-center gap-2 bg-green-500 text-white rounded-full px-3 py-3 md:px-4 md:py-3 shadow-[0_8px_24px_rgba(34,197,94,0.45)]"
          animate={{ y: [0, -5, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaWhatsapp className="text-2xl shrink-0" />
 
          <span className="hidden md:block text-sm font-medium whitespace-nowrap">
            Chat With Us
          </span>
        </motion.a>
      </div>
    </div>
  );
}