import { Link } from "react-router-dom";

export default function ListingCard({ listing }) {
  return (
    <div className="border rounded shadow-sm p-4">
      <h3 className="font-semibold">{listing.title}</h3>
      <p className="text-gray-600">{listing.location}</p>
      <p className="font-bold mt-2">${listing.price}</p>
      <Link
        to={`/listing/${listing.id}`}
        className="block mt-3 text-center border py-2 rounded"
      >
        View Details
      </Link>
    </div>
  );
}
