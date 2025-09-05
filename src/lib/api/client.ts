import axios from "axios";
import { getToken } from "../token";
const apiUrl = import.meta.env.VITE_API_URL;
if (!apiUrl) {
  throw new Error("VITE_API_URL is not defined");
}

const api = axios.create({
  baseURL: apiUrl,
  withCredentials: false,
});

// Interceptor: before every request, attach token if we have one
api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
