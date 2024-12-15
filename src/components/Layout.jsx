import { Outlet } from "react-router-dom";
import Header from "./Navbar";

export default function Layout() {
  return (
    <div className="layout">
      <Header />
      <Outlet />
    </div>
  );
}
