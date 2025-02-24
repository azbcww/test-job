import axios from "axios";

const API_BASE_URL = "http://localhost:3001";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const fetcher = (url: string) => apiClient.get(url).then((res) => res.data);
