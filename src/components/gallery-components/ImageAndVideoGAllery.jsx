"use client"

import { useState } from "react"
import Image from "next/image"
import { Play, PlayIcon, VideoIcon, Youtube, X } from "lucide-react"
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
    const [fullscreenImage, setFullscreenImage] = useState(null)
    const [videoPopup, setVideoPopup] = useState(null)

    const filteredItems = mediaItems.filter((item) =>
        activeTab === "photos" ? item.type === "photo" : item.type === "video",
    )

    const playVideo = (videoId) => {
        setPlayingVideo(videoId)
    }

    const stopVideo = () => {
        setPlayingVideo(null)
    }

    const openFullscreenImage = (item) => {
        setFullscreenImage(item)
    }

    const closeFullscreenImage = () => {
        setFullscreenImage(null)
    }

    const openVideoPopup = (item) => {
        setVideoPopup(item)
    }

    const closeVideoPopup = () => {
        setVideoPopup(null)
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

    // Card hover animation variants (similar to blog cards)
    const arrowVariants = {
        initial: { opacity: 0, x: 10 },
        hover: { opacity: 1, x: 0, transition: { duration: 0.4, } }
    }

    const titleVariants = {
        initial: { x: 0 },
        hover: { x: 24, transition: { duration: 0.4, ease: "easeOut" } }
    }

    // Video card variants
    const videoCardVariants = {
        initial: { scale: 1 },
        hover: {
            scale: 1.02,
            transition: { duration: 0.3, ease: "easeOut" }
        }
    }

    const videoTitleVariants = {
        initial: { x: 0, y: 0 },
        hover: {
            x: 20,
            y: -5,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    }

    const videoArrowVariants = {
        initial: { opacity: 0, x: -15, y: 5 },
        hover: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    }

    // Modal animation variants
    const modalVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            transition: {
                duration: 0.2,
                ease: "easeIn"
            }
        }
    }

    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.2 }
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.2 }
        }
    }

    const getYouTubeVideoId = (link) => {
        try {
            const url = new URL(link);
            let videoId = "";

            if (url.hostname.includes("youtu.be")) {
                videoId = url.pathname.slice(1);
            } else if (url.searchParams.get("v")) {
                videoId = url.searchParams.get("v");
            } else if (url.pathname.includes("/embed/")) {
                videoId = url.pathname.split("/embed/")[1];
            }

            return videoId || null;
        } catch {
            return null;
        }
    };

    const getYouTubeThumbnail = (link) => {
        const videoId = getYouTubeVideoId(link);
        return videoId
            ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
            : null;
    };

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
                                initial="initial"
                                whileHover="hover"
                                onClick={() => {
                                    if (activeTab === "photos") {
                                        openFullscreenImage(item)
                                    } else {
                                        openVideoPopup(item)
                                    }
                                }}
                            >
                                {activeTab === "photos" ? (
                                    // Photo card layout with enhanced hover effects
                                    <>
                                        <div className="relative h-[300px] sm:h-[350px] md:h-[380px] w-full overflow-hidden rounded-lg bg-gray-100">
                                            <Image
                                                src={item.image || "/placeholder.svg"}
                                                alt={item.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />

                                            {/* Optional: Add overlay content on hover */}

                                        </div>
                                        <div className="md:px-8 px-1 pb-4 relative md:mt-3">
                                            {/* Arrow */}
                                            <motion.svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24" height="24"
                                                viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor"
                                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                className="absolute top-1 left-4 w-4 h-4 -z-10 text-[#1d322d] hidden md:inline-block"
                                                variants={arrowVariants} // keep your existing variants
                                            >
                                                <path d="m15 10 5 5-5 5" />
                                                <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                                            </motion.svg>
                                            <motion.svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24" height="24"
                                                viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor"
                                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                className="absolute top-1  w-5 h-5 font-medium  text-[#1d322d] md:hidden block"
                                            >
                                                <path d="m15 10 5 5-5 5" />
                                                <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                                            </motion.svg>

                                            <motion.h2
                                                className="md:bg-[#fffef2] z-10 text-xl font-lg md:font-semibold text-[#1d322d] relative left-6 md:left-0 md:right-5 inter-placeholder md:text-[16px] md:font-[600] mb-2 transition-colors duration-200 group-hover:text-gray-700"
                                                variants={titleVariants} // keep your existing variants
                                            >
                                                {item.title}
                                            </motion.h2>
                                        </div>
                                    </>
                                ) : (
                                    // Video card layout with enhanced hover effects
                                    <motion.div
                                        className="relative aspect-video bg-gray-100 overflow-hidden rounded-lg"
                                        variants={videoCardVariants}
                                    >
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
                                            <>
                                                <div className="relative w-full h-full">
                                                    <Image
                                                        src={getYouTubeThumbnail(item.videoUrl) || "/placeholder.svg"}
                                                        alt={item.title}
                                                        fill
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                        className="object-cover transition-transform duration-500 group-hover:scale-105 rounded-lg"
                                                    />
                                                </div>

                                                {/* Dark overlay */}
                                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-all duration-500" />

                                                {/* Play button */}
                                                <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
                                                    <motion.div
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        className="w-16 h-12 bg-black/80 opacity-80 backdrop-blur-sm rounded-2xl flex items-center justify-center "
                                                    >
                                                        <PlayIcon className="w-8 h-8 text-white ml-1" fill="#fff" />
                                                    </motion.div>
                                                </div>
                                            </>
                                        )}
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Full-Screen Image Modal */}
            <AnimatePresence>
                {fullscreenImage && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
                        variants={backdropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={closeFullscreenImage}
                    >
                        {/* Close button */}
                        <button
                            onClick={closeFullscreenImage}
                            className="absolute top-4 right-4 z-60 bg-white/10 text-white rounded-full p-2 hover:bg-white/20 transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Full-screen image */}
                        <motion.div
                            className="relative max-w-[95vw] max-h-[95vh] w-full h-full"
                            variants={modalVariants}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={fullscreenImage.image}
                                alt={fullscreenImage.title}
                                fill
                                className="object-contain"
                                sizes="95vw"
                                priority
                            />
                            
                            {/* Image title */}
                            {/* <div className="absolute bottom-4 left-4 right-4">
                                <div className="bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2">
                                    <h3 className="text-white text-lg font-medium">{fullscreenImage.title}</h3>
                                </div>
                            </div> */}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Video Popup Modal */}
            <AnimatePresence>
                {videoPopup && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
                        variants={backdropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={closeVideoPopup}
                    >
                        {/* Close button */}
                        <button
                            onClick={closeVideoPopup}
                            className="absolute top-4 right-4 z-60 bg-white/10 text-white rounded-full p-2 hover:bg-white/20 transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Video popup */}
                        <motion.div
                            className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
                            variants={modalVariants}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <iframe
                                src={`${videoPopup.videoUrl}?autoplay=1&rel=0&modestbranding=1`}
                                className="w-full h-full"
                                allowFullScreen
                                title={videoPopup.title}
                                allow="autoplay; encrypted-media"
                            />
                            
                            {/* Video title */}
                            {/* <div className="absolute -bottom-12 left-0 right-0">
                                <div className="bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2">
                                    <h3 className="text-white text-lg font-medium">{videoPopup.title}</h3>
                                    {videoPopup.duration && (
                                        <p className="text-white/70 text-sm">Duration: {videoPopup.duration}</p>
                                    )}
                                </div>
                            </div> */}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}