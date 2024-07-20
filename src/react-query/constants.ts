import { ProductQuery } from "../App";

export const CACHE_KEY_GAMES = (productQuery: ProductQuery) => [
  "products",
  productQuery,
];
export const CACHE_KEY_PRODUCT = (id: number) => ["product", id];
