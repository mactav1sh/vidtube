import React from 'react';
import { Link } from 'react-router-dom';

function VideoItem({ video }) {
  return (
    <Link to={`/video/${video.id.videoId}`}>
      <div className="flex flex-col  md:max-w-sm hover:bg-gray-200 transition duration-300">
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.description}
          className="object-cover"
        />
        <div className="mt-3 max-w-lg p-3 overflow-hidden">
          <h1 className="text-xl">{video.snippet.title}</h1>
          <div className="w-1/3 h-0.5 bg-gray-300 mt-2"></div>
          <p className="text-gray-600 mt-4 pb-2">
            {video.snippet.description.slice(0, 40)} ...
          </p>
        </div>
      </div>
    </Link>
  );
}

export default VideoItem;
