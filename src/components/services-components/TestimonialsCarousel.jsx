"use client"

import { useState, useEffect } from "react"

const testimonials = [
  {
    id: 1,
    text: "From the first consultation to final installation, the experience was seamless. The kitchen is not only stunning but incredibly functional — it truly feels like it was made just for us.",
    author: "Kintal S.",
    role: "Homeowner",
  },
  {
    id: 2,
    text: "From the first consultation to final installation, the experience was seamless. The kitchen is not only stunning but incredibly functional — it truly feels like it was made just for us.",
    author: "Kintal S.",
    role: "Homeowner",
  },
  {
    id: 3,
    text: "From the first consultation to final installation, the experience was seamless. The kitchen is not only stunning but incredibly functional — it truly feels like it was made just for us.",
    author: "Kintal S.",
    role: "Homeowner",
  },
  {
    id: 4,
    text: "From the first consultation to final installation, the experience was seamless. The kitchen is not only stunning but incredibly functional — it truly feels like it was made just for us.",
    author: "Kintal S.",
    role: "Homeowner",
  },
  {
    id: 5,
    text: "Amazing service and quality work. The team exceeded our expectations in every way possible. Highly recommend to anyone looking for professional results.",
    author: "Sarah M.",
    role: "Business Owner",
  },
  {
    id: 6,
    text: "Professional, reliable, and delivered exactly what was promised. The attention to detail was remarkable and the final result speaks for itself.",
    author: "David L.",
    role: "Property Manager",
  },
]

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(4)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setCardsPerView(1) // Extra small mobile
      } else if (window.innerWidth < 768) {
        setCardsPerView(1) // Mobile
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2) // Tablet
      } else if (window.innerWidth < 1280) {
        setCardsPerView(3) // Large tablet
      } else {
        setCardsPerView(4) // Desktop
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = testimonials.length - cardsPerView
        return prevIndex >= maxIndex ? 0 : prevIndex + 1
      })
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(interval)
  }, [cardsPerView])

  const totalDots = Math.ceil(testimonials.length / cardsPerView)

  const goToSlide = (index) => {
    setCurrentIndex(index * cardsPerView)
  }

  return (
    <div className="w-full pb-8 sm:pb-12 md:pb-16 pt-6 sm:pt-8 md:pt-12 px-4 sm:px-6 md:px-8 lg:px-12 inter-placeholder">
      <div className="max-w-8xl mx-auto">
        {/* Small testimonials heading */}
        <div className="text-center space-y-[32px]">
          <p className="text-sm sm:text-base font-medium mb-3 sm:mb-4">— Testimonials</p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[83px] pb-6 sm:pb-8 md:pb-12 tracking-tighter font-medium text-black leading-tight">
            What People Say About Us
          </h1>
        </div>

        {/* Carousel container */}
        <div className="relative overflow-hidden mb-8 sm:mb-10 md:mb-12">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-3 sm:gap-4 md:gap-6"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 bg-black rounded-lg p-4 sm:p-6 md:p-8 text-white"
                style={{
                  width: `calc((100% - ${(cardsPerView - 1) * (cardsPerView === 1 ? 0.75 : 1.5)}rem) / ${cardsPerView})`,
                  height: cardsPerView === 1 ? "auto" : "288px",
                  minHeight: cardsPerView === 1 ? "250px" : "288px",
                  minWidth: cardsPerView === 1 ? "280px" : "396px",
                }}
              >
                <div className="h-full flex flex-col justify-between mb-[28px] px-[20px]">
                  <p className="text-base sm:text-lg md:text-[20px] font-medium tracking-tight leading-[25px] mb-4 sm:mb-6 ">
                    "{testimonial.text}"
                  </p>

                  <div className="mt-auto">
                    <p className="text-lg sm:text-xl font-medium">
                      — {testimonial.author}, {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center space-x-1.5 sm:space-x-2">
          {Array.from({ length: totalDots }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors duration-200 ${
                Math.floor(currentIndex / cardsPerView) === index ? "bg-black" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
