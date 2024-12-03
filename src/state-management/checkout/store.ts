import { CheckoutRequest } from "@/services/Cart/useCartCheckout";
import { create } from "zustand";

interface CheckoutRequestStore {
  checkoutRequest: CheckoutRequest;
  setShippingAddress: (shippingAddress: string) => void;
    setShippingLocation: (shippingLocation: string) => void;
    setShippingMethod: (shippingMethod: string) => void;
    setConsumerId: (consumerId: number) => void;
}

const useCheckoutRequestStore = create<CheckoutRequestStore>((set) => ({
    checkoutRequest: {} as CheckoutRequest,

    setShippingAddress: (shippingAddress: string) =>
    set((store) => ({ checkoutRequest: { ...store.checkoutRequest, shippingAddress } })),

    setShippingLocation: (shippingLocation: string) =>
    set((store) => ({ checkoutRequest: { ...store.checkoutRequest, shippingLocation } })),

    setShippingMethod: (shippingMethod: string) =>
    set((store) => ({ checkoutRequest: { ...store.checkoutRequest, shippingMethod } })),

    setConsumerId: (consumerId: number) =>
    set((store) => ({ checkoutRequest: { ...store.checkoutRequest, consumerId } })),
}));

export default useCheckoutRequestStore;
