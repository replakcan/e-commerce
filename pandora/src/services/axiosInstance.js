// src/services/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com", // Base URL
  timeout: 1000, // 1 saniye timeout
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
