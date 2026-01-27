import { useEffect, useState } from "react";
import axios from "axios";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/bookings/my/")
      .then((res) => setBookings(res.data));
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-xl font-bold mb-4">My Bookings</h2>

      {bookings.map((b) => (
        <div key={b.id} className="border p-4 mb-3 rounded">
          <p>Listing: {b.listing_title}</p>
          <p>Status: {b.status}</p>
        </div>
      ))}
    </div>
  );
};

export default MyBookings;
