"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    title: "Modern Modular Kitchen in Aurangabad",
    description:
      "The Coastal Harmony Home project was a comprehensive renovation of a beachside house, transforming it into a serene and stylish retreat that reflects the client's love for the ocean and nature.",
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80",
    color: "#F7F6E9",
    categories: ["RESIDENTIAL", "SINGLE HOME"],
  },
  {
    title: "Modern Chic Boutique",
    description:
      "A stunning transformation of an industrial space into a contemporary living environment, featuring clean lines, natural materials, and innovative storage solutions.",
    src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    color: "#F7F6E9",
    categories: ["COMERCIAL", "SHOWROOM"],
  },
]

const Card = ({ title, description, src, color, categories, i }) => {
  const cardRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  // Animation variants for the card entrance
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: -100, // All cards come from left
      y: -50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: i * 0.2
      }
    }
  }

  return (
    <div
      ref={cardRef}
      className="relative flex items-center justify-center w-full xs:h-[80] sm:h-[80vh] md:h-[100vh] 2xl:h-[64vh]  "
      style={{
        top: `calc(5vh + ${i * +125}px)`,
        // height: "100vh",
      }}
    >
      <div 
        className="w-full md:min-w-[1250px] mx-auto lg:px-20 " 
        style={{ y }}
        // variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div
          className="flex flex-col lg:flex-row items-start md:gap-8 lg:gap-16 rounded-3xl p-6 my-2 min-h-[55vh] lg:min-h-[70vh] 2xl:min-h-[50vh] "
          style={{ backgroundColor: color }}
        >
          {/* Left - Categories */}
          <div 
            className="flex-shrink-0 flex gap-6  lg:w-1/4 "
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 + 0.3 }}
            viewport={{ once: true }}
          >
            {categories.map((category, idx) => (
              <motion.button
                key={idx}
                className="px-1 py-2 border mb-3 md:mb-0 border-[#f7f7e9]-200 px-2 rounded-lg text-[12px]  font-semibold text-[#495953] hover:border-gray-600 transition-colors duration-200 text-sm inter-placeholder w-fit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.2 + 0.5 + idx * 0.1 }}
                viewport={{ once: true }}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Center - Project Image */}
          <motion.div 
            className="flex-shrink-0 lg:w-3/10"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: i * 0.2 + 0.4 }}
            viewport={{ once: true }}
          >
            <div className="relative group overflow-hidden rounded-2xl w-[84vw] lg:w-[340px] relative right-2 md:right-0 md:w-full h-[230px] md:h-[250px] lg:h-[450px] md:right-19">
              <img
                src={src}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80";
                }}
              />
              {/* Hover Button Overlay */}
              <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end justify-center md:p-6">
                <div className="w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out opacity-0 group-hover:opacity-100">
                  <button className="bg-[#f7f6e9] text-[#1D322D] px-6 py-3 rounded-xl font-semibold flex items-center justify-between w-full shadow-lg transition-all duration-200">
                    <span>View Project</span>
                    <div className="bg-slate-800 text-white p-2 rounded-full">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Project Details */}
          <motion.div 
            className="flex-1 md:lg:w-2/3 px-4 h-full flex flex-col justify-between relative right-4 md:right-0 "
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 + 0.6 }}
            viewport={{ once: true }}
          >
            {/* Project Title - Top */}
            <motion.h2 
              className="text-[24px] font-[900] md:text-[23px]  w-full md:w-1/2 font-bold md:relative md:right-28 text-start text-black font-black leading-tight inter-placeholder mb-4 mt-4 md:mt-0 lg:mb-0"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 + 0.7 }}
              viewport={{ once: true }}
            >
              {title}
            </motion.h2>
            
            {/* Project Description - Bottom */}
            <motion.p 
              className="text-[#495953] md:relative md:right-28 2xl:pr-2 md:top-70 text-base md:text-[16px] leading-relaxed inter-placeholder mt-auto md:min-w-120"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 + 0.8 }}
              viewport={{ once: true }}
            >
              {description}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}


