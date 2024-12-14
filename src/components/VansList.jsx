import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Vans() {
  const [vanData, setVanData] = useState([]);
  useEffect(() => {
    fetch("api/vans")
      .then((response) => response.json())
      .then((data) => setVanData(data.vans));
  }, []);

  const allVans = vanData.map((van) => {
    return (
      <div key={van.id} className="van-tile">
        <Link
          to={`/vans/${van.id}`}
          aria-label={`view details for ${van.name} starts at $${van.price}/day`}
        >
          <img src={van.imageUrl} />
          <div className="van-info">
            <h2>{van.name}</h2>
            <p>
              ${van.price}
              <span>/day</span>
            </p>
            <div className="van-type-container">
              <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <div className="van-list-container">
      <h1>Exlore our van options</h1>
      <div className="van-list">{allVans}</div>
    </div>
  );
}
