import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="flex justify-between px-8 py-4 border-b">
      <Link to="/" className="font-bold text-xl">✈ Voyage</Link>

      <div className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
        <Link to="/my-bookings">My Bookings</Link>

        {user ? (
          <button onClick={logout} className="text-red-500">Logout</button>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register" className="bg-black text-white px-4 py-1 rounded">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
