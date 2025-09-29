import { ArrowRight } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion"

export function ProjectsWithStats() {
    const projects = [
        {
            title: "Midnight Dream Home",
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

    const stats = [
        {
            id: 1,
            number: "200",
            title: "Project Completed",
            description: "Over 200 successful projects completed, showcasing our extensive experience and portfolio.",
        },
        {
            id: 2,
            number: "15",
            title: "Years of Expertise",
            description: "With 15 years in the industry, we bring a wealth of knowledge and skill to every project.",
        },
        {
            id: 3,
            number: "90",
            title: "Happy Clients",
            description: "With 15 years in the industry, we bring a wealth of knowledge and skill to every project.",
        },
    ]



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
    return (
        <section className="container  mx-auto px-4 pt-12 2xl:mt-4 pb-12 md:pb-0">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Left Column: Scrollable Project Cards */}
                <div className=" lg:col-span-3 space-y-4 h-full md:max-h-[685px]  pb-25 md:overflow-y-auto scrollbar-hide pr-4">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-[#F7F6E9] p-6 rounded-lg shadow-sm flex flex-col md:flex-row gap-6">
                            <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row space-x-4">
                                <div className="flex  justify-center lg:justify-start  gap-2 mb-4">
                                    {project.categories.map((category, idx) => (
                                        <button
                                            key={idx}
                                            className="px-1 h-[24px] flex justify-center items-center align-middle  min-w-[110px] py-2 border mb-3 md:mb-0 border-[#f7f7e9]-200 px-2 rounded-lg text-[12px]  font-semibold text-[#495953] hover:border-gray-600 transition-colors duration-200 text-sm inter-placeholder w-fit"
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>

                                <div className="w-full relative group">
                                    {/* Image */}
                                    <img
                                        src={project.src || "/placeholder.svg"}
                                        alt={project.title}
                                        className="rounded-md w-full md:w-[314px] md:h-[525px] object-cover"
                                    />

                                    {/* Hover button at bottom */}
                                    <div className="absolute inset-0 flex items-end justify-center p-4 w-[300px]">
                                        <div className="w-full transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                                            <button className="bg-[#f7f6e9] text-[#1D322D] px-6 py-3 rounded-xl font-semibold flex items-center justify-between w-full shadow-lg mx-auto">
                                                <span>View Project</span>
                                                <div className="bg-slate-800 text-white p-2 rounded-full">
                                                    <ArrowRight className="h-4 w-4" />
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col h-full justify-between">
                                    <h3 className="text-[24px] font-[900] md:text-[23px] text-black font-black leading-tight inter-placeholder mb-4">{project.title}</h3>
                                    <p className="text-[#495953] text-base md:text-[16px] leading-relaxed inter-placeholder">{project.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* <div className="w-px bg-gray-300 mx-4 hidden lg:block"></div> */}

                {/* Right Column: Static Statistic Cards */}
                <div className="lg:col-span-1 space-y-3 lg:sticky lg:top-20 h-fit">
                    {stats.map((stat) => (
                        <div key={stat.id} className="bg-[#F7F6E9] px-6 py-2 rounded-lg shadow-sm">
                            <div className="flex items-center gap-2 mt-4 md:mt-0">
                                <div className=" text-[138px]  font-medium text-[#1F3630] inter-placeholder leading-none tracking-tight">
                                    <AnimatedCounter value={stat.number} duration={2.5} />
                                </div>
                                <span className=" text-[#F3AC85] inter-placeholder font-semibold text-8xl  ml-1 text-[#009f93]" style={{ color: "#009f93" }}>+</span>
                            </div>
                            <h4 className="text-xl font-semibold  mb-2 text-[#1F3630] leading-tight inter-placeholder">{stat.title}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
