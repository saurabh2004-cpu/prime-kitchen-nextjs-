"use client"

import { useState } from "react"
import { ChevronDownIcon } from "lucide-react"

const faqData = [
  {
    question: " What is a modular kitchen?",
    answer:
      "A modular kitchen consists of pre-fabricated cabinet units designed to optimize space, storage, and workflow with customizable layouts to fit your home perfectly.",
  },
  {
    question: "Do you offer customized furniture designs?",
    answer:
      "Yes, we craft bespoke furniture tailored to your home’s aesthetics and functional needs, using premium materials and finishes.",
  },
  {
    question: " What makes your office furniture special?",
    answer:
      "Our office furniture focuses on ergonomic design, comfort, and style to create productive work environments tailored to modern needs.",
  },
  {
    question: "How do I get started with designing my kitchen or interior?",
    answer:
      "The process begins with a consultation where we understand your needs, style preferences, and budget. From there, we create customized design concepts and layouts, guiding you through material choices and functionality to bring your vision to life.",
  },
  {
    question: "What happens if I want to make changes after the design is finalized?",
    answer:
      "We understand that ideas evolve. Minor changes can often be accommodated during the process, but significant alterations after final approval may affect timelines and costs. We recommend open communication early to ensure satisfaction.",
  },
]

export default function FAQ({ faqImage }) {
  const [openItems, setOpenItems] = useState([])

  const toggleItem = (index) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]))
  }

  return (
    <section className="w-full py-8 sm:py-12 lg:py-12 lg:px-4 inter-placeholder ">
      <div className="max-w-8xl px-4 sm:px-8 lg:px-16 mx-auto">
        {/* FAQ Heading */}
        <h2 className="text-xl sm:text-2xl lg:text-[32px] font-medium mb-4 sm:mb-6">FAQ</h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[83px] font-medium tracking-tighter mb-8 sm:mb-10 lg:mb-12 leading-tight">
          Answers to Common Questions
        </h1>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-12 lg:gap-28">
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1">
            <div className="w-full h-[250px] sm:h-[300px] lg:h-[370px] rounded-lg overflow-hidden">
              <img
                src={faqImage}
                alt="Kitchen renovation showcase"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - FAQ Dropdowns */}
          <div className="order-1 lg:order-2 space-y-3 sm:space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="border-b-2 border-gray-200  ">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-0 sm:px-0 py-3 sm:py-4 text-left flex items-center justify-between transition-colors duration-200"
                >
                  <span className="text-base sm:text-lg font-medium text-gray-900 pr-3 sm:pr-4 leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDownIcon
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${openItems.includes(index) ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {openItems.includes(index) && (
                  <div className="px-4 sm:px-6 pb-3 sm:pb-4">
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
