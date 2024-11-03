import Navbar from "./components/Navbar";

import { Outlet } from "react-router-dom";

import { Show } from "@chakra-ui/react";
import { useEffect } from "react";
import { Toaster } from "sonner";
import BottomNav from "./components/BottomNav";
import useAuthStore from "./state-management/auth/store";

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
        <Toaster className="!bg-red-800 !border-2" richColors />
      </Show>

      <Outlet />

      <Show below="md">
        <BottomNav />
        <Toaster position="top-center" className="!bg-red-800 !border-2" richColors />
      </Show>
    </>
  );
}

export default App;
