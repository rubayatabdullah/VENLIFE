import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";

export default function HostVansDetail() {
  const [currentVan, setCurrentVan] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans));
  }, []);

  if (!currentVan) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <section>
        <Link to=".." relative="path" className="back-button">
          &larr; <span>Back to all vans</span>
        </Link>
        <div className="host-van-detail-layout-container">
          <div className="host-van-detail">
            <img src={currentVan.imageUrl} />
            <div className="host-van-detail-info-text">
              <i className={`van-type van-type-${currentVan.type}`}>
                {currentVan.type}
              </i>
              <h3>{currentVan.name}</h3>
              <h4>${currentVan.price}/day</h4>
            </div>
          </div>
          <nav className="host-van-detail-nav">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="."
              end
            >
              Details
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="photos"
            >
              Photos
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="pricing"
            >
              Pricing
            </NavLink>
          </nav>
          <Outlet context={{ currentVan }} />
        </div>
      </section>
    </>
  );
}
