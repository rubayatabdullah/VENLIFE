import { useEffect, useState } from "react";

export default function Vans() {
  const [vanData, setVanData] = useState([]);
  useEffect(() => {
    fetch("api/vans")
      .then((response) => response.json())
      .then((data) => {
        setVanData(data.vans);
        console.log(data);
      });
  }, []);

  const allVans = vanData.map((van) => {
    return (
      <div key={van.id} className="van-tile">
        <img src={van.imageUrl} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
          <div className="van-type-container">
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="van-list-container">
      <div className="van-list">{allVans}</div>
    </div>
  );
}
