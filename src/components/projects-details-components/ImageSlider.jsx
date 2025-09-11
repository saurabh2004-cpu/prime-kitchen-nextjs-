import { useState, useRef, useEffect } from "react"


const challengeSolutions = [
    {
        challenge: "Weather Resistance",
        challengeDescription: "The beachside location required materials and design solutions that could withstand harsh coastal weather conditions.",
        solution: "Using weather-resistant materials like treated wood and corrosion-resistant metal, and applying protective coatings to ensure longevity and durability."
    },
    {
        challenge: "Integrating Technology",
        challengeDescription: "Incorporating modern technology without detracting from the natural, serene aesthetic was challenging.",
        solution: "Concealing technological elements within the design, using integrated smart home systems that blend seamlessly with the interior decor."
    },
    {
        challenge: "Maximizing Views",
        challengeDescription: "Ensuring that every room benefited from the stunning ocean views while maintaining privacy was essential.",
        solution: "Strategic placement of windows and using frosted or tinted glass in areas requiring privacy, along with designing outdoor spaces that naturally flow from indoor areas."
    }
]

const ImageSlider = () => {
    const [sliderPosition, setSliderPosition] = useState(50) // Percentage
    const [isDragging, setIsDragging] = useState(false)
    const containerRef = useRef(null)

    // Sample interior images - you can replace with your actual images
    const leftImage = "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80"
    const rightImage = "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"

    const handleMouseDown = (e) => {
        setIsDragging(true)
        e.preventDefault()
    }

    const handleMouseMove = (e) => {
        if (!isDragging || !containerRef.current) return

        const container = containerRef.current
        const rect = container.getBoundingClientRect()
        const x = e.clientX - rect.left
        const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))

        setSliderPosition(percentage)
    }

    const handleMouseUp = () => {
        setIsDragging(false)
    }

    const handleTouchStart = (e) => {
        setIsDragging(true)
        e.preventDefault()
    }

    const handleTouchMove = (e) => {
        if (!isDragging || !containerRef.current) return

        const container = containerRef.current
        const rect = container.getBoundingClientRect()
        const x = e.touches[0].clientX - rect.left
        const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))

        setSliderPosition(percentage)
    }

    const handleTouchEnd = () => {
        setIsDragging(false)
    }

    useEffect(() => {
        const handleGlobalMouseMove = (e) => handleMouseMove(e)
        const handleGlobalMouseUp = () => handleMouseUp()
        const handleGlobalTouchMove = (e) => handleTouchMove(e)
        const handleGlobalTouchEnd = () => handleTouchEnd()

        if (isDragging) {
            document.addEventListener('mousemove', handleGlobalMouseMove)
            document.addEventListener('mouseup', handleGlobalMouseUp)
            document.addEventListener('touchmove', handleGlobalTouchMove)
            document.addEventListener('touchend', handleGlobalTouchEnd)
            document.body.style.cursor = 'col-resize'
            document.body.style.userSelect = 'none'
        }

        return () => {
            document.removeEventListener('mousemove', handleGlobalMouseMove)
            document.removeEventListener('mouseup', handleGlobalMouseUp)
            document.removeEventListener('touchmove', handleGlobalTouchMove)
            document.removeEventListener('touchend', handleGlobalTouchEnd)
            document.body.style.cursor = 'default'
            document.body.style.userSelect = 'auto'
        }
    }, [isDragging])

    return (
        <div className="w-full max-w-7xl mx-auto p-4">
            {/* Main Container */}
            <div
                ref={containerRef}
                className="relative w-full h-[400px] md:h-[500px] lg:h-[680px] overflow-hidden rounded-2xl shadow-2xl cursor-col-resize select-none"
                style={{ aspectRatio: '16/9' }}
            >
                {/* Right Image (Base Layer) */}
                <div className="absolute inset-0 w-full h-full">
                    <img
                        src={rightImage}
                        alt="After renovation"
                        className="w-full h-full object-cover "
                        draggable={false}
                    />
                </div>

                {/* Left Image (Clipped Layer) */}
                <div
                    className="absolute inset-0 w-full h-full overflow-hidden"
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                    <img
                        src={leftImage}
                        alt="Before renovation"
                        className="w-full h-full object-cover"
                        draggable={false}
                    />
                </div>

                {/* Slider Line and Handle */}
                <div
                    className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10 cursor-col-resize"
                    style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleTouchStart}
                >
                    {/* Slider Handle */}
                    <div className="absolute bg-white/50  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-transparent rounded-full shadow-lg flex items-center justify-center cursor-col-resize ">
                        {/* Left Arrow */}
                        <svg
                            className="w-5 h-5 text-[#1d322d] mr-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                        </svg>
                        {/* Right Arrow */}
                        <svg
                            className="w-5 h-5 text-[#1d322d] ml-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="max-w-4xl mx-auto p-6 md:mt-22 inter-placeholder">
                <div className="space-y-8">
                    {challengeSolutions.map((item, index) => (
                        <div key={index} className="space-y-4">
                            {/* Challenge Section */}
                            <div>
                                <h3 className="text-lg  text-[#1d322d] mb-3">
                                    <span className="font-[600]">Challenge:</span>{" "}
                                    <span className="font-[500]">{item.challenge}</span>
                                </h3>
                                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                    {item.challengeDescription}
                                </p>
                            </div>

                            {/* Solution Section */}
                            <div>
                                <h3 className="text-lg  text-[#1d322d] mb-3">
                                    <span className="font-[600]">Solution:</span>{" "}
                                    <span className="font-[500]">
                                        {item.solution}
                                    </span>
                                </h3>
                            </div>

                            {/* Divider between items (except last) */}
                            {index < challengeSolutions.length - 1 && (
                                <div className="pt-6">
                                    <hr className="border-gray-200" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ImageSlider