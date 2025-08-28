"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import ProjectShowcase from "./ProjectsShowcase"
import StatsSection from "./StatsSection"

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



export default function NewProjectsSection() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
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
        <div className=" bg-[#FFFEF2] ">
            <div className=" mx-auto flex flex-col-reverse md:flex-row px-4 lg:px-8 py-8 md:py-0  md:justify-between">
                <div className="grid grid-cols-1  md:w-6/7  items-start">
                    {/* Left Side - Projects */}
                    <div className="space-y-8">
                        <ProjectShowcase />
                    </div>

                </div>
                {/* Right Side - Stats */}
                <div className="md:relative md:left-12 md:w-3/8 md:bottom-10">
                    <motion.div
                        className="space-y-8 lg:space-y-12"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <StatsSection />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
