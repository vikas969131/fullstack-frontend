// src/services/api.js
import axios from "axios";

/* 1️⃣  Create ONE Axios instance for the whole app */
const api = axios.create({
  baseURL: "http://localhost:8080", // your Spring Boot server
});

/* 2️⃣  Interceptor: runs before EVERY request */
api.interceptors.request.use((config) => {
  // Read token from localStorage
  const token = localStorage.getItem("token");

  // If token exists, attach it as "Bearer <token>"
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;          // MUST return config!
});

export default api;
