import Image from "next/image";
import React from "react";

const ClosetHeroSection = () => {
  return (
    <div className="relative w-full overflow-hidden h-[60vh] xl:h-[51.5625rem]">
      {/* Background Image (Fallback) */}
      {/* <img
        src={`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/home-page/home-images/PXL_20240220_130937450~2.jpg`}
        alt="Closet Background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      /> */}

      {/* Video Background */}
      <video
        src={`https://d33mc6cj8ws4rf.cloudfront.net/service-page-videos/service-page-bg-video.mp4`}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Optional Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 z-20" />

      {/* Content */}
      <div className="relative z-30 flex items-end h-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-16 xl:pb-32">
        <h1 className="text-[#fffef2] font-medium tracking-tight xl:text-8xl">
          <span className="block">More Than Storage A</span>
          <span className="block">Space That Reflects You</span>
        </h1>
      </div>
    </div>
  );
};

export default ClosetHeroSection;

// import Image from "next/image";
// import React from "react";

// const ClosetHeroSection = () => {
//   return (
//     <div className="relative xl:max-h-screen w-full overflow-hidden inter-placeholder h-full xl:h-[51.5625rem]">
//       {/* Video Background */}
//       <video
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         autoPlay
//         muted
//         loop
//         playsInline
//       >
//         <source
//           src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
//           type="video/mp4"
//         />
//         {/* Fallback for browsers that don't support video */}
//         Your browser does not support the video tag.
//       </video>
//       {/* Dark Overlay for better text readability */}
//       {/* <div className="absolute inset-0 bg-black bg-opacity-30"></div> */}
//       {/* Content Container */}
//       <div className="relative z-10 flex items-end justify-start h-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-16 xl:pb-32">
//         <div className="">
//           {/* Main Heading */}
//           <h1 className="text-white font-light leading-[] xl:text-8xl font-medium tracking-tighter leading-tighter text-[#fffef2]">
//             <span className="block  ">More Than Storage A</span>
//             <span className="block ">Space That Reflects You</span>
//           </h1>
//         </div>
//       </div>
//       {/* Background Image Fallback */}
//     <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjMzMzMzMzIi8+Cjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNjY2NjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5DbG9zZXQgSW1hZ2U8L3RleHQ+Cjwvc3ZnPg==')`,
//           zIndex: -1,
//         }}
//       />

//     </div>
//   );
// };

// export default ClosetHeroSection;
