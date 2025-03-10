import { AxiosResponse } from "axios";
import { GetUserProfileResponse } from "../models/user-service.models";
import axiosInstance from "../utils/axios-instance.utils";
import { USER_SERVICE_ENDPOINT } from "../constants/user-service-endpoint.constants";

const baseURL = import.meta.env.VITE_BASE_URL;

export const getUserProfile = async (): Promise<GetUserProfileResponse> => {
  try {
    const response = await axiosInstance.get<any, AxiosResponse>(`${baseURL}${USER_SERVICE_ENDPOINT.PROFILE}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};