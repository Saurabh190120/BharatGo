import { useState } from "react";
import api from "../api/axios";
import ProviderSidebar from "../components/ProviderSidebar";

export default function AddBus() {
  const [busName, setBusName] = useState("");
  const [busType, setBusType] = useState("");
  const [totalSeats, setTotalSeats] = useState("");

  const submit = () => {
    api.post("provider/bus/", {
      bus_name: busName,
      bus_type: busType,
      total_seats: totalSeats,
    }).then(() => alert("Bus added"));
  };

  return (
    <div className="flex">
      <ProviderSidebar />
      <div className="p-8 flex-1">
        <h2 className="text-xl font-semibold mb-4">Add Bus</h2>

        <input
          className="border p-2 mb-3 w-full"
          placeholder="Bus Name"
          onChange={e => setBusName(e.target.value)}
        />

        <select
          className="border p-2 mb-3 w-full"
          onChange={e => setBusType(e.target.value)}
        >
          <option>Select Bus Type</option>
          <option>AC</option>
          <option>NON-AC</option>
          <option>SLEEPER</option>
        </select>

        <input
          className="border p-2 mb-3 w-full"
          placeholder="Total Seats"
          onChange={e => setTotalSeats(e.target.value)}
        />

        <button
          onClick={submit}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Save Bus
        </button>
      </div>
    </div>
  );
}
