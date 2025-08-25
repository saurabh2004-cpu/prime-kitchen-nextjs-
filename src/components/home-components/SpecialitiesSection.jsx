import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
    ArrowDown,
    ArrowRight,
    Pencil,
    Star,
    DollarSign,
    Handshake,
    Leaf,
    Briefcase,
    Pen,
} from 'lucide-react';


const SpecialtiesSection = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleAccordion = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const specialties = [
        {
            title: "Personalized Design Solutions",
            content: "We tailor each project to meet your unique vision and needs, ensuring every design reflects your personality and preferences, creating spaces that are truly yours.",
            icon: <Pencil />,
        },
        {
            title: "Extensive Experience",
            content: "Content for Extensive Experience...",
            icon: <Star />,
        },
        {
            title: "Budget Friendly",
            content: "Content for Budget Friendly...",
            icon: <DollarSign />,
        },
        {
            title: "Client-Centric Approach",
            content: "Content for Client-Centric Approach...",
            icon: <Handshake />,
        },
        {
            title: "Sustainable Practices",
            content: "Content for Sustainable Practices...",
            icon: <Leaf />,
        },
        {
            title: "Dedicated Team & Support",
            content: "Content for Dedicated Team & Support...",
            icon: <Briefcase />,
        }
    ];

    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    }

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
            },
        },
    }

    // New animation variants for the main sections
    const slideInLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    }

    const slideInRight = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
        },
    }

    const accordionItemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    }

    const accordionContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.4,
            },
        },
    }

    return (
        <motion.section 
            className="flex flex-col lg:flex-row md:max-h-[40em] overflow-hidden rounded-2xl mx-2 md:mx-8 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.1 }}
        >
            <motion.div 
                className="relative md:w-300 h-100 md:h-[40em] overflow-hidden rounded-2xl mx-2 mb-4 md:mb-0"
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <div className="absolute inset-0">
                    <img
                        src="https://framerusercontent.com/images/KGTXISgxyxmkCq256EXQwsbnNto.jpg"
                        alt="Interior design background"
                        className="w-full h-100 md:h-full object-cover rounded-2xl"
                    />
                </div>

                {/* Content Container */}
                <motion.div
                    className="relative h-100 md:h-full flex flex-col justify-end z-10 p-4 md:p-8"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Bottom Overlay Card */}
                    <motion.div
                        className="bg-white/10 backdrop-blur-lg rounded-xl p-4 md:p-2"
                        variants={fadeInUp}
                        style={{ zIndex: 20 }}
                    >
                        <motion.h2
                            className="text-md md:text-4xl font-light md:text-[38px] md:font-medium inter-placeholder mb-4 tracking-tight"
                            variants={fadeInUp}
                            style={{ color: '#FDFCEE' }}
                        >
                            Our specialty lies in transforming spaces into harmonious environments
                        </motion.h2>

                        <motion.p
                            className="text-[#fdfcee]/80 text-xs md:text-[16px] md:font-medium mb-6 font-medium inter-placeholder"
                            variants={fadeInUp}
                            style={{ color: '#FDFCEE' }}
                        >
                            Our craft, a delicate dance of light and shadow, seeks to conjure spaces that echo with the whispers of timeless elegance and bespoke charm.
                        </motion.p>

                        <div className="relative group flex items-center">
                            <motion.button
                                className="bg-[#FDFCEE] md:text-[18px] ,d:font-medium text-[#1F3630] px-6 py-3 md:px-4 md:py-2 rounded-2xl font-semibold text-base md:text-lg transition-all duration-500 relative z-10 group-hover:rounded-r-none group-hover:pr-4"
                                whileHover={{
                                    scale: 1.02,
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="relative z-10">Start a project</span>
                                <motion.div
                                    className="absolute top-0 right-0 h-full w-0 group-hover:w-4 transition-all duration-500 ease-out"
                                />
                            </motion.button>

                            <motion.button
                                className="bg-[#00374b] text-white p-3 md:p-2 rounded-xl transition-all duration-500 ml-2 group-hover:ml-0 group-hover:rounded-l  focus:outline-none relative z-10"
                                whileHover={{
                                    scale: 1.05,
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <motion.div whileHover={{ y: 2 }} transition={{ duration: 0.2 }}>
                                    <ArrowRight className='h-5 w-5 md:h-6 md:w-6 hover:rotate-45 transition-transform duration-500' />
                                </motion.div>
                            </motion.button>

                            <motion.div
                                className="absolute top-0 left-0 h-full rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-[#00374b]"
                                style={{
                                    width: "calc(100% - 8px)",
                                    zIndex: 5,
                                }}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Right Section - Specialties */}
            <motion.div 
                className='w-full md:max-h-[40em] lg:w-5/5  rounded-2xl md:px-4 md:pt-6 overflow-y-auto mb-4 md:mb-0 scrollbar-hide'
                variants={slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.div
                    className="flex justify-center md:justify-start items-center mb-4 md:mb-6 relative md:bottom-5 md:right-3 "
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-[#009f93]" viewBox="0 0 30 30" fill="none" stroke="currentColor">
                        <circle cx="12" cy="12" r="6" strokeWidth="2" />
                        <circle cx="12" cy="12" r="3.2" fill="currentColor" />
                    </svg>
                    <span className="text-xs font-semibold md:text-[12px] ml-2 text-[#009f93] tracking-wider uppercase inter-placeholder relative md:bottom-1 md:right-3">
                        OUR SPECIALITIES
                    </span>
                </motion.div>

                <div className="text-white">
                    <motion.div 
                        className="mb-4 md:mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h1 className="text-2xl  lg:text-[48px] px-2 font-bold inter-placeholder tracking-tight text-left text-[#009f93] relative md:bottom-13 md:right-3">
                            Why you'll love working with Prime
                        </h1>
                    </motion.div>

                    <motion.blockquote 
                        className="border-l-4 border-[#f7f6e9] bg-[#F7F6E9] rounded-2xl p-4 md:p-6 mb-6 relative md:bottom-13 md:right-3 "
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <p className="text-base md:text-[1rem] md:font-medium inter-placeholder mb-4" style={{ color: '#1D322D' }}>
                            "Design is more than just aesthetics; it's a reflection of the soul and a journey
                            towards creating timeless spaces that resonate with individuality and purpose. At
                            Prime, we strive to craft environments that not only captivate the eye but also
                            inspire the mind and nurture the spirit."
                        </p>
                        <div className="flex items-center space-x-3">
                            <img src="https://framerusercontent.com/images/XDcRjEJ0HdfRgvjaqQFTeR8Bsk.jpg?scale-down-to=1024"
                                alt="Real Mehedi"
                                className="w-12 h-12 md:h-6 md:w-16 md:h-16 rounded-md" />
                            <div>
                                <p className="text-[#1D322D] inter-placeholder text-base md:text-[18px] md:font-medium">Real Mehedi</p>
                                <p className="text-[#1D322D] inter-placeholder text-sm md:text-[1rem] font-medium">Founder, Prime Design Studio</p>
                            </div>
                        </div>
                    </motion.blockquote>

                    <motion.div 
                        className="space-y-4 overflow-y-auto bg-[#1D322D] relative md:right-3 rounded-2xl"
                        variants={accordionContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {specialties.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={accordionItemVariants}
                                className="p-3 rounded-xl  hover:bg-[#FFFFFF0D] transition-all cursor-pointer"
                                onClick={() => toggleAccordion(index)}
                            >
                                <div className="flex justify-between items-center">
                                    <div className='flex gap-3 items-center'>
                                        <div className="text-white bg-[#009f93] p-2 h-10 w-10 md:h-12 md:w-12 rounded-lg flex items-center justify-center">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-base md:text-[18px] md:font-medium text-[#FDFCEE]">{item.title}</h3>
                                    </div>
                                    <motion.div
                                        animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-[#FDFCEE]"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
                                            <p className="text-[#fdfcee]/75 text-sm md:text-[16px] md:font-medium leading-relaxed relative md:left-15">{item.content}</p>
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