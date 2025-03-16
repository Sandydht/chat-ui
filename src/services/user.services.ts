import { AxiosResponse } from "axios";
import { GetUserProfileResponse, GetUsersResponse } from "../models/user-service.models";
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

export const getUsers = async (): Promise<GetUsersResponse> => {
  try {
    const response = await axiosInstance.get<any, AxiosResponse>(`${baseURL}${USER_SERVICE_ENDPOINT.USER_LIST}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
