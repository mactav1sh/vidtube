function videosReducer(state = [], action) {
  switch (action.type) {
    case 'SET_VIDEOS':
      return { ...state, videos: action.payload };
    case 'SET_QUERY':
      return { ...state, query: action.payload };
    case 'SET_NEXTPAGE':
      return { ...state, nextPageToken: action.payload };
    case 'UPDATE_VIDEOS':
      // return { ...state, videos: state.videos.concat(action.payload) };
      return { ...state, videos: [...state.videos, ...action.payload] };

    default:
      throw new Error(`"${action.type}" is not handled in the videosReducer`);
  }
}

export default videosReducer;
