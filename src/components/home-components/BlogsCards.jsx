import React from "react";

const BlogCardGrid = () => {
  const blogPosts = [
    {
      id: 1,
      title: "5 Creative Tips for Adding Personality to Your Space",
      category: "Articles",
      date: "Jan 1, 2024",
      readTime: "12 min read",
      imageUrl: "https://framerusercontent.com/images/vONJRcDiOdig242Q3TiVm6E4.jpg",
    },
    {
      id: 2,
      title: "The Art of Historical Renovations - Breathing New Life into Old Structures",
      category: "Tips",
      date: "Jan 1, 2024",
      readTime: "15 min read",
      imageUrl: "https://framerusercontent.com/images/qy7Ng7ToJ4EsRfCJGIfletCHLA.jpg",
    },
    {
      id: 3,
      title: "7 Essential Tips for a Successful Interior Design Project",
      category: "Tips",
      date: "May 30, 2024",
      readTime: "8 min read",
      imageUrl: "https://framerusercontent.com/images/HHfu7Xf63LkGEaMaAFzTCkYFu9Q.jpg",
    },
    {
      id: 4,
      title: "The Secrets to Creating a Serene Home Office",
      category: "Tips",
      date: "May 30, 2024",
      readTime: "8 min read",
      imageUrl: "https://framerusercontent.com/images/xyTv0WOycY5dv1UiEe8i3MClPU.jpg",
    },
  ];

  return (
    <div className="bg-[#F7F6E9] py-16 px-4 sm:px-6 lg:px-8 ">
      <div className=" mx-auto">
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 gap-6  ">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>


      </div>
    </div>
  );
};

const BlogCard = ({ post }) => {
  return (
    <div className="bg-[#FFFEF2] flex flex-col items-center md:items-start md:flex-row min-w-[10em] p-4 w-full rounded-xl ">
      {/* Image */}
      <div className=" md:aspect-[2/2] relative ">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-[350px] h-[200px] md:w-[300px] md:h-[270px]  rounded-lg "
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="pt-3 md:p-5">
        {/* Meta Info */}
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className="bg-[#f3ac85] inter-placeholder text-xs px-2 py-1 rounded-full">
            {post.category}
          </span>
          <span className="w-1 h-1 bg-black rounded-full opacity-50"></span>
          <span className="text-xs text-gray-600 inter-placeholder">{post.date}</span>
          <span className="w-1 h-1 bg-black rounded-full opacity-50"></span>
          <span className="text-xs text-gray-600 inter-placeholder">{post.readTime}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-medium text-gray-900 mb-4 line-clamp-2">
          {post.title}
        </h3>

        {/* Button */}
        <button className=" flex items-base relative md:top-20 justify-between bg-[#f4f2e3] text-black text-[#1d322D] text-xs font-bold py-1 px-2 rounded-full hover:bg-[#f4f2e3]/90 transition-colors">
          Read Post
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className="w-5 h-5 ml-2"
          >
            <path
              fill="currentColor"
              d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,109.66-32,32a8,8,0,0,1-11.32-11.32L148.69,136H88a8,8,0,0,1,0-16h60.69l-18.35-18.34a8,8,0,0,1,11.32-11.32l32,32A8,8,0,0,1,173.66,133.66Z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BlogCardGrid;