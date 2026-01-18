import { useEffect, useState } from "react";

export default function ProviderDashboard() {
  const [stats, setStats] = useState({
    listings: 0,
    bookings: 0,
    revenue: 0,
  });

  const [listings, setListings] = useState([]);

  useEffect(() => {
    // Replace with API calls
    setStats({
      listings: 5,
      bookings: 18,
      revenue: 42500,
    });

    setListings([
      {
        id: 1,
        title: "Luxury Beach Resort",
        location: "Goa",
        price: 3500,
        status: "Active",
      },
      {
        id: 2,
        title: "Mountain View Homestay",
        location: "Manali",
        price: 2200,
        status: "Inactive",
      },
    ]);
  }, []);

  return (
    <div className="p-6">
      {/* Header */}
      <h1 className="text-2xl font-semibold mb-6">Provider Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard title="Total Listings" value={stats.listings} />
        <StatCard title="Total Bookings" value={stats.bookings} />
        <StatCard
          title="Total Revenue"
          value={`₹${stats.revenue.toLocaleString()}`}
        />
      </div>

      {/* Listings Table */}
      <div className="bg-white rounded-xl shadow">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-medium">My Listings</h2>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
            + Add Listing
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-left">
              <tr>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Location</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {listings.map((listing) => (
                <tr
                  key={listing.id}
                  className="border-t hover:bg-gray-50"
                >
                  <td className="px-4 py-3">{listing.title}</td>
                  <td className="px-4 py-3">{listing.location}</td>
                  <td className="px-4 py-3">₹{listing.price}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        listing.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {listing.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 space-x-2">
                    <button className="text-indigo-600 hover:underline">
                      Edit
                    </button>
                    <button className="text-red-600 hover:underline">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* Stats Card Component */
function StatCard({ title, value }) {
  return (
    <div className="bg-white rounded-xl shadow p-5">
      <p className="text-sm text-gray-500">{title}</p>
      <h3 className="text-2xl font-semibold mt-2">{value}</h3>
    </div>
  );
}
