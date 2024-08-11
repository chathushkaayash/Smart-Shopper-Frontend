import { Credentials } from "@/state-management/auth/store";
import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}
const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;
const VITE_API_KEY = import.meta.env.VITE_API_KEY;

console.log(VITE_BASE_URL);

const axiosInstance = axios.create({
  baseURL: VITE_BASE_URL || "http://localhost:9090",

  headers: {
    "API-Key": VITE_API_KEY || "",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Jwt-key"] = `Bearer ${token}`;
  }
  return config;
});

class APIClient<T, R = T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (requestConfig: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<R>>(this.endpoint, { ...requestConfig })
      .then((res) => res.data);
  };

  get = (id: string | number) =>
    axiosInstance.get<T>(this.endpoint + "/" + id).then((res) => res.data);

  create = (data: T) => {
    return axiosInstance.post<R>(this.endpoint, data).then((res) => res.data);
  };

  update = (data: T) => {
    return axiosInstance.patch<R>(this.endpoint, data).then((res) => res.data);
  };

  delete = (id: number) => {
    return axiosInstance
      .delete<R>(this.endpoint, { params: { id } })
      .then((res) => res.data);
  };

  // ------------------------------------------- Special methods -------------------------------------------
  login = (data: Credentials) => {
    return axiosInstance.post<R>(this.endpoint, data).then((res) => res.data);
  };

  register = (data: Credentials) => {
    return axiosInstance.post<R>(this.endpoint, data).then((res) => res.data);
  };
}

export default APIClient;
