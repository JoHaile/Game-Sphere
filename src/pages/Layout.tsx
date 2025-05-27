import Footer from "@/components/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
