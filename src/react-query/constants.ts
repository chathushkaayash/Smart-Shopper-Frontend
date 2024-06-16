import { ProductQuery } from "../App";

export const CACHE_KEY_GAMES = (productQuery:ProductQuery) => ["products", productQuery];
