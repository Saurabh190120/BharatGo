import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams, useNavigate } from "react-router-dom";

const SearchResults = () => {
  const [listings, setListings] = useState([]);
  const [params] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/listings/?location=${params.get("location")}`)
      .then((res) => setListings(res.data));
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-xl font-semibold mb-4">Available Listings</h2>

      {listings.map((l) => (
        <div
          key={l.id}
          className="border p-4 mb-3 rounded cursor-pointer hover:bg-gray-50"
          onClick={() => navigate(`/traveller/listing/${l.id}`)}
        >
          <h3 className="font-bold">{l.title}</h3>
          <p>{l.location}</p>
          <p>₹ {l.price}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
