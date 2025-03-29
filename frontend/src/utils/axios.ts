import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.API_TOKEN}`,
  },
});

export default axiosInstance;
