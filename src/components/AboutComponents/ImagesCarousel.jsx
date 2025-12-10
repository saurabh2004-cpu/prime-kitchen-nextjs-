import React from 'react';
import { motion } from 'framer-motion';

const InfiniteCarousel = () => {
  // Using high-quality workspace images from Pexels
  const images = [
    {
      id: 1,
      src: '1+(1).png',
      alt: 'Modern workspace with laptop',
      shape: 'rounded-full' // Circle
    },
    {
      id: 2,
      src: '1+(2).png',
      alt: 'Creative office setup',
      shape: 'rounded-2xl' // Rounded rectangle
    },
    {
      id: 3,
      src: '1+(3).png',
      alt: 'Business meeting room',
      shape: 'rounded-2xl' // Circle
    },
    {
      id: 4,
      src: '1+(4).png',
      alt: 'Modern office interior',
      shape: 'rounded-[3rem]' // Large rounded rectangle
    },
    {
      id: 5,
      src: '1+(5).png',
      alt: 'Collaborative workspace',
      shape: 'rounded-2xl' // Rounded rectangle
    },
    {
      id: 6,
      src: '1+(6).png',
      alt: 'Design studio',
      shape: 'rounded-full' // Circle
    },
    {
      id: 7,
      src: '1+(8).png',
      alt: 'Tech workspace',
      shape: 'rounded-2xl' // Rounded rectangle
    },
    {
      id: 8,
      src: '1+(9).png',
      alt: 'Creative office space',
      shape: 'rounded-full' // Circle
    }
  ];

  // Triple the images for seamless infinite scroll
  const duplicatedImages = [...images, ...images, ...images];

  // Calculate responsive widths for animation
  const getImageWidth = () => {
    // Base widths: mobile: 160px, tablet: 200px, desktop: 280px
    // Using average for animation calculation
    return 220;
  };

  const totalWidth = duplicatedImages.length * getImageWidth();

  return (
    <section className="py-8 sm:py-16 lg:py-32 bg-[#f7f6e9] py-22 md:h-[498px] overflow-hidden">
      <div className="relative">
        {/* Responsive gradient overlays for smooth fade effect */}
        {/* <div className="absolute left-0 top-0 w-16 sm:w-24 lg:w-32 h-full bg-gradient-to-r from-[#f7f6e9] via-[#f7f6e9]/80 to-transparent z-10 pointer-events-none" /> */}
        {/* <div className="absolute right-0 top-0 w-16 sm:w-24 lg:w-32 h-full bg-gradient-to-l from-[#f7f6e9] via-[#f7f6e9]/80 to-transparent z-10 pointer-events-none" /> */}

        {/* Infinite scrolling container */}
        <motion.div
          className="flex gap-2 sm:gap-4 lg:gap-6"
          animate={{
            x: [0, `-${100 / 3}%`]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 17, // Slower on mobile for better visibility
              ease: "linear",
            },
          }}
          style={{
            width: `${totalWidth}px`
          }}
        >
          {duplicatedImages.map((image, index) => (
            <motion.div
              key={`${image.id}-${Math.floor(index / images.length)}-${index}`}
              className="flex-shrink-0 relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.2,
                delay: (index % images.length) * 0.03,
                ease: "easeOut"
              }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className={`relative overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 group-hover:scale-105 ${image.shape}`}>
                <img
                  src={`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/about-page-images/team-carousel-images/${image.src}`}
                  alt={image.alt}
                  className={`object-cover transition-transform duration-700 group-hover:scale-110 ${image.shape === 'rounded-full'
                      ? 'aspect-square w-[388px] h-[288px]  '
                      : 'w-[388px] h-[288px]'
                    }`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InfiniteCarousel;