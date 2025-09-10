"use client"
import { useState, useEffect, useRef } from "react"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion"

function AnimatedCounter({ value, duration = 2 }) {
  const ref = useRef(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: duration * 1000 })
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [motionValue, isInView, value])

  useEffect(() => {
    springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest))
    })
  }, [springValue])

  return <span ref={ref}>{displayValue}</span>
}

export default function StatsSection() {
  const stats = [
    {
      number: 200,
      title: "Project Completed",
      description: "Over 200 successful projects completed, showcasing our extensive experience and portfolio.",
    },
    {
      number: 15,
      title: "Years of Expertise",
      description: "With 15 years in the industry, we bring a wealth of knowledge and skill to every project.",
    },
    {
      number: 150,
      title: "Happy Clients",
      description:
        "Proudly serving more than 150 satisfied clients who have trusted us with their interior design needs.",
    },
  ]

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  // Right to left animation variants for cards
  const cardVariants = {
    hidden: {
      opacity: 0,
      x: 100, // Start from right
      y: 20
    },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: index * 0.2 // Stagger animation
      }
    })
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
    <section className="md:py-16 lg:py-24 ">
      <div className=" mx-auto md:px-4 sm:px-6 lg:px-8">
        <motion.div
          className="space-y-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >

          {/* Stats Grid */}
          <motion.div className="grid grid-cols-1 lg:grid-rows-1 md:gap-8 lg:gap-4 " variants={staggerContainer}>
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="md:space-y-6 text-left bg-[#F7F6E9] min-w-[22rem] rounded-2xl px-4 my-2 pb-4 md:pb-0 md:my-0"
                variants={cardVariants}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="flex items-center gap-2 mt-4 md:mt-0">
                  <div className="  text-[134px] md:text-[134px]  font-medium text-[#1F3630] inter-placeholder leading-none tracking-tight">
                    <AnimatedCounter value={stat.number} duration={2.5} />
                  </div>
                  <span className=" text-[#F3AC85] inter-placeholder font-semibold text-7xl xl:text-8xl ml-1 text-[#009f93]" style={{ color: "#009f93" }}>+</span>
                </div>

                <div className="md:py-3 ">
                  {/* Title */}
                  <h3 className="text-2xl pt-8 md:pt-0 sm:text-3xl mt-13 md:mt-0 md:text-[30px] font-medium text-[#1d322d] leading-tight inter-placeholder">
                    {stat.title}
                  </h3>

                  {/* Description */}
                  {/* <p className="text-[#1D322D] mt-4 md:mt-0 relative md:top-4 md:pb-4 md:text-[16px] font-medium min-w-full text-base sm:text-lg leading-relaxed max-w-sm inter-placeholder">{stat.description}</p> */}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}