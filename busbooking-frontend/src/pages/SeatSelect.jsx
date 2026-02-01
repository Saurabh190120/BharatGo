import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";

export default function SeatSelect() {
  const { id } = useParams();
  const [seats, setSeats] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    api.get(`buses/seats/${id}/`).then(res => setSeats(res.data));
  }, []);

  const toggleSeat = (seat) => {
    setSelected(prev =>
      prev.includes(seat) ? prev.filter(s => s !== seat) : [...prev, seat]
    );
  };

  const book = () => {
    api.post("bookings/create/", {
      schedule_id: id,
      seats: selected,
    }).then(() => alert("Booking Successful"));
  };

  return (
    <div className="p-6">
      <div className="grid grid-cols-4 gap-3">
        {seats.map(s => (
          <button
            key={s.seat}
            disabled={s.is_booked}
            onClick={() => toggleSeat(s.seat)}
            className={`p-3 ${
              s.is_booked
                ? "bg-gray-400"
                : selected.includes(s.seat)
                ? "bg-green-500"
                : "bg-blue-500"
            }`}
          >
            {s.seat}
          </button>
        ))}
      </div>

      <button onClick={book} className="mt-4 bg-red-500 text-white px-4 py-2">
        Confirm Booking
      </button>
    </div>
  );
}
