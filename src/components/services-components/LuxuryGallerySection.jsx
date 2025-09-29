import React from 'react';

const LuxuryGallerySection = ({galleryImages}) => {
   
   

    return (
        <section className="w-full bg-black pb-12 pt-6  md:pb-20 lg:pb-24 inter-placeholder">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 xl:px-18">
                {/* Gallery Tag */}
                <div className="text-center mb-6 sm:mb-8 md:mb-8">
                    <span className="text-white text-base font-medium tracking-wide">
                        — Gallery
                    </span>
                </div>

                {/* Main Title */}
                <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-20">
                    <h2 className="text-white font-medium leading-tight">
                        <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[83px] tracking-tight">
                            Experience Luxury,  Up Close
                        </span>
                    </h2>
                </div>

                {/* Gallery Cards */}
                <div className="flex flex-col lg:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-22">
                    {galleryImages.map((image, index) => (
                        <div
                            key={image.id}
                            className="group relative overflow-hidden bg-gray-800 rounded-lg xl:max-w-[471px] "
                            style={{
                                width: '100%',
                                // maxWidth: '471px',
                                height: '568px'
                            }}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Responsive Styles for Mobile */}
            <style jsx>{`
        @media (max-width: 1024px) {
          .gallery-card {
            width: 100% !important;
            max-width: 400px !important;
            height: 480px !important;
          }
        }
        
        @media (max-width: 768px) {
          .gallery-card {
            height: 400px !important;
          }
        }
        
        @media (max-width: 640px) {
          .gallery-card {
            height: 350px !important;
          }
        }
      `}</style>
        </section>
    );
};

export default LuxuryGallerySection;