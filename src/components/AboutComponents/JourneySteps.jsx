"use client"

import { motion } from "framer-motion"

const steps = [
    {
        number: "01",
        title: "Consultation and Space Measurement",
        description:
            "We start with a detailed consultation to understand your vision and requirements, followed by precise space measurements to capture all necessary details.",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    },
    {
        number: "02",
        title: "Conceptual Design and Planning",
        description:
            "We create floor plans and 3D renderings to visualize the design before implementation. Includes materials and pricing for a seamless execution.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
        number: "03",
        title: "Implementation and Construction",
        description:
            "Our team oversees the construction and installation, ensuring everything matches the design and meets our high standards, keeping progress timely.",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    },
    {
        number: "04",
        title: "Final Review and Handover",
        description:
            "We conduct a final walkthrough to ensure your satisfaction, making sure every detail is perfect before handing over your beautifully designed space.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    },
]

// Animation variants
const variants = {
    left: { opacity: 0, x: -100 },
    right: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
}

// Mobile animation variants
const mobileVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
}

export default function JourneySteps() {
    return (
        <section className="bg-[#fffef2] py-12 sm:py-16 lg:py-20 px-4">
            <div className="max-w-8xl mx-auto">
                <div className="flex flex-col justify-center text-center">
                    <div className="flex items-center gap-1 justify-center">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#009F93]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <circle cx="12" cy="12" r="6" strokeWidth="2" />
                            <circle cx="12" cy="12" r="3.2" fill="currentColor" />
                        </svg>
                        <span className="text-[0.8rem] fomnt-medium text-[#009F93] tracking-wider inter-placeholder font-bold">OUR APPROACH</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-[48px] font-extrabold  mb-8 sm:mb-12 lg:mb-8 inter-placeholder text-[#009F93]" style={{ color: '#009F93' }}>
                        This is our journey with you
                    </h2>
                </div>

                {/* Desktop Layout - Hidden on mobile/tablet */}
                <div className="hidden xl:block space-y-16">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className={`flex align-middle items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                            initial={index % 2 === 0 ? "left" : "right"}
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={variants}
                        >
                            {/* Step Number */}
                            <div className="flex-shrink-0 align-middle relative left-15">
                                <span className="text-8xl inter-placeholder lg:text-9xl font-bold z-100 bg-[#fffef2] rounded-xl text-[#009f93] leading-none">
                                    {step.number}
                                </span>
                            </div>

                            {/* Step Number */}
                            {/* <motion.div
                                className="flex-shrink-0 align-middle relative left-15"
                                initial={{ rotate: -5 }} // Tilted left by default
                                whileHover={{ rotate: 5 }} // Tilted right on hover
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                <span className="text-8xl inter-placeholder lg:text-9xl font-bold z-100 bg-[#fffef2] rounded-xl text-[#009f93] leading-none">
                                    {step.number}
                                </span>
                            </motion.div> */}

                            {/* Card */}
                            <motion.div
                                transition={{ duration: 0.3 }}
                                className="bg-[#f0ede4] h-[33.0625rem] w-[60rem] rounded-3xl p-8 lg:p-12 shadow-sm"
                            >
                                <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
                                    {/* Content */}
                                    <div className="flex-1 text-center lg:text-left flex w-full flex-col h-full">
                                        <h3 className="text-2xl lg:text-3xl font-bold text-[#1D322D] inter-placeholder leading-tight mb-6">{step.title}</h3>
                                        <p className="text-[#1d322d]/70 font-medium text-lg leading-6 tracking-tight lg:text-lg leading-relaxed max-w-md relative top-67">
                                            {step.description}
                                        </p>
                                    </div>

                                    {/* Image */}
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex-shrink-0 w-full lg:w-80 xl:w-96"
                                    >
                                        <img
                                            src={step.image || "/placeholder.svg"}
                                            alt={step.title}
                                            className="w-[27.5rem] h-[31.8125rem] object-cover rounded-2xl shadow-lg relative bottom-10"
                                        />
                                    </motion.div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile/Tablet Layout - Hidden on desktop */}
                <div className="block xl:hidden space-y-8 sm:space-y-12 ">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center "
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={mobileVariants}
                        >
                            {/* Mobile Step Number */}
                            <div className="mb-4 sm:mb-6">
                                <span className="text-4xl sm:text-5xl md:text-6xl inter-placeholder font-bold text-[#009f93] leading-none">
                                    {step.number}
                                </span>
                            </div>

                            {/* Mobile Card */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                                className="bg-[#f0ede4] w-full max-w-2xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm"
                            >
                                <div className="flex flex-col items-center text-center space-y-6">
                                    {/* Mobile Image */}
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                        className="w-full max-w-sm"
                                    >
                                        <img
                                            src={step.image || "/placeholder.svg"}
                                            alt={step.title}
                                            className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl sm:rounded-2xl shadow-lg"
                                        />
                                    </motion.div>

                                    {/* Mobile Content */}
                                    <div className="space-y-4">
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1D322D] inter-placeholder leading-tight">
                                            {step.title}
                                        </h3>
                                        <p className="text-[#1d322d]/70 font-medium text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mx-auto">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}