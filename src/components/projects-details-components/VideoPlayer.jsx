import React, { useState } from 'react';

const VideoPlayer = () => {
  const [videoId, setVideoId] = useState('dQw4w9WgXcQ'); // Default video ID
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const extractVideoId = (url) => {
    const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/;
    const match = url.match(regex);
    return match ? match[1] : url;
  };

  const handleVideoIdChange = (e) => {
    const input = e.target.value;
    const id = extractVideoId(input);
    setVideoId(id);
    setIsPlaying(false);
  };

  return (
    <div className="min-h-full bg-white p-4  lg:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Video Player Container */}
        <div className="rounded-xl shadow-lg overflow-hidden">
          <div className="relative w-full h-[800px]">
            {isPlaying ? (
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center cursor-pointer group">
                {/* Thumbnail */}
                <img
                  src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                  alt="Video thumbnail"
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                  }}
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-colors"></div>
                {/* Play Button */}
                <button
                  onClick={handlePlay}
                  className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110"
                  aria-label="Play video"
                >
                  <svg
                    className="w-10 h-10 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
