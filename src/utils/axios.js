import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: '',
    Headers: {
        'content-type': 'application/json',
    }
});

export default axiosInstance;