import { create } from "zustand";

export interface ProductQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface ProductQueryStore {
  productQuery: ProductQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useProductQueryStore = create<ProductQueryStore>((set) => ({
  productQuery: {},
  setSearchText: (searchText: string) =>
    set(() => ({ productQuery: { searchText } })),
  setGenreId: (genreId: number) =>
    set((store) => ({ productQuery: { ...store.productQuery, genreId } })),
  setPlatformId: (platformId: number) =>
    set((store) => ({ productQuery: { ...store.productQuery, platformId } })),
  setSortOrder: (sortOrder: string) =>
    set((store) => ({ productQuery: { ...store.productQuery, sortOrder } })),
}));

export default useProductQueryStore;
