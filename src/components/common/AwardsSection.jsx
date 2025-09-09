import React from 'react';

const AwardsSection = () => {
  const awards = [
    {
      id: 1,
      logo: "🏆",
      bgColor: "bg-red-500",
      title: "iF Design",
      subtitle: "Award 2023"
    },
    {
      id: 2,
      logo: "🎨",
      bgColor: "bg-blue-600",
      title: "ADI Design",
      subtitle: "Index 2022"
    },
    {
      id: 3,
      logo: "⚡",
      bgColor: "bg-black",
      title: "German Design",
      subtitle: "Winner 2023, 2022,"
    },
    {
      id: 4,
      logo: "🏆",
      bgColor: "bg-red-500",
      title: "iF Design",
      subtitle: "Award 2020"
    },
    {
      id: 5,
      logo: "📐",
      bgColor: "bg-gray-800",
      title: "Archiproducts",
      subtitle: "Design 2019"
    },
    {
      id: 6,
      logo: "✨",
      bgColor: "bg-black",
      title: "Good Design Award",
      subtitle: "2019 & 2020"
    },
    {
      id: 7,
      logo: "🌟",
      bgColor: "bg-gray-700",
      title: "A'Design",
      subtitle: "Award 2022"
    },
    {
      id: 8,
      logo: "🌿",
      bgColor: "bg-green-600",
      title: "FSC® Award",
      subtitle: "Furniture 2019"
    },
    {
      id: 9,
      logo: "⚡",
      bgColor: "bg-gray-800",
      title: "German Innovation",
      subtitle: "Award 2021"
    },
    {
      id: 10,
      logo: "🎯",
      bgColor: "bg-orange-500",
      title: "Golden A'Design",
      subtitle: "Winner 2014"
    },
    
    
  ];

  return (
    <div className="w-full  py-16 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="mb-4">
          <span className="text-sm font-light tracking-widest text-gray-600 uppercase">
            — FEATURES
          </span>
        </div>
      </div>

      {/* Awards Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {awards.map((award) => (
            <div
              key={award.id}
              className=" rounded-lg p-6 w-[15.9375rem] h-[7.25rem] border border-gray-300 "
            >
              <div className="flex items-start space-x-3">
                {/* Logo/Icon */}
                <div className={`w-12 h-12  rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white text-lg font-bold">
                    {award.logo}
                  </span>
                </div>
                
                {/* Text Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1 leading-tight">
                    {award.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-tight">
                    {award.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

     
    </div>
  );
};

export default AwardsSection;