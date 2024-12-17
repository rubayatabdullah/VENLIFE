import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
  return (
    <div className="layout">
      <nav className="host-nav">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="."
          end
        >
          Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="income"
        >
          Income
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="vans"
        >
          Vans
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="review"
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
