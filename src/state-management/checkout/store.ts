import { CheckoutRequest } from "@/services/Cart/useCartCheckout";
import { create, StateCreator } from "zustand";
import { persist } from "zustand/middleware";

interface CheckoutRequestStore {
  checkoutRequest: CheckoutRequest;
  setShippingAddress: (shippingAddress: string) => void;
  setShippingLocation: (shippingLocation: string) => void;
  setShippingMethod: (shippingMethod: string) => void;
  setConsumerId: (consumerId: number) => void;
}
const checkoutRequestStore: StateCreator<CheckoutRequestStore> = (set) => ({
  checkoutRequest: {} as CheckoutRequest,

  setShippingAddress: (shippingAddress: string) =>
    set((store) => ({
      checkoutRequest: { ...store.checkoutRequest, shippingAddress },
    })),

  setShippingLocation: (shippingLocation: string) =>
    set((store) => ({
      checkoutRequest: { ...store.checkoutRequest, shippingLocation },
    })),

  setShippingMethod: (shippingMethod: string) =>
    set((store) => ({
      checkoutRequest: { ...store.checkoutRequest, shippingMethod },
    })),

  setConsumerId: (consumerId: number) =>
    set((store) => ({
      checkoutRequest: { ...store.checkoutRequest, consumerId },
    })),
});

const persistedCheckoutRequestStore = persist<CheckoutRequestStore>(
  checkoutRequestStore,
  {
    name: "checkout-request-store",
  }
);

const useCheckoutRequestStore = create(persistedCheckoutRequestStore);

export default useCheckoutRequestStore;
