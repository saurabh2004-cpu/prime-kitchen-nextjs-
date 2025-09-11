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
        <section className="w-full md:px-4 lg:px-6 xl:px-8 2xl:px-12 py-8 md:pt-24 bg-[#1f3630] min-h-screen rounded-t-2xl md:rounded-t-2xl">
            <motion.div
                className="flex items-center justify-start md:justify-start space-x-1 mb-3 sm:ml-4 md:ml-0"
                variants={fadeInUp}
            >
                <svg className="w-5 h-5 text-[#f3ac85]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="6" strokeWidth="2" />
                    <circle cx="12" cy="12" r="3.2" fill="currentColor" />
                </svg>
                <span className="text-xs font-medium text-[#f3ac85] tracking-tight uppercase">ABOUT US</span>
            </motion.div>
            <div className="border-b border-gray-200 max-w-full mx-auto"></div>

            <div ref={ref} className="min-w-[100vw] w-full px-4 md:px-4 lg:px-6  py-4 md:py-4">
                <div className="  mx-auto">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className="space-y-8 md:space-y-12"
                    >
                        <motion.div variants={itemVariants} className="space-y-6 min-w-9xl">
                            <p className="text-3xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-3xl md:font-semibold leading-tight tracking-tighter text-[#fdfcee] inter-placeholder md:pr-8 ">
                                Welcome to Prime a preme interior design studio where innovation meets elegance. Established in 2010 by visionary designer Real Mehedi, Prime has grown from a humble home office to an internationally recognized name in the world of interior design. Our mission is to create unique, functional, and sustainable living spaces that enhance the quality of life for our clients.
                            </p>

                            <div className="w-full flex justify-start md:justify-end">
                                <p className="text-[18px] md:text-lg lg:text-medium leading-relaxed text-[#fdfcee] inter-placeholder md:max-w-[600px] lg:max-w-[500px] xl:max-w-[600px] relative md:right-15">
                                    We believe that every space has a story to tell. Our team of passionate designers, architects, and project managers work collaboratively to transform your vision into reality. With a focus on creating sustainability, and client satisfaction, we have successfully completed numerous residential and commercial projects, earning accolades and industry awards along the way.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Grid section */}
            <section className="py-8 md:pt-16 md:px-4 lg:px-6 xl:px-8">
                <div className="max-w-full mx-auto">
                    {/* Mobile Layout */}
                    <div className="block md:hidden space-y-4">
                        {/* Left Large Card - Mobile */}
                        <motion.div
                            custom={0}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeUp}
                            className="bg-white/10 rounded-xl h-96 md:h-full overflow-hidden relative flex flex-col justify-end h-80"
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
                            className="bg-[#2c5f4f] h-44 rounded-2xl flex items-center justify-center text-[#fffef2] text-8xl font-extrabold inter-placeholder"
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
                            <p className="text-7xl font-bold inter-placeholder text-[#fffef2] text-start border-b">8+</p>
                            <p className="text-lg font-bold text-[#fffef2] text-start inter-placeholder mt-6" style={{ fontWeight: 900 }}>Prestigious Awards</p>
                            <p className="mt-2 text-[#fffef2]/85 text-[14px] mb-4 flex items-end h-1/5 inter-placeholder relative">
                                Over 8 Awards won showcasing our extensive experience and portfolio.
                            </p>
                        </motion.div>
                    </div>

                    {/* Desktop Layout - Now fully responsive */}
                    <div className="hidden md:block">
                        <div className="grid grid-cols-12 gap-3  auto-rows-fr md:auto-rows-auto">
                            {/* Left Large Card */}
                            <motion.div
                                custom={0}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={fadeUp}
                                className="col-span-6 row-span-2 bg-white/10 rounded-2xl overflow-hidden relative flex flex-col justify-end min-h-[400px] lg:min-h-[500px] xl:max-h-[500px]"
                            >
                                <img
                                    src="/images/aboutus-2.png"
                                    alt="Interior"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="relative bg-gradient-to-t from-black/70 to-transparent p-4 lg:p-6 text-white">
                                    <p className="text-sm lg:text-base xl:text-lg mb-4 inter-placeholder">
                                        "In design, we find the delicate balance between function and beauty, where every space
                                        whispers the stories of those who dwell within. At Prime, our passion lies in crafting these
                                        narratives with elegance and purpose."
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <img
                                            src="https://randomuser.me/api/portraits/men/32.jpg"
                                            alt="Founder"
                                            className="w-10 h-10 lg:w-12 lg:h-12 rounded-md object-cover"
                                        />
                                        <div>
                                            <p className="inter-placeholder text-sm lg:text-base font-semibold">Real Mehedi</p>
                                            <p className="text-xs lg:text-sm opacity-75 inter-placeholder">Founder, Prime Design Studio</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Prime Box */}
                            <motion.div
                                custom={1}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={fadeUp}
                                className="col-span-3 bg-[#2c5f4f] font-bold tracking-tighter flex items-center justify-center text-[#fffef2] rounded-2xl inter-placeholder text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl min-h-[180px] lg:min-h-[220px] xl:min-h-[290px]"
                            >
                                Prime
                            </motion.div>

                            {/* Video Box */}
                            <motion.div
                                custom={2}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={fadeUp}
                                className="col-span-3 row-span-2 relative rounded-2xl overflow-hidden min-h-[400px] lg:min-h-[500px] xl:max-h-[500px]"
                            >
                                <img
                                    src="/images/abouus-1.png"
                                    alt="Studio"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
                                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/80 flex items-center justify-center text-black text-lg font-bold">
                                        <PlayCircleIcon className="w-6 h-6 lg:w-8 lg:h-8" />
                                    </div>
                                    <p className="mt-2 text-sm lg:text-base xl:text-lg text-center inter-placeholder font-medium">Learn more<br />About Prime Design Studio</p>
                                </div>
                            </motion.div>

                            {/* Clients */}
                            <motion.div
                                custom={3}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={fadeUp}
                                className="col-span-3 bg-[#f7f6e9] rounded-2xl p-4 lg:p-2  flex flex-col justify-center items-center text-center min-h-[180px] lg:min-h-[110px] xl:max-h-[195px]"
                            >
                                <p className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[#1d322d] inter-placeholder">150+</p>
                                <p className="text-sm lg:text-base text-[#1d322d] inter-placeholder mt-2">Happy Clients</p>
                            </motion.div>



                            {/* Projects */}
                            <motion.div
                                custom={5}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={fadeUp}
                                className="col-span-3 bg-[#fffef2] rounded-2xl p-4 lg:p-6 flex flex-col justify-between min-h-[140px] lg:min-h-[350px]"
                            >
                                <p className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1d322d] inter-placeholder">200+</p>
                                <div>
                                    <p className="text-sm lg:text-base font-bold text-[#1d322d] inter-placeholder">Projects</p>
                                    <p className="text-xs lg:text-sm text-[#1d322d] inter-placeholder mt-1">Over 200 successful projects completed</p>
                                </div>
                            </motion.div>

                            {/* Team */}
                            <motion.div
                                custom={4}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={fadeUp}
                                className="col-span-6 bg-[#2c5f4f] rounded-2xl flex flex-col items-center justify-center p-4 lg:p-6 min-h-[140px] lg:min-h-[180px]"
                            >
                                <div className="flex -space-x-2 lg:-space-x-3">
                                    {Array.from({ length: 6 }).map((_, i) => (
                                        <img
                                            key={i}
                                            src={`https://randomuser.me/api/portraits/men/${30 + i}.jpg`}
                                            alt="Team member"
                                            className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 rounded-full border-2 border-white object-cover"
                                        />
                                    ))}
                                </div>
                                <p className="mt-3 text-white inter-placeholder text-sm lg:text-base font-medium">18 Creative Masterminds</p>
                            </motion.div>



                            {/* Awards */}
                            <motion.div
                                custom={6}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={fadeUp}
                                className="col-span-3 bg-[#2c5f4f] rounded-2xl p-4 lg:p-6 text-white flex flex-col justify-between min-h-[140px] lg:min-h-[180px]"
                            >
                                <p className="text-4xl lg:text-5xl xl:text-6xl font-bold inter-placeholder text-[#fffef2] border-b border-[#fffef2] pb-2">8+</p>
                                <div>
                                    <p className="text-sm lg:text-base font-bold text-[#fffef2] inter-placeholder">Prestigious Awards</p>
                                    <p className="text-xs lg:text-sm text-[#fffef2]/85 inter-placeholder mt-1">
                                        Over 8 Awards won showcasing our extensive experience and portfolio.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <motion.section
                className="min-h-screen px-4 py-4 md:pb-16 sm:px-6 lg:px-8 xl:px-12 2xl:px-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
            >
                <div className="max-w-full mx-auto md:mt-32">
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
                                    className={`px-4 sm:px-6 lg:px-8 py-2 lg:py-3 rounded-md font-medium transition-all duration-300 text-sm sm:text-base lg:text-lg ${activeTab === tab
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
                            className="inter-placeholder text-[#cacec2] md:font-[500] font-medium text-[26px] md:text-[32px] lg:text-[36px] min-w-[90vw] relative md:right-10  tracking-tighter mx-auto leading-tight"
                        >
                            {activeTab === 'Mission' ? missionText : visionText}
                        </motion.p>
                    </motion.div>

                    {/* Values Section */}
                    <motion.div
                        className="text-center mb-16"
                        variants={itemVariants}
                    >
                        <div className="relative inline-block">
                            <div className="relative md:top-8 lg:top-12 xl:top-22 left-10 md:left-20 lg:left-40 xl:left-60 2xl:left-80 flex items-center gap-1">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#009F93]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <circle cx="12" cy="12" r="6" strokeWidth="2" />
                                    <circle cx="12" cy="12" r="3.2" fill="currentColor" />
                                </svg>
                                <span className="text-xs lg:text-sm md:font-semibold text-[#009F93] tracking-wider inter-placeholder font-bold">OUR HISTORY</span>
                            </div>
                            {/* Main Heading */}
                            <motion.h2
                                className="text-6xl sm:text-6xl md:text-[120px] lg:text-[140px] xl:text-[170px] 2xl:text-[200px] font-black leading-[0.75] inter-placeholder md:mt-10 lg:mt-12 xl:mt-16 tracking-tighter text-[#fffef2]"
                                variants={itemVariants}
                            >
                                Values
                            </motion.h2>
                        </div>
                    </motion.div>

                    {/* Values Grid */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 align-center items-center md:py-4 lg:py-6 xl:py-6 md:px-4 lg:px-6 xl:px-4 justify-center bg-[#1d322e] w-full max-w-full h-auto py-6 px-2 md:px-0 md:py-0 lg:h-auto xl:h-auto rounded-lg gap-1 sm:gap-2 lg:gap-3 xl:gap-4 2xl:gap-4 mx-auto"
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
                                    className="bg-[#ffffff]/5 w-full max-w-[440px] lg:max-w-[380px] xl:max-w-[420px] 2xl:max-w-[480px] h-[55px] lg:h-[60px] xl:h-[65px] mx-auto my-auto backdrop-blur-sm border border-slate-600/50 rounded-xl p-4 sm:p-1 transition-all duration-300 group cursor-pointer hover:shadow-2xl flex items-center justify-start"
                                >
                                    <div className="flex items-center space-x-3 md:space-x-4 lg:space-x-5 justify-start">
                                        <div className="p-2 lg:p-3 rounded-lg bg-slate-600/50 group-hover:bg-slate-600/70 transition-all duration-300 flex items-center justify-center flex-shrink-0">
                                            <IconComponent
                                                className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 ${value.color} group-hover:scale-110 transition-transform duration-300`}
                                            />
                                        </div>
                                        <h3 className="text-[#fffef2] text-base sm:text-lg lg:text-xl group-hover:text-white transition-colors duration-300 inter-placeholder">
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