import React from 'react';
import { motion } from 'framer-motion';

const BlogListing = () => {
    const blogPosts = [
        {
            id: 1,
            date: "JUN 6, 2024",
            title: "5 Creative Tips for Adding Personality to Your Space",
            image: "https://images.pexels.com/photos/4099238/pexels-photo-4099238.jpeg?auto=compress&cs=tinysrgb&w=800",
            imageAlt: "Modern living room with yellow chair"
        },
        {
            id: 2,
            date: "JUN 1, 2024",
            title: "7 Essential Tips for a Successful Interior Design Project",
            image: "https://images.pexels.com/photos/4099238/pexels-photo-4099238.jpeg?auto=compress&cs=tinysrgb&w=800",
            imageAlt: "Elegant dining room setup"
        },
        {
            id: 3,
            date: "JUN 1, 2024",
            title: "The Art of Historical Renovations - Breathing New Life into Old Structures",
            image: "https://images.pexels.com/photos/4099238/pexels-photo-4099238.jpeg?auto=compress&cs=tinysrgb&w=800",
            imageAlt: "Circular staircase architecture"
        },
        {
            id: 4,
            date: "MAY 30, 2024",
            title: "The Secrets to Creating a Serene Home Office",
            image: "https://images.pexels.com/photos/4099238/pexels-photo-4099238.jpeg?auto=compress&cs=tinysrgb&w=800",
            imageAlt: "Green home office setup"
        },
        {
            id: 5,
            date: "APR 30, 2024",
            title: "The Future of Interior Design - Trends to Watch in 2024",
            image: "https://images.pexels.com/photos/4099238/pexels-photo-4099238.jpeg?auto=compress&cs=tinysrgb&w=800",
            imageAlt: "Modern dark interior"
        },
        {
            id: 6,
            date: "MAR 1, 2024",
            title: "10 Tips for Designing a Cozy Living Room",
            image: "https://images.pexels.com/photos/4099238/pexels-photo-4099238.jpeg?auto=compress&cs=tinysrgb&w=800",
            imageAlt: "Cozy living room with gallery wall"
        },
        {
            id: 7,
            date: "FEB 7, 2024",
            title: "Breaking News - Interim Wins Prestigious Design Awards at IDA 2024",
            image: "https://images.pexels.com/photos/4099238/pexels-photo-4099238.jpeg?auto=compress&cs=tinysrgb&w=800",
            imageAlt: "Award ceremony setup"
        },
        {
            id: 8,
            date: "JAN 12, 2024",
            title: "The Rise of Minimalist Design - Embracing Simplicity and Functionality",
            image: "https://images.pexels.com/photos/4099238/pexels-photo-4099238.jpeg?auto=compress&cs=tinysrgb&w=800",
            imageAlt: "Minimalist workspace"
        },
        {
            id: 9,
            date: "DEC 6, 2023",
            title: "Exciting News and Updates from Interim",
            image: "https://images.pexels.com/photos/4099238/pexels-photo-4099238.jpeg?auto=compress&cs=tinysrgb&w=800",
            imageAlt: "Interior design showcase"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        hover: {
            y: -5,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="max-w-8xl mx-auto px-2 md:px-8 py-8  ">
            {/* Header Section */}
            <div className="flex flex-col relative  md:left-10">
                <div className="flex items-center  justify-center relative right-2 md:right-0 md:left-2 lg:justify-start">
                    <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-[#1d322d]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                    >
                        <circle cx="12" cy="12" r="6" strokeWidth="2" />
                        <circle cx="12" cy="12" r="3.2" fill="currentColor" />
                    </svg>
                    <span className="text-xs md:font-semibold text-[#1d322d] tracking-wider inter-placeholder font-bold">
                        ALL BLOGS
                    </span>
                </div>
                <h2
                    className="text-4xl font-[600] md:font-[900] md:text-[48px] flex mx-auto md:w-full md:mx-auto md:font-[700] mb-6 sm:mb-8 inter-placeholder tracking-tighter leading-[1] text-[#1d322d]"
                >
                    At a glance
                </h2>
            </div>

           
            {/* Blog Grid */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {blogPosts.map((post) => (
                    <motion.article
                        key={post.id}
                        className="group cursor-pointer"
                        variants={cardVariants}
                        whileHover="hover"
                    >
                        <div className="flex gap-4">
                            {/* Image */}
                            <motion.div
                                className="flex-shrink-0 w-26 h-28 md:w-22 md:h-24 bg-gray-200 rounded-lg overflow-hidden"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div
                                    className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400"
                                    style={{
                                        backgroundImage: `url(${post.image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}
                                ></div>
                            </motion.div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <motion.time
                                    className="text-xs text-[#1d322d]/75 font-[500] uppercase tracking-tighter inter-placeholder"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    {post.date}
                                </motion.time>

                                <motion.h2
                                    className="text-base md:text-sm  font-semibold text-[#1d322d] inter-placeholder mt-2 leading-tight group-hover:text-gray-700 transition-colors duration-200"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    {post.title}
                                </motion.h2>
                            </div>
                        </div>
                    </motion.article>
                ))}
            </motion.div>

           
        </div>
    );
};

export default BlogListing;