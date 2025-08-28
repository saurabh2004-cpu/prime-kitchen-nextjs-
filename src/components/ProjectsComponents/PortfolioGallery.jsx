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
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.3,
      },
    },
  }

  const filterVariants = {
    active: {
      backgroundColor: "#009F93",
      color: "#ffffff",
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    inactive: {
      backgroundColor: "transparent",
      color: "#1F2937",
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section className="py-12  lg:py-10 px-4  lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 sm:px-6 py-2 md:h-[36px] sm:py-3 align-middle justify-center items-center flex rounded-full font-medium text-sm sm:text-base border-2 border-[#009F93] transition-all duration-300 ${activeFilter === filter
                ? "bg-[#009F93] text-yellow shadow-lg"
                : "bg-transparent text-[#009F93] hover:bg-[#009F93]/10"
                }`}
              variants={filterVariants}
              animate={activeFilter === filter ? "active" : "inactive"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 justify-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${activeFilter}-${project.id}`}
                className="group relative ' rounded-2xl overflow-hidden  transition-all duration-500"
                style={{ width: "300px", minHeight: "400px" }}
                variants={cardVariants}
                layout
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
              >
                {/* Image Container with Overlay Tags */}
                <div className="relative overflow-hidden" style={{ height: "320px" }}>
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                  />



                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center z-10">
                    <div className="text-center px-6">
                      <h3
                        className="text-[#fffef2] font-bold leading-tight text-3xl font-bold font-poppins shadow-md"
                       
                      >
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Title Container - Below image */}
                <div className="p-4 ">


                  <h3
                    className="text-gray-800 font-medium leading-tight group-hover:text-[#009F93] transition-colors duration-300"
                    style={{
                      fontSize: "18px",
                      fontWeight: 500,
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    {project.title}
                  </h3>
                </div>

                {/* Category Tags - Positioned at bottom left of image */}
                <div className="relative flex gap-2 z-20 bg-[#fffef2] p-1 rounded-r-lg md:bottom-20  inline-block ">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 ' text-gray-800 text-xs mx-1 font-medium rounded-md border border-[#1d322d] tracking-tighter"
                      style={{
                        fontSize: "11px",
                        fontWeight: 500,
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
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

export default PortfolioGallery
