import ProviderSidebar from "../components/ProviderSidebar";

export default function Dashboard() {
  return (
    <div className="flex">
      <ProviderSidebar />
      <div className="p-8 flex-1">
        <h1 className="text-2xl font-semibold">Welcome, Provider</h1>
        <p className="text-gray-500 mt-2">
          Manage your buses, routes, and schedules here.
        </p>
      </div>
    </div>
  );
}
