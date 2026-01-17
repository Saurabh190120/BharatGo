export default function SearchBar({ onSearch }) {
  return (
    <form
      onSubmit={onSearch}
      className="bg-white shadow p-4 rounded flex gap-2"
    >
      <input className="border p-2 rounded w-48" placeholder="Destination" />
      <input type="date" className="border p-2 rounded" />
      <input type="date" className="border p-2 rounded" />
      <button className="bg-black text-white px-6 rounded">Search</button>
    </form>
  );
}
