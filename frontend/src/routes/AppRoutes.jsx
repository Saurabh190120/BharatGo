import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SearchResults from "../pages/SearchResults";
import ListingDetails from "../pages/ListingDetails";
import Booking from "../pages/Booking";
import MyBookings from "../pages/MyBookings";
import ProviderDashboard from "../pages/ProviderDashboard";
import AdminDashboard from "../pages/AdminDashboard";
import VerifyOTP from "../pages/VerifyOTP";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/search" element={<SearchResults />} />
      <Route path="/listing/:id" element={<ListingDetails />} />
      <Route path="/booking/:id" element={<Booking />} />
      <Route path="/my-bookings" element={<MyBookings />} />
      <Route path="/provider" element={<ProviderDashboard />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/verify-otp" element={<VerifyOTP />} />
    </Routes>
  );
}
