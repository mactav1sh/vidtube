import youtube from '../apis/youtube';

const searchVideos = async (query) => {
  const response = await youtube.get('/search', {
    params: {
      q: query,
    },
  });

  return response.data;
};

export default searchVideos;
