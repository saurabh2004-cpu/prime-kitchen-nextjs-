import React, { useState, useEffect } from 'react';

const KitchenCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Organised",
      description: "A well-designed kitchen is the heart of every home, blending functionality with style.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 2,
      title: "Functional",
      description: "Smart storage solutions and ergonomic design create the perfect workspace.",
      image: "https://images.unsplash.com/photo-1556909065-f3b1ba66af78?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 3,
      title: "Stylish",
      description: "Contemporary design meets timeless elegance with premium materials.",
      image: "https://images.unsplash.com/photo-1556909075-4e9c2ff66e2b?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 4,
      title: "Innovative",
      description: "Cutting-edge technology seamlessly integrated into your daily routine.",
      image: "https://images.unsplash.com/photo-1556909119-4e3f1d6a2e7e?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 5,
      title: "Modern",
      description: "Clean lines and minimalist design for the contemporary home.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 6,
      title: "Efficient",
      description: "Maximizing space utilization with intelligent design solutions.",
      image: "https://images.unsplash.com/photo-1585238341710-4d3cc2f04c3e?w=400&h=300&fit=crop&crop=center"
    }
  ];

  // Create infinite loop by duplicating slides
  const infiniteSlides = [...slides, ...slides, ...slides];

  // Infinite scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const nextIndex = prev + 1;
        // Reset to beginning of middle set when we reach the end
        if (nextIndex >= infiniteSlides.length - slides.length) {
          return slides.length; // Jump back to start of middle set
        }
        return nextIndex;
      });
    }, 2000); // Faster transition for continuous feel

    return () => clearInterval(interval);
  }, []);

  // Set initial position to middle set to allow seamless looping
  useEffect(() => {
    setCurrentSlide(slides.length);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="text-center py-12 px-4">
        <div className="mb-4">
          <span className="text-[1rem] font-[500] inter-placeholder tracking-widest text-white uppercase">
            — FEATURES
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-[83px] lg:text-7xl font-[500] inter-placeholder md:mt-10 tracking-wide">
          TAKE A LOOK
        </h1>
      </div>

      {/* Carousel Container */}
      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden">
          
          {/* Slides */}
          <div 
            className="flex transition-transform duration-1000 ease-linear"
            style={{ 
              transform: `translateX(-${(currentSlide * 100) / 3}%)`,
              width: `${infiniteSlides.length * 100 / 3}%`
            }}
          >
            {infiniteSlides.map((slide, index) => (
              <div key={`${slide.id}-${Math.floor(index / slides.length)}`} className="w-1/3 flex-shrink-0 px-3">
                <div className="bg-black border border-gray-700 rounded-xl overflow-hidden h-80 w-1/4">
                  
                  {/* Image Section */}
                  <div className="relative h-48 bg-gray-900">
                    <img 
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'><rect fill='%23374151' width='400' height='200'/><text x='50%' y='50%' fill='%23ffffff' text-anchor='middle' dy='0.3em' font-family='Arial, sans-serif' font-size='16'>${slide.title}</text></svg>`;
                      }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  </div>

                  {/* Text Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 tracking-wide">
                      {slide.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KitchenCarousel;