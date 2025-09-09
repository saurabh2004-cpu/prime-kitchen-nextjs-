"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const PortfolioGallery = () => {
  const [activeFilter, setActiveFilter] = useState("All")

  const filters = ["All", "Residential", "Commercial", "Specialized"]

  const projects = [
    {
      id: 1,
      title: "Coastal Harmony Home",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
      category: "Residential",
      tags: ["RESIDENTIAL", "SINGLE HOME"],
    },
    {
      id: 2,
      title: "Modern Chic Boutique",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
      category: "Commercial",
      tags: ["COMMERCIAL", "SHOWROOM"],
    },
    {
      id: 3,
      title: "Masterpiece Exhibition Gallery",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80",
      category: "Specialized",
      tags: ["SPECIALIZED", "EXHIBITION SPACE"],
    },
    {
      id: 4,
      title: "Midnight Dream Home",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
      category: "Residential",
      tags: ["RESIDENTIAL", "SINGLE HOME"],
    },
    {
      id: 5,
      title: "Emerald Haven Residence",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
      category: "Residential",
      tags: ["RESIDENTIAL", "APARTMENT"],
    },
    {
      id: 6,
      title: "La Belle Bistro",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      category: "Commercial",
      tags: ["COMMERCIAL", "RESTAURANT"],
    },
    {
      id: 7,
      title: "InnovateHQ Office Space",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      category: "Commercial",
      tags: ["COMMERCIAL", "OFFICE"],
    },
    {
      id: 8,
      title: "Heritage Mansion Restoration",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
      category: "Specialized",
      tags: ["SPECIALIZED", "RESTORATION"],
    },
  ]

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter)

  const handleFilterChange = (filter) => {
    if (filter !== activeFilter) setActiveFilter(filter)
  }

  // Card fade-in/out animation
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
  }

  const arrowVariants = {
    initial: { opacity: 0, x: -10 },
    hover: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } }
  }

  const titleVariants = {
    initial: { x: 0 },
    hover: { x: 24, transition: { duration: 0.4, ease: "easeOut" } }
  }

  return (
    <section className="py-12 lg:py-10 px-2 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterChange(filter)}
              className={`px-4 sm:px-6 py-2 md:h-[36px] sm:py-3 flex items-center justify-center rounded-full font-medium text-sm sm:text-base border-2 transition-all duration-300 ${activeFilter === filter
                ? "bg-[#009F93] text-white  shadow-lg"
                : "bg-transparent text-[#009F93] border-[#009F93] hover:bg-[#009F93]/10"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-16">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="group relative rounded-lg overflow-hidden md:w-[320px] md:min-h-[400px] cursor-pointer"
                // style={{ width: "320px", minHeight: "400px" }}
                whileHover="hover" // <-- added this
              >
                {/* Image */}
                <div className="relative w-full" style={{ height: "320px" }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg transition-transform duration-500 "
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center z-10">
                    <h3 className="text-white text-3xl text-[#1d322d] inter-placeholder font-bold text-center px-6">
                      {project.title}
                    </h3>
                  </div>
                </div>
                

                {/* Title below image */}
                <div className="p-4 relative">
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24"
                    viewBox="0 0 24 24"
                    fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="absolute top-5 left-4 w-4 h-4 -z-10 text-[#1d322d]"
                    variants={arrowVariants} // keep your existing variants
                  >
                    <path d="m15 10 5 5-5 5" />
                    <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                  </motion.svg>

                  <motion.h2
                    className="bg-[#fffef2] z-10 text-xl font-bold text-[#1d322d] tracking-tighter inter-placeholder md:text-[16px] md:font-[600] mb-2 transition-colors duration-200 group-hover:text-gray-700"
                    variants={titleVariants} // keep your existing variants
                  >
                    {project.title}
                  </motion.h2>

                  {/* Category Tags */}
                  <div className="relative flex gap-2 z-20 bg-[#fffef2] p-1 rounded-r-lg right-4 bottom-18 inline-block">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-gray-800 text-xs mx-1 font-semibold rounded-md border border-[#1d322d]"
                        style={{
                          fontSize: "11px",
                          fontFamily: "Poppins, sans-serif",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-500 text-lg">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}


const CurvedOverlay = ({ position = "top", color = "transparent" }) => {
  // Curve paths for top and bottom
  const paths = {
    top: "M0,90 C95,80 75,120 100,100 L100,0 L0,0 Z",
    bottom: "M0,0 C25,20 75,-20 100,0 L100,100 L0,100 Z",
  };

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="w-full h-full pointer-events-none relative inset-0"
    >
      <path d={paths[position]} fill={color} />
    </svg>
  );
};



export default PortfolioGallery
