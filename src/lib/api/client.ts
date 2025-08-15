import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: false,
});

// Interceptor: before every request, attach token if we have one
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // (fake for now)
  if (token) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
