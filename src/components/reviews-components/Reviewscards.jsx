"use client";
import React, { useEffect, useRef, useState } from "react";
import { Star, Play } from "lucide-react";

const ReviewCard = ({ review, scrollProgress, columnIndex }) => {
  const cardRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [cardScrollProgress, setCardScrollProgress] = useState(0);

  const getSizeClasses = () => {
    switch (review.size) {
      case "small":
        return "min-h-[320px]";
      case "medium":
        return "min-h-[420px]";
      case "large":
        return "min-h-[480px]";
      default:
        return "min-h-[280px]";
    }
  };

  const getImageHeight = () => {
    switch (review.size) {
      case "small":
        return "h-32";
      case "medium":
        return "h-40";
      case "large":
        return "h-48";
      default:
        return "h-36";
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting) {
          const rect = entry.boundingClientRect;
          const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));
          setCardScrollProgress(progress);
        }
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Calculate parallax offset based on column and scroll progress
  const parallaxOffset = scrollProgress * (columnIndex === 0 ? 15 : columnIndex === 1 ? -10 : 20);
  const scaleEffect = isInView ? 1 : 0.95;
  const opacityEffect = isInView ? 1 : 0.7;

  return (
    <div
      ref={cardRef}
      className={`rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden bg-[#f7f6e9] mb-6 group cursor-pointer ${getSizeClasses()}`}
      style={{
        transform: `translateY(${parallaxOffset}px) scale(${scaleEffect})`,
        opacity: opacityEffect,
        transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-5 pb-3">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 transition-all duration-300 group-hover:scale-110 ${
                i < review.stars 
                  ? "text-[#f3ac85] fill-current" 
                  : "text-gray-300"
              }`}
              style={{ transitionDelay: `${i * 50}ms` }}
            />
          ))}
        </div>
        <span className="text-xs font-semibold uppercase tracking-wider text-[#1d322d] opacity-70 group-hover:opacity-100 transition-opacity duration-300">
          {review.source}
        </span>
      </div>

      {/* Media Content */}
      {review.type === "image" && (
        <div className={`${getImageHeight()} overflow-hidden mx-5 rounded-2xl`}>
          <img 
            src={review.image} 
            alt={review.reviewer} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
          />
        </div>
      )}

      {review.type === "video" && (
        <div className={`relative ${getImageHeight()} bg-gray-200 overflow-hidden mx-5 rounded-2xl`}>
          <img 
            src={review.videoThumbnail} 
            alt="Video thumbnail" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 cursor-pointer">
              <Play className="w-6 h-6 text-gray-700 ml-1" />
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-5 pt-4 flex flex-col flex-grow">
        <div className="mb-4">
          <h3 className="font-bold text-[#1d322d] text-lg group-hover:text-[#0f1a16] transition-colors duration-300">
            {review.reviewer}
          </h3>
          <p className="text-sm font-medium text-[#1d322d] opacity-70 group-hover:opacity-90 transition-opacity duration-300">
            {review.location}
          </p>
        </div>

        <p className={`text-[#1d322d] leading-relaxed flex-grow ${
          review.size === "small" ? "text-sm" : review.size === "large" ? "text-base" : "text-sm"
        } group-hover:text-[#0f1a16] transition-colors duration-300`}>
          {review.text}
        </p>
      </div>
    </div>
  );
};

export default function MasonryReviews() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleCards, setVisibleCards] = useState(new Set());

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
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      reviewer: "Michael Nguyen",
      location: "Denver, Colorado",
      source: "Google Review",
      stars: 5,
      text: "I couldn't be happier with this! Prime exceeded all my expectations with their renovation design and execution. They paid attention to every detail and the final result speaks for itself. We love it so much. The quality of their work is outstanding!",
      size: "medium"
    },
    {
      id: 3,
      type: "text",
      reviewer: "Ephraim Tillinghast",
      location: "New Orleans, LA",
      source: "Google Review",
      stars: 5,
      text: "Prime transformed my historic home into a masterpiece. Their attention to detail and respect for the original architecture were truly impressive. The final result exceeded all expectations and they delivered with excellent customer service communication.",
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
      videoThumbnail: "https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
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
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400&h=280&fit=crop",
      reviewer: "Lysander Grey",
      location: "Portland, OR",
      source: "Google Review",
      stars: 5,
      text: "The creativity and innovation Prime brought to our office redesign have significantly improved our work environment. Their forward-thinking approach resulted in a space that boosts employee functionality and client relationships.",
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
      image: "https://images.pexels.com/photos/1571472/pexels-photo-1571472.jpeg?auto=compress&cs=tinysrgb&w=400&h=320&fit=crop",
      reviewer: "Ryan Martinez",
      location: "Austin, Texas",
      source: "Google Review",
      stars: 5,
      text: "From start to finish, friendly professional service and beautiful designs. My home has never looked better. They transformed my space beyond my wildest dreams. I would definitely recommend their services.",
      size: "small"
    },
    {
      id: 9,
      type: "text",
      reviewer: "S. Thompson",
      location: "Los Angeles, California",
      source: "Google Review",
      stars: 5,
      text: "We worked with Prime on our office space, and we couldn't be more pleased. Their innovative ideas and attention to detail resulted in a workspace that's both stylish and highly functional. The entire team was responsive, professional, and delivered beyond our expectations.",
      size: "medium"
    },
    {
      id: 10,
      type: "text",
      reviewer: "Darius Hawke",
      location: "Chicago, Illinois",
      source: "Google Review",
      stars: 5,
      text: "Prime's team took my vague ideas and turned them into a stunning reality. They listened carefully to my preferences and created a space that perfectly reflects my style. I highly recommend their expertise. Quality and craftsmanship is evident in every detail.",
      size: "large"
    },
    {
      id: 11,
      type: "image",
      image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
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
      videoThumbnail: "https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      reviewer: "Jennifer Chen",
      location: "San Francisco, California",
      source: "Video Review",
      stars: 5,
      text: "Prime redesigned our tech startup office. The modern, collaborative spaces have boosted our team's productivity and creativity. Amazing results that speak for themselves!",
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
      image: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=400&h=350&fit=crop",
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
      text: "Prime's winter-friendly design solutions for our Minnesota home are incredible. They maximized natural light and created cozy spaces perfect for long winters. Outstanding attention to detail!",
      size: "medium"
    },
    {
      id: 17,
      type: "image",
      image: "https://images.pexels.com/photos/1571464/pexels-photo-1571464.jpeg?auto=compress&cs=tinysrgb&w=400&h=280&fit=crop",
      reviewer: "Sarah Mitchell",
      location: "Charleston, South Carolina",
      source: "Yelp Review",
      stars: 5,
      text: "Prime preserved the Southern charm of our Charleston home while adding modern functionality. Perfect balance of old and new! We absolutely love the transformation.",
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
      videoThumbnail: "https://images.pexels.com/photos/1571465/pexels-photo-1571465.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
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

  // Distribute reviews across columns more evenly
  const column1 = [];
  const column2 = [];
  const column3 = [];

  reviews.forEach((review, index) => {
    if (index % 3 === 0) column1.push(review);
    else if (index % 3 === 1) column2.push(review);
    else column3.push(review);
  });

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight - container.clientHeight;
      const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
      
      setScrollProgress(progress);

      // Track visible cards for staggered animations
      const cards = container.querySelectorAll('[data-card-id]');
      const newVisibleCards = new Set();
      
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const isVisible = rect.top < containerRect.bottom && rect.bottom > containerRect.top;
        
        if (isVisible) {
          const cardId = parseInt(card.getAttribute('data-card-id') || '0');
          newVisibleCards.add(cardId);
        }
      });
      
      setVisibleCards(newVisibleCards);
    };

    const container = containerRef.current;
    container?.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => container?.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className=" px-4 md:px-8 lg:px-16 ">
      <div className="max-w-7xl mx-auto">
        <div
          ref={containerRef}
          className="h-[700px] overflow-y-auto scrollbar-hide scroll-smooth"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {/* Column 1 */}
            <div className="flex flex-col">
              {column1.map((review, index) => (
                <div key={review.id} data-card-id={review.id}>
                  <ReviewCard 
                    review={review} 
                    scrollProgress={scrollProgress}
                    columnIndex={0}
                  />
                </div>
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col">
              {column2.map((review, index) => (
                <div key={review.id} data-card-id={review.id}>
                  <ReviewCard 
                    review={review} 
                    scrollProgress={scrollProgress}
                    columnIndex={1}
                  />
                </div>
              ))}
            </div>

            {/* Column 3 */}
            <div className="flex flex-col">
              {column3.map((review, index) => (
                <div key={review.id} data-card-id={review.id}>
                  <ReviewCard 
                    review={review} 
                    scrollProgress={scrollProgress}
                    columnIndex={2}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}