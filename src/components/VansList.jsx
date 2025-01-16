import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Vans() {
  const [vanData, setVanData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  useEffect(() => {
    fetch("api/vans")
      .then((response) => response.json())
      .then((data) => setVanData(data.vans));
  }, []);

  const displayVans = typeFilter
    ? vanData.filter((van) => van.type === typeFilter)
    : vanData;

  const allVans = displayVans.map((van) => {
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
      <div className="filter-buttons">
        <button
          onClick={() => setSearchParams({ type: "simple" })}
          className="filter"
        >
          simple
        </button>
        <button
          onClick={() => setSearchParams({ type: "rugged" })}
          className="filter"
        >
          rugged
        </button>
        <button
          onClick={() => setSearchParams({ type: "luxury" })}
          className="filter"
        >
          luxury
        </button>

        <button onClick={() => setSearchParams({})} className="reset-filter">
          Reset Filter
        </button>
      </div>
      <div className="van-list">{allVans}</div>
    </div>
  );
}
