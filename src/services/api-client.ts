import { Credentials } from "@/state-management/auth/store";
import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: boolean | null;
  results: T[];
}
const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;
export const baseURL = VITE_BASE_URL || "http://localhost:9090";

const axiosInstance = axios.create({
  baseURL: baseURL,
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Jwt-key"] = `Bearer ${token}`;
  }
  return config;
});

// If backend sends error message in the response, we can catch it here and show it to the user
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.data?.message)
      return Promise.reject(error.response.data.message);
    return Promise.reject(error);
  }
);

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

  create = (data: Omit<T, "id">) => {
    return axiosInstance.post<R>(this.endpoint, data).then((res) => res.data);
  };

  update = (id: number, data: Partial<T>) => {
    return axiosInstance
      .patch<R>(this.endpoint + "/" + id, data)
      .then((res) => res.data);
  };

  delete = (id: number) => {
    return axiosInstance
      .delete<R>(this.endpoint + "/" + id)
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
