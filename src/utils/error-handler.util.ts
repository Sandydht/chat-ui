import axios from "axios";

const handleAxiosError = (error: any): string => {
  if (axios.isAxiosError(error)) {
    throw error.response?.data.message;
  } else {
    throw error;
  }
}

export default handleAxiosError
