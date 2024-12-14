import { Link } from "react-router-dom";
import icon from "./images/logo.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={icon} alt="icon" />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/about">Vans</Link>
      </nav>
    </div>
  );
}
