import { SupermarketItem } from "@/hooks/usePriceLists";
import { create } from "zustand";

export interface CartItem {
  id?: number;
  supermarketItem: SupermarketItem | null;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  setItems: (items: CartItem[]) => void;
}

const useCartStore = create<CartStore>()((set) => ({
  items: [],

  setItems: (items: CartItem[]) => {
    set({ items });
  },
}));

export default useCartStore;
