"use client"
import { motion, useMotionValue, useAnimationFrame, useSpring } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

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

  const IMG_H = 280
  const GAP = 6
  const LOOP_DISTANCE = images.length * (IMG_H + GAP)

  const baseY1 = useMotionValue(0) // For columns 0, 2 (even)
  const baseY2 = useMotionValue(-LOOP_DISTANCE / 2) // For columns 1, 3 (odd) - start offset

  const speed = useSpring(50, { stiffness: 120, damping: 20, mass: 0.3 })

  useEffect(() => {
    speed.set(hovered ? 10 : 50)
  }, [hovered, speed])

  useAnimationFrame((t, delta) => {
    const v = speed.get()
    const dy = (delta / 1000) * v

    // baseY1 moves down (for even columns)
    let next1 = baseY1.get() - dy
    if (next1 <= -LOOP_DISTANCE) next1 += LOOP_DISTANCE
    baseY1.set(next1)

    // baseY2 moves up (for odd columns)
    let next2 = baseY2.get() + dy
    if (next2 >= 0) next2 -= LOOP_DISTANCE
    baseY2.set(next2)
  })

  const colY = (colIdx) => (colIdx % 2 === 0 ? baseY1 : baseY2)

  return (
    <section style={{ padding: "2rem 1rem", backgroundColor: "#fffef2" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-1 h-[90vh] md:h-[532px] rounded-2xl md:rounded-3xl overflow-hidden bg-[#2c5f4f] p-1 relative"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#2c5f4f]/70 to-[#1f3630]/98 pointer-events-none" />

          {Array.from({ length: 4 }).map((_, colIdx) => (
            <div key={colIdx} className="flex flex-col overflow-hidden rounded-xl">
              <motion.div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: `${GAP}px`,
                  y: colY(colIdx),
                  willChange: "transform",
                }}
              >
                {[...images, ...images].map((src, idx) => (
                  <div key={`${colIdx}-${idx}`} className="relative">
                    <img
                      src={src || "/placeholder.svg"}
                      alt={`Interior design ${idx + 1}`}
                      style={{
                        width: "100%",
                        height: `${IMG_H}px`,
                        objectFit: "cover",
                        borderRadius: "12px",
                        display: "block",
                      }}
                    />
                    <div className="absolute inset-0 bg-[#2c5f4f]/30 hover:bg-[#2c5f4f]/10 transition-colors duration-300 rounded-[12px]" />
                  </div>
                ))}
              </motion.div>
            </div>
          ))}

          <div className="absolute  inset-0 flex flex-col items-center justify-center z-10 text-center ">
            <div className="absolute inset-0 bg-[#ffffff]/20 bg-blur z-[-1]    transition-colors duration-300 sm:relative top-50 rounded-[12px] h-[160px] md:h-[172px]  md:top-1/7 md:w-[400px] md:left-48 md:-translate-x-1/2" >
              <h2 className="text-3xl font-bold text-[#1F3630] z-10 realtive ">Get inspired by our</h2>
              <h2 className="text-3xl font-bold text-[#1F3630]">1000+ project images</h2>
            </div>
            <div className="flex gap-2 mt-4">
              <motion.button
                className="bg-[#FDFCEE] z-10 text-[#1F3630] px-6 py-3 rounded-xl font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Gallery
              </motion.button>
              <motion.button
                className="bg-[#009f93] text-white px-3 py-3 rounded-xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImagesGrid
