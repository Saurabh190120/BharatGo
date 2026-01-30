import { useState } from "react";
import { createBusRoute } from "../services/providerService";

const AddBusRoute = () => {
  const providerId = 1; // TEMP

  const [formData, setFormData] = useState({
    bus_name: "",
    start_point: "",
    end_point: "",
    departure_time: "",
    arrival_time: "",
    travel_date: "",
    total_seats: "",
    price_per_seat: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createBusRoute({ ...formData, provider_id: providerId });
      alert("Bus route added successfully");
    } catch {
      alert("Error adding bus route");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Add Bus Route</h1>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 gap-4 bg-white p-6 rounded-xl shadow"
      >
        <input name="bus_name" placeholder="Bus Name"
          onChange={handleChange} className="border p-2 rounded" required />

        <input name="start_point" placeholder="From"
          onChange={handleChange} className="border p-2 rounded" required />

        <input name="end_point" placeholder="To"
          onChange={handleChange} className="border p-2 rounded" required />

        <input type="time" name="departure_time"
          onChange={handleChange} className="border p-2 rounded" required />

        <input type="time" name="arrival_time"
          onChange={handleChange} className="border p-2 rounded" required />

        <input type="date" name="travel_date"
          onChange={handleChange} className="border p-2 rounded" required />

        <input type="number" name="total_seats"
          placeholder="Total Seats"
          onChange={handleChange} className="border p-2 rounded" required />

        <input type="number" name="price_per_seat"
          placeholder="Price per Seat"
          onChange={handleChange} className="border p-2 rounded" required />

        <button className="col-span-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Create Route
        </button>
      </form>
    </div>
  );
};

export default AddBusRoute;
