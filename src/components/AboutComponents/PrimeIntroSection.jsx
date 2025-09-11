import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, PlayCircle, PlayCircleIcon, Lightbulb, Leaf, Gem, TrendingUp, Users, Shield, Heart, Search, RotateCcw, PaintRoller, PaintBucket, Rocket, RocketIcon, Handshake, User2, User2Icon, UserCog, UserIcon, LockIcon as UserLockIcon, Trophy, RotateCwIcon as RotateCwSquareIcon } from "lucide-react";
import { useState } from "react";

const PrimeIntroStyled = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 40,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    }

    //grids
    const fadeUp = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
        }),
    }

    //bottom 
    const [activeTab, setActiveTab] = useState('Mission');

    const missionText = "To create unique, functional, and sustainable living spaces that enhance the quality of life for our clients. We aim to blend creativity with practicality, delivering designs that are both aesthetically pleasing and deeply personal.";

    const visionText = "To be the leading architectural firm that transforms communities through innovative design, sustainable practices, and meaningful spaces that inspire and connect people across the globe.";

    const values = [
        {
            icon: PaintRoller,
            title: "Creativity",
            color: "text-[#f3ac85]"
        },
        {
            icon: Leaf,
            title: "Sustainability",
            color: "text-[#f3ac85]"
        },
        {
            icon: Trophy,
            title: "Quality",
            color: "text-[#f3ac85]"
        },
        {
            icon: Rocket,
            title: "Innovation",
            color: "text-[#f3ac85]"
        },
        {
            icon: UserIcon,
            title: "Client-Centric",
            color: "text-[#f3ac85]"
        },
        {
            icon: Shield,
            title: "Integrity",
            color: "text-[#f3ac85]"
        },
        {
            icon: Handshake,
            title: "Collaboration",
            color: "text-[#f3ac85]"
        },
        {
            icon: Search,
            title: "Attention to Detail",
            color: "text-[#f3ac85]"
        },
        {
            icon: RotateCwSquareIcon,
            title: "Flexibility",
            color: "text-[#f3ac85]"
        }
    ];

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 40
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="w-full  md:px-8 py-8 md:pt-24 bg-[#1f3630] min-h-screen rounded-t-2xl md:rounded-t-2xl">
            <motion.div
                className="flex items-center justify-start md:justify-start space-x-1 mb-3 sm:ml-4 md:ml-0"
                variants={fadeInUp}
            >
                <svg className="w-5 h-5 text-[#f3ac85]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="6" strokeWidth="2" />
                    <circle cx="12" cy="12" r="3.2" fill="currentColor" />
                </svg>
                <span className="text-xs  font-medium text-[#f3ac85] tracking-tight uppercase">ABOUT US</span>
            </motion.div>
            <div className="border-b border-gray-200 max-w-8xl mx-auto"></div>

            <div ref={ref} className="w-full px-4 md:px-8 py-4 md:py-10">
                <div className="max-w-8xl mx-auto">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className="space-y-8 md:space-y-12"
                    >
                        <motion.div variants={itemVariants} className="space-y-6">
                            <p className="text-3xl md:font-medium leading-tight text-[#fdfcee] inter-placeholder md:pr-8">
                                Welcome to Prime a preme interior design studio where innovation meets elegance. Established in 2010 by visionary designer Real Mehedi, Prime has grown from a humble home office to an internationally recognized name in the world of interior design. Our mission is to create unique, functional, and sustainable living spaces that enhance the quality of life for our clients.
                            </p>

                            <div className="w-full flex justify-start md:justify-end">
                                <p className="text-[18px] leading-relaxed text-[#fdfcee] inter-placeholder  md:max-w-[600px]">
                                    We believe that every space has a story to tell. Our team of passionate designers, architects, and project managers work collaboratively to transform your vision into reality. With a focus on creating sustainability, and client satisfaction, we have successfully completed numerous residential and commercial projects, earning accolades and industry awards along the way.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Grid section */}
            <section className="py-8 md:pt-16  md:px-6">
                <div className="max-w-8xl mx-auto">
                    {/* Mobile Layout */}
                    <div className="block md:hidden space-y-4">
                        {/* Left Large Card - Mobile */}
                        <motion.div
                            custom={0}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeUp}
                            className="bg-white/10 rounded-xl  h-96 md:h-full overflow-hidden relative flex flex-col justify-end h-80"
                        >
                            <img
                                src="/images/aboutus-2.png"
                                alt="Interior"
                                className="absolute inset-0 w-full h-96 md:h-full object-cover"
                            />
                            <div className="relative bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                                <p className="text-sm mb-4 inter-placeholder">
                                    "In design, we find the delicate balance between function and beauty, where every space
                                    whispers the stories of those who dwell within. At Prime, our passion lies in crafting these
                                    narratives with elegance and purpose."
                                </p>
                                <div className="flex items-center gap-3">
                                    <img
                                        src="https://randomuser.me/api/portraits/men/32.jpg"
                                        alt="Founder"
                                        className="md:w-10 md:h-10 h-15 w-15 rounded-md object-cover"
                                    />
                                    <div>
                                        <p className="inter-placeholder text-lg font-medium">Real Mehedi</p>
                                        <p className="text-md opacity-75 inter-placeholder">Founder, Prime Kitchen Studio</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Prime Box - Mobile */}
                        <motion.div
                            custom={1}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeUp}
                            className="bg-[#2c5f4f] h-44 rounded-2xl flex items-center justify-center text-[#fffef2]  text-8xl font-extrabold inter-placeholder"
                        >
                            Prime
                        </motion.div>

                        {/* Video Box - Mobile */}
                        <motion.div
                            custom={2}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeUp}
                            className="relative rounded-2xl h-99 md:h-full overflow-hidden h-48"
                        >
                            <img
                                src="/images/abouus-1.png"
                                alt="Studio"
                                className="w-full h-99 md:h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 flex flex-col items-center gap-4 justify-center text-white">
                                <div className="w-14 h-14 rounded-full bg-white/80 flex items-center justify-center text-black text-lg font-bold">
                                    <PlayCircleIcon />
                                </div>
                                <p className="mt-2 text-md text-center inter-placeholder font-medium ">Learn more<br />About Prime Design Studio</p>
                            </div>
                        </motion.div>

                        {/* Stats Row - Mobile */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Clients */}
                            <motion.div
                                custom={3}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={fadeUp}
                                className="bg-[#f7f6e9] h-44 rounded-2xl p-4 flex flex-col justify-center"
                            >
                                <p className="text-7xl font-bold text-[#1d322d] text-start inter-placeholder">150+</p>
                                <p className="text-lg font-medium text-[#1d322d] text-start inter-placeholder">Happy Clients</p>
                            </motion.div>

                            {/* Projects */}
                            <motion.div
                                custom={4}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={fadeUp}
                                className="bg-[#fffef2] h-44 rounded-2xl p-4 flex flex-col justify-center"
                            >
                                <p className="text-7xl font-bold text-[#1d322d] text-start inter-placeholder">200+</p>
                                <p className="text-lg font-medium text-[#1d322d] text-start inter-placeholder mt-4">Projects</p>
                                <p className="text-[#1d322d] text-[13px] mb-4 flex items-end h-full inter-placeholder">Over 200 successful projects completed</p>

                            </motion.div>
                        </div>

                        {/* Team */}
                        <motion.div
                            custom={5}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeUp}
                            className="bg-[#2c5f4f] h-44 rounded-2xl flex flex-col items-center justify-center p-6 "
                        >
                            <div className="flex -space-x-6">
                                {Array.from({ length: 6 }).map((_, i) => (
                                    <img
                                        key={i}
                                        src={`https://randomuser.me/api/portraits/men/${30 + i}.jpg`}
                                        alt="Team member"
                                        className="w-16 h-16 rounded-full border-2 border-white object-cover"
                                    />
                                ))}
                            </div>
                            <p className="mt-2 text-white text-lg text-[#1d322d]/75 text-center inter-placeholder">18 Creative Masterminds</p>
                        </motion.div>

                        {/* Awards */}
                        <motion.div
                            custom={6}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeUp}
                            className="bg-[#2c5f4f] h-44 rounded-2xl p-4 text-white flex flex-col justify-center"
                        >
                            <p className="text-7xl  font-bold inter-placeholder text-[#fffef2] text-start border-b">8+</p>
                            <p className="text-lg font-bold text-[#fffef2] text-start inter-placeholder mt-6"style={{ fontWeight: 900 }}>Prestigious Awards</p>
                            <p className="mt-2 text-[#fffef2]/85 text-[14px] mb-4 flex items-end h-1/5 inter-placeholder relative">
                                Over 8 Awards won showcasing our extensive experience and portfolio.
                            </p>
                        </motion.div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden md:h-full md:grid grid-cols-4 gap-4 ">
                        {/* Left Large Card */}
                        <motion.div
                            custom={0}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeUp}
                            className="col-span-2 bg-white/10 rounded-2xl h-3/4 overflow-hidden relative flex flex-col justify-end"
                        >
                            <img
                                src="/images/aboutus-2.png"
                                alt="Interior"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="relative bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                                <p className="text-lg mb-4 inter-placeholder">
                                    "In design, we find the delicate balance between function and beauty, where every space
                                    whispers the stories of those who dwell within. At Prime, our passion lies in crafting these
                                    narratives with elegance and purpose."
                                </p>
                                <div className="flex items-center gap-3">
                                    <img
                                        src="https://randomuser.me/api/portraits/men/32.jpg"
                                        alt="Founder"
                                        className="w-12 h-12 rounded-md object-cover"
                                    />
                                    <div>
                                        <p className="inter-placeholder text-sm font-semibold">Real Mehedi</p>
                                        <p className="text-sm opacity-75 inter-placeholder">Founder, Prime Design Studio</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <div className="  ">
                            {/* Prime Box */}
                            <motion.div
                                custom={1}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={fadeUp}
                                className="bg-[#2c5f4f] font-boldtracking-tighter max-h-[15rem] leading-tight inter-placeholder text-[5.5375rem] h-[17.625rem] flex items-center justify-center text-[#fffef2] rounded-2xl"
                            >
                                Prime
                            </motion.div>
                            {/* Clients */}
                            <motion.div
                                custom={5}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={fadeUp}
                                className="bg-[#f7f6e9] h-[12.8rem] mt-4 max-h-[8.9rem] md:max-h-[8.85rem] rounded-2xl p-6 flex flex-col justify-center"
                            >
                                <p className="text-[71px] font-bold text-[#1d322d] mx-auto inter-placeholder">150+</p>
                                <p className="text-base text-[#1d322d] mx-auto inter-placeholder">Happy Clients</p>
                            </motion.div>
                        </div>

                        {/* Video Box */}
                        <motion.div
                            custom={2}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeUp}
                            className="relative rounded-2xl h-3/4 overflow-hidden"
                        >
                            <img
                                src="/images/abouus-1.png"
                                alt="Studio"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
                                <div className="w-14 h-14 rounded-full bg-white/80 flex items-center justify-center text-black text-lg font-bold">
                                    <PlayCircleIcon />
                                </div>
                                <p className="mt-2 text-sm text-center inter-placeholder font-medium text-[1.2rem]">Learn more<br />About Prime Design Studio</p>
                            </div>
                        </motion.div>

                        {/* Projects */}
                        <motion.div
                            custom={3}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeUp}
                            className="bg-[#fffef2] max-h-full rounded-2xl px-6 flex flex-col justify-start relative md:bottom-34"
                        >
                            <p className="text-[71px] font-bold text-[#1d322d] mx-auto inter-placeholder relative right-12">200+</p>
                            <p className="text-[#1d322d] text-[13px] font-bold mb-4 flex items-end h-full inter-placeholder relative top-35">Projects</p>
                            <p className="text-[#1d322d] text-[13px] mb-4 flex items-end h-full inter-placeholder">Over 200 successful projects completed</p>
                        </motion.div>

                        {/* Center Long Box */}
                        <motion.div
                            custom={4}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeUp}
                            className="bg-[#2c5f4f] max-h-full w-[43.5rem] rounded-2xl flex flex-col items-center justify-center p-6 relative md:bottom-34"
                        >
                            <div className="flex -space-x-3">
                                {Array.from({ length: 6 }).map((_, i) => (
                                    <img
                                        key={i}
                                        src={`https://randomuser.me/api/portraits/men/${30 + i}.jpg`}
                                        alt="Team member"
                                        className="w-10 h-10 rounded-full border-2 border-white object-cover"
                                    />
                                ))}
                            </div>
                            <p className="mt-3 text-white inter-placeholder text-base font-medium">18 Creative Masterminds</p>
                        </motion.div>

                        {/* Awards */}
                        <motion.div
                            custom={6}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeUp}
                            className="bg-[#2c5f4f] w-[20.9rem] md:h-[16.625rem] rounded-2xl px-2 text-white flex flex-col justify-start relative left-89 relative md:bottom-34"
                        >
                            <p className="text-[71px] font-bold inter-placeholder text-[#fffef2] border-b border-[#fffef2]">8+</p>
                            <p className="mt-2 text-[#fffef2] text-[13px] mb-4 flex items-end h-1/5 inter-placeholder">
                                Prestigious Awards<br />Over 8 Awards won showcasing our extensive experience and portfolio.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <motion.section
                className="min-h-screen px-4 py-4 md:pb-16 sm:px-6 lg:px-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
            >
                <div className="max-w-9xl mx-auto">
                    {/* Mission/Vision Tabs */}
                    <motion.div
                        className="flex justify-center mb-12"
                        variants={itemVariants}
                    >
                        <div className="flex rounded-lg p-1 backdrop-blur-sm border-t border-r border-l border-[#fffef2]">
                            {['Mission', 'Vision'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-4 sm:px-6 py-2 rounded-md font-medium transition-all duration-300 text-sm sm:text-base ${activeTab === tab
                                        ? 'bg-[#fffef2] text-slate-900 shadow-lg'
                                        : 'text-slate-300 hover:text-white'
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Mission/Vision Text */}
                    <motion.div
                        className="text-center mb-20"
                        variants={itemVariants}
                    >
                        <motion.p
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="inter-placeholder text-[#cacec2] md:font-[500] font-medium text-[26px] md:text-[38px] md:max-w-9xl tracking-tighter mx-auto leading-tight"
                        >
                            {activeTab === 'Mission' ? missionText : visionText}
                        </motion.p>
                    </motion.div>

                    {/* Values Section */}
                    <motion.div
                        className="text-center mb-16 "
                        variants={itemVariants}
                    >
                        <div className="relative inline-block">
                            <div className=" relative md:top-15 left-10 md:left-60 flex items-center gap-1">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#009F93]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <circle cx="12" cy="12" r="6" strokeWidth="2" />
                                    <circle cx="12" cy="12" r="3.2" fill="currentColor" />
                                </svg>
                                <span className="text-xs md:font-semibold text-[#009F93] tracking-wider inter-placeholder font-bold">OUR HISTORY</span>
                            </div>
                            {/* Main Heading */}
                            <motion.h2
                                className="text-6xl sm:text-6xl md:text-[170px] font-black leading-[0.75] inter-placeholder md:mt-10 tracking-tighter text-[#fffef2]"
                                variants={itemVariants}
                            >
                                Values
                            </motion.h2>
                        </div>
                    </motion.div>

                    {/* Values Grid */}
                    <motion.div
                        className="grid grid-cols-1 md:pr-8 align-center items-center md:py-4 md:px-4 justify-center sm:grid-cols-2 bg-[#1d322e] w-full md:max-w-9xl h-full py-6 px-2 md:px-0 md:py-0 md:h-[252px] rounded-lg lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-x-6      md:mx-auto"
                        variants={containerVariants}
                    >
                        {values.map((value, index) => {
                            const IconComponent = value.icon;
                            return (
                                <motion.div
                                    key={value.title}
                                    variants={cardVariants}
                                    whileHover={{
                                        y: -8,
                                        transition: { duration: 0.3 },
                                    }}
                                    className="bg-[#ffffff]/5 w-full md:w-[440px] relative md:bottom-1 h-[55px] mx-auto my-auto backdrop-blur-sm border border-slate-600/50 rounded-xl p-4 sm:p-6  transition-all duration-300 group cursor-pointer hover:shadow-2xl  flex items-center justify-start"
                                >
                                    <div className="flex items-center space-x-3 md:space-x-4 justify-start">
                                        <div className="p-3 rounded-lg relative right-3 md:right-5 bg-slate-600/50 group-hover:bg-slate-600/70 transition-all duration-300 flex items-center justify-center flex-shrink-0">
                                            <IconComponent
                                                className={`w-5 h-5 sm:w-6 sm:h-6 ${value.color} group-hover:scale-110 transition-transform duration-300`}
                                            />
                                        </div>
                                        <h3 className="text-[#fffef2] text-base relative md:right-5 sm:text-lg group-hover:text-white transition-colors duration-300 inter-placeholder">
                                            {value.title}
                                        </h3>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </motion.section>
        </section>
    );
};

export default PrimeIntroStyled;