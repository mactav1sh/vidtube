import axios from 'axios';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: 'AIzaSyBbTKDdFITNUPMPcgWh1Vcvbfn-L8--aRY',
    part: 'snippet',
    maxResults: 5,
  },
});
