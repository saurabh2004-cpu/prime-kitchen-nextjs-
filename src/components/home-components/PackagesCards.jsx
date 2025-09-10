'use client'

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const PackagesCards = () => {
    const plans = [
        {
            title: "Essentials",
            price: "$5,000",
            background: "#F7F6E9",
            icon: (
                <svg width="24" height="24" viewBox="0 0 256 256" fill="#1F3630">
                    <path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"></path>
                </svg>
            ),
            features: [
                "Initial consultation and space assessment",
                "Basic concept design and mood board",
                "Floor plan layout",
                "Selection of color scheme and materials",
                "Furniture placement plan",
                "2D renderings of key areas",
                "Project timeline and budget overview"
            ],
            buttonText: "Book a Call",
            textColor: "#1D322D",
            featureTextColor: "#1D322D",
            checkmarkColor: "#1F3630",
            buttonColor: "#1F3630",
            buttonTextColor: "#FDFCEE",
            arrowColor: "#1F3630",
            headingBackground: "#0000000D",
        },
        {
            title: "Premium",
            price: "$15,000",
            background: "#1F3630",
            icon: (
                <svg width="24" height="24" viewBox="0 0 256 256" fill="#FDFCEE">
                    <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                </svg>
            ),
            features: [
                "Everything in the Essentials Package plus:",
                "Detailed design development",
                "3D renderings of the entire space",
                "Custom furniture and fixture design",
                "Selection of art and decor items",
                "Comprehensive lighting plan",
                "Coordination with contractors and vendors",
                "Bi-weekly progress updates"
            ],
            buttonText: "Free Quote",
            textColor: "#FDFCEE",
            featureTextColor: "#FDFCEE",
            checkmarkColor: "#F3AC85",
            buttonColor: "#FFFEF2",
            buttonTextColor: "#1D322D",
            arrowColor: "#1F3630",
            headingBackground: "#FFFFFF0D"
        },
        {
            title: "Luxury",
            price: "$30,000",
            background: "#F7F6E9",
            icon: (
                <svg width="24" height="24" viewBox="0 0 256 256" fill="#1F3630">
                    <path d="M243.84,76.19a12.08,12.08,0,0,0-13.34-1.7l-50.21,25L138.37,29.86a12.11,12.11,0,0,0-20.74,0L75.71,99.52l-50.19-25A12.11,12.11,0,0,0,8.62,89.12l37,113.36a8,8,0,0,0,11.68,4.4C57.55,206.73,83.12,192,128,192s70.45,14.73,70.68,14.87a8,8,0,0,0,11.71-4.39l37-113.33A12.06,12.06,0,0,0,243.84,76.19Zm-68,80.61a8,8,0,0,1-7.87,6.61,8.36,8.36,0,0,1-1.4-.12,228.2,228.2,0,0,0-77.22,0,8,8,0,0,1-2.78-15.76,244.42,244.42,0,0,1,82.78,0A8,8,0,0,1,175.88,156.8Z"></path>
                </svg>
            ),
            features: [
                "Everything in the Premium Package plus:",
                "Full project management from start to finish",
                "Personal shopping services for furniture and decor",
                "On-site supervision during implementation",
                "Custom-built elements and bespoke solutions",
                "Post-completion styling and final touches",
                "Detailed documentation and maintenance guide",
                "Client access to exclusive design resources and events"
            ],
            buttonText: "Book a Call",
            textColor: "#1D322D",
            featureTextColor: "#1D322D",
            checkmarkColor: "#1F3630",
            buttonColor: "#1F3630",
            buttonTextColor: "#FDFCEE",
            arrowColor: "#1F3630",
            headingBackground: "#0000000D"
        }
    ];

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FDFEF2] min-h-[38.25em]">
            <div className="mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className="rounded-xl p-6 "
                            style={{ backgroundColor: plan.background }}
                        >
                            <div className="flex items-start mb-4 p-4 rounded-xl flex-row align-center  w-full align-center " style={{ backgroundColor: plan.headingBackground }}>
                                <div className=" rounded-md p-3  mr-4 bg-[#F3AC85]" style={{ backgroundColor: plan.iconColor }}>
                                    {plan.icon}
                                </div>
                                <h3 className="text-xl font-bold relative md:top-2" style={{ color: plan.textColor }}>{plan.title}</h3>
                                <div className="flex w-full align-end justify-end align-center relative md:top-2">
                                    <p className={`  text-lg ${plan.title == 'Premium' ? 'text-[#F3AC85]' : 'text-[#1F3630]'}  text-right `}>{plan.price}</p>
                                </div>
                            </div>

                            <ul className="space-y-3 my-12">
                                {plan.features.map((feature, i) => (
                                    <React.Fragment key={i}>
                                        <li className="flex items-start my-5 pb-3 border-b border-[#1F3630]/10">
                                            <svg
                                                className="flex-shrink-0 h-3 w-3 mr-2 mt-0.5"
                                                viewBox="0 0 256 256"
                                                fill={plan.checkmarkColor}
                                            >
                                                <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                                            </svg>
                                            <span style={{ color: plan.featureTextColor, opacity: 0.8 }}>{feature}</span>
                                        </li>
                                    </React.Fragment>
                                ))}
                            </ul>


                            {/* //button */}
                            <div className='flex align-center mt-6'>
                                <motion.button
                                    className=" text-white px-8 py-2 rounded-xl font-semibold text-lg transition-all duration-500 relative z-10 group-hover:rounded-r-none group-hover:pr-4"
                                    whileHover={{
                                        scale: 1.02,
                                    }}
                                    style={{ backgroundColor: plan.buttonColor }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span className="relative z-10 inter-placeholder" style={{ color: plan.buttonTextColor }}>{plan.buttonText} </span>
                                    <motion.div
                                        className="absolute top-0 right-0 h-full w-0 group-hover:w-4 transition-all duration-500 ease-out"
                                    />
                                </motion.button>
                                <motion.button
                                    className="bg-[#F3AC85]  text-[#1F3630] p-3  rounded-xl transition-all duration-500 ml-2 group-hover:ml-0 group-hover:rounded-l focus:outline-none relative z-10"
                                    whileHover={{
                                        scale: 1.05,

                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <motion.div whileHover={{ y: 2 }} transition={{ duration: 0.2 }}>
                                        <ArrowRight size={20} strokeWidth={2} />
                                    </motion.div>
                                </motion.button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PackagesCards;