"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const EvolutionSection = () => {
  const [activeIndex, setActiveIndex] = useState(null)
  const containerRef = useRef(null)

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const faqs = [
    {
      question:
        "In 2010, Prime was founded by passionate interior designer Jane Doe, who envisioned creating a design studio that combines innovative ideas with sustainable practices.Starting as a small operation from a home office, Jane's unique approach quickly attracted attention.",
      year: "2010",
      label: "The Beginning",
    },
    {
      question:
        "In 2010, Prime was founded by passionate interior designer Jane Doe, who envisioned creating a design studio that combines innovative ideas with sustainable practices. Starting as a small operation from a home office, Jane's unique approach quickly attracted attention.",
      year: "2012",
      label: "Establishing a Presence",
    },
    {
      question: `In 2013, Prime received its first major accolade, the "Emerging Design Firm" award at the National 
                        Interior Design Awards. This recognition boosted the company's profile and brought in a wave of new 
                        clients.`,
      year: "2013",
      label: "First Major Award",
    },
    {
      question: `Prime's innovative projects began to attract media attention in 2018. Features in prominent design 
                            magazines and blogs showcased the studio's unique approach and stunning results. This year also saw 
                            Prime winning the "Innovative Space Design" award for their groundbreaking co-working space 
                            project.`,
      year: "2018",
      label: "Media Coverage",
    },
    {
      question: `In 2024, Prime continues to grow and innovate. The company is working on several high-profile 
                        projects, integrating the latest technology and sustainable practices. With a dedicated team and a clear 
                        vision, Prime is poised for even greater success in the coming years.`,
      year: "2024",
      label: "Continued Growth and Innovation",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: 100,
      y: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  // Individual card component with scroll effects
  const TimelineCard = ({ faq, index }) => {
    const cardRef = useRef(null)
    const { scrollYProgress } = useScroll({
      target: cardRef,
      offset: ["start end", "end start"],
    })

    const y = useTransform(scrollYProgress, [0, 1], [0, -50])
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1])
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8])

    return (
      <motion.div
        ref={cardRef}
        variants={cardVariants}
        className="relative"
        style={{
          position: "sticky",
          top: `${80 + index * 20}px`,
          zIndex: faqs.length + index,
        }}
      >
        <motion.div style={{ y, scale, opacity }} className="transform-gpu">
          {/* Desktop Layout - Hidden on mobile/tablet h-1/2 */}
          <div className="hidden lg:block "> 
            <div className="bg-[#f7f6e9] max-w-[50rem] max-h-[16.0625rem] relative md:left-14 mb-12 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              <button className="w-full p-6 text-left focus:outline-none">
                <div className="flex items-start gap-4">
                  {/* Year Circle */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-16 h-16 flex items-center justify-center">
                      <span
                        className="text-[122px] font-[700] relative left-28 inter-placeholder"
                        style={{ color: "#041436" }}
                      >
                        {faq.year}
                      </span>
                    </div>
                  </div>
                </div>
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center relative bottom-7 z-10 justify-between mb-2 align-middle">
                    <span className="text-[1rem] font-[500] bg-[#f7f6e9] text-[#1d322d] absolute inter-placeholder   tracking-wide">
                      {faq.label}
                    </span>
                  </div>
                  <h3 className="text-[1rem] font-[500]  text-[#1d322d]/85 inter-placeholder mb-2 pr-4 mt-8">
                    {faq.question}
                  </h3>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile/Tablet Layout - Hidden on desktop */}
          <div className="block lg:hidden">
            <div className="bg-[#f7f6e9] w-full rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 p-4 sm:p-6">
              <button className="w-full text-left focus:outline-none">
                {/* Mobile Year and Label */}
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="flex items-center gap-3 align-baseline ">
                    <div className="w-10 h-10 sm:w-12 sm:h-12  flex items-center justify-center">
                      <span className="text-2xl sm:text-base font-bold text-[#1d322d] inter-placeholder">
                        {faq.year}
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-[#1d322d] uppercase tracking-wide inter-placeholder relative top-1">
                      {faq.label}
                    </span>
                  </div>
                </div>

                {/* Mobile Content */}
                <div className="pl-0">
                  <p className="text-sm sm:text-base font-medium text-[#1d322d]/80 inter-placeholder leading-relaxed">
                    {faq.question}
                  </p>
                </div>
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 h-full lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
          {/* Left Side - Heading */}
          <div className="flex flex-col relative md:right-10 justify-center text-center lg:text-left lg:justify-start">
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-[#009F93]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="6" strokeWidth="2" />
                <circle cx="12" cy="12" r="3.2" fill="currentColor" />
              </svg>
              <span className="text-xs md:font-semibold text-[#009F93] tracking-wider inter-placeholder font-bold">
                OUR HISTORY
              </span>
            </div>
            <h2
              className=" text-md font-[900] md:text-[48px]  md:font-[700] mb-6 sm:mb-8 inter-placeholder tracking-tighter leading-[1] text-[#009F93]"
              style={{ color: "#009F93", fontSize: "43px" }}
            >
              The Evolution of Prime
            </h2>
          </div>

          {/* Right Side - Timeline Cards with Overlapping Effect */}
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            style={{ minHeight: `${faqs.length * 400}px` }}
          >
            {faqs.map((faq, index) => (
              <TimelineCard key={index} faq={faq} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default EvolutionSection
