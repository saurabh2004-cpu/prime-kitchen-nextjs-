import styled from 'styled-components';
import { Instagram, Facebook, Twitter, Youtube, Linkedin, X, LinkedinIcon, } from 'lucide-react';
import { IconBrandBehance, IconBrandInstagramFilled, IconBrandLinkedinFilled, IconBrandYoutubeFilled } from '@tabler/icons-react';
import { motion } from 'framer-motion';


const Footer = () => {
    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    const slideInLeft = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.7, ease: "easeOut" },
        },
    };

    const slideInRight = {
        hidden: { opacity: 0, x: 30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.7, ease: "easeOut" },
        },
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const scaleIn = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    return (
        <div>
            <motion.div
                className="bg-[#1f3630] py-16 mx-2 md:mx-2 sm:px-6 lg:px-8 rounded-lg md:mt-20"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.1 }}
            >
                <div className=" mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-4" >
                        {/* Left Side - Contact Info */}
                        <motion.div
                            className=" px-4 md:px-1 md:ml-24 text-[#fdfcee] align-center md:relative md:top-36"
                            variants={slideInLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <motion.div
                                className="space-y-6"
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                {/* Email */}
                                <motion.div
                                    className="bg-white/5 rounded-xl p-4"
                                    variants={fadeInUp}
                                >
                                    <div className="flex justify-between items-center">
                                        <span className=" text-sm font-medium inter-placeholder md:text[12px] md:font-semibold text-[#fdfcee] ">EMAIL</span>
                                        <a href="mailto:Prime@email.com" className="text-[#f8f8f5] text-[16px] pl-4 md:pl-0  md:text[16px] md:font-medium  text-[#fdfcee] hover:underline text-[#fdfcee] inter-placeholder  ">
                                            Prime@email.com
                                        </a>
                                    </div>
                                </motion.div>

                                {/* Phone */}
                                <motion.div
                                    className="bg-white/5 rounded-xl p-4"
                                    variants={fadeInUp}
                                >
                                    <div className="flex justify-between items-center ">
                                        <span className="  text-sm font-medium inter-placeholder md:text[12px] md:font-semibold text-[#fdfcee]">PHONE</span>
                                        <a href="tel:+1458741139" className="text-[#f8f8f5] text-[16px] pl-4 md:pl-0 md:text[16px] md:font-medium  text-[#fdfcee] hover:underline text-[#fdfcee] inter-placeholder  ">
                                            +1458741139
                                        </a>
                                    </div>
                                </motion.div>

                                {/* Office */}
                                <motion.div
                                    className="bg-white/5 rounded-xl p-4 "
                                    variants={fadeInUp}
                                >
                                    <div className="flex justify-between items-center ' inter-placeholder ">
                                        <span className="text-sm font-medium inter-placeholder md:text[12px] md:font-semibold text-[#fdfcee]">OFFICE</span>
                                        <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="text-[#f8f8f5] text-[16px] pl-4 md:pl-0 font-medium  md:text[16px] md:font-medium  text-[#fdfcee] hover:underline text-[#fdfcee] inter-placeholder text-right align-right ">
                                            123 Main Street Anytown, USA, 2141
                                        </a>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* Right Side - Form */}
                        <motion.div
                            className="bg-[#fffef2] rounded-xl px-4 py-8 mx-4"
                            variants={slideInRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <motion.h2
                                className="text-3xl md:text-[48px] md:font-bold text-left md:w-full font-black text-[#1d322d] mb-4 inter-placeholder tracking-tight drop-shadow-[0_2px_1px_rgba(0,0,0,0.15)]"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                Get a Free Estimate
                            </motion.h2>

                            <motion.p
                                className="text-[#1d322d] md:tect-[16px] md:font-medium mb-8 inter-placeholder"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                Reach out to us immediately to arrange for a customized quotation from one of our assessors.
                                Phone us or complete the form provided below!
                            </motion.p>

                            <motion.form
                                className="space-y-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 inter-placeholder ">
                                    {/* Name */}
                                    <div>
                                        <label className="block text-[12px] md:text[12px] md:font-bold inter-placeholder font-semibold text-[#1d322d] mb-2 ">NAME</label>
                                        <input
                                            type="text"
                                            placeholder="Jane Smith"
                                            className="w-full bg-[#f7f6e9] border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#1d322d]"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label className="block text-[12px] md:text[12px] md:font-bold inter-placeholder font-semibold text-[#1d322d] mb-2">PHONE</label>
                                        <input
                                            type="tel"
                                            placeholder="(123) 456-7890"
                                            className="w-full bg-[#f7f6e9] border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#1d322d]"
                                        />
                                    </div>
                                </div>

                                {/* location */}
                                <div>
                                    <label className="block text-[12px] md:text[12px] md:font-bold inter-placeholder font-semibold text-[#1d322d] mb-2">Location</label>
                                    <input
                                        type="location"
                                        placeholder="ex- chh.sambhajinagar"
                                        className="w-full bg-[#f7f6e9] border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#1d322d]"
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-[#165a65]  md:text[16px] md:font-medium text-[#fffef2] font-medium py-3 px-6 hover:/75  rounded-lg inter-placeholder  transition-colors"
                                >
                                    Request Free Estimate
                                </button>
                            </motion.form>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            <motion.footer
                className="bg-[#1f3630] py-16 mx-2 mt-10 md:mx-2 sm:px-6 lg:px-8 rounded-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.1 }}
            >
                <div className="flex flex-col lg:flex-row  mb-8 md:pl-25">
                    <motion.div
                        className="w-full lg:w-1/2"
                        variants={slideInLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {/* Social Cards Section */}
                        <div className="mb-10 ">
                            <motion.div
                                className="grid grid-cols-3 md:grid-cols-3 gap-3 mb-6 px-4 md:px-20 md:w-190 "
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                <SocialCard
                                    icon={<IconBrandInstagramFilled className="w-8 h-8" />}
                                    name="INSTAGRAM"
                                    href="https://facebook.com"
                                />
                                <SocialCard
                                    icon={<Facebook className="w-8 h-8 bg-white rounded-full text-black" />}
                                    name="FACEBOOK"
                                    href="https://twitter.com"
                                />
                                <SocialCard
                                    icon={<X className="w-8 h-8 bg-white text-black" />}
                                    name="TWITTER"
                                    href="https://youtube.com"
                                />
                                <SocialCard
                                    icon={<IconBrandBehance className="w-8 h-8 bg" />}
                                    name="BEHANCE"
                                    href="https://linkedin.com"
                                />
                                <SocialCard
                                    icon={<IconBrandYoutubeFilled className="w-8 h-8" />}
                                    name="YOUTUBE"
                                    href="https://youtube.com"
                                />
                                <SocialCard
                                    icon={<IconBrandLinkedinFilled className="w-8 h-8  text-white" />}
                                    name="LINKEDIN"
                                    href="https://linkedin.com"
                                />
                            </motion.div>
                        </div>

                        {/* Newsletter Section */}
                        <motion.div
                            className='px-4 md:px-20'
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <h3 className="text-sm font-semibold  mb-4 md:text[20px] md:font-medium tracking-wider inter-placeholder text-[#fdfcee]">Subscribe to the newsletter</h3>
                            <form className="flex flex-col gap-3 max-w-md">
                                <input
                                    type="email"
                                    placeholder="jane@prime.com"
                                    className="w-full px-4 py-3 rounded-md border border-white/10 bg-white/5 text-white placeholder-white/50 text-sm text-[#fdfcee] rounded-md"
                                />
                                <button
                                    type="submit"
                                    className="w-full px-6 py-3 bg-[#165a65] md:text[24px] md:font-medium inter-placeholder rounded-md text-[#fdfcee] font-medium hover:bg-gray-200 text-sm uppercase rounded-md"
                                >
                                    Submit
                                </button>
                            </form>
                        </motion.div>
                    </motion.div>

                    {/* Right Column (50% width) */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        variants={slideInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="flex flex-col md:flex-row  items-center ">
                            {/* Menu Column */}
                            <motion.div
                                className="w-full md:w-1/2 relative md:bottom-21"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <h3 className="text-lg font-medium md:text[18px] md:font-medium uppercase px-4 mb-4 py-8 md:text-center pb-2 text-[#009f93] inter-placeholder ">Menu</h3>
                                <div className="flex flex-col gap-3 text-sm px-4 md:items-center ">
                                    {['Home', 'About', 'Projects', 'Gallery', 'Videos', 'Blog', 'Review', 'Contact'].map((item, index) => (
                                        <motion.a
                                            key={item}
                                            href={`/${item.toLowerCase()}`}
                                            className={`flex w-1/8 text-start md:text[16px] md:font-medium md:w-1/6 hover:opacity-80 transition-opacity text-[16px] font-medium inter-placeholder hover:text-[#009f93]  animate-underline duration-900 ease-in-out text-[#fdfcee] text-start ${index === 0 ? 'text-[#fdfcee] ' : ''}`}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 + (index * 0.05) }}
                                            viewport={{ once: true, amount: 0.3 }}
                                        >
                                            {item}
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Services Column */}
                            <motion.div
                                className="w-full md:w-1/2"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <h3 className="text-lg font-medium uppercase mb-4 md:text[18px] md:font-medium tracking-wider mt-8 md:mt-0  px-4  pb-2 text-[#009f93]">Services</h3>
                                <div className="flex flex-col gap-3 text-sm">
                                    {[
                                        'Residential Interior Design',
                                        'Commercial Interior Design',
                                        'Space Planning',
                                        'Design Consultation',
                                        'Lighting Design',
                                        'Custom Furniture Design',
                                        'Art and Accessory Procurement',
                                        'Color Consultation',
                                        'Outdoor and Landscape Design',
                                        'Renovation and Remodeling',
                                        'Project Management',
                                        'Styling and Staging'
                                    ].map((service, index) => (
                                        <motion.a
                                            key={service}
                                            href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                                            className="hover:opacity-80 text-[#fdfcee] md:text[16px] md:font-medium transition-opacity text-[16px] px-4 font-medium inter hover:text-[#009f93]  animate-underline duration-900 ease-in-out"
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 + (index * 0.03) }}
                                            viewport={{ once: true, amount: 0.3 }}
                                        >
                                            {service}
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Company Name */}
                <motion.div
                    className="w-full flex justify-center items-center text-center font-inter px-4"
                    variants={scaleIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="inter-placeholder font-black text-[#009f93] leading-[0.8] tracking-tight mb-8 relative">
                       <div className="text-[clamp(130px,30vw,400px)] md:text-[clamp(200px,40vw,500px)] relative z-10 tracking-[-0.05em]">Prime</div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            {/* <div className="text-[clamp(210px,41vw,710px)] text-[#009f93]/10 blur-[2px]">Prime</div> */}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="text-white px-6 font-sans"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {/* Top Border Line */}
                    <div className="h-[1px] bg-white/10 w-full" />

                    {/* Footer Content */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 py-6 px-4 sm:px-6 md:px-8">

                        {/* Links Section */}
                        <div className="w-full md:w-auto flex justify-center md:justify-start px-16">
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-center md:text-left">
                                <a href="/privacy" className="text-sm sm:text-md md:text[1rem] md:font-medium text-[#fdfcee] hover:underline inter-placeholder">Privacy Policy</a>
                                <a href="/terms" className="text-sm sm:text-md hover:underline md:text[1rem] md:font-medium text-[#fdfcee] inter-placeholder">Terms</a>
                            </div>
                        </div>

                        {/* Copyright Section */}
                        <div className="w-full md:w-auto flex flex-col sm:flex-row justify-center md:justify-end items-center gap-2 sm:gap-6 text-sm sm:text-md inter-placeholder text-center md:text-right">
                            <span>© Designed And Developed By Buzzlink Studios</span>
                        </div>
                    </div>
                </motion.div>
            </motion.footer>
        </div>
    )
}

// Social Card Component
const SocialCard = ({ icon, name, href }) => {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center md:w-[195px] md:h-[98px] justify-center bg-white/5 rounded-lg md:p-4 hover:bg-white/10 py-4 md:py-18 md:px-18 hover:ring-1 ring-white/10 transition-colors hover:scale-105 "
            variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.4, ease: "easeOut" },
                },
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
        >
            <div className="mb-2 text-white md:h[34px] md:w-[34px] md:m-4">
                {icon}
            </div>
            <span className="text-sm uppercase md:text[12px] md:font-normal tracking-wider inter-placeholder  text-[#eeeee1]">{name}</span>
        </motion.a>
    );
};

export default Footer