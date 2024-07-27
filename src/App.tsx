import Navbar from "./components/Navbar";

import { Outlet } from "react-router-dom";

import { Show } from "@chakra-ui/react";
import BottomNav from "./components/BottomNav";

export interface ProductQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

function App() {
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
