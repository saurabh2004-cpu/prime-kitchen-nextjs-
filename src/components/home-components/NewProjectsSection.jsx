"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import Card from "./ProjectsShowcase"
import { MobileCard } from "./ProjectsShowcase"

function AnimatedCounter({ value, duration = 2 }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const [displayValue, setDisplayValue] = useState(0)

    useEffect(() => {
        if (isInView) {
            const start = performance.now()

            const animateCounter = (time) => {
                const progress = Math.min((time - start) / (duration * 1000), 1)
                const currentValue = Math.floor(progress * value)

                setDisplayValue(currentValue)

                if (progress < 1) {
                    requestAnimationFrame(animateCounter)
                }
            }

            requestAnimationFrame(animateCounter)
        }
    }, [isInView, value, duration])

    return <span ref={ref}>{displayValue}</span>
}

export default function NewProjectsSection() {
    const projects = [
        {
            title: "Modern Modular Kitchen in Aurangabad",
            description: "The Coastal Harmony Home project was a comprehensive renovation...",
            src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2075&q=80",
            color: "#F7F6E9",
            categories: ["RESIDENTIAL", "SINGLE HOME"],
        },
        {
            title: "Modern Chic Boutique",
            description: "A stunning transformation of an industrial space...",
            src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=2070&q=80",
            color: "#F7F6E9",
            categories: ["COMERCIAL", "SHOWROOM"],
        },
    ]

    const stats = [
        { number: 3000, title: "Project Completed" },
        { number: 14, title: "Years of Expertise" },
        { number: 2000, title: "Happy Clients" },
    ]

    const cardVariants = {
        hidden: { opacity: 0, x: 100, y: 20 },
        visible: (index) => ({
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.2 },
        }),
    }

    return (
        <div className="bg-[#FFFEF2] min-h-screen ">
            {/* mobile devices */}
            <div className="block md:hidden px-4 py-8 space-y-12 min-h-full">
                {/* Projects */}
                <div className="relative  md:left-0 md:max-h-screen 2xl:max-h-[100vh]  scrollbar-thin overflow-x-hidden scrollbar-hide scrollbar-thumb-gray-300 scrollbar-track-transparent  md:bottom-9  2xl:bottom-0">
                    {projects.map((project, i) => (
                        <MobileCard key={i} {...project} i={i} />
                    ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="text-left bg-[#F7F6E9] flex flex-col rounded-2xl px-4 py-6 space-y-12 "
                            variants={cardVariants}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <div className="flex items-center ">
                                <div className="text-7xl sm:text-7xl font-bold text-[#1F3630]">
                                    <AnimatedCounter value={stat.number} duration={2.5} />
                                </div>
                                <span className="font-bold text-7xl sm:text-6xl ml-1" style={{ color: "#009f93" }}>
                                    +
                                </span>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-medium text-[#1d322d] leading-tight">
                                {stat.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>



            {/* DESKTOP (2-column with sticky scroll) */}
            <div className="hidden xl:grid grid-cols-4 min-h-screen">

                {/* LEFT SIDE (Projects with scroll handoff) */}
                <div className="relative col-span-3">
                    <div className="bg-[#FFFEF2]  h-13 w-full"></div>
                    <div className="sticky  h-screen overflow-y-auto overflow-x-hidden scrollbar-hide scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                        <div className="flex flex-col xl:ml-0 space-y-4">
                            {projects.map((project, i) => (
                                <Card key={i} {...project} i={i} />
                            ))}
                            {/* Spacer for scroll handoff */}
                            <div className="h-[40vh]" />
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE (Stats scroll independently) */}
                <div className="relative col-span-1">
                    <div className="sticky top-0 h-screen ">
                        <div className="flex flex-col gap-6 pt-14 pb-20 pr-4">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="text-left bg-[#F7F6E9] min-w-[20rem] rounded-2xl px-4 py-[29px]"
                                    //   variants={cardVariants}
                                    custom={index}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    <div className="flex items-center gap-2">
                                        <div className="text-[110px] 2xl:text-[90px] font-medium text-[#1F3630] leading-none">
                                            <AnimatedCounter value={stat.number} duration={2.5} />
                                        </div>
                                        <span className="font-semibold text-6xl 2xl:text-7xl ml-1" style={{ color: "#009f93" }}>
                                            +
                                        </span>
                                    </div>
                                    <h3 className="text-2xl md:text-[28px] 2xl:text-[24px] font-medium text-[#1d322d] leading-tight">
                                        {stat.title}
                                    </h3>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
