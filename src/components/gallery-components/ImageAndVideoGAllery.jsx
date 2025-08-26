"use client"

import { useState } from "react"
import Image from "next/image"
import { Play, VideoIcon } from "lucide-react"
import { IconVideo } from "@tabler/icons-react"
import HeaderTitle from "../common/HeaderTitle"
import { motion, AnimatePresence } from "framer-motion"

const mediaItems = [
    {
        id: "1",
        title: "Serene Bedrooms",
        image: "/images/gallery-1.png",
        type: "photo",
    },
    {
        id: "2",
        title: "Bathroom Bliss",
        image: "/images/gallery-2.png",
        type: "photo",
    },
    {
        id: "3",
        title: "Living Room Stories",
        image: "/images/gallery-3.png",
        type: "photo",
    },
    {
        id: "4",
        title: "Serene Bedrooms",
        image: "/images/gallery-4.png",
        type: "photo",
    },
    {
        id: "5",
        title: "Luxury Kitchens",
        image: "/images/gallery-5.png",
        type: "photo",
    },
    {
        id: "6",
        title: "Kitchen Design Tour",
        image: "/apartment-kitchen-2.png",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/Ha6ThTzE6vA",
    },
    {
        id: "7",
        title: "Bathroom Renovation",
        image: "/luxury-bathroom-renovation-showcase.png",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/Ha6ThTzE6vA",
    },
]

export default function TabbedGallery() {
    const [activeTab, setActiveTab] = useState("photos")
    const [selectedVideo, setSelectedVideo] = useState(null)

    const filteredItems = mediaItems.filter((item) =>
        activeTab === "photos" ? item.type === "photo" : item.type === "video",
    )

    const openVideo = (videoUrl) => {
        setSelectedVideo(videoUrl)
    }

    const closeVideo = () => {
        setSelectedVideo(null)
    }

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    }

    const tabVariants = {
        inactive: { 
            scale: 1,
            backgroundColor: "#f3f4f6",
            color: "#4b5563"
        },
        active: { 
            scale: 1.05,
            backgroundColor: "#0d9488",
            color: "#ffffff",
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        },
        hover: {
            scale: 1.03,
            backgroundColor: "#e5e7eb",
            transition: {
                duration: 0.2
            }
        }
    }

    return (
        <>
            {activeTab === "photos" && <HeaderTitle title={'Portfolio - Showcase -Inspiration - About us -'} />}
            {activeTab === "videos" && <HeaderTitle title={' Videos - Stories -'} />}

            <div className="w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Tab Navigation */}
                <div className="flex gap-2 mb-8 mx-auto w-full justify-center">
                    <motion.button
                        onClick={() => setActiveTab("photos")}
                        variants={tabVariants}
                        initial="inactive"
                        animate={activeTab === "photos" ? "active" : "inactive"}
                        whileHover="hover"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg text-[16px] sm:text-[18px] inter-placeholder font-medium transition-colors"
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Photos
                    </motion.button>
                    <motion.button
                        onClick={() => setActiveTab("videos")}
                        variants={tabVariants}
                        initial="inactive"
                        animate={activeTab === "videos" ? "active" : "inactive"}
                        whileHover="hover"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg text-[16px] sm:text-[18px] inter-placeholder font-medium transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z" />
                            <path d="M3 6m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
                        </svg>
                        Videos
                    </motion.button>
                </div>

                {/* Gallery Grid */}
                <motion.div
                    key={activeTab}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className={`grid gap-4 sm:gap-6 ${activeTab === "photos"
                        ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                        : "grid-cols-1 md:grid-cols-2"
                        }`}
                >
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item) => (
                            <motion.div
                                key={item.id}
                                variants={itemVariants}
                                layout
                                className="group cursor-pointer mx-auto w-full"
                            >
                                <div className="relative h-[300px] sm:h-[350px] md:h-[421px] w-full overflow-hidden rounded-lg bg-gray-100">
                                    <Image
                                        src={item.image || "/placeholder.svg"}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    />

                                    {/* Hover overlay for photos */}
                                    {item.type === "photo" && (
                                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    )}

                                    {/* Play button for videos */}
                                    {item.type === "video" && (
                                        <div 
                                            className="absolute inset-0 flex items-center justify-center cursor-pointer"
                                            onClick={() => openVideo(item.videoUrl)}
                                        >
                                            <div className="w-16 h-16 bg-black/70 rounded-full flex items-center justify-center group-hover:bg-black/80 transition-colors">
                                                <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Title */}
                                <h3 className="mt-3 text-sm font-medium text-gray-900 group-hover:text-teal-600 transition-colors">
                                    {item.title}
                                </h3>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

               
            </div>
        </>
    )
}