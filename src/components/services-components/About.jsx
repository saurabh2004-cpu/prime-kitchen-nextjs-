const LuxuryWardrobeAbout = ({ image}) => {
  return (
    <section className="w-full  py-4 sm:py-6 md:py-8 lg:py-10  inter-placeholder">
      <div className="max-w-8xl mx-auto pl-4 sm:pl-6 md:pl-8 xl:pl-20 xl:pb-12">
        {/* Header */}
        <div className="mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <h3 className="text-gray-800 text-lg sm:text-xl md:text-2xl lg:text-[2rem] font-medium mb-3 sm:mb-4 md:mb-6 lg:mb-10">
            About Luxury Wardrobe
          </h3>
          <h2 className="text-[#009F93] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
            Built for India. Inspired by Europe. Made for You.
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-start">
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-tight font-semibold mb-4 sm:mb-5 md:mb-6">
              Timeless Design, Tailored for Indian Homes
            </h3>

            <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] leading-relaxed lg:leading-tight tracking-normal lg:tracking-[-2px] font-medium mb-6 sm:mb-7 md:mb-8 lg:mb-6 ">
              <p className="mb-0 lg:-mb-2">
                At Prime, we bring the best of Italian elegance and German engineering to Indian homes. Our curated
                range of modular kitchens—exclusively from three premium European brands—offers timeless design, lasting
                durability, and tailored functionality. Whether you're in Delhi or Mumbai, step into our showrooms to
                explore kitchens that are not just built to impress, but built around you.
              </p>
            </div>

            <button className="bg-[#00374B] text-white font-medium text-sm sm:text-base xl:mt-6 md:text-lg lg:text-xl xl:text-[24px] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-18 py-2 sm:py-2.5 md:py-3 lg:py-2 rounded-xl hover:bg-[#004a5c] transition-colors">
              More about us
            </button>
          </div>

          {/* Right Column - Image */}
          <div className="order-1 lg:order-2">
            <div className="relative w-full overflow-hidden shadow-lg">
              <img
                src={image}
                alt="Modern luxury wardrobe with organized clothing and storage compartments"
                className="w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-107 object-cover rounded-l-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LuxuryWardrobeAbout
