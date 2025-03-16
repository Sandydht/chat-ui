import axios, { AxiosResponse } from "axios";
import { AUTH_SERVICE_ENDPOINT } from "../constants/auth-service-endpoint.constants";
import {
  LoginAccountRequest,
  LoginAccountResponse,
  LogoutAccountResponse,
  RegisterAccountRequest,
  RegisterAccountResponse
} from "../models/auth-service.models";
import axiosInstance from "../utils/axios-instance.utils";
import handleAxiosError from "../utils/error-handler.utils";

const baseURL = import.meta.env.VITE_BASE_URL;

export const registerAccount = async (payload: RegisterAccountRequest): Promise<RegisterAccountResponse> => {
  try {
    const response = await axios.post<RegisterAccountRequest, AxiosResponse>(`${baseURL}${AUTH_SERVICE_ENDPOINT.REGISTER}`, payload);
    return response.data;
  } catch (error: any) {
    throw handleAxiosError(error);
  }
}

export const loginAccount = async (payload: LoginAccountRequest): Promise<LoginAccountResponse> => {
  try {
    const response = await axios.post<LoginAccountRequest, AxiosResponse>(`${baseURL}${AUTH_SERVICE_ENDPOINT.LOGIN}`, payload);
    return response.data;
  } catch (error: any) {
    throw handleAxiosError(error);
  }
}

export const logoutAccount = async (): Promise<LogoutAccountResponse> => {
  try {
    const response = await axiosInstance.post<any, AxiosResponse>(AUTH_SERVICE_ENDPOINT.LOGOUT);
    return response.data;
  } catch (error: any) {
    throw handleAxiosError(error);
  }
}