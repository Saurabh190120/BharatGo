import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const search = () => {
    navigate(`/traveller/search?location=${location}`);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Search Travel Listings</h1>

      <input
        type="text"
        placeholder="Enter location"
        className="border p-2 rounded w-64 mr-2"
        onChange={(e) => setLocation(e.target.value)}
      />

      <button
        onClick={search}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Search
      </button>
    </div>
  );
};

export default Home;
