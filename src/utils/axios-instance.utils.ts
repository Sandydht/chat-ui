import axios from 'axios';
import { LOCAL_STORAGE_SERVICE } from '../constants/local-storage-service.constants';
import { PAGE } from '../constants/page.constants';

const baseURL = import.meta.env.VITE_BASE_URL;
const axiosInstance = axios.create({
  baseURL
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Modify request configuration if needed (e.g., add token to headers)
    const token = localStorage.getItem(LOCAL_STORAGE_SERVICE.ACCESS_TOKEN);
    if (token) {
      config.headers['Authorization'] = token;
    }
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // Modify response data if needed
    return response;
  },
  (error) => {
    // Handle response error, e.g., handle authentication errors
    if (error.response && error.response.status === 401) {
      // Redirect to login page, or clear localStorage and redirect
      localStorage.clear();
      // For example, redirect to login page
      window.location.replace(PAGE.LOGIN);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;