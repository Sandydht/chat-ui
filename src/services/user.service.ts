import { AxiosResponse } from "axios";
import { GetUserProfileResponse, GetUsersResponse, SaveContactRequest, SaveContactResponse } from "../models/user-service.model";
import axiosInstance from "../utils/axios-instance.util";
import { USER_SERVICE_ENDPOINT } from "../constants/user-service-endpoint.constant";
import handleAxiosError from "../utils/error-handler.util";

const baseURL = import.meta.env.VITE_BASE_URL;

export const getUserProfile = async (): Promise<GetUserProfileResponse> => {
  try {
    const response = await axiosInstance.get<any, AxiosResponse>(`${baseURL}${USER_SERVICE_ENDPOINT.PROFILE}`);
    return response.data;
  } catch (error: any) {
    throw handleAxiosError(error);
  }
};

export const getUsers = async (): Promise<GetUsersResponse> => {
  try {
    const response = await axiosInstance.get<any, AxiosResponse>(`${baseURL}${USER_SERVICE_ENDPOINT.USER_LIST}`);
    return response.data;
  } catch (error: any) {
    throw handleAxiosError(error);
  }
};

export const saveContact = async (payload: SaveContactRequest): Promise<SaveContactResponse> => {
  try {
    const response = await axiosInstance.post<SaveContactRequest, AxiosResponse>(`${baseURL}${USER_SERVICE_ENDPOINT.SAVE_CONTACT}`, payload);
    return response.data;
  } catch (error) {
    throw handleAxiosError(error);
  }
}
