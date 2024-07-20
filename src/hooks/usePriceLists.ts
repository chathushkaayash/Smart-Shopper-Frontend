import APIClient, { FetchResponse } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

// export interface Supermarket {
//   id: number
//   name: string
//   contactNo: string
//   logo: string
//   location: string
//   address: string
//   supermarketmanagerId: number
// }

// export interface PriceList {
//   id: number;
//   productId: string;
//   supermarketId: string;
//   price: number;
//   quantity: number;
//   discountedTotal: number;
//   supermarket: Supermarket;
// }

export interface PriceList {
  supermarket: Supermarket;
  id: number;
  productId: number;
  supermarketId: number;
  price: number;
  quantity: number;
  discountedTotal: number;
}

export interface Supermarket {
  id: number;
  name: string;
  contactNo: string;
  logo: string;
  location: string;
  address: string;
  supermarketmanagerId: number;
}

const apiClient = new APIClient<FetchResponse<PriceList>>("/pricelists");

const usePriceList = (id: string) => {
  return useQuery({
    queryKey: ["pricelists", id],
    queryFn: () => apiClient.get(id),
  });
};

export default usePriceList;
