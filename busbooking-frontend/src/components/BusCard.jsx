export default function BusCard({ bus, onSelect }) {
  return (
    <div className="bg-white rounded-lg shadow p-5 flex justify-between">
      <div>
        <h3 className="text-xl font-semibold">{bus.bus_name}</h3>
        <p className="text-gray-500">{bus.bus_type}</p>
        <p className="text-sm text-gray-400">
          {bus.departure_time} - {bus.arrival_time}
        </p>
      </div>

      <div className="text-right">
        <p className="text-lg font-bold text-green-600">₹{bus.price}</p>
        <button
          onClick={onSelect}
          className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
        >
          View Seats
        </button>
      </div>
    </div>
  );
}
