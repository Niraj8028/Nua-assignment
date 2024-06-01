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
        const response = await axiosInstance.get(`/v1/geo/cities/${cityId}/nearbyCities?limit=3`);
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
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching countries:', error);
        throw error;
    }
};
