import axios, { AxiosRequestConfig } from "axios";
import { getProductsData } from "../../data/products";


// export interface T {
//   id: number;
//   name: string;
// }

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    // key: "c7b18323a47d40c394ea5b019646b1f5",
    key: "0896be4b90fb4060b4c2f5dc1275fde1",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (requestConfig: AxiosRequestConfig) => {
    let productData= getProductsData(requestConfig.params);
    return { data: productData, count: productData.length, next: 'true', results: productData };

    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, { ...requestConfig })
      .then((res) => res.data);
  };

  create = (data: T) => {
    return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
  };
}

export default APIClient;
