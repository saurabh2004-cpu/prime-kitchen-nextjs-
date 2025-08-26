"use client";
import React, { useEffect, useRef, useState } from "react";
import { Star, Play } from "lucide-react";

const ReviewCard = ({ review }) => {
    const getSizeClasses = () => {
        switch (review.size) {
            case "small":
                return "min-h-[350px]";
            case "medium":
                return "min-h-[460px]";
            case "large":
                return "min-h-[500px]";
            default:
                return "min-h-[280px]";
        }
    };

    const getImageHeight = () => {
        switch (review.size) {
            case "small":
                return "h-38";
            case "medium":
                return "h-46";
            case "large":
                return "h-54";
            default:
                return "h-56";
        }
    };



    return (
        <div
            className={`rounded-2xl max-h-screen shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden bg-[#f7f6e9] mb-4 ${getSizeClasses()}`}
        >

            <div className="flex align-center items-center justify-between p-4">
                {/* Stars */}
                <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className={`w-4 h-4 ${i < review.stars ? "text-[#f3ac85] fill-current" : "text-gray-300"
                                }`}
                        />
                    ))}
                </div>
                {/* Source */}
                <div className="mt-auto">
                    <span className="text-[12px]  font-medium inter-placeholder uppercase tracking-wide text-[#1d322d] tracking-tighter font-semibold">
                        {review.source}
                    </span>
                </div>

            </div>

            {/* Image or Video */}
            {review.type === "image" && (
                <div className={`${getImageHeight()} overflow-hidden`}>
                    <img
                        src={review.image}
                        alt={review.reviewer}
                        className="w-full h-full object-cover"
                    />
                </div>
            )}

            {review.type === "video" && (
                <div
                    className={`relative ${getImageHeight()} bg-gray-200 overflow-hidden`}
                >
                    <img
                        src={review.videoThumbnail}
                        alt="Video thumbnail"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
                            <Play className="w-5 h-5 text-gray-700 ml-1" />
                        </div>
                    </div>
                </div>
            )}

            {/* Content */}
            <div className="p-4 flex flex-col h-full">
                {/* Reviewer Info */}
                <div className="mb-3">
                    <p className="font-[700] i inter-placeholder text-[#1d322d] text-[20px] text-base">
                        {review.reviewer}
                    </p>
                    <p className="text-[12px] font-medium inter-placeholder text-[#1d322d]">{review.location}</p>
                </div>


                {/* Review Text */}
                <p
                    className={`ext-[16px] font-medium inter-placeholder text-[#1d322d] ${review.size === "small"
                        ? "text-sm"
                        : review.size === "large"
                            ? "text-base"
                            : "text-sm"
                        }`}
                >
                    {review.text}
                </p>


            </div>
        </div>
    );
};

