import { User } from "@/state-management/auth/store";
import { DateTime } from "@/utils/Time";

export interface LikedProducts {
  id: number;
  productId: number;
  userId?: number;
}

// ---------------------------------------------- Supermarket ----------------------------------------------
export interface BaseSupermarket {
  [x: string]: any;
  id: number;
  name: string;
  contactNo: string;
  logo: string;
  location: string;
  address: string;
  supermarketmanagerId: number;
}

export interface Supermarket {
  //storeprice: Storeprice[]
  //opportunitysupermarket: any[]
  //supermarketorder: Supermarketorder[]
  id: number;
  name: string;
  contactNo: string;
  logo: string;
  location: string;
  address: string;
  
  supermarketManager: User;
}


// ---------------------------------------------- Review ----------------------------------------------
export interface Review {
  id: number;
  reviewType: string;
  user: User;
  targetId: number;

  title: string;
  content: string;
  rating: number;
  createdAt: DateTime;
}