export const MobileCard = ({ title, description, src, color, categories, i }) => {
  const cardRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  // Animation variants for the card entrance
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: -100, // All cards come from left
      y: -50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: i * 0.2
      }
    }
  }

  return (
    <div
      ref={cardRef}
      className="relative flex items-center justify-center w-full xs:h-[80] sm:h-[80vh] md:h-[100vh] 2xl:h-[65vh] "
      style={{
        // top: `calc(5vh + ${i * +125}px)`,
        // height: "100vh",
      }}
    >
      <div 
        className="w-full md:min-w-[1250px] mx-auto lg:px-20 " 
        style={{ y }}
        // variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div
          className="flex flex-col lg:flex-row items-start md:gap-8 lg:gap-16 rounded-3xl p-6 my-2 min-h-[55vh] lg:min-h-[70vh] 2xl:min-h-[50vh] "
          style={{ backgroundColor: color }}
        >
          {/* Left - Categories */}
          <div 
            className="flex-shrink-0 flex gap-6  lg:w-1/4 "
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 + 0.3 }}
            viewport={{ once: true }}
          >
            {categories.map((category, idx) => (
              <motion.button
                key={idx}
                className="px-1 py-2 border mb-3 md:mb-0 border-[#f7f7e9]-200 px-2 rounded-lg text-[12px]  font-semibold text-[#495953] hover:border-gray-600 transition-colors duration-200 text-sm inter-placeholder w-fit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.2 + 0.5 + idx * 0.1 }}
                viewport={{ once: true }}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Center - Project Image */}
          <motion.div 
            className="flex-shrink-0 lg:w-3/10"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: i * 0.2 + 0.4 }}
            viewport={{ once: true }}
          >
            <div className="relative group overflow-hidden rounded-2xl w-[84vw] lg:w-[340px] relative right-2 md:right-0 md:w-full h-[230px] md:h-[250px] lg:h-[450px] md:right-19">
              <img
                src={src}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80";
                }}
              />
              {/* Hover Button Overlay */}
              <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end justify-center md:p-6">
                <div className="w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out opacity-0 group-hover:opacity-100">
                  <button className="bg-[#f7f6e9] text-[#1D322D] px-6 py-3 rounded-xl font-semibold flex items-center justify-between w-full shadow-lg transition-all duration-200">
                    <span>View Project</span>
                    <div className="bg-slate-800 text-white p-2 rounded-full">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Project Details */}
          <motion.div 
            className="flex-1 md:lg:w-2/3 px-4 h-full flex flex-col justify-between relative right-4 md:right-0 "
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 + 0.6 }}
            viewport={{ once: true }}
          >
            {/* Project Title - Top */}
            <motion.h2 
              className="text-[24px] font-[900] md:text-[23px]  w-full md:w-1/2 font-bold md:relative md:right-28 text-start text-black font-black leading-tight inter-placeholder mb-4 mt-4 md:mt-0 lg:mb-0"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 + 0.7 }}
              viewport={{ once: true }}
            >
              {title}
            </motion.h2>
            
            {/* Project Description - Bottom */}
            <motion.p 
              className="text-[#495953] md:relative md:right-28 2xl:pr-2 md:top-70 text-base md:text-[16px] leading-relaxed inter-placeholder mt-auto md:min-w-120"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 + 0.8 }}
              viewport={{ once: true }}
            >
              {description}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

const ProjectShowcase = () => {
  return (
    <div className="relative   ">
      <div className="relative left-3 md:left-0 md:max-h-screen 2xl:max-h-[100vh] md:overflow-y-auto scrollbar-thin overflow-x-hidden scrollbar-hide scrollbar-thumb-gray-300 scrollbar-track-transparent  md:bottom-9  2xl:bottom-0">
        {projects.map((project, i) => (
          <Card key={i} {...project} i={i} />
        ))}
      </div>
      {/* Bottom Button Section */}
      {/* <div className="relative group flex justify-center items-center py-16 z-20">
        <motion.button
          className="bg-[#1F3630] text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-500 relative z-10 group-hover:rounded-r-none group-hover:pr-4"
          whileHover={{
            scale: 1.02,
          }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10">View All Services</span>
          <motion.div className="absolute top-0 right-0 h-full w-0 group-hover:w-4 transition-all duration-500 ease-out" />
        </motion.button>
        <motion.button
          className="bg-[#F3AC85] text-slate-800 p-4 rounded-2xl transition-all duration-500 ml-2 group-hover:ml-0 group-hover:rounded-l hover:text-slate-800 focus:outline-none relative z-10"
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div whileHover={{ y: 2 }} transition={{ duration: 0.2 }}>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.button>
        <motion.div
          className="absolute top-0 left-0 h-full rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"
          style={{
            width: "calc(100% - 8px)",
            zIndex: 5,
          }}
        />
      </div> */}
    </div>
  )
}

export default Card 