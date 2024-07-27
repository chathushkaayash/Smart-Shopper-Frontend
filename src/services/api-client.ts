import { Credentials } from "@/state-management/auth/store";
import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "http://localhost:9090",
  withCredentials: true,
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = async (requestConfig: AxiosRequestConfig) => {
    // console.log(token.state);
    return await axiosInstance
      .get<FetchResponse<T>>(this.endpoint, { ...requestConfig })
      .then((res) => res.data);
  };

  get = (id: string | number) =>
    axiosInstance.get<T>(this.endpoint + "/" + id).then((res) => res.data);

  create = (data: T) => {
    return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
  };

  login = (data: Credentials) => {
    return axiosInstance
      .post<T>(this.endpoint, data)
      .then((res) => res.data);
  };
}

export default APIClient;
