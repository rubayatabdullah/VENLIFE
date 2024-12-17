import { NavLink } from "react-router-dom";
import icon from "./images/logo.png";

export default function Header() {
  const activeStyle = {
    textDecoration: "underline",
    fontWeight: "bold",
  };
  return (
    <div className="navbar-container">
      <div className="navbar">
        <NavLink className={({ isActive }) => isActive && "active"} to="/">
          <img src={icon} alt="icon" />
        </NavLink>
        <nav>
          <NavLink
            className={({ isActive }) => isActive && "active"}
            to="/host"
          >
            Host
          </NavLink>
          <NavLink
            className={({ isActive }) => isActive && "active"}
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) => isActive && "active"}
            to="/vans"
          >
            Vans
          </NavLink>
        </nav>
      </div>
    </div>
  );
}
