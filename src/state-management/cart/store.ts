import { CartItem } from "@/hooks/useCartItem";
import APIClient from "@/services/api-client";
import { create } from "zustand";

interface CartItemInsert {
  quantity: number;
  supermarketitemId: number;
}

interface CartStore {
  items: CartItem[];
  setItems: (items: CartItem[]) => void;

  addItem: (item: CartItem, invalidateQueries: () => void) => void;
  removeItem: (productId: number, invalidateQueries: () => void) => void;
  updateItem: (item: CartItem, invalidateQueries: () => void) => void;

  getProductInCart: (productId: number) => CartItem | undefined;
}

const apiClient = new APIClient<CartItem | CartItemInsert>("/carts");

const useCartStore = create<CartStore>()((set) => ({
  items: [],

  setItems: (items: CartItem[]) => {
    set({ items });
  },

  addItem: (item: CartItem) => {
    const cartItemInsert: CartItemInsert = {
      quantity: item.quantity,
      supermarketitemId: item.supermarketItem.id,
    };
    apiClient.create(cartItemInsert);

    set((state) => ({ items: [...state.items, item] }));
  },

  removeItem: (id, invalidateQueries) => {
    apiClient.delete(id).then(invalidateQueries);

    set((state) => ({
      items: state.items.filter((i) => i.id !== id),
    }));
  },

  updateItem: (item: CartItem, invalidateQueries: () => void) => {
    apiClient.update(item.id, {...item}).then(() => {
      invalidateQueries();
    });

    set((state) => ({
      items: state.items.map((i) => (i.id === item.id ? item : i)),
    }));
  },

  getProductInCart: (productId: number): CartItem | undefined => {
    return useCartStore
      .getState()
      .items.find((i) => i.supermarketItem?.productId === productId);
  },
}));

export default useCartStore;
