import axios from 'axios';

const KEY = 'AIzaSyDLnKycei0QP74RnRURjFsXvP8XQD82gQQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    }
});