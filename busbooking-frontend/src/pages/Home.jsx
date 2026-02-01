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

  return (<>
    
    <div className="bg-gray-100 h-[80vh] flex justify-center items-center">
  <div className="bg-white p-8 rounded-xl shadow-lg w-225">
    <h2 className="text-2xl font-semibold mb-6">
      Book Bus Tickets Online
    </h2>

    <div className="grid grid-cols-4 gap-4">
      <input className="border p-3 rounded" placeholder="From" />
      <input className="border p-3 rounded" placeholder="To" />
      <input type="date" className="border p-3 rounded" />
      <button className="bg-red-500 text-white rounded text-lg">
        Search
      </button>
    </div>
  </div>
</div>
</>
  );
}
