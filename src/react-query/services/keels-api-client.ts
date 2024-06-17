import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://zebraliveback.keellssuper.com/1.0/Showcase/",
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (requestConfig: AxiosRequestConfig) => {
    const pageParam = requestConfig.params;
    console.log("pageParam", pageParam);
    // let productData= getProductsData(requestConfig.params);
    // return { data: productData, count: productData.length, next: 'true', results: productData };

    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, {
        ...requestConfig,
        params: {
          ...requestConfig.params,
          campaignKeyWord: "keells_products",
          fromCount: 0,
          toCount: 20,
        },
      })
      .then((res) => res.data);
  };

  create = (data: T) => {
    return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
  };
}

export default APIClient;
