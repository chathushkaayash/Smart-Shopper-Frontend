import { baseURL } from "@/services/api-client";
import { BaseAddress, CartItem } from "@/services/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const objectToFormData = (obj: Record<string, any>) => {
  const formData = new FormData();
  for (const key in obj) {
    formData.append(key, obj[key]);
  }
  return formData;
};

export const getImageUrl = (url: string | undefined) => {
  if (!url) return "https://via.placeholder.com/100";
  return baseURL + url || "https://via.placeholder.com/100";
};

export const getSuperMarketIdList = (cartItems: CartItem[] | undefined) => {
  if (!cartItems) return [];

  const supermarketIdList: number[] = [];
  cartItems.forEach((item) => {
    const supermarketId = item.supermarketItem?.supermarketId;
    if (supermarketId) {
      if (!supermarketIdList.includes(supermarketId)) {
        supermarketIdList.push(supermarketId);
      }
    }
  });
  return supermarketIdList;
};

export const getPrice = (price: number | string) => {
  if (typeof price === "string") {
    price = parseFloat(price);
  }
  return (Math.round(price * 100) / 100).toFixed(2);
};

export const getDecimal = (value: number | string) => {
  if (typeof value === "string") {
    value = parseFloat(value);
  }
  return (Math.round(value * 100) / 100).toFixed(1);
};

export const getDefaultAddress = (addresses: BaseAddress[] = []) : BaseAddress | null => {
  if (addresses.length > 0) {
    return addresses.sort((a, b) => b.priority - a.priority)[0];
  }
  return null;
};
