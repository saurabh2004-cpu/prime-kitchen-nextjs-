import React from 'react';

const KitchenHeroImgAndHeading = () => {
  return (
    <div className="relative h-full ">
      {/* Hero Section with Kitchen Background */}
      <div className="relative h-[57.125rem] flex items-center justify-center overflow-hidden">
        {/* Background with overlay */}
        <img 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          src={'/images/luxary-kitchen-1.png'}
        />
        
        {/* Main Title */}
        {/* <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white tracking-wider mb-6">
            LUXURY
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white tracking-wider">
            KITCHEN
          </h1>
          <div className="mt-8 w-24 h-1 bg-white mx-auto"></div>
        </div> */}

        {/* Floating elements for visual interest */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-white opacity-20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-white opacity-30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-white opacity-25 rounded-full animate-pulse delay-2000"></div>
      </div>

      

      
    </div>
  );
};

export default KitchenHeroImgAndHeading;