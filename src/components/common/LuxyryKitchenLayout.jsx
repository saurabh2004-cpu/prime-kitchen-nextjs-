import React from 'react';

const LuxuryKitchenLayout = () => {
  return (
    <div className="min-full p-4 sm:p-6 lg:p-8 ">
      <div className="max-w-8xl mx-auto md:px-10  ">
        {/* Main Content Card */}
        <div className="  overflow-hidden border border-lg border-gray-300   ">
          <div className="grid grid-cols-1 lg:grid-cols-5 min-h-[27.1875rem] ">
            
            {/* Left Section - Title */}
            <div className="lg:col-span-2  flex items-center justify-center p-8 lg:p-12 border-r border-gray-300">
              <div className="text-center">
                <h1 className="text-4xl sm:text-5xl md:text-[64px] font-[500] inter-placeholder xl:text-7xl font-bold text-black mb-4 tracking-tighter">
                  LUXURY
                </h1>
                <h2 className="text-3xl sm:text-4xl md:mt-20 md:text-[64px] font-[500] inter-placeholder font-bold text-black tracking-tighter">
                  KITCHEN
                </h2>
                <div className="mt-6 w-20 h-1 bg-white mx-auto"></div>
              </div>
            </div>

            {/* Right Section - Content */}
            <div className="lg:col-span-3 p-8 lg:p-12 flex items-center">
              <div className="max-w-2xl">
                <div className="prose prose-lg text-black leading-relaxed">
                  <p className="text-base sm:text-lg md:text-[16px] font-[500] inter-placeholder mb-6">
                    Modular, luxury, functional but most of all — personal. That’s a promise our kitchens will keep up. At Prime, we retail Italian and German kitchens from three brands, exclusively in India. We’ve selected the best brands that fit our quality requirements and make products that are apt for India. The precision of German kitchens and the timeless elegance of Italian designs combine to create one of the top rated modular kitchen brands in India. Experience our full range of modular kitchens at our showrooms in Delhi and Mumbai. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default LuxuryKitchenLayout;