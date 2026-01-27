import { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const BookingForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({
    start_date: "",
    end_date: "",
  });

  const submitBooking = () => {
    axios.post("http://127.0.0.1:8000/api/bookings/", {
      listing_id: id,
      ...data,
    }).then(() => {
      navigate("/traveller/my-bookings");
    });
  };

  return (
    <div className="p-8 max-w-md">
      <h2 className="text-xl font-semibold mb-4">Book Trip</h2>

      <input
        type="date"
        className="border p-2 w-full mb-3"
        onChange={(e) => setData({ ...data, start_date: e.target.value })}
      />

      <input
        type="date"
        className="border p-2 w-full mb-3"
        onChange={(e) => setData({ ...data, end_date: e.target.value })}
      />

      <button
        onClick={submitBooking}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Confirm Booking
      </button>
    </div>
  );
};

export default BookingForm;
