"use client"

import { Blend } from "lucide-react"

const DesignFunctionBlendSection = ({blendImages}) => {
  

  return (
    <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 xl:py-14 inter-placeholder">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-22">
        {/* Main Heading */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[76px] font-semibold tracking-tighter  max-w-6xl mx-auto px-4">
            The Perfect Blend Of Design And Function
          </h2>
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12">
          {/* Left Column - Two Images and Description */}
          <div className="flex-1 w-full lg:w-3/5">
            {/* Two Images Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 lg:mb-10">
              {blendImages.slice(0, 2).map((image, index) => (
                <div
                  key={image.id}
                  className="group relative overflow-hidden bg-gray-200 hover:shadow-lg rounded-lg transition-all duration-300"
                >
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Description Text */}
            <div className="px-2 sm:px-0">
              <div className="text-gray-800 text-base sm:text-lg lg:text-[20px] font-medium leading-[25px] sm:leading-[25px] tracking-[-1.52px] text-justify">
                <p>
                  At Prime, we believe a kitchen should do more than just look beautiful — it should work beautifully
                  too. That's why our modular kitchens combine the elegance of Italian craftsmanship with the precision
                  of German engineering, customised to suit Indian homes. Every element, from smart storage to premium
                  finishes, is thoughtfully selected to create a space that's both stylish and practical. Step into a
                  Prime kitchen, and experience luxury that fits your lifestyle.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Single Large Image */}
          <div className="w-full lg:w-2/5 xl:w-2/5 mt-6 lg:mt-0">
            <div className="group relative overflow-hidden bg-gray-200 rounded-lg hover:shadow-lg transition-all duration-300 h-full">
              <img
                src={blendImages[2].src ||''}
                alt="Premium glass-fronted wardrobe system with sophisticated lighting and organized display"
                className="w-full h-[300px] sm:h-[400px] lg:h-full min-h-[500px] lg:min-h-[600px] object-cover transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DesignFunctionBlendSection
