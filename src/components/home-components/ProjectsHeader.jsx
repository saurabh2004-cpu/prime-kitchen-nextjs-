"use client"

import { motion } from "framer-motion"  

export default function ProjectsHeader() {
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
    <section className="bg-[#FFFEF2] py-15 md:mt-8 lg:py-2 relative md:mb-10 md:min-h-[40vh]">
      <div className="max-w-7xl min-h-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative flex justify-center items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="relative ">
            <motion.div
              className="flex items-center justify-center md::justify-center relative top-5 md:top-15 md:right-45  mb-6 sm:mb-8 sm:ml-4 md:ml-8 lg:ml-16"
              variants={fadeInUp}
            >
              <svg className="w-5 h-5 text-[#009f93] relative md:left-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="6" strokeWidth="2" />
                <circle cx="12" cy="12" r="3.2" fill="currentColor" />
              </svg>
               <span className="text-xs font-semibold tracking-wide inter-placeholder  font-medium md:font-semibold relative md:right-6 left-1 md:0 md:top-0 text-[#009f93] tracking-tight word-spacing-tight uppercase inter-placeholder">OUR PORTFOLIO</span>
            </motion.div>

            <motion.div className="text-center text-[#1D322D]" variants={fadeInUp}>
              <h1 className="text-[80px]   text-[#1D322D]  md:text-[230px]   font-[600] md:font-[500] leading-[0.75] tracking-[-0.2rem] md:tracking-[-1.3rem] inter-placeholder" style={{color: "#009f93"}}>
                Projects
              </h1>
            </motion.div>
          </div>
        </motion.div>
      </div>

    </section>
  )
}
