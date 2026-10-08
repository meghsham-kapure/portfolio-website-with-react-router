import { Header, Footer } from "./components";

import { Outlet } from "react-router";

function Layout() {
  return (
    <div className="flex flex-col justify-between bg-gray-950">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
