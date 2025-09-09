import React from 'react';
import DarkBannerHeading from './DarkBannerHeading';
import Image from 'next/image';

const LuxuryKitchenImage = () => {
    return (
        <div className="">
            {/* Hero Section */}
            <div className="relative w-full">

                {/* Kitchen Image Section */}
                <div className="relative h-[60vh] sm:h-[70vh] md:h-[44.7rem] overflow-hidden">

                    {/* Kitchen Background - Simulated with CSS */}
                    <Image
                        src={'/images/luxury-kitchen-2.png'}
                        alt="Kitchen Background"
                        height={950}
                        width={1920}
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"

                    />

                    {/* Overlay for better text contrast */}
                    {/* <div className="absolute inset-0 bg-black bg-opacity-20"></div> */}
                </div>

                <DarkBannerHeading />

                {/* Kitchen Image Section */}
                <div className="relative h-[60vh] sm:h-[70vh] md:h-[44.7rem] overflow-hidden">

                    {/* Kitchen Background - Simulated with CSS */}
                    <Image
                        src={'/images/luxury-kitchen-3.png'}
                        alt="Kitchen Background"
                        height={950}
                        width={1920}
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"

                    />

                    {/* Overlay for better text contrast */}
                    {/* <div className="absolute inset-0 bg-black bg-opacity-20"></div> */}
                </div>
            </div>
        </div>
    );
};

export default LuxuryKitchenImage;