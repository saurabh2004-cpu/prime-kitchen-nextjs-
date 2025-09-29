import React from 'react';

const WardrobeGallerySection = ({wardrobeImages}) => {
    

    return (
        <section className="w-full bg-black py-12 sm:py-16 md:py-20 lg:py-6 lg:pb-28 inter-placeholder">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
                {/* Header Section */}
                <div className="text-center mb-12 sm:mb-16 md:mb-15">
                    {/* Subtitle */}
                    <p className="text-white text-base font-medium font-light mb-4 sm:mb-6 tracking-tight">
                       — Premium Inside. Prestige Outside.
                    </p>

                    {/* Main Heading */}
                    <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[75px]  font-medium leading-tighter max-w-6xl mx-auto">
                        Designed to Impress, Built to Organize
                    </h2>
                </div>

                {/* Image Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-y-12 lg:gap-x-22 border-t border-[#ffffff]/40 py-6">
                    {wardrobeImages.map((image) => (
                        <div
                            key={image.id}
                            className="group relative overflow-hidden   aspect-[4/3] hover:transform  transition-all duration-500 ease-out cursor-pointer"
                        >
                            {/* Image */}
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-[822px] h-[510px] rounded-lg h-full object-cover transition-transform duration-500 "
                                loading="lazy"
                            />

                            {/* Overlay */}
                            {/* <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300"></div> */}

                            

                            {/* Bottom Overlay with Text */}
                            <div className="absolute bottom-0 flex justify-center   left-4 right-4 mb-4 bg-gradient-to-t from-black/20 via-black/50 to-transparent p-4 sm:p-6 backdrop-blur-md">
                                <button className="text-white mx-auto font-medium rounded-lg text-[20px] font-[500]  transition-colors duration-200">
                                    Have a Closer Look
                                </button>
                            </div>



                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WardrobeGallerySection;