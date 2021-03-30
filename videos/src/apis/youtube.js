import axios from 'axios';
const KEY="AIzaSyCC52t8WCMyKSAgu-Kg6F16_XhWlVBCctE";

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY,
    }
});