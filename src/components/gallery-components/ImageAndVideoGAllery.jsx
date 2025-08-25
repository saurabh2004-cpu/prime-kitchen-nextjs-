"use client"

import { useState } from "react"
import Image from "next/image"
import { Play, VideoIcon } from "lucide-react"
import { IconVideo } from "@tabler/icons-react"

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
    },
    {
        id: "7",
        title: "Bathroom Renovation",
        image: "/luxury-bathroom-renovation-showcase.png",
        type: "video",
    },
]

export default function TabbedGallery() {
    const [activeTab, setActiveTab] = useState("photos")

    const filteredItems = mediaItems.filter((item) =>
        activeTab === "photos" ? item.type === "photo" : item.type === "video",
    )

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-8">
            {/* Tab Navigation */}
            <div className="flex gap-2 mb-8 mx-auto w-full justify-center align-center">
                <button
                    onClick={() => setActiveTab("photos")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg  text-[18px] inter-placeholder text-[#fffef2] font-[500] transition-colors ${activeTab === "photos" ? "bg-teal-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            fillRule="evenodd"
                            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                            clipRule="evenodd"
                        />
                    </svg>
                    Photos
                </button>
                <button
                    onClick={() => setActiveTab("videos")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg  text-[18px] inter-placeholder text-[#fffef2] font-[500] font-medium transition-colors ${activeTab === "videos" ? "bg-teal-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                >
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-video"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z" />
                        <path d="M3 6m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
                    </svg>
                    Videos
                </button>
            </div>

            {/* Gallery Grid */}
            <div
                className={`grid gap-6 ${activeTab === "photos"
                    ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                    : "grid-cols-1 md:grid-cols-2"
                    }`}
            >
                {filteredItems.map((item) => (
                    <div key={item.id} className="group cursor-pointer mx-auto w-full">
                        <div className="relative h-[421px] w-full space-x-4  overflow-hidden rounded-lg bg-gray-100 aspect-[4/3]">
                            <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.title}
                                fill
                                className="object-cover h-[421px] w-[306px] transition-transform duration-300 group-hover:scale-110"
                            />

                            {/* Hover overlay for photos */}
                            {item.type === "photo" && (
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            )}

                            {/* Play button for videos */}
                            {item.type === "video" && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 bg-black/70 rounded-full flex items-center justify-center group-hover:bg-black/80 transition-colors">
                                        <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Title */}
                        <h3 className="mt-3 text-sm font-medium text-gray-900 group-hover:text-teal-600 transition-colors">
                            {item.title}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    )
}
