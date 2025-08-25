"use client"

import { motion } from "framer-motion"

export default function HeroTypoGraphy() {
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
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  return (
    <section className=" py-20 lg:py-32">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex justify-end"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="max-w-4xl text-right" variants={fadeInUp}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-slate-800 leading-[0.9] tracking-tight">
              <span className="block font-black">Your Ideas,</span>
              <span className="block">
                <span className="font-black">Our Creative </span>
                <span className="font-light italic text-slate-700" style={{ fontFamily: "Dancing Script, cursive" }}>
                  Twist
                </span>
              </span>
            </h2>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
