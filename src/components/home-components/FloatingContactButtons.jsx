import React from "react"
import { Mail, Phone, Flag } from "lucide-react"
import { motion } from "framer-motion"

function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
      <motion.button
        className="bg-[#F7F6E9] text-[#1D322D] px-4 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-lg transition-all duration-200 hover:scale-105"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Mail className="h-5 w-5" />
        <span>Free Quote</span>
      </motion.button>

      <motion.button
        className="bg-[#F7F6E9] text-[#1D322D] px-4 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-lg transition-all duration-200 hover:scale-105"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Phone className="h-5 w-5" />
        <span>+1 555 123 4567</span>
      </motion.button>

      <motion.button
        className="bg-[#F7F6E9] text-[#1D322D] px-4 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-lg transition-all duration-200 hover:scale-105"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Flag className="h-5 w-5" />
        <span>Made in Framer</span>
      </motion.button>
    </div>
  )
}

export default FloatingContact
