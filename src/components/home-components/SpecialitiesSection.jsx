"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Pencil,
  Star,
  DollarSign,
  Handshake,
  Leaf,
  Briefcase,
} from "lucide-react";

const SpecialtiesSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const rightSectionRef = useRef(null);
  const componentRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);

    // Scroll the expanded item into view after a short delay
    if (expandedIndex !== index && rightSectionRef.current) {
      setTimeout(() => {
        const accordionItem =
          rightSectionRef.current.children[1]?.children[1]?.children[index];
        if (accordionItem) {
          accordionItem.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          });
        }
      }, 300);
    }
  };

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      if (!rightSectionRef.current || !componentRef.current) return;

      const component = componentRef.current;
      const rightSection = rightSectionRef.current;
      const componentRect = component.getBoundingClientRect();

      // Check if component is in viewport
      if (
        componentRect.top <= window.innerHeight &&
        componentRect.bottom >= 0
      ) {
        setIsScrolling(true);

        // Calculate scroll progress based on component position
        const componentHeight = componentRect.height;
        const viewportHeight = window.innerHeight;
        const scrollProgress = Math.max(
          0,
          Math.min(
            1,
            (viewportHeight - componentRect.top) /
              (componentHeight + viewportHeight)
          )
        );

        // Calculate right section scroll position
        const maxScroll = rightSection.scrollHeight - rightSection.clientHeight;
        const targetScroll = scrollProgress * maxScroll;

        // Smooth scroll the right section
        rightSection.scrollTo({
          top: targetScroll,
          behavior: "auto", // Use 'auto' for immediate response
        });

        // Clear timeout and set new one
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          setIsScrolling(false);
        }, 150);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const specialties = [
    {
      title: "Personalized Designs Crafted Around You",
      content:
        "At Prime Kitchen Studios, every design is an exclusive creation, shaped precisely to fit your lifestyle and taste—bringing vision and functionality into perfect harmony.",
      icon: <Pencil />,
    },
    {
      title: "Innovation That Transforms Spaces",
      content:
        "We harness the latest technologies and design concepts to craft kitchens and interiors that are as forward-thinking as they are beautiful.",
      icon: <Star />,
    },
    {
      title: "Quality Materials, Expert Craftsmanship",
      content:
        "Our commitment to excellence shines through every cabinet, surface, and fixture, ensuring spaces built to last and impress.",
      icon: <DollarSign />,
    },
    {
      title: "Where Style Meets Function Seamlessly",
      content:
        "Our designs blend aesthetic appeal with practical solutions, creating environments that are as efficient as they are stunning.",
      icon: <Handshake />,
    },
    {
      title: "Transparent and Responsive Service",
      content:
        "We partner with you through every step, ensuring clarity, timeliness, and a collaborative experience that makes your dream space a reality.",
      icon: <Leaf />,
    },
    {
      title: "Versatility Across Residential and Commercial",
      content:
        "From cozy homes to bustling offices, our diverse portfolio showcases our adaptability and passion for delivering outstanding results in every setting.",
      icon: <Briefcase />,
    },
  ];

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

  // New animation variants for the main sections
  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  const accordionItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const accordionContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4,
      },
    },
  };

  return (
    <motion.section
      ref={componentRef}
      className="flex flex-col lg:flex-row xl:max-h-[40em] overflow-hidden rounded-2xl mx-2 xl:mx-8 justify-center items-center mt-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div
        className="relative xl:w-300 h-160 md:h-[40rem] xl:h-[40em] overflow-hidden rounded-2xl mx-2 mb-4 md:mx-3 xl:mx-0 md:mb-0"
        variants={slideInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="absolute inset-0">
          <img
            src={`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/home-page/home-images/PXL_20231228_134951829-1.jpg`}
            alt="Interior design background"
            className="w-full h-160 md:h-280 xl:h-full object-cover rounded-2xl"
          />
        </div>

        {/* Content Container */}
        <motion.div
          className="relative h-100 md:h-full flex flex-col justify-end z-10 p-2 md:p-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Bottom Overlay Card */}
          <motion.div
            className="bg-white/10 backdrop-blur-lg rounded-xl p-4 md:p-2 relative top-60 md:top-0"
            variants={fadeInUp}
            style={{ zIndex: 20 }}
          >
            <motion.h2
              className="text-3xl font-medium md:text-4xl font-light md:text-[38px] md:font-medium inter-placeholder mb-4 tracking-tight"
              variants={fadeInUp}
              style={{ color: "#FDFCEE" }}
            >
              Our specialty lies in transforming spaces into harmonious
              environments
            </motion.h2>

            <motion.p
              className="text-[#fdfcee]/80 text-md md:text-[16px] md:font-medium mb-6 font-medium inter-placeholder"
              variants={fadeInUp}
              style={{ color: "#FDFCEE" }}
            >
              Our craft, a delicate dance of light and shadow, seeks to conjure
              spaces that echo with the whispers of timeless elegance and
              bespoke charm.
            </motion.p>

            <div className="relative group flex items-center">
              <motion.a
              href="/contact"
                className="bg-[#FDFCEE] md:text-[18px]  md:font-medium text-[#1F3630] px-6 py-3 md:px-4 md:py-2 rounded-2xl font-semibold text-base md:text-lg transition-all duration-500 relative z-10 group-hover:rounded-r-none group-hover:pr-4"
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Start a project</span>
                <motion.div className="absolute top-0 right-0 h-full w-0 group-hover:w-4 transition-all duration-500 ease-out" />
              </motion.a>

              <motion.button
                className="bg-[#00374b] text-white p-[12.5px] md:p-[11.5px] lg:p-[11px] md:p-2 rounded-xl transition-all duration-500 ml-2 group-hover:ml-0 group-hover:rounded-l-none  focus:outline-none relative z-10"
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  whileHover={{ y: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="h-6 w-6 md:h-6 md:w-6 hover:rotate-45 transition-transform duration-500" />
                </motion.div>
              </motion.button>

              {/* <motion.div
                className="absolute top-0 left-0 h-full rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-[#00374b]"
                style={{
                  width: "calc(100% - 8px)",
                  zIndex: 5,
                }}
              /> */}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Right Section - Specialties */}
      <motion.div
        ref={rightSectionRef}
        className={`w-full md:mt-15 md:ml-5 md:w-6xl  xl:mt-0 md:w-full md:max-h-[40em] lg:w-5/5 rounded-2xl md:px-3  xl:px-4 md:pt-6 mb-4 md:mb-0 scrollbar-hide overflow-y-auto ${
          isScrolling ? "scroll-smooth" : ""
        }`}
        variants={slideInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        style={{
          scrollBehavior: isScrolling ? "auto" : "smooth",
          pointerEvents: isScrolling ? "none" : "auto",
        }}
      >
        <motion.div
          className="flex justify-center md:justify-start items-center mb-4 md:mb-6 relative top-5 md:bottom-10 md:right-3 flex"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <svg
            className="w-6 h-6 md:w-8 md:h-8 text-[#009f93] relative md:bottom-10"
            viewBox="0 0 30 30"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="12" cy="12" r="6" strokeWidth="2" />
            <circle cx="12" cy="12" r="3.2" fill="currentColor" />
          </svg>
          <span className="text-xs font-semibold md:text-[12px] relative bottom-[3px] md:bottom-11 xl:ml-2 text-[#009f93] tracking-wider uppercase inter-placeholder relative xl:bottom-11 md:right-1 xl:right-3">
            OUR SPECIALITIES
          </span>
        </motion.div>

        <div className="">
          <motion.div
            className="mb-4 md:mb-13"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h1 className="xs:text-lg text-2xl md:text-4xl font-bold leading-tight lg:text-[48px] text-center px-8 md:px-2 font-semibold inter-placeholder tracking-tight md:text-left text-[#009f93] relative md:bottom-13 md:right-3">
              Why you'll love working with Prime
            </h1>
          </motion.div>

          <motion.div
            className="space-y-4 md:-mt-12 bg-[#1D322D] relative md:right-3 rounded-2xl md:py-3 pb-6"
            variants={accordionContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {specialties.map((item, index) => (
              <motion.div
                key={index}
                variants={accordionItemVariants}
                className="px-3 md:px-6 transition-all cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex justify-between items-center hover:bg-[#FFFFFF0D] p-2 rounded-lg">
                  <div className="flex gap-3 items-center">
                    <div className="text-white bg-[#009f93] p-2 h-10 w-10 md:h-12 md:w-12 rounded-lg flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h3 className="text-base md:text-[18px] md:font-medium text-[#FDFCEE]">
                      {item.title}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#FDFCEE]"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                </div>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden mt-2"
                    >
                      <p className="text-[#fdfcee]/75 text-sm md:text-[16px] md:font-medium leading-relaxed relative md:left-15 md:pr-15 pb-2">
                        {item.content}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default SpecialtiesSection;
