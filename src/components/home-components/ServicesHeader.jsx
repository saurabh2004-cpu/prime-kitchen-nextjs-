"use client"

import { motion } from "framer-motion"

export default function ServicesHeader() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <section className="   md:pb-12 bg-[#F7F6E9] py-16 md:pb-20 relative md:bottom-24 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="flex items-center justify-center md:text-[12px] sm:justify-center relative  top-5 md:top-15 tracking-tighter md:right-50  mb-6 sm:mb-8 sm:ml-4 md:ml-8 lg:ml-16"
            variants={fadeInUp}
          >
            <svg className="w-5 h-5 text-[#009f93] " viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="6" strokeWidth="2" />
            <circle cx="12" cy="12" r="3.2" fill="currentColor" />
          </svg>
            <span className="text-xs sm:text-sm mdtext-[px] font-medium relative  left-1 md:0 md:top-0 text-[#009f93] tracking-tight word-spacing-tight uppercase inter-placeholder">What We Do</span>
          </motion.div>

          <motion.div className="text-center" variants={fadeInUp}>
            <h2 className="text-[66px] tracking-tighter font-medium md:font-[500] md:text-[220px] text-[#009f93]  leading-[0.75] md:tracking-[-0.09em] sm:font-sm inter-placeholder">
              Services
            </h2>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
