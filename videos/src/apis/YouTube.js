import axios from 'axios';

const KEY = 'AIzaSyBTJw74IiVpJ5xSerGrtg_Kw2pC7zARs1g'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY   
    }
});