import axios from 'axios';
import { LOCAL_STORAGE_SERVICE } from '../constants/local-storage-service.constant';
import { PAGE } from '../constants/page.constant';
import { getItemFromLocalStorage } from '../services/local-storage.service';

const baseURL = import.meta.env.VITE_BASE_URL;
const axiosInstance = axios.create({
  baseURL
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getItemFromLocalStorage(LOCAL_STORAGE_SERVICE.ACCESS_TOKEN);
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
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