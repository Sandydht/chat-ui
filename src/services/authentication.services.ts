import axios, { AxiosResponse } from "axios";
import { AUTH_SERVICE_ENDPOINT } from "../constants/auth-service-endpoint.constants";
import {
  LoginAccountRequest,
  LoginAccountResponse,
  LogoutAccountResponse,
  RegisterAccountRequest,
  RegisterAccountResponse
} from "../models/auth-service.models";

const baseURL = import.meta.env.VITE_BASE_URL;

export const registerAccount = async (payload: RegisterAccountRequest): Promise<RegisterAccountResponse> => {
  try {
    const response = await axios.post<RegisterAccountRequest, AxiosResponse>(`${baseURL}${AUTH_SERVICE_ENDPOINT.REGISTER}`, payload);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const loginAccount = async (payload: LoginAccountRequest): Promise<LoginAccountResponse> => {
  try {
    const response = await axios.post<LoginAccountRequest, AxiosResponse>(`${baseURL}${AUTH_SERVICE_ENDPOINT.LOGIN}`, payload);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const logoutAccount = async (): Promise<LogoutAccountResponse> => {
  try {
    const response = await axios.post<any, AxiosResponse>(`${baseURL}${AUTH_SERVICE_ENDPOINT.LOGOUT}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}