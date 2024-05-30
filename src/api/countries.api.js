import axiosInstance from "@/utils/axios";

export const getAllCountries = async () => {
    const response = await axiosInstance.get();
    return response;
}