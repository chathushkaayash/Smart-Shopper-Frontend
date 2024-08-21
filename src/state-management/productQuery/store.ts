import { create } from "zustand";

export interface ProductQuery {
  category?: string;
  price?: string;
  sortOrder?: string;
  searchText?: string;
}

interface ProductQueryStore {
  productQuery: ProductQuery;
  setSearchText: (searchText: string) => void;
  setCategory: (category: string) => void;
  setPrice: (price: string) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useProductQueryStore = create<ProductQueryStore>((set) => ({
  productQuery: {},

  setSearchText: (searchText: string) =>
    set(() => ({ productQuery: { searchText } })),

  setCategory: (category: string) =>
    set((store) => ({ productQuery: { ...store.productQuery, category } })),

  setPrice: (price: string) =>
    set((store) => ({ productQuery: { ...store.productQuery, price } })),

  setSortOrder: (sortOrder: string) =>
    set((store) => ({ productQuery: { ...store.productQuery, sortOrder } })),
  
}));

export default useProductQueryStore;
