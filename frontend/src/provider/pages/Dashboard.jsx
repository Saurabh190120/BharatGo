import { useEffect, useState } from "react";
import { getProviderDashboard } from "../services/providerService";

const ProviderDashboard = () => {
  const providerId = 1; // TEMP (replace with auth)
  const [data, setData] = useState(null);

  useEffect(() => {
    getProviderDashboard(providerId).then((res) => {
      setData(res.data);
    });
  }, []);

  if (!data) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Provider Dashboard</h1>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow">
          Total Listings
          <p className="text-xl font-bold">{data.total_listings}</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          Total Bookings
          <p className="text-xl font-bold">{data.total_bookings}</p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-2">My Listings</h2>

      <table className="w-full bg-white rounded shadow">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">Title</th>
            <th className="p-2">Location</th>
            <th className="p-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {data.listings.map((l) => (
            <tr key={l.id} className="text-center border-t">
              <td className="p-2">{l.title}</td>
              <td className="p-2">{l.location}</td>
              <td className="p-2">₹{l.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProviderDashboard;
