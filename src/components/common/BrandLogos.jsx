import Image from 'next/image';
import React from 'react';

const BrandLogos = () => {
    return (
        <div className="  flex items-center justify-center p-4 md:mt-20">
            <div className="w-full max-w-8xl mx-10 border border-gray-300 ">

                {/* Main Logo Container */}
                <div className="  border border-gray-200 p-8 sm:p-12 lg:p-16">

                    {/* Brand Logos Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-center justify-items-center">

                        {/* The Cut Logo */}
                        <div className="flex flex-col items-center justify-center w-full h-32 sm:h-40">
                            <div className="relative">
                                <Image
                                    src="/images/brand-logo-1.png"
                                    alt="The Cut Logo"
                                    width={325}
                                    height={150}
                                />
                            </div>
                        </div>

                        {/* Ballerina Küchen Logo */}
                        <div className="flex flex-col items-center justify-center w-full h-32 sm:h-40">
                            <div className="text-center">
                                <Image
                                    src="/images/brand-logo-2.png"
                                    alt="The Cut Logo"
                                    width={300}
                                    height={95}
                                />
                            </div>
                        </div>

                        {/* Häfele Logo */}
                        <div className="flex flex-col items-center justify-center w-full h-32 sm:h-40 sm:col-span-2 lg:col-span-1">
                            <div className="text-center">
                                <Image
                                    src="/images/brand-logo-3.png"
                                    alt="The Cut Logo"
                                    width={195}
                                    height={195}
                                />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default BrandLogos;