"use client"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

const ImagesGrid = () => {
  const [hovered, setHovered] = useState(false)
  const images = [
    "/images/Galler-Image.png",
    "/images/Gallery-Image-(1).png",
    "/images/Gallery-Image-(2).png",
    "/images/Gallery-Image-(3).png",
    "/images/Gallery-Image-(4).png",
    "/images/Gallery-Image-(5).png",
    "/images/Gallery-Image-(6).png",
    "/images/Gallery-Image-(8).png",
    "/images/Gallery-Image-(9).png",
    "/images/Gallery-Image-(10).png",
    "/images/Gallery-Image-(11).png",
    "/images/Gallery-Image-(12).png",
    "/images/Gallery-Image-(13).png",
  ]

  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "4px",
    height: "612px",
    borderRadius: "24px",
    overflow: "hidden",
    backgroundColor: "#2c5f4f",
    padding: "4px",
    position: "relative",
  }

  const columnStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    overflow: "hidden",
    borderRadius: "16px",
  }

  const imageStyle = {
    width: "100%",
    height: "280px",
    objectFit: "cover",
    borderRadius: "12px",
  }

  const overlayCardStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backdropFilter: "blur(2px)",
    borderRadius: "20px",
    padding: "2rem",
    textAlign: "center",
    color: "white",
    zIndex: 10,
    minWidth: "320px",
  }

  const buttonStyle = {
    backgroundColor: "#4ade80",
    color: "#1f2937",
    border: "none",
    borderRadius: "8px",
    padding: "12px 24px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    transition: "all 0.2s ease",
  }

  let isPaused = false

  const getInfiniteAnimation = (direction = "down", delay = 0) => {
    const totalHeight = images.length * (280 + 4) // image height + gap


    return {
      y: direction === "up"
        ? [0, -totalHeight]
        : [-totalHeight, 0],
      transition: {
        duration: hovered ? 50 : 20,
        ease: "linear",
        repeat: Number.POSITIVE_INFINITY,
        delay: delay,
      },
    }
  }

  // Define animation directions for each column
  const getColumnDirection = (colIdx) => {
    switch (colIdx) {
      case 0: return "up"    // First column: bottom to top
      case 1: return "down"  // Second column: top to bottom
      case 2: return "up"    // Third column: bottom to top
      case 3: return "down"  // Fourth column: top to bottom
      default: return "up"
    }
  }

  return (
    <section style={{ padding: "2rem 1rem", backgroundColor: "#fffef2" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 h-[90vh] md:h-[532px] rounded-2xl md:rounded-3xl overflow-hidden bg-[#2c5f4f] p-1 relative">

          {/* Green Overlay - Add this div */}
          <div className="absolute inset-0 bg-[gradient-to-b from-[#2c5f4f]/70 to-[#1f3630]/80]/97 z-5"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >

          </div>

          {Array.from({ length: 4 }).map((_, colIdx) => (
            <div key={colIdx} style={columnStyle}>
              <motion.div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
                animate={isPaused ? {} : getInfiniteAnimation(getColumnDirection(colIdx), colIdx * 2)}

              >
                {[...images, ...images, ...images].map((src, idx) => (
                  <div key={`${colIdx}-${idx}`} className="relative">
                    <img
                      src={src || "/placeholder.svg"}
                      alt={`Interior design ${idx + 1}`}
                      style={imageStyle}
                      className=""
                    />
                    {/* Individual image overlay - Add this div */}
                    <div className="absolute inset-0 bg-[#2c5f4f]/30 hover:bg-[#2c5f4f]/10 transition-colors duration-300 rounded-12px"></div>
                  </div>
                ))}
              </motion.div>
            </div>
          ))}

          {/* Central Overlay Card */}
          {/* <div className="bg-white opacity-35 h-[232px] rounded-lg blur-md  w-[510px]  absolute top-40 left-110 "></div> */}
          <div className=" opacity-35 h-[232px] rounded-lg blur-md  w-[510px]  absolute top-40 left-110 "></div>
          <div style={overlayCardStyle} className=" w-full md:w-2/5 ">
            <h2 className="text-2xl md:text-[2.8rem]  text-[#1F3630] px-4 py-3 md:px-4 md:py-1 rounded-2xl inter-placeholder font-bold shadow-md-[0_3px_10px_rgba(100, 175, 96, 0.3)]" >
              Get inspired by our
            </h2>
            <h2 className="text-2xl md:text-[2.8rem] inter-placeholder   font-bold">
              1000+ project images
            </h2>
            <div className="relative  flex items-center justify-center w-full">
              <motion.button
                className="bg-[#FDFCEE] text-[#1F3630] px-4 py-3 md:px-6 md:py-[10px] rounded-xl font-semibold text-base md:text-lg transition-all duration-500 relative z-10 group-hover:rounded-r-none group-hover:pr-4"
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Explore Gallery</span>
                <motion.div
                  className="absolute top-0 right-0 h-full w-0 group-hover:w-4 transition-all duration-500 ease-out"
                />
              </motion.button>
              <motion.button
                className="bg-[#009f93] text-white md:px-3 md:py-[10px] rounded-xl transition-all duration-500 ml-2   focus:outline-none relative z-10"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div whileHover={{ y: 2 }} transition={{ duration: 0.2 }}>
                  <ArrowRight className='h-5 w-5 md:h-6 md:w-6  transition-transform duration-500' />
                </motion.div>
              </motion.button>
              <motion.div
                className="absolute top-0 left-0 h-full rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-[#00374b]"
                style={{
                  width: "calc(100% - 8px)",
                  zIndex: 5,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImagesGrid