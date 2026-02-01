import { Link } from "react-router-dom";

export default function ProviderSidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-6">
      <h2 className="text-xl font-bold mb-6">Provider Panel</h2>
      <nav className="space-y-4">
        <Link to="/provider" className="block">Dashboard</Link>
        <Link to="/provider/add-bus" className="block">Add Bus</Link>
        <Link to="/provider/add-route" className="block">Add Route</Link>
        <Link to="/provider/add-schedule" className="block">Add Schedule</Link>
      </nav>
    </div>
  );
}
