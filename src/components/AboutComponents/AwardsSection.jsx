"use client"

import { motion } from "framer-motion"

const awards = [
    {
        year: "2023",
        title: "Innovative Design Studio",
        description:
            "Prime was honored for our project that transformed a historic building into a modern co-working space, blending old-world charm with cutting-edge functionality.",
        image: "/images/award-1.png",
    },
    {
        year: "2020",
        title: "Excellence in Residential Design",
        description:
            "Presented by the Home Design Awards, this honor celebrates our outstanding work in creating beautiful, functional, and personalized residential spaces.",
        image: "/images/award-1.png",
    },
    {
        year: "2022",
        title: "Sustainable Design Award",
        description:
            "Granted by the Green Building Council, this award highlights our commitment to eco-friendly design practices and sustainable materials in our projects.",
        image: "/images/award-1.png",
    },
    {
        year: "2021",
        title: "Top Commercial Interior Design Firm",
        description:
            "Recognized by Business Design Magazine for our excellence in transforming commercial spaces into inspiring environments.",
        image: "/images/award-1.png",
    },
    {
        year: "2019",
        title: "Outstanding Hospitality Design",
        description:
            "Given by the International Hospitality Awards, this accolade celebrates our innovative and welcoming designs in the hospitality sector.",
        image: "/images/award-1.png",
    },
]

// animation variants
const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const cardVariants = {
    left: { opacity: 0, x: -100 },
    right: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
}

export default function AwardsSection() {
    return (
        <section className="bg-[#fffef2] py-16 px-6 md:px-12 lg:px-20">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div className="flex items-center space-x-1 mb-6 text-center w-full justify-center md:relative md:top-10 md:right-10" variants={fadeInUp}>
                    <svg className="w-5 h-5 text-[#009f93]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <circle cx="12" cy="12" r="6" strokeWidth="2" />
                        <circle cx="12" cy="12" r="3.2" fill="currentColor" />
                    </svg>
                    <span className="text-xs font-semibold text-[#009f93] uppercase tracking-wider inter-placeholder">
                        Recognitions we got
                    </span>
                </motion.div>

                <motion.h1
                    className="text-6xl md:text-8xl lg:text-9xl inter-placeholder font-black text-[#009f93] tracking-tighter mb-16 text-center w-full justify-center"
                    variants={fadeInUp}
                >
                    Awards
                </motion.h1>

                {/* Awards List */}
                <div className="space-y-10">
                    {awards.map((award, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col md:flex-row md:items-center gap-6 border-b border-gray-300 pb-6"
                            initial={index % 2 === 0 ? "left" : "right"}
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={cardVariants}
                        >
                            {/* Logo */}
                            <div className="flex-shrink-0 flex justify-center md:justify-start">
                                <img
                                    src={award.image}
                                    alt={award.title}
                                    className="w-20 h-20 object-contain"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-1 text-center md:text-left w-4xl">
                                <span className="text-gray-500 font-medium">{award.year}</span>
                                <h3 className="text-xl font-bold text-[#1d322d] mt-1">
                                    {award.title}
                                </h3>
                            </div>

                            {/* // Description */}
                            <div className="w-full text-center md:text-left justify-end flex">
                                <p className="text-[#1d322d]/75 w-1/2 mt-2 text-[1rem] font-medium md:text-base leading-relaxed inter-placeholder">
                                    {award.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
