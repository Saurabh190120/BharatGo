import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import api from "../api/axios";

export default function BusList() {
  const [buses, setBuses] = useState([]);
  const [params] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    api.get("buses/search/", {
      params: {
        source: params.get("source"),
        destination: params.get("destination"),
        date: params.get("date"),
      },
    }).then(res => setBuses(res.data));
  }, []);

  return (
    <div className="p-6">
      {buses.map(bus => (
        <div key={bus.id} className="border p-4 mb-3">
          <h2>{bus.bus_name}</h2>
          <p>{bus.bus_type}</p>
          <button
            onClick={() => navigate(`/seats/${bus.id}`)}
            className="bg-green-500 text-white px-3 py-1"
          >
            View Seats
          </button>
        </div>
      ))}

      {buses.map(bus => (
  <BusCard
    key={bus.id}
    bus={bus}
    onSelect={() => navigate(`/seats/${bus.id}`)}
  />
))}
    </div>
  );
}
