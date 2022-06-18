import React, { useContext } from 'react';
import { VideosContext } from '../contexts/VideosContext';
import VideoItem from './VideoItem';
import Welcome from './sections/Welcome';
import getNextVideos from '../actions/getNextVideos';

function VideosList() {
  const { videos, dispatch, query, nextPageToken } = useContext(VideosContext);
  console.log(query, nextPageToken);

  const handleClick = async () => {
    console.log(query, nextPageToken);
    const data = await getNextVideos(query, nextPageToken);
    dispatch({ type: 'SET_VIDEOS', payload: data.items });
    dispatch({ type: 'SET_NEXTPAGE', payload: data.nextPageToken });
  };

  const displayVideos = (videos = []) => {
    return videos.map((video) => <VideoItem key={video.etag} video={video} />);
  };

  if (videos.length === 0) return <Welcome />;
  return (
    <>
      <div className="grid grid-cols-1 mt-16 justify-center py-10 space-y-10 md:space-y-0 md:grid-cols-3 md:gap-10 md:px-10 lg:max-w-7xl lg:grid-cols-4">
        {displayVideos(videos)}
      </div>
      <button
        onClick={handleClick}
        className="px-4 py-2  bg-gray-300 rounded-md mb-4 hover:bg-gray-400 transition duration-300"
      >
        Load more
      </button>
    </>
  );
}

export default VideosList;
