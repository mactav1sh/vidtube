import youtube from '../apis/youtube';

const getNextVideos = async (query, nextPageToken) => {
  const response = await youtube.get('/search', {
    params: {
      q: query,
      pageToken: nextPageToken,
    },
  });

  return response.data;
};

export default getNextVideos;
