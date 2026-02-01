import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-8 py-4 shadow bg-white">
      <h1 className="text-2xl font-bold text-red-600">BusBooking</h1>
      <div className="space-x-6">
        <Link to="/" className="text-gray-600">Home</Link>
        <Link to="/login" className="text-gray-600">Login</Link>
        <Link to="/register" className="bg-red-500 text-white px-4 py-2 rounded">
          Register
        </Link>
      </div>
    </div>
  );
}
