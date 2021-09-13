import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID ol2FTreSYjjDMpcbOKUK33TKKFnakoH5_tvp0CRoPG8',
  },
});