import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Navbar";

export default function Layout() {
  return (
    <div className="layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
