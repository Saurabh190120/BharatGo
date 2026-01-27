import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const ListingDetails = () => {
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/listings/${id}/`)
      .then((res) => setListing(res.data));
  }, []);

  if (!listing) return null;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">{listing.title}</h1>
      <p>{listing.description}</p>
      <p className="font-semibold mt-2">₹ {listing.price}</p>

      <button
        onClick={() => navigate(`/traveller/book/${id}`)}
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
      >
        Book Now
      </button>
    </div>
  );
};

export default ListingDetails;
