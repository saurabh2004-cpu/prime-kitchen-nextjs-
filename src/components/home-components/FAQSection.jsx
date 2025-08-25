import React, { useState } from 'react';

const FAQSection = () => {
   const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a range of interior design services including space planning, 3D rendering, furniture selection, color consultation, lighting design, custom cabinetry, and full project management from concept to completion.",
  },
  {
    question: "How do I start a project with Prime?",
    answer:
      "Starting a project with us is simple. Begin by scheduling an initial consultation where we discuss your vision, requirements, and budget. From there, we proceed with space measurements and develop a detailed design plan.",
  },
  {
    question: "What is the typical timeline for a project?",
    answer:
      "Project timelines vary based on scope, but most residential projects take 8–12 weeks from concept to completion. Commercial projects may take longer depending on size and complexity.",
  },
  {
    question: "How do you charge for your services?",
    answer:
      "Our pricing structure depends on the project size and scope. We offer both hourly rates and flat fees for our services. During the initial consultation, we provide a detailed estimate based on your specific needs.",
  },
  {
    question: "How do you charge for your services?",
    answer:
      "SEO, or Search Engine Optimization, is the process of optimizing a website to improve its visibility and ranking on search engine results pages (SERPs). It's important because it helps businesses attract organic traffic, increase their online visibility, and ultimately drive more leads and conversions.",
  },
  {
    question: "Can you work within my budget?",
    answer:
      "Yes, we work with a variety of budgets and strive to create beautiful and functional spaces within your financial constraints. We discuss your budget during the initial meeting and tailor our design solutions accordingly.",
  },
  {
    question: "Do you handle the purchasing of furniture and materials?",
    answer:
      "Yes, we manage the procurement of all furniture, materials, and finishes required for your project. We work with trusted suppliers and vendors to ensure quality and timely delivery.",
  },
  {
    question: "Will I be able to see the design before it is implemented?",
    answer:
      "Absolutely! We provide detailed floor plans and 3D renderings of the proposed design. This allows you to visualize the space and make any necessary adjustments before we proceed with implementation.",
  },
];


  const handleFAQHover = (index) => {
    return 'bg-[#F3ac85] text-white';
  };

  return (
    <section className="bg-[#fffef2] py-16 px-4 sm:px-6 lg:px-8">
      <div className=" mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Heading */}
          <div className="flex flex-col justify-center text-center md:text-left  md:justify-start px-3">
            <div className="flex items-center gap-3 flex text-center justify-center md:justify-start md:text-left">
              <svg className="w-5 h-5 text-[#1D322D] " viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="6" strokeWidth="2" />
                <circle cx="12" cy="12" r="3.2" fill="currentColor" />
              </svg>
              <span className="text-xs  tracking-wider inter-placeholder font-bold ">FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 inter-placeholder">
              Your questions, our answers
            </h2>
          </div>

          {/* Right Side - FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="overflow-hidden transition-all duration-300">
                <button
                  className="w-full bg-[#f7f6e9] rounded-xl flex justify-between items-center p-6 text-left focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                  <div className="ml-4 flex-shrink-0">
                    <svg
                      className={`w-14 h-14 transform transition-transform duration-500 p-3 ${activeIndex === index ? 'rotate-45 bg-[#F3ac85] rounded-full' : ''}`}
                      viewBox="0 0 256 256"
                      fill="currentColor"
                    >
                     <path d="M136 120V64a8 8 0 0 0-16 0v56H64a8 8 0 0 0 0 16h56v56a8 8 0 0 0 16 0V136h56a8 8 0 0 0 0-16Z" />

                    </svg>
                  </div>
                </button>

                <div
                  className={`bg-[#fffef2] overflow-hidden transition-all duration-300 ease-in-out ${
                    activeIndex === index ? 'max-h-[999px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-0 text-[#1D322D]">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;