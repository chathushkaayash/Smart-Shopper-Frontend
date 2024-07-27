import { SupermarketItem } from "@/hooks/usePriceLists";
import APIClient from "@/services/api-client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  supermarketItem: SupermarketItem | null;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  setItems: (items: CartItem[]) => void;
  addItem: (item: CartItem) => void;
  removeItem: (productId: number) => void;

  incrementQuantity: (priceListId: number) => void;
  decrementQuantity: (priceListId: number) => void;
  fetchData: () => void;
}

const apiClient = new APIClient<CartItem>("/carts");

const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],

      setItems: (items: CartItem[]) => {
        set({ items });
      },

      addItem: (newCartItem: CartItem) => {
        set((state) =>
          // check if the item is already in the cart replace it with the new item
          {
            return state.items.some(
              (i) =>
                i.supermarketItem?.productId ===
                newCartItem.supermarketItem?.productId
            )
              ? // replace newCartItem
                {
                  items: state.items.map((i) =>
                    i.supermarketItem?.productId ===
                    newCartItem.supermarketItem?.productId
                      ? newCartItem
                      : i
                  ),
                }
              : { items: [...state.items, newCartItem] };
          }
        );
      },

      removeItem: (productId: number) => {
        set((state) => ({
          items: state.items.filter(
            (i) => i.supermarketItem?.productId !== productId
          ),
        }));
      },

      incrementQuantity: (supermarketItemId: number) => {
        set((state) => ({
          items: state.items.map((i) =>
            i.supermarketItem?.id === supermarketItemId
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        }));
      },

      decrementQuantity: (priceListId: number) => {
        set((state) => ({
          items: state.items.map((i) =>
            i.supermarketItem?.id === priceListId
              ? { ...i, quantity: i.quantity - 1 }
              : i
          ),
        }));
      },

      fetchData: () => {
        apiClient
          .getAll({ params: { userId: 6 } })
          .then((data) => data.results)
          .then((results) => {
            set({ items: results });
          });
      },
    }),
    { name: "cart-store" }
  )
);

export default useCartStore;
