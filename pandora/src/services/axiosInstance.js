import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
