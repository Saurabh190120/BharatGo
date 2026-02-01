
export default function AddSchedule() {
  return (
    
    <div className="flex">
      <div className="p-8 flex-1">
        <h2 className="text-xl font-semibold">Add Schedule</h2>

        <select className="border p-2 mb-3 w-full">
          <option>Select Bus</option>
        </select>

        <select className="border p-2 mb-3 w-full">
          <option>Select Route</option>
        </select>

        <input type="date" className="border p-2 mb-3 w-full" />
        <input type="time" className="border p-2 mb-3 w-full" />
        <input type="time" className="border p-2 mb-3 w-full" />

        <input
          className="border p-2 mb-3 w-full"
          placeholder="Ticket Price"
        />

        <button className="bg-red-500 text-white px-4 py-2 rounded">
          Create Schedule
        </button>
      </div>
    </div>
  );
}

