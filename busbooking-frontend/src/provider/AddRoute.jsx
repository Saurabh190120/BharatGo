export default function AddRoute() {
  return (
    <div className="flex">
      <div className="p-8 flex-1">
        <h2 className="text-xl font-semibold">Add Route</h2>
        <input className="border p-2 w-full mb-3" placeholder="Source" />
        <input className="border p-2 w-full mb-3" placeholder="Destination" />
        <button className="bg-red-500 text-white px-4 py-2 rounded">
          Save Route
        </button>
      </div>
    </div>
  );
}