export default function MasonryReviews() {
    const scrollRef = useRef(null);
    const [scrollY, setScrollY] = useState(0);

    const reviews = [
        {
            id: 1,
            type: "text",
            reviewer: "Christopher Anderson",
            location: "Portland, Oregon",
            source: "Google Review",
            stars: 5,
            text: "Prime turned our dream home into a reality. Their designs are both practical and beautiful, making our space more functional and stylish. The team was professional, communicative, and delivered exceptional results from the initial consultation to the final walk-through. We are thrilled with our new home!",
            size: "large"
        },
        {
            id: 2,
            type: "image",
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
            reviewer: "Michael Nguyen",
            location: "Denver, Colorado",
            source: "Google Review",
            stars: 5,
            text: "I couldn't be happier with this! Prime exceeded all my expectations with their renovation design and execution. They paid attention to every detail and the final result speaks for itself. We love it so. The quality of their work is outstanding, and we definitely recommend their services!",
            size: "medium"
        },
        {
            id: 3,
            type: "text",
            reviewer: "Ephraim Tillinghast",
            location: "New Orleans, LA",
            source: "Google Review",
            stars: 5,
            text: "Prime transformed my historic home into a masterpiece. Their attention to detail and respect for the original architecture were truly impressive. The final result exceeded all expectations and they delivered with excellent customer service communication. I highly recommend them for any project, large or small!",
            size: "small"
        },
        {
            id: 4,
            type: "text",
            reviewer: "David Rodriguez",
            location: "Seattle, Washington",
            source: "Facebook Review",
            stars: 5,
            text: "Prime brought a fresh perspective to our commercial space. Their innovative designs have left a lasting impression on our clients. The transformation exceeded our expectations and created a welcoming environment. We couldn't be happier with the outstanding professional service!",
            size: "medium"
        },
        {
            id: 5,
            type: "video",
            videoThumbnail: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=250&fit=crop",
            reviewer: "S. Thompson",
            location: "Los Angeles, California",
            source: "Video Review",
            stars: 5,
            text: "Prime took our vision and made it a reality. They were attentive to our needs and preferences, and their designs exceeded expectations. The attention to detail was remarkable, and we couldn't be happier with the transformation.",
            size: "large"
        },
        {
            id: 6,
            type: "image",
            image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=400&h=280&fit=crop",
            reviewer: "Lysander Grey",
            location: "Portland, OR",
            source: "Google Review",
            stars: 5,
            text: "The creativity and innovation Prime brought to our office redesign have significantly improved our work environment. Their forward-thinking approach resulted in a space that boosts employee functionality and client relationships. We couldn't be happier with the results!",
            size: "medium"
        },
        {
            id: 7,
            type: "text",
            reviewer: "William Thompson",
            location: "Atlanta, Georgia",
            source: "Facebook Review",
            stars: 5,
            text: "The transformation of our restaurant by Prime was nothing short of amazing. Our customers constantly compliment the design, creating a space that is both functional and beautiful. Our customers love the new look, and we've seen an increase in repeat visits. Exceptional work!",
            size: "large"
        },
        {
            id: 8,
            type: "image",
            image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=320&fit=crop",
            reviewer: "Ryan Martinez",
            location: "Austin, Texas",
            source: "Google Review",
            stars: 5,
            text: "From start to finish, friendly professional service and beautiful designs. My home has never looked better. They transformed my space beyond my wildest dreams. I would definitely recommend their services. Their team is knowledgeable, friendly, and incredibly talented.",
            size: "small"
        },
        {
            id: 9,
            type: "text",
            reviewer: "S. Thompson",
            location: "Los Angeles, California",
            source: "Google Review",
            stars: 5,
            text: "We worked with Prime on our office space, and we couldn't be more pleased. Their innovative ideas and attention to detail resulted in a workspace that's both stylish and highly functional. The entire team was responsive, professional, and delivered beyond our expectations. Highly recommend!",
            size: "medium"
        },
        {
            id: 10,
            type: "text",
            reviewer: "Darius Hawke",
            location: "Chicago, Illinois",
            source: "Google Review",
            stars: 5,
            text: "Prime's team took my vague ideas and turned them into a stunning reality. They listened carefully to my preferences and created a space that perfectly reflects my style. I highly recommend their expertise to quality and craftsmanship is evident in every detail. I couldn't be happier with the results.",
            size: "large"
        },
        // Additional reviews for more content
        {
            id: 11,
            type: "image",
            image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&h=300&fit=crop",
            reviewer: "Isabella Rodriguez",
            location: "Miami, Florida",
            source: "Google Review",
            stars: 5,
            text: "Outstanding work! Prime transformed our beachfront condo into a modern paradise. The use of natural light and space optimization exceeded our expectations. Highly professional team!",
            size: "small"
        },
        {
            id: 12,
            type: "text",
            reviewer: "Marcus Williams",
            location: "Nashville, Tennessee",
            source: "Yelp Review",
            stars: 5,
            text: "Prime's attention to detail is unmatched. They redesigned our music studio with perfect acoustics and aesthetic appeal. The project was completed on time and within budget. Their team understood our vision perfectly and brought it to life in ways we never imagined possible.",
            size: "large"
        },
        {
            id: 13,
            type: "video",
            videoThumbnail: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=250&fit=crop",
            reviewer: "Jennifer Chen",
            location: "San Francisco, California",
            source: "Video Review",
            stars: 5,
            text: "Prime redesigned our tech startup office. The modern, collaborative spaces have boosted our team's productivity and creativity. Amazing results!",
            size: "medium"
        },
        {
            id: 14,
            type: "text",
            reviewer: "Robert Johnson",
            location: "Phoenix, Arizona",
            source: "Google Review",
            stars: 5,
            text: "Exceptional service from start to finish. Prime transformed our desert home into a cool, comfortable oasis. Their innovative cooling solutions and desert-inspired design are brilliant.",
            size: "small"
        },
        {
            id: 15,
            type: "image",
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=350&fit=crop",
            reviewer: "Amanda Foster",
            location: "Boston, Massachusetts",
            source: "Facebook Review",
            stars: 5,
            text: "Prime brought our historic Boston brownstone into the 21st century while preserving its classic charm. The blend of modern amenities with traditional architecture is perfect. We love our new space and get compliments from everyone who visits.",
            size: "large"
        },
        {
            id: 16,
            type: "text",
            reviewer: "Kevin Park",
            location: "Minneapolis, Minnesota",
            source: "Google Review",
            stars: 5,
            text: "Prime's winter-friendly design solutions for our Minnesota home are incredible. They maximized natural light and created cozy spaces perfect for long winters.",
            size: "medium"
        },
        {
            id: 17,
            type: "image",
            image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&h=280&fit=crop",
            reviewer: "Sarah Mitchell",
            location: "Charleston, South Carolina",
            source: "Yelp Review",
            stars: 5,
            text: "Prime preserved the Southern charm of our Charleston home while adding modern functionality. Perfect balance of old and new!",
            size: "small"
        },
        {
            id: 18,
            type: "text",
            reviewer: "James Turner",
            location: "Las Vegas, Nevada",
            source: "Google Review",
            stars: 5,
            text: "Prime designed our desert villa with stunning views of the mountains. The open-concept layout and floor-to-ceiling windows create an amazing indoor-outdoor living experience. The attention to detail in every room is remarkable. We couldn't be happier with the final result.",
            size: "large"
        },
        {
            id: 19,
            type: "video",
            videoThumbnail: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=250&fit=crop",
            reviewer: "Lisa Wong",
            location: "Vancouver, Canada",
            source: "Video Review",
            stars: 5,
            text: "Prime created our dream kitchen with sustainable materials and energy-efficient appliances. The design is both beautiful and environmentally conscious.",
            size: "medium"
        },
        {
            id: 20,
            type: "text",
            reviewer: "Daniel Lee",
            location: "Salt Lake City, Utah",
            source: "Facebook Review",
            stars: 5,
            text: "Prime's mountain retreat design for our Utah cabin is breathtaking. They perfectly captured the rustic elegance we wanted while ensuring modern comfort.",
            size: "small"
        }
    ];

    // Track scroll for parallax
    useEffect(() => {
        const handleScroll = () => {
            if (scrollRef.current) {
                setScrollY(scrollRef.current.scrollTop);
            }
        };
        const el = scrollRef.current;
        el?.addEventListener("scroll", handleScroll);
        return () => el?.removeEventListener("scroll", handleScroll);
    }, []);

    // Split into columns
    const column1 = reviews.filter((_, i) => i % 3 === 0);
    const column2 = reviews.filter((_, i) => i % 3 === 1);
    const column3 = reviews.filter((_, i) => i % 3 === 2);

    return (
        <section className="py-16 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
                {/* Header */}


                {/* Unified Scroll Area */}
                <div
                    ref={scrollRef}
                    className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-[600px] scrollbar-hide overflow-y-scroll scroll-smooth snap-y snap-mandatory scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400"
                >
                    {/* Column 1 */}
                    <div
                        className="flex flex-col"
                        style={{ transform: `translateY(${scrollY * 0.05}px)` }} // parallax slow
                    >
                        {column1.map((r) => (
                            <div key={r.id} className="snap-start">
                                <ReviewCard review={r} />
                            </div>
                        ))}
                    </div>

                    {/* Column 2 */}
                    <div
                        className="flex flex-col"
                        style={{ transform: `translateY(${scrollY * -0.05}px)` }} // parallax opposite
                    >
                        {column2.map((r) => (
                            <div key={r.id} className="snap-start">
                                <ReviewCard review={r} />
                            </div>
                        ))}
                    </div>

                    {/* Column 3 */}
                    <div
                        className="flex flex-col"
                        style={{ transform: `translateY(${scrollY * 0.1}px)` }} // slightly faster
                    >
                        {column3.map((r) => (
                            <div key={r.id} className="snap-start">
                                <ReviewCard review={r} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
