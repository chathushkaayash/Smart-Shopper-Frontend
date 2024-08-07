import Navbar from "./components/Navbar";

import { Outlet } from "react-router-dom";

import { Show } from "@chakra-ui/react";
import BottomNav from "./components/BottomNav";
import { useEffect } from "react";
import useAuthStore from "./state-management/auth/store";

export interface ProductQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  const { expireToken } = useAuthStore();

  useEffect(() => {
    // remove token if jwt is expired
    expireToken();
  }, []);

  return (
    <>
      <Show above="md">
        <Navbar />
      </Show>

      <Outlet />

      <Show below="md">
        <BottomNav />
      </Show>
    </>
  );
}

export default App;
