"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function ServicesGrid() {
  const [showAllServices, setShowAllServices] = useState(false)

  const services = [
    {
      id: 1,
      title: "Residential Interior Design",
      description:
        "Tailored design services for private homes, including room makeovers and complete home transformations.",
      icon: "https://framerusercontent.com/images/LBKuqrUKUS4DWi9ftZI8DVHVe4.png",
    },
    {
      id: 2,
      title: "Commercial Interior Design",
      description:
        "Designing functional and attractive interiors for businesses, including offices, retail spaces, and hospitality venues.",
      icon: "https://framerusercontent.com/images/EL0ccE4I9Ydcr6XzZyIGziwAtvw.png",
    },
    {
      id: 3,
      title: "Space Planning",
      description: "Optimizing the layout of a space to improve functionality and flow.",
      icon: "https://framerusercontent.com/images/Zy6EyuSb6xNTwAGreyZYWV5X53M.png",
    },
    {
      id: 4,
      title: "Design Consultation",
      description: "Providing professional advice on concepts, color schemes & material selection.",
      icon: "https://framerusercontent.com/images/ELZWr0V10IFUobZuhITxIU9Do.png",
    },
    {
      id: 5,
      title: "Lighting Design",
      description: "Crafting lighting solutions that enhance the ambiance and functionality of a space.",
      icon: "https://framerusercontent.com/images/JbyjEq4WEAx6qDzQgw6Zkax3iY.png",
    },
    {
      id: 6,
      title: "Furniture Design",
      description: "Designing and creating bespoke furniture pieces that perfectly fit the your space and style.",
      icon: "https://framerusercontent.com/images/IV4BUPwYOVqQsCgGwzjpM6TnN38.png",
    },
    {
      id: 7,
      title: "Art and Accessory Procurement",
      description: "Sourcing and selecting art pieces and accessories to complement the overall design.",
      icon: "https://framerusercontent.com/images/bREeJ5St6Fj7cNJuxeIsZZKdBg.png",
    },
    {
      id: 8,
      title: "Color Consultation",
      description: "Assisting clients in selecting color schemes that enhance the mood and aesthetic of a space.",
      icon: "https://framerusercontent.com/images/hRVFsVQ3zt4SHEWeKVbvVrXKFZ4.png",
    },
    // Additional 4 services for desktop
    {
      id: 9,
      title: "Kitchen & Bath Design",
      description: "Specialized design services for kitchens and bathrooms, focusing on functionality and aesthetics.",
      icon: "https://framerusercontent.com/images/LBKuqrUKUS4DWi9ftZI8DVHVe4.png",
    },
    {
      id: 10,
      title: "Sustainable Design",
      description: "Eco-friendly interior design solutions using sustainable materials and energy-efficient practices.",
      icon: "https://framerusercontent.com/images/EL0ccE4I9Ydcr6XzZyIGziwAtvw.png",
    },
    {
      id: 11,
      title: "Project Management",
      description: "Complete project oversight from conception to completion, ensuring timely and budget-friendly execution.",
      icon: "https://framerusercontent.com/images/Zy6EyuSb6xNTwAGreyZYWV5X53M.png",
    },
    {
      id: 12,
      title: "3D Visualization",
      description: "Advanced 3D rendering and virtual reality services to help clients visualize their future spaces.",
      icon: "https://framerusercontent.com/images/ELZWr0V10IFUobZuhITxIU9Do.png",
    },
  ]

  // Get services to display based on screen size and state
  const getDisplayedServices = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) {
        // Mobile: show 2 initially, all 12 when expanded
        return showAllServices ? services : services.slice(0, 2)
      } else {
        // Desktop: show 8 initially, all 12 when expanded
        return showAllServices ? services : services.slice(0, 8)
      }
    }
    return services.slice(0, 8) // Default for SSR
  }

  // Get only the newly revealed services for animation
  const getNewServices = () => {
    if (typeof window !== 'undefined' && window.innerWidth >= 768 && showAllServices) {
      return services.slice(8, 12) // Services 9-12 for desktop
    }
    if (typeof window !== 'undefined' && window.innerWidth < 768 && showAllServices) {
      return services.slice(2) // Services 3-12 for mobile
    }
    return []
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const iconVariants = {
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  }

  // Animation variants for new cards
  const newCardVariants = {
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.8,
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
  }

  const newCardsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const handleButtonClick = () => {
    setShowAllServices(!showAllServices)
  }

  return (
    <section className="bg-[#F7F6E9] pt-8 relative md:bottom-24">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-24">
        {/* Services Grid Container with Fade Effect */}
        <div className="relative">
          {/* Services Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-3 justify-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {(showAllServices ? services.slice(0, typeof window !== 'undefined' && window.innerWidth < 768 ? 2 : 8) : getDisplayedServices()).map((service, index) => (
              <motion.div
                className="rounded-2xl p-6 transition-all duration-300 group flex flex-col justify-between min-h-[400px]"
                key={service.id}
                style={{ backgroundColor: "#fffef2" }}
                variants={cardVariants}
                whileHover={{
                  backgroundColor: "#F7F6E9",
                }}
              >
                <motion.div className="flex justify-start mb-6 lg:mb-8 flex-grow items-start" variants={iconVariants}>
                  <motion.div className="py-4 rounded-xl transition-colors duration-300">
                    <img src={service.icon || "/placeholder.svg"} alt={service.title} className="w-28 h-28" />
                  </motion.div>
                </motion.div>

                <div className="text-center space-y-4">
                  <motion.h3
                    className="text-[24px] w-3/5 font-extrabold md:w-4/5  md:font-black md:text-[30px] inter-placeholder  text-[#1d322d] leading-[1.2] text-start"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {service.title}
                  </motion.h3>

                  <motion.p
                    className="text-[#1d322d]/75 md:text-[#1d322d] text-md lg:text-[16px] font-[600] md:font-[500] leading-relaxed text-start inter-placeholder"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {service.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Fade Gradient Overlay - Only show when NOT expanded */}
          {!showAllServices && (
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#F7F6E9] via-[#F7F6E9]/80 to-transparent pointer-events-none z-10" />
          )}
        </div>

        {/* Additional Services - Animated when revealed */}
        {showAllServices && (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-3 justify-center mt-6"
            variants={newCardsContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {getNewServices().map((service) => (
              <motion.div
                className="rounded-2xl p-6 transition-all duration-300 group flex flex-col justify-between min-h-[400px]"
                key={service.id}
                style={{ backgroundColor: "#fffef2" }}
                variants={newCardVariants}
                whileHover={{
                  backgroundColor: "#F7F6E9",
                }}
              >
                <motion.div className="flex justify-start mb-6 lg:mb-8 flex-grow items-start">
                  <motion.div className="py-4 rounded-xl transition-colors duration-300">
                    <img src={service.icon || "/placeholder.svg"} alt={service.title} className="w-28 h-28" />
                  </motion.div>
                </motion.div>

                <div className="text-center space-y-4">
                  <motion.h3
                    className="text-[24px] w-3/5 font-bold md:w-4/5 md:text-stroke-md ms:text-stroke-[#1d322d]-900  md:text-[30px] inter-placeholder md:font-black text-[#1d322d] leading-[1.2] text-start"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    {service.title}
                  </motion.h3>

                  <motion.p
                    className="text-[#1d322d]/75 md:text-[#1d322d] text-md lg:text-[16px] font-[600] md:font-[500] leading-relaxed text-start inter-placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    {service.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Button Section with Background matching the image */}
        <motion.div
          className="flex justify-center w-full mt-8 md:pb-10 relative z-20 md:bottom-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="relative group flex justify-center items-center">
            <motion.button
              className="bg-[#00374b] text-[#fdfcee] px-8 py-4 rounded-2xl font-medium md:font-semibold text-lg transition-all duration-500 relative z-10 group-hover:rounded-r-none group-hover:pr-4"
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{ scale: 0.98 }}
              onClick={handleButtonClick}
            >
              <span className="relative z-10 inter-placeholder">
                {/* Show different text on mobile vs desktop */}
                <span className="md:hidden">
                  {showAllServices ? "Show Less" : "View All Services"}
                </span>
                <span className="hidden md:inline">
                  View All Services
                </span>
              </span>
              <motion.div className="absolute top-0 right-0 h-full w-0 group-hover:w-4 transition-all duration-500 ease-out" />
            </motion.button>

            <motion.button
              className="bg-[#009f93] text-[#1d322d] p-4 rounded-2xl transition-all duration-500 ml-2 group-hover:ml-0 group-hover:rounded-l focus:outline-none relative z-10"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
              onClick={handleButtonClick}
            >
              <motion.div
                whileHover={{ y: 2 }}
                transition={{ duration: 0.2 }}
                animate={{ rotate: showAllServices ? 180 : 0 }}
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 28 28">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}