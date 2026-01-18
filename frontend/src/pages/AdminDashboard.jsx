import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    users: 0,
    providers: 0,
    listings: 0,
    bookings: 0,
  });

  const [pendingListings, setPendingListings] = useState([]);

  useEffect(() => {
    // Replace with real API calls
    setStats({
      users: 1240,
      providers: 85,
      listings: 310,
      bookings: 1420,
    });

    setPendingListings([
      {
        id: 1,
        title: "Luxury Hill Resort",
        provider: "Mountain Stay Pvt Ltd",
        location: "Manali",
      },
      {
        id: 2,
        title: "City Business Hotel",
        provider: "Urban Hotels",
        location: "Bangalore",
      },
    ]);
  }, []);

  return (
    <div className="p-6">
      {/* Header */}
      <h1 className="text-2xl font-semibold mb-6">Admin Dashboard</h1>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard title="Total Users" value={stats.users} />
        <StatCard title="Service Providers" value={stats.providers} />
        <StatCard title="Total Listings" value={stats.listings} />
        <StatCard title="Total Bookings" value={stats.bookings} />
      </div>

      {/* Pending Listings Approval */}
      <div className="bg-white rounded-xl shadow">
        <div className="p-4 border-b">
          <h2 className="text-lg font-medium">Pending Listing Approvals</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-left">
              <tr>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Provider</th>
                <th className="px-4 py-3">Location</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {pendingListings.map((listing) => (
                <tr
                  key={listing.id}
                  className="border-t hover:bg-gray-50"
                >
                  <td className="px-4 py-3">{listing.title}</td>
                  <td className="px-4 py-3">{listing.provider}</td>
                  <td className="px-4 py-3">{listing.location}</td>
                  <td className="px-4 py-3 space-x-3">
                    <button className="text-green-600 hover:underline">
                      Approve
                    </button>
                    <button className="text-red-600 hover:underline">
                      Reject
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

/* Reusable Stat Card */
function StatCard({ title, value }) {
  return (
    <div className="bg-white rounded-xl shadow p-5">
      <p className="text-sm text-gray-500">{title}</p>
      <h3 className="text-2xl font-semibold mt-2">{value}</h3>
    </div>
  );
}
