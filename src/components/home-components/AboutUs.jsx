"use client"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function AboutUs() {
  // Split the paragraph into lines for individual animation
  const paragraphLines = [
    "Founded in 2011, Prime Kitchen Studio began with a dream to redefine kitchens across Maharashtra",
    "We craft more than just cooking spaces — we create the vibrant heart of every home, blending beauty with purpose",
    "Our expert team designs premium modular kitchens that reflect elegance, innovation, and the joy of modern living",
    
  ]

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  // Animation variants for each line
  const lineVariants = {
    hidden: {
      opacity: 0,
      x: -50,
      y: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 2.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="bg-[#Fffef2] text-[#1D2B29] px-6 md:px-12 pb-6 md:m-x-12 sm:px-10 xl:px-20">
      <div className=" mx-auto flex flex-col lg:flex-row  items-start gap-12">
        <div className="flex items-center gap-2 relative md:top-15 xl:top-0 xl:mt-12 min-w-[120px] pr-4">
          <svg
            className="w-5 h-5 text-[#009f93]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="12" cy="12" r="6" strokeWidth="2" />
            <circle cx="12" cy="12" r="3.2" fill="currentColor" />
          </svg>
          <span
            className="uppercase text-xs font-semibold tracking-wide inter-placeholder"
            style={{ color: "#009f93" }}
          >
            About Us
          </span>
        </div>


        <motion.div
          className="flex-1 max-8-6xl relative z-10 sm:left-50 md:left-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <div
            className="text-[26px] font-[600]  md:font-medium md:px-2 text-[#1D322D] text-start lg:text-[36px] leading-tight tracking-[-1px] inter-placeholder md:pl-32 md:pt-12 md:ml-16"
            style={{ fontWeight: 540 }}
          >
            <span className="inline-block w-8 md:w-20"></span>
            {paragraphLines.map((line, index) => (
              <motion.span key={index} variants={lineVariants} className="inline font-[550]">
                {line}
                {index < paragraphLines.length - 1 && " "}
              </motion.span>
            ))}
          </div>

          <motion.div className="group w-fit cursor-pointer pt-8" variants={lineVariants}>
            <div className="flex items-center gap-2 pb-1 relative xl:right-4 md:right-0">
              <span
                className="text-md sm:text-base font-semibold  uppercase text-[#1D2B29] inter-placeholder  md:pl-32  md:ml-16"
                style={{ color: "#009f93" }}
              >
                Know More
              </span>

              <div className="hover:bg-[#F4B183] rounded-full p-1 transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight className="h-4 w-4 text-[#1D2B29] rounded-full border" style={{ color: "#009f93" }} />
              </div>

              {/* Animated underline */}
              <motion.div
                className="absolute left-0 -bottom-0.5 h-0.5 bg-[#1D2B29]"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
