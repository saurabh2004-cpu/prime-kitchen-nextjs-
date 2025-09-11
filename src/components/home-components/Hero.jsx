"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Star, ArrowRight } from "lucide-react"

export default function Hero() {
  const [currentQuote, setCurrentQuote] = useState(0)
  const heroRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const videoY = useTransform(scrollYProgress, [0, 1], [0, -600])

  const quotes = [
    {
      text: "I was skeptical about virtual design services but their e-design package was comprehensive and perfectly tailored to my needs.",
      author: "Tony M.",
    },
    {
      text: "The custom furniture designed by Prime has transformed our home. Each piece is a masterpiece that fits perfectly into our space and meets our aesthetic desires.",
      author: "Samantha",
    },
    {
      text: "Prime has been a game-changer for my home. Their ability to blend functionality with exquisite design is unparalleled.",
      author: "Mathews R.",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [quotes.length])

  const slideUpVariants = {
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
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  return (
    <div className="relative md:h-[140vh] 3xl:h-[150vh]">
      {/* hero section */}
      <section ref={heroRef} className="h-screen flex flex-col justify-center relative z-0">
        <div className="mx-auto px-4 sm:px-6 lg:px-12  md:py-16 lg:py-20 w-full">
          <motion.div
            className="space-y-6 md:space-y-16"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="text-center md:pt-24 " variants={slideUpVariants}>
              <h1 className="text-4xl mt-32 md:mt-0 sm:text-5xl lg:text-7xl xl:text-7xl 2xl:text-8xl font-black text-[#1d322d]  tracking-tight text-center sm:text-start inter-placeholder">
                <span className="block font-black text-6xl text-start mt-16 mb-2 md:mb-0 md:mt-0 md:text-9xl tracking-tighter text-[#1D322D]">
                  Your Ideas,
                </span>
                <span className="w-full md:flex ">
                  <span className="font-black flex md:inline text-[60px] text-start md:text-9xl tracking-tighter relative md:bottom-4 text-[#1D322D]">
                    Our Creative{" "}
                  </span>
                  <span
                    className="font-light  flex text-6xl text-start md:text-[145px] text-[#009f93] font-satisfy relative md:bottom-4"
                    style={{ color: "#009f93" }}
                  >
                    Twist
                  </span>
                </span>
              </h1>
            </motion.div>

            <motion.div
              className="grid  flex-row-reverse grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start "
              variants={staggerContainer}
            >
              {/* Right side card - shown first on mobile, second on desktop */}
              <motion.div
                className=" w-full bg-[#f7f6e9] p-2 md:p-4 relative max-w-md h-55 md:h-57 rounded-2xl md:space-y-6 md:relative md:bottom-15 md:left-65  lg:order-2"
                variants={slideUpVariants}
              >
                <motion.p
                  className="text-[#1d322d]/65 text-[17px] leading-relaxed font-[500] pr-0  lg:pr-20"
                  whileHover={{ color: "#374151" }}
                >
                  With a commitment to sustainability and innovative solutions where we craft beautiful, functional
                  spaces that stand the test of time.
                </motion.p>

                <div className="relative group flex justify-start items-center align-center item-center mb-32 mt-6">
                  <motion.button
                    className="bg-[#00374b] h-full text-white px-8 py-3 rounded-md font-semibold text-lg transition-all duration-500 relative z-10 group-hover:rounded-r-none group-hover:pr-4"
                    whileHover={{
                      scale: 1.02,
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10 rounded-md">Download Brochure</span>
                    <motion.div className="absolute top-0 right-0 h-full w-0 group-hover:w-4 transition-all duration-500 ease-out" />
                  </motion.button>

                  <motion.button
                    className="bg-[#088f88]  text-slate-800 p-3 rounded-md transition-all duration-500 ml-2 group-hover:ml-0 group-hover:rounded-l  hover:text-slate-800 focus:outline-none relative z-10"
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div whileHover={{ y: 2 }} transition={{ duration: 0.2 }}>
                      <ArrowRight className="w-6 h-6 text-white " />
                    </motion.div>
                  </motion.button>

                  <motion.div
                    className="absolute top-0 left-0 h-full  rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"
                    style={{
                      width: "calc(100% - 8px)",
                      zIndex: 5,
                    }}
                  />
                </div>
              </motion.div>

              {/* Left side carousel - shown second on mobile, first on desktop */}
              <motion.div
                className="w-full px-2 md:p-6 rounded-lg max-w-sm relative  md:bottom-18 md:right-8  "
                variants={slideUpVariants}
              >
                <div className="flex md:space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#9b6e55] text-[#9b6e55]" />
                  ))}
                </div>

                <motion.div
                  key={currentQuote}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <blockquote className="text-[#1d322d]/65 text-md leading-relaxed mb-3 font-medium">
                    "{quotes[currentQuote].text} - {quotes[currentQuote].author}"
                  </blockquote>
                  {/* <cite className="text-gray-900 font-semibold text-sm">- {quotes[currentQuote].author}</cite> */}
                </motion.div>

                <div className="flex space-x-2 mt-4">
                  {quotes.map((_, index) => (
                    <div
                      key={index}
                      className={`h-0.5 rounded-full transition-all duration-300 ${
                        index === currentQuote
                          ? "w-8 bg-gray-900" // Active line (longer & darker)
                          : "w-4 bg-gray-300" // Inactive lines (shorter & lighter)
                      }`}
                    ></div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* video section */}
      <motion.section
        className="w-full flex justify-center items-center relative px-2 pb-6 md:pb-14 mt-35 md:mt-12 z-20 "
        style={{ y: videoY }}
      >
        <motion.div
          className="w-full overflow-hidden rounded-2xl shadow-xl"
          // initial={{ opacity: 0, y: 50 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <video
            src="https://framerusercontent.com/assets/mSsTg3IQcSmGsgmBbKnv84RbHUw.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[40vh] md:h-[90vh] object-cover"
          />
        </motion.div>
      </motion.section>
    </div>
  )
}
