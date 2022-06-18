import React, { useContext } from 'react';
import { VideosContext } from '../../contexts/VideosContext';
import VideoItem from '../VideoItem';

function SideBar() {
  const { videos } = useContext(VideosContext);

  const displayVideos = (videos = []) => {
    return videos.map((video) => <VideoItem key={video.etag} video={video} />);
  };
  return (
    <div className="my-20 hidden md:flex md:flex-col">
      {displayVideos(videos)}
    </div>
  );
}

export default SideBar;
