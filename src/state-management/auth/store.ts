import { create, StateCreator } from "zustand";
import { persist } from "zustand/middleware";
import { jwtDecode } from "jwt-decode";

export interface Credentials {
  email_or_number: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  jwtToken: string;
}

export interface User {
  id?: number;
  name: string;
  role: string;
  email: string;
  password?: string;
  number: string;
  profilePic: string;
  status: string;

  consumerId?: number;
  supermarketId?: number;
  driverId?: number;
  adminId?: number;
}

interface AuthStore {
  user: User | null;
  login: (formData: LoginResponse) => void;
  logout: () => void;
  expireToken: () => void;
}

const authStore: StateCreator<AuthStore> = (set) => ({
  user: null,

  login: (res: LoginResponse) => {
    localStorage.setItem("token", res.jwtToken);
    set(() => ({ user: res.user }));
  },
  logout: () => {
    localStorage.removeItem("token");
    set(() => ({ user: null }));
  },

  expireToken: () => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);

      if (decoded.exp && decoded.exp * 1000 < Date.now()) {
        localStorage.removeItem("token");
        set(() => ({ user: null }));
      }
    }else{
      set(() => ({ user: null }));
    }
  },
});

const persistedAuthStore = persist<AuthStore>(authStore, {
  name: "auth-store",
});

const useAuthStore = create(persistedAuthStore);

export default useAuthStore;