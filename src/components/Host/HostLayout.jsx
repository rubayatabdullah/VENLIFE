import { Link, Outlet } from "react-router-dom";

export default function HostLayout() {
  return (
    <div className="layout">
      <nav className="host-nav">
        <Link to="/host">Dashboard</Link>
        <Link to="/host/income">Income</Link>
        <Link to="/host/review">Reviews</Link>
      </nav>
      <Outlet />
    </div>
  );
}
