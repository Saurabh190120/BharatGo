export default function SearchBar() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex flex-wrap gap-3 justify-center">
      <input
        type="text"
        placeholder="Where do you want to go"
        className="border px-4 py-2 rounded w-52"
      />
      <input type="date" className="border px-4 py-2 rounded" />
      <input type="date" className="border px-4 py-2 rounded" />
      <input
        type="number"
        min="1"
        placeholder="1"
        className="border px-4 py-2 rounded w-20"
      />
      <button className="bg-black text-white px-6 py-2 rounded">
        Search
      </button>
    </div>
  );
}
