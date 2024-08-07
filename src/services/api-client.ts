import { Credentials } from "@/state-management/auth/store";
import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "http://localhost:9090",
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});


class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (requestConfig: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, { ...requestConfig })
      .then((res) => res.data);
  };

  get = (id: string | number) =>
    axiosInstance.get<T>(this.endpoint + "/" + id).then((res) => res.data);

  create = (data: T) => {
    return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
  };

  update = (data: T) => {
    return axiosInstance.patch<T>(this.endpoint, data).then((res) => res.data);
  };

  delete = (id: number) => {
    return axiosInstance
      .delete<T>(this.endpoint, { params: { id } })
      .then((res) => res.data);
  };

  // ------------------------------------------- Special methods -------------------------------------------
  login = (data: Credentials) => {
    return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
  };

  register = (data: Credentials) => {
    return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
  };
}

export default APIClient;
