"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const BranchesSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const branches = [
    {
      location: "Branch 1 - Chatrapati Sambhaji Nagar",
      title: "Modern Luxury Kitchen",
      image: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/gallery-page-images/18.png`,
    },
    {
      location: "Branch 2 - Parbhani",
      title: "Timeless Italian Kitchen",
      image: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/gallery-page-images/17.png`,
    },
    {
      location: "Branch 3 - Jalna",
      title: "Premium Kitchen Living",
      image: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/gallery-page-images/9.png`,
    },
  ];

  return (
    <div className="  md:pt-16 md:mt-24 md:mx-1   mx-auto relative ">
      <div
        className="  md:mx-auto bg-[#1f3630]  rounded-2xl py-8 px-6 md:px-12 relative "
        style={{ minHeight: "1200px" }}
      >
        <motion.div
          className="flex flex-col md:mt-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="flex items-center space-x-1 mb-6 text-center w-full justify-center relative top-8 right-10 top-10 lg:top-19 md:right-42 lg:right-60 xl:top-25 xl:right-90"
            variants={fadeInUp}
          >
            <svg
              className="w-5 h-5 text-[#009f93]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="6" strokeWidth="2" />
              <circle cx="12" cy="12" r="3.2" fill="currentColor" />
            </svg>
            <span className="text-xs font-semibold  md:text[12px] md:font-semibold text-[#009f93] uppercase inter-placeholder inter-placeholder tracking-wider">
              OUR BRANCHES
            </span>
          </motion.div>

          <motion.h1
            className="text-7xl md:text-[160px] lg:text-[300px] font-bold text-[#009f93] tracking-tighter  text-center w-full justify-center inter-placeholder"
            variants={fadeInUp}
          >
            Branches
          </motion.h1>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 md:gap-0 xl:gap-6 mt-12 md:mt-0 lg:gap-8 relative md:bottom-4"
            variants={staggerContainer}
          >
            {branches.map((branch, index) => (
              <motion.div
                key={index}
                className=" rounded-lg overflow-hidden font-inter hover:shadow-xl transition-shadow duration-300 md:mt-10 xl:mt-40"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className=" p-2 md:py-6 pb-4">
                  <p className="text-xs text-[#fffef2] font-medium mb-3 md:text-[16px] xl:text-[18px] md:font-bold inter-placeholder text-start">
                    {branch.location}
                  </p>
                  <h3 className="font-inter text-[#fffef2] inter-placeholder  tracking-normal leading-[63.33px]  text-2xl md:text-4xl xl:text-[40px] font-bold leading-none">
                    {branch.title}
                  </h3>
                </div>

                {/* Kitchen image with overlay button */}
                <div className="relative overflow-hidden">
                  <img
                    src={branch.image || "/placeholder.svg"}
                    alt={branch.title}
                    className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300 rounded-lg"
                  />

                  {/* View services button - positioned at bottom-left of image */}
                  <Link href="/services" className="cursor-pointer">
                    <div className="absolute bottom-6 left-6 cursor-pointer">
                      <button className=" backdrop-blur-[2px] text-white py-3 px-6 rounded-md font-semibold text-sm uppercase tracking-wider  transition-all duration-200 flex items-center gap-2">
                        <span className="inter-placeholder font-bold text-white">
                          VIEW SERVICES
                        </span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                      </button>
                    </div>
                  </Link>

                  {/* Optional dark overlay for better button visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default BranchesSection;
