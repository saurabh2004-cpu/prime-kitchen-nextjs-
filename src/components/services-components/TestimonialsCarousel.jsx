"use client"

import { useState, useEffect } from "react"

const testimonials = [
  {
    id: 1,
    text: `The furniture is exceptionally sturdy and durable, far exceeding our expectations for the price.
          You can truly see the difference in craftsmanship—it’s a cut above the rest.
          Every detail reflects quality and care, making our home both beautiful and functional.
          We’re extremely satisfied with the overall experience and final result.
          `,
    author: "Mr. & Mrs. Pingle",
    role: "Homeowner",
  },
  {
    id: 2,
    text: `We needed furniture that perfectly fit our compact apartment space, and the team absolutely nailed it.
          The design is stylish, space-efficient, and thoughtfully planned for everyday comfort.
          The smart storage solutions have truly improved our home’s functionality and workflow.
          They turned our vision into reality, creating a home we genuinely love.
          `,
    author: "Mr. & Mrs. Gawhane",
    role: "Homeowner",
  },
  {
    id: 3,
    text: `Working with the company was a seamless experience from start to finish.
          The team was professional, responsive, and patient throughout the design process, accommodating every change.
          Installation was completely hassle-free and completed right on time.
          The final outcome is perfect—just what we envisioned for our home.
        `,
    author: "Mr. & Mrs. Munde",
    role: "Homeowner",
  },
  {
    id: 4,
    text: `Great experience overall! The team offered cost-efficient solutions with honest, competitive pricing—without ever compromising on quality.
          We truly received excellent value for money and complete satisfaction.
          Their professionalism and transparency made the entire process smooth and trustworthy.
          `,
    author: "Mr. & Mrs. Polkam",
    role: "Homeowner",
  },
  {
    id: 5,
    text: `“Absolutely the best service and quality! The team delivered beyond expectations with excellent attention to detail.
        Every element reflects precision and care, making the entire experience smooth and satisfying.
        Truly a perfect blend of professionalism and craftsmanship — highly recommended!`,
    author: "Mr. Sumit Suradkar",
    role: "Business Owner",
  },
  {
    id: 6,
    text: `The work quality is truly first-rate, and the service exceeded my expectations.Every detail was handled with care, reflecting true professionalism and skill.Thank you, Prime Kitchen Studio, for your excellent service and flawless execution!`,
    author: "Mr. Pranit Wadatkar ",
    role: "Property Manager",
  },
  {
    id: 7,
    text: `Wonderful experience from start to finish! The team at Prime Kitchen Studio was professional, creative, and attentive to every detail.
The final outcome perfectly matched my vision — elegant, functional, and beautifully crafted.
Truly delighted with the quality and service!
`,
    author: "Ms. Shraddha Deshmukh ",
    role: "Property Manager",
  },
  {
    id: 8,
    text: `Exceptional work and a seamless experience throughout the project.
The Prime Kitchen Studio team delivered top-notch quality with impressive attention to detail.Their professionalism and dedication made the entire process smooth and satisfying.Highly appreciate their effort and craftsmanship!

`,
    author: "Mr. Ganesh Karhade",
    role: "Property Manager",
  },
  {
    id: 9,
    text: `Fantastic experience with Prime Kitchen Studio! The team truly understood my needs and turned my ideas into a beautiful reality.
 The design, quality, and finishing are simply outstanding.
 I’m extremely happy with their professionalism and the elegance they brought to my home.
`,
    author: "Ms. Sonali Gudadhe Chavan",
    role: "Property Manager",
  },
  {
    id: 10,
    text: `Prime Kitchen Studio did an amazing job from concept to completion.
 The designs are modern, practical, and finished with exceptional quality.
 The team was professional, responsive, and made the entire process effortless.
 Truly impressed with their creativity and commitment to perfection!
`,
    author: "Mr. Soham Chavan",
    role: "Property Manager",
  },
  {
    id: 11,
    text: `Outstanding experience with Prime Kitchen Studio!
 The team delivered exceptional craftsmanship and thoughtful design that perfectly fit my space.
 Everything was handled with professionalism, precision, and care.
 I’m highly satisfied with the result — elegant, durable, and beautifully executed.
`,
    author: "Mr. Achut Moharir",
    role: "Property Manager",
  },
  {
    id: 12,
    text: `Excellent work by Prime Kitchen Studio!
 The team was professional, punctual, and paid great attention to every detail.
 The final outcome exceeded my expectations with top-quality finishes and smart design.
 Truly happy with their dedication and flawless execution.
`,
    author: "Mr. Hrishikesh Sangit",
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
                  height: cardsPerView === 1 ? "auto" : "419px",
                  minHeight: cardsPerView === 1 ? "250px" : "419px",
                  minWidth: cardsPerView === 1 ? "280px" : "396px",
                }}
              >
                <div className="h-full flex flex-col justify-between mb-[28px] px-[20px] ">
                  <p className="text-base sm:text-lg md:text-[20px] font-medium tracking-tight leading-[25px] mb-4 sm:mb-6 ">
                    "{testimonial.text}"
                  </p>

                  <div className="mt-auto">
                    <p className="text-lg sm:text-xl font-medium">
                      — {testimonial.author}
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
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors duration-200 ${Math.floor(currentIndex / cardsPerView) === index ? "bg-black" : "bg-gray-300"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
