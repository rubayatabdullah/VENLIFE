import { Link } from "react-router-dom";
import icon from "./images/logo.png";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <Link to="/">
          <img src={icon} alt="icon" />
        </Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </div>
    </div>
  );
}
