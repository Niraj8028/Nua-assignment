import axiosInstance from "@/utils/axios";

export const getAllCities = async (limit = 10, offset) => {
    console.log('offset', offset);
    try {
        const response = await axiosInstance.get('/v1/geo/cities',{
            params: {
                minPopulation: 10000,
                limit: limit,
                offset: offset
            }
        });
        return response.data; 
    } catch (error) {
        console.error('Error fetching countries:', error);
        throw error;
    }
};

export const getNearbyCities = async ( cityId ) => {
    console.log('cityId', cityId);
    try {
        const response = await axiosInstance.get(`/v1/geo/cities/${cityId}/nearbyCities?limit=3`, {
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '425566b377mshe0f0ee201295fe1p1086cfjsnd447e41fe515',
                'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
            }
        });
        return response.data; 
    } catch (error) {
        console.error('Error fetching nearby cities:', error);
        throw error;
    }
};

export const searchCity = async (namePrefix) => {
    console.log('namePrefix', namePrefix);
    try {
        const response = await axiosInstance.get('/v1/geo/cities', {
            params: {
                namePrefix: namePrefix,
                limit: 2 
            },
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '425566b377mshe0f0ee201295fe1p1086cfjsnd447e41fe515',
                'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
            }
        });
        return response.data; 
    } catch (error) {
        console.error('Error searching cities:', error);
        throw error;
    }
};

export const citiesInRegion = async (Country) => {
    console.log('namePrefix', Country);
    try {
        const response = await axiosInstance.get(`/v1/geo/countries/${Country}/places`, {
            params: {
                minPopulation: '1000000',
                limit: 10
            },
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '425566b377mshe0f0ee201295fe1p1086cfjsnd447e41fe515',
                'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching countries:', error);
        throw error;
    }
};
