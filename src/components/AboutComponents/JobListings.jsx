'use client'
import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Calendar, DollarSign, Clock, MapPin } from 'lucide-react';

const JobListings = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const observerRef = useRef();

  const jobs = [
    {
      id: 1,
      title: "Project Manager",
      type: "FULL TIME",
      salary: "$120K-$140K",
      date: "12 NOV, 2024",
      description: "Bachelor's degree in Project Management, Architecture, or a related field, 3+ years of experience in project management, excellent organizational skills, proficiency in project management software (Microsoft Project, Trello).",
      tags: ["FULL TIME", "$120K-$140K", "12 NOV, 2024"]
    },
    {
      id: 2,
      title: "Senior Interior Designer",
      type: "FULL TIME",
      salary: "NEGOTIABLE",
      date: "12 NOV, 2024",
      description: "Bachelor's degree in Interior Design or a related field, 5+ years of experience, proficiency in design software (AutoCAD, SketchUp, Adobe Creative Suite), strong communication skills.",
      tags: ["FULL TIME", "NEGOTIABLE", "12 NOV, 2024"]
    },
    {
      id: 3,
      title: "Junior Interior Designer",
      type: "PROJECT BASED",
      salary: "NEGOTIABLE",
      date: "9 AUG, 2024",
      description: "Bachelor's degree in Interior Design, strong proficiency in design software (AutoCAD, Revit, Adobe Creative Suite), excellent communication and teamwork skills, a creative portfolio.",
      tags: ["PROJECT BASED", "NEGOTIABLE", "9 AUG, 2024"]
    }
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set([...prev, entry.target.dataset.id]));
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll('[data-job-card]');
    cards.forEach(card => observerRef.current.observe(card));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const getAnimationClass = (id) => {
    return visibleCards.has(id.toString())
      ? 'animate-slide-in-up opacity-100 transform translate-y-0'
      : 'opacity-0 transform translate-y-8';
  };

  return (
    <div className="min-h-screen py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-[#f2f1e6]">
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-in-up {
          animation: slideInUp 0.6s ease-out forwards;
        }
        
        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-hover:hover {
          transform: translateY(-8px);
        }
        
        .tag-animation {
          transition: all 0.2s ease;
        }
        
        .tag-animation:hover {
          transform: scale(1.05);
        }
        
        .apply-btn {
          position: relative;
          overflow: hidden;
        }
        
        .apply-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }
        
        .apply-btn:hover::before {
          left: 100%;
        }
      `}</style>

      <div className="max-w-6xl mx-auto ">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-slide-in-up">
          <div className="flex items-center justify-center text-sm space-x-3">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#009f93]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="6" strokeWidth="2" />
              <circle cx="12" cy="12" r="3.2" fill="currentColor" />
            </svg>
            <span className="text-xs text-[#009f93] uppercase font-semibold tracking-wider inter-placeholder">
              Career
            </span>
          </div>
          <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight leading-tight font-extrabold inter-placeholder text-[#1D322D]" style={{ color: "#009f93", fontWeight: 1000 }}>
            We are hiring, Join our team
          </h2>
        </div>

        {/* Job Cards */}
        <div className="space-y-6 sm:space-y-8">
          {jobs.map((job, index) => (
            <div
              key={job.id}
              data-id={job.id}
              data-job-card
              className={`bg-[#fffef2] rounded-xl sm:rounded-2xl shadow-lg max-h-58 card-hover p-4 sm:p-6 lg:p-8 transition-all duration-700 ${getAnimationClass(job.id)}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Desktop Layout - Hidden on mobile/tablet */}
              <div className="hidden lg:block">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  {/* Left Content */}
                  <div className="min-w-1/2">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-3 mb-32">
                      {job.tags.map((tag, tagIndex) => {
                        let bgColor = 'text-gray-700';
                        let icon = null;

                        if (tag.includes('FULL TIME') || tag.includes('PROJECT BASED')) {
                          bgColor = 'text-[#1d322d] border border-gray-200 inter-placeholder bg-[#0000000D]';
                          icon = <Clock className="w-3 h-3 mr-1" />;
                        } else if (tag.includes('$') || tag.includes('NEGOTIABLE')) {
                          bgColor = 'text-[#1d322d] border border-gray-200 inter-placeholder bg-[#0000000D]';
                          icon = <DollarSign className="w-3 h-3 mr-1" />;
                        } else if (tag.includes('NOV') || tag.includes('AUG')) {
                          bgColor = 'text-[#1d322d] border border-gray-200 inter-placeholder bg-[#0000000D]';
                          icon = <Calendar className="w-3 h-3 mr-1" />;
                        }

                        return (
                          <span
                            key={tagIndex}
                            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium tag-animation ${bgColor}`}
                          >
                            {icon}
                            {tag}
                          </span>
                        );
                      })}
                    </div>

                    {/* Job Title */}
                    <h2 className="text-[30px]  inter-placeholder font-[700] text-[#1d322d]  mb-4 relative md:bottom-28 transition-colors">
                      {job.title}
                    </h2>
                  </div>

                  {/* Right Content - Apply Button */}
                  <div className="flex flex-col justify-end">
                    <div>
                      {/* Job Description */}
                      <p className="text-[#1sd322d]/75 text-[16px] md:font-[500] inter-placeholder leading-relaxed text-sm md:text-base">
                        {job.description}
                      </p>
                    </div>
                    <button className="inline-flex items-center py-4 text-white font-semibold rounded-full">
                      <span className="mr-2 text-[#1d322d]  font-bold text-[1rem] inter-placeholder">APPLY NOW</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                </div>

                {/* Hover Effect Line */}
                <div className="h-1 bg-gradient-to-r from-teal-400 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left mt-6 rounded-full"></div>
              </div>

              {/* Mobile/Tablet Layout - Hidden on desktop */}
              <div className="block lg:hidden">
                <div className="space-y-4">
                  {/* Mobile Job Title */}
                  <h2 className="text-lg sm:text-xl md:text-2xl inter-placeholder font-extrabold text-[#1d322d] leading-tight">
                    {job.title}
                  </h2>

                  {/* Mobile Tags */}
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {job.tags.map((tag, tagIndex) => {
                      let bgColor = 'text-gray-700';
                      let icon = null;

                      if (tag.includes('FULL TIME') || tag.includes('PROJECT BASED')) {
                        bgColor = 'text-[#1d322d] border border-gray-200 inter-placeholder bg-[#0000000D]';
                        icon = <Clock className="w-3 h-3 mr-1" />;
                      } else if (tag.includes('$') || tag.includes('NEGOTIABLE')) {
                        bgColor = 'text-[#1d322d] border border-gray-200 inter-placeholder bg-[#0000000D]';
                        icon = <DollarSign className="w-3 h-3 mr-1" />;
                      } else if (tag.includes('NOV') || tag.includes('AUG')) {
                        bgColor = 'text-[#1d322d] border border-gray-200 inter-placeholder bg-[#0000000D]';
                        icon = <Calendar className="w-3 h-3 mr-1" />;
                      }

                      return (
                        <span
                          key={tagIndex}
                          className={`inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs font-medium tag-animation ${bgColor}`}
                        >
                          {icon}
                          {tag}
                        </span>
                      );
                    })}
                  </div>

                  {/* Mobile Description */}
                  <p className="text-[#1d322d]/70 inter-placeholder leading-relaxed text-sm sm:text-base">
                    {job.description}
                  </p>

                  {/* Mobile Apply Button */}
                  <div className="flex justify-between items-center pt-2">
                    <button className="inline-flex items-center text-[#1d322d] font-semibold">
                      <span className="mr-2 underline font-bold text-sm sm:text-base inter-placeholder">APPLY NOW</span>
                      <ChevronRight className="w-4 h-4 transition-transform duration-200" />
                    </button>
                  </div>
                </div>

                {/* Mobile Hover Effect Line */}
                <div className="h-1 bg-gradient-to-r from-teal-400 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left mt-4 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobListings;