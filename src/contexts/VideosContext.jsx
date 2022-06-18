import React, { useReducer } from 'react';
import videosReducer from '../reducers/videosReducer';

export const VideosContext = React.createContext();

function VideosProvider({ children }) {
  const initalState = {
    videos: [],
    query: '',
    nextPageToken: '',
  };

  const [state, dispatch] = useReducer(videosReducer, initalState);

  const value = {
    ...state,
    dispatch,
  };

  return (
    <VideosContext.Provider value={value}>{children}</VideosContext.Provider>
  );
}

export default VideosProvider;
