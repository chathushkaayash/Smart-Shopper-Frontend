import { User } from "@/state-management/auth/store";
import { DateTime } from "@/utils/Time";

// Base interfaces
// These interfaces are used to define the shape of the data that exists in the database.
// They are used to create more complex interfaces that include relationships between different entities.

// How to update:
// if you want to update data in the database, you can update them using Base interfaces.

// ---------------------------------------------- Product ----------------------------------------------
// This table is used to store all the products in the system.

export interface BaseProduct {
  category: string;
  id: number;
  name: string;
  description: string;
  imageUrl: string;

  price: number;
}

export interface Product extends BaseProduct {
  supermarketItems: BaseSupermarketItem[];
}

// ---------------------------------------------- Liked Products ----------------------------------------------

export interface LikedProducts {
  id: number;
  productId: number;
  userId?: number;
}

// ---------------------------------------------- Activity ----------------------------------------------

export interface Activity {
  id: number;
  userId: number;
  description: string;
  dateTime: DateTime;
}

// ---------------------------------------------- Supermarket ----------------------------------------------
export interface BaseSupermarket {
  id: number;
  name: string;
  contactNo: string;
  logo: string;
  location: string;
  city: string;
  address: string;
  supermarketmanagerId: number;
}

export interface Supermarket extends BaseSupermarket {
  supermarketManager: User;
  supermarketItems: BaseSupermarketItem[];
  // opportunitysupermarket: BaseOpportunitySupermarket[];
  supermarketOrder: BaseSupermarketOrder[];
}

// ---------------------------------------------- OpportunitySupermarket ----------------------------------------------
// This is a many-to-many relationship between Opportunity and Supermarket
// It is used to store which
// export interface BaseOpportunitySupermarket {
//   id: number;
//   opportunityId: number;
//   supermarketId: number;
// }

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
  _createdAt: DateTime;
}

// ---------------------------------------------- Order ----------------------------------------------
export enum OrderStatus {
  ToPay = "ToPay",
  Processing = "Processing",
  Prepared = "Prepared",
  Delivered = "Completed", // Delivered or Picked up
  Cancelled = "Cancelled",
}

export interface BaseOrder {
  id: number;
  consumerId: number;
  status: OrderStatus;
  shippingAddress: string;
  shippingMethod: string;
  location: string;
  deliveryFee: number;
  orderPlacedOn: DateTime;
}

export interface Order extends BaseOrder {
  orderItems: BaseOrderItem[];
  supermarketOrders: BaseSupermarketOrder[];
  opportunity: BaseOpportunity[];
}

// ---------------------------------------------- Order Items ----------------------------------------------
// This table is used to store the items in an order.

export interface BaseOrderItem {
  id: number;
  supermarketId: number;
  productId: number;
  quantity: number;
  price: number;
  _orderId: number;
}

export interface OrderItem extends BaseOrderItem {
  _order: BaseOrder;
}

// ---------------------------------------------- Supermarket Order ----------------------------------------------
// When a consumer places an order, the order is split into multiple supermarket orders for each supermarket.
// When the supermarket receives the order, they can update the status of the supermarket order.
// When the order is prepared, the qr code is generated and sent to the consumer or delivery person.

export interface BaseSupermarketOrder {
  id: number;
  status: string;
  qrCode: string;
  _orderId: number;
  supermarketId: number;
}

export interface SupermarketOrder extends BaseSupermarketOrder {
  _order: BaseOrder;
  supermarket: BaseSupermarket;
}

// ---------------------------------------------- Supermarket Item ----------------------------------------------
// This table is used to store the prices of products in different supermarkets.

export interface BaseSupermarketItem {
  id: number;
  productId: number;
  supermarketId: number;
  price: number;
  discount: number;
  availableQuantity: number;
}

export interface SupermarketItem extends BaseSupermarketItem {
  product: BaseProduct;
  supermarket: BaseSupermarket;
  cartItem: BaseCartItem[];
}

// ---------------------------------------------- Cart Item ----------------------------------------------
// This table is used to store the items in a consumer's cart.
// When a consumer places an order, the items in the cart are used to create the order items.

export interface BaseCartItem {
  id: number;
  supermarketitemId: number;
  quantity: number;
  consumerId: number;
  productId: number;
  orderId: number; // if the item is in an order, default -1
}

export interface CartItem extends BaseCartItem {
  supermarketItem: SupermarketItem;
}

// ---------------------------------------------- Opportunity ---------------------------------------------------
// This table is used to store the opportunities for delivery.
// When all supermarkets have processed the order, an opportunity is created.
// Driver can accept the opportunity and deliver the order.

export interface BaseOpportunity {
  id: number;
  totalDistance: number;
  tripCost: number;
  consumerId: number;
  deliveryCost: number;
  startLocation: string;
  deliveryLocation: string;

  status: string;
  _orderId: number;
  driverId: number;
  orderPlacedOn: DateTime;
}

// ---------------------------------------------- Base User ---------------------------------------------------

export interface BaseUser {
  id: number;
  name: string;
  email: string;
  password: string;
  number: string;
  profilePic: string;
  role: string;
  status: string;
  lastLogin: DateTime;
  createdAt: DateTime;
  updatedAt: DateTime;
  deletedAt: DateTime;
}

// ---------------------------------------------- Driver ---------------------------------------------------

export interface BaseDriver {
  id: number;
  userId: number;
  nic: string;
  courierCompany: string;
  vehicleType: string;
  vehicleColor: string;
  vehicleName: string;
  vehicleNumber: string;
}

export interface Driver extends BaseDriver {
  user: User;
}

export interface DriverRegistrationDetails {
  id: number;

  // Personal Details
  name: string;
  nic: string;
  email: string;
  contactNo: string;
  profilePic: string;

  // Vehicle Details
  courierCompany: string;
  vehicleType: string;
  vehicleColor: string;
  vehicleName: string;
  vehicleNumber: string;

  // Credentials
  password: string;
  confirmPassword?: string;
  OTP: string;
}

// ---------------------------------------------- Non Verified Driver ---------------------------------------------------
export enum NonVerifiedDriverStatus {
  OTPPending,
  OTPVerified,
  Accepted,
  Declined,
}

export interface NonVerifiedDriver {
  id: number;

  // Personal Details
  name: string;
  nic: string;
  email: string;
  contactNo: string;
  profilePic: string;

  // Vehicle Details
  courierCompany: string;
  vehicleType: string;
  vehicleColor: string;
  vehicleName: string;
  vehicleNumber: string;

  // Credentials
  OTP: string;
  password: string;
  status?: NonVerifiedDriverStatus;

  createdAt: DateTime;
}

// ---------------------------------------------- Payhere Request ---------------------------------------------------
export interface PayhereRequest {
  merchant_id: string;

  return_url: string;
  cancel_url: string;
  notify_url: string;

  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  order_id: string;
  items: string;
  currency: string;
  amount: string;
  hash: string;
}

// ---------------------------------------------- Address ---------------------------------------------------
export interface BaseAddress {
  id: number;
  addressName: string; // home, work, etc
  address: string; // actual address
  city: string;
  location: string; // coordinates [latitude, longitude]
  priority: number;
  consumerId: number;
}

// ------------------------------------ Optimized Route ------------------------------------
export interface OptimizedRoute {
  supermarketIds: number[];
  totalDistance: number;
  deliveryCost: number;
}
