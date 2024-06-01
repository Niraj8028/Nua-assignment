import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://wft-geo-db.p.rapidapi.com',
    headers: {
        'X-RapidAPI-Key': '425566b377mshe0f0ee201295fe1p1086cfjsnd447e41fe515',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'    
    }
});

export default axiosInstance;