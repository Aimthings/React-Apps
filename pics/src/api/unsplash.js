import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID pPrch3sZaD99Hn7UZ-0YuuABCDtJWMX177zqn2iU9dU'
    }
});