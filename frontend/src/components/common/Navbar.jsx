export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b">
      <div className="text-xl font-bold">✈️ Voyage</div>

      <div className="hidden md:flex gap-6 text-gray-600">
        <a href="#">Home</a>
        <a href="#">Search</a>
        <a href="#">My Bookings</a>
      </div>

      <div className="flex gap-4">
        <button className="text-gray-600">Login</button>
        <button className="bg-black text-white px-4 py-2 rounded">
          Sign Up
        </button>
      </div>
    </nav>
  );
}
