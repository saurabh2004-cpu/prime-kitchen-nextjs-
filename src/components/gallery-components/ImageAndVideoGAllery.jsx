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
        duration: "2:45"
    },
    {
        id: "7",
        title: "Bathroom Renovation",
        image: "/luxury-bathroom-renovation-showcase.png",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/Ha6ThTzE6vA",
        duration: "3:20"
    },
    {
        id: "8",
        title: "Kitchen Design Tour",
        image: "/apartment-kitchen-2.png",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/Ha6ThTzE6vA",
        duration: "2:45"
    },
    {
        id: "9",
        title: "Bathroom Renovation",
        image: "/luxury-bathroom-renovation-showcase.png",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/Ha6ThTzE6vA",
        duration: "3:20"
    },
]

export default function TabbedGallery() {
    const [activeTab, setActiveTab] = useState("photos")
    const [playingVideo, setPlayingVideo] = useState(null)

    const filteredItems = mediaItems.filter((item) =>
        activeTab === "photos" ? item.type === "photo" : item.type === "video",
    )

    const playVideo = (videoId) => {
        setPlayingVideo(videoId)
    }

    const stopVideo = () => {
        setPlayingVideo(null)
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

            <div className="w-full max-w-8xl mx-auto px-4 md:px-22 py-8">
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
                    className={`grid gap-4 ${activeTab === "photos"
                        ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                        : "grid-cols-1 sm:grid-cols-2 max-w-8xl mx-auto"
                        }`}
                >
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item) => (
                            <motion.div
                                key={item.id}
                                variants={itemVariants}
                                layout
                                className="group cursor-pointer"
                            >
                                {activeTab === "photos" ? (
                                    // Photo card layout (existing)
                                    <>
                                        <div className="relative h-[300px] sm:h-[350px] md:h-[380px] w-full overflow-hidden rounded-lg bg-gray-100">
                                            <Image
                                                src={item.image || "/placeholder.svg"}
                                                alt={item.title}
                                                fill
                                                className="object-cover transition-transform duration-300 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>
                                        <h3 className="mt-3 text-lg font-[500] inter-placeholder text-[#1d322d] group-hover:text-teal-600 transition-colors">
                                            {item.title}
                                        </h3>
                                    </>
                                ) : (
                                    // Video card layout with inline video player
                                    <div className="relative aspect-video bg-gray-100 overflow-hidden rounded-lg">
                                        {playingVideo === item.id ? (
                                            // Show video iframe when playing
                                            <div className="relative w-full h-full">
                                                <iframe
                                                    src={`${item.videoUrl}?autoplay=1&rel=0&modestbranding=1`}
                                                    className="w-full h-full"
                                                    allowFullScreen
                                                    title={item.title}
                                                    allow="autoplay; encrypted-media"
                                                />
                                                {/* Close button */}
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation()
                                                        stopVideo()
                                                    }}
                                                    className="absolute top-2 right-2 bg-black/70 text-white rounded-full p-1.5 hover:bg-black/90 transition-colors z-10"
                                                >
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </button>
                                            </div>
                                        ) : (
                                            // Show thumbnail with play button when not playing
                                            <>
                                                <Image
                                                    src={item.image || "/placeholder.svg"}
                                                    alt={item.title}
                                                    fill
                                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                                />
                                                
                                                {/* Dark overlay */}
                                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300" />
                                                
                                                {/* YouTube-style play button */}
                                                <div 
                                                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                                                    onClick={() => playVideo(item.id)}
                                                >
                                                    <motion.div 
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        className="w-16 h-16 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:bg-red-600 transition-all duration-300"
                                                    >
                                                        <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                                                    </motion.div>
                                                </div>

                                                {/* YouTube branding in top right */}
                                                <div className="absolute top-3 right-3">
                                                    <div className="bg-black/70 px-2 py-1 rounded text-white text-xs font-bold">
                                                        YouTube
                                                    </div>
                                                </div>

                                                {/* Duration in bottom right */}
                                                {item.duration && (
                                                    <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
                                                        {item.duration}
                                                    </div>
                                                )}
                                            </>
                                        )}
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </>
    )
}