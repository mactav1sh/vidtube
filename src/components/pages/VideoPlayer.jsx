import React from 'react';
import { useParams } from 'react-router-dom';
import SideBar from '../sections/SideBar';

function VideoPlayer() {
  const { id } = useParams();
  // FIXME: if you refresh, side bar dissappears because there's no videos

  return (
    <div className="min-h-screen">
      <div className="flex justify-between  md:space-x-4 md:px-4">
        <iframe
          width="560"
          height="315"
          className="my-20 mx-auto justify-self-center "
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <SideBar />
        <div></div>
      </div>
    </div>
  );
}

export default VideoPlayer;
