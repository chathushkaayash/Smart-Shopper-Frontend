import { baseURL } from "@/services/api-client";
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
