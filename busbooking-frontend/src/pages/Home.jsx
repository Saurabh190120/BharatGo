import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const search = () => {
    navigate(`/buses?source=${source}&destination=${destination}&date=${date}`);
  };

  return (
    <div className="p-10">
      <div className="bg-white shadow p-6 rounded">
        <input placeholder="From" onChange={e => setSource(e.target.value)} />
        <input placeholder="To" onChange={e => setDestination(e.target.value)} />
        <input type="date" onChange={e => setDate(e.target.value)} />
        <button onClick={search} className="bg-red-500 text-white px-4 py-2">
          Search Buses
        </button>
      </div>
    </div>
  );
}
