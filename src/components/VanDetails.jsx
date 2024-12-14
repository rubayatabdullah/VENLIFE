import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function VanDetails() {
  const params = useParams();
  const [van, setVan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/vans/${params.id}`)
      .then((response) => {
        if (!response.ok) {
          throw Error("Failed to fetch van data");
        }
        return response.json();
      })
      .then((data) => {
        setVan(data.vans);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching van:", err);
        setError(err.message);
        setLoading(false);
      });
  }, [params.id]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;
  if (!van) return <h2>No van found</h2>;

  return (
    <div className="van-detail-container">
      <div className="van-detail">
        <img src={van.imageUrl} alt={van.name} />
        <div className="specification">
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className="find">Rent this van</button>
        </div>
      </div>
    </div>
  );
}
