"use client"

import { useEffect, useRef, useState } from "react"

export default function ProjectsGallery() {
  const containerRef = useRef(null)
  const leftColumnRef = useRef(null)
  const rightColumnRef = useRef(null)
  const [isSticky, setIsSticky] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !rightColumnRef.current) return

      const containerRect = containerRef.current.getBoundingClientRect()
      const containerTop = containerRect.top
      const windowHeight = window.innerHeight

      // Check if component has reached the top (sticky position)
      if (containerTop <= 0 && containerRect.bottom > windowHeight) {
        setIsSticky(true)

        // Calculate scroll progress within the sticky area
        const stickyHeight = containerRect.height - windowHeight
        const currentProgress = Math.abs(containerTop) / stickyHeight
        setScrollProgress(Math.min(currentProgress, 1))

        // Independent scrolling for right column until 50% progress
        if (currentProgress < 0.5) {
          const rightScrollAmount = (currentProgress / 0.5) * 400 // Scroll right column
          rightColumnRef.current.style.transform = `translateY(-${rightScrollAmount}px)`
          if (leftColumnRef.current) {
            leftColumnRef.current.style.transform = "translateY(0px)"
          }
        } else {
          // Parallel scrolling after 50%
          const parallelProgress = (currentProgress - 0.5) / 0.5
          const parallelScrollAmount = parallelProgress * 200
          rightColumnRef.current.style.transform = `translateY(-${400 + parallelScrollAmount}px)`
          if (leftColumnRef.current) {
            leftColumnRef.current.style.transform = `translateY(-${parallelScrollAmount}px)`
          }
        }
      } else {
        setIsSticky(false)
        setScrollProgress(0)
        // Reset transforms when not sticky
        if (rightColumnRef.current) {
          rightColumnRef.current.style.transform = "translateY(0px)"
        }
        if (leftColumnRef.current) {
          leftColumnRef.current.style.transform = "translateY(0px)"
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const leftImages = [
    {
      src: "/images/luxury-kitchen-3.png",
      caption: "Elegant entryway with a natural stone path and lush coastal plants sets a welcoming tone.",
      size: "large"
    },
    {
      src: "/images/luxury-kitchen-3.png",
      caption: "State-of-the-art kitchen featuring premium appliances and sleek countertops.",
      size: "medium"
    },
  ]

  const rightImages = [
    {
      src: "/images/luxury-kitchen-3.png",
      caption: "Open-plan living room with floor-to-ceiling windows offers expansive ocean views and ample natural light.",
      size: "medium"
    },
    {
      src: "/images/luxury-kitchen-3.png",
      caption: "Contemporary dining area with modern fixtures and warm lighting.",
      size: "large"
    },
  ]

  // Generate placeholder images with different interior scenes
  const generatePlaceholderImage = (width, height, scene) => {
    return `data:image/svg+xml,${encodeURIComponent(`
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#f5f5f5;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#e5e5e5;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#bg)"/>
        <rect x="10%" y="15%" width="80%" height="10%" fill="#c4a574" opacity="0.6" rx="5"/>
        <rect x="5%" y="30%" width="25%" height="40%" fill="#8b7355" opacity="0.4" rx="8"/>
        <rect x="35%" y="25%" width="60%" height="50%" fill="#a68b5b" opacity="0.3" rx="10"/>
        <circle cx="80%" cy="20%" r="6%" fill="#d4af37" opacity="0.5"/>
        <rect x="15%" y="80%" width="70%" height="8%" fill="#8b4513" opacity="0.4" rx="4"/>
        <text x="50%" y="95%" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#666">${scene}</text>
      </svg>
    `)}`
  }

  return (
    <div className="bg-white">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4">
          Featured Projects
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our portfolio of exceptional interior designs that blend luxury with functionality
        </p>
      </div>

      <div ref={containerRef} className="min-h-[200vh] bg-white">
        <div className={`${isSticky ? "sticky top-0" : ""} min-h-screen overflow-hidden`}>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              
              {/* Left Column */}
              <div ref={leftColumnRef} className="space-y-6 lg:space-y-8">
                {/* Large Image 1 */}
                <div className="group">
                  <div className="relative overflow-hidden rounded-none bg-gray-50 aspect-[4/3] rounded-xl">
                    <img
                      src='/images/luxury-kitchen-3.png'
                      alt="Elegant living room interior"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 lg:mt-6">
                    <p className="text-sm lg:text-base text-gray-700 leading-relaxed font-light">
                      Elegant entryway with a natural stone path and lush coastal plants sets a welcoming tone.
                    </p>
                  </div>
                </div>

                {/* Medium Image */}
                <div className="group lg:mt-16">
                  <div className="relative overflow-hidden rounded-none bg-gray-50 aspect-[4/3] rounded-xl">
                     <img
                      src='/images/luxury-kitchen-3.png'
                      alt="Elegant living room interior"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 lg:mt-6">
                    <p className="text-sm lg:text-base text-gray-700 leading-relaxed font-light">
                      State-of-the-art kitchen featuring premium appliances, marble countertops, and custom cabinetry for the ultimate culinary experience.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div ref={rightColumnRef} className="space-y-6 lg:space-y-8 ">
                {/* Medium Image */}
                <div className="group">
                  <div className="relative overflow-hidden rounded-none bg-gray-50 aspect-[5/4] rounded-xl">
                    <img
                      src="/images/luxury-kitchen-3.png"
                      alt="Open-plan living room"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 "
                    />
                  </div>
                  <div className="mt-4 lg:mt-6">
                    <p className="text-sm lg:text-base text-gray-700 leading-relaxed font-light">
                      Open-plan living room with floor-to-ceiling windows offers expansive ocean views and ample natural light.
                    </p>
                  </div>
                </div>

                {/* Large Image 2 */}
                <div className="group lg:mt-16">
                  <div className="relative overflow-hidden rounded-none bg-gray-50 aspect-[4/3] rounded-xl">
                    <img
                      src="/images/luxury-kitchen-3.png"
                      alt="Contemporary dining area"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 lg:mt-6">
                    <p className="text-sm lg:text-base text-gray-700 leading-relaxed font-light">
                      Contemporary dining area featuring modern fixtures, warm ambient lighting, and carefully curated furnishings that create an inviting atmosphere.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA Section */}
      <div className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            Let our team of expert designers create a personalized interior that reflects your unique style and vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors">
              View All Projects
            </button>
            <button className="px-8 py-3 border border-gray-900 text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-colors">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}