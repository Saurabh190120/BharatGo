import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/traveller/pages/Home'
import Login from '../auth/Login'
import Register from '../auth/Register'
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* <Route path="/search" element={<SearchResults />} />
      <Route path="/listing/:id" element={<ListingDetails />} />
      <Route path="/booking/:id" element={<Booking />} />
      <Route path="/my-bookings" element={<MyBookings />} />
      <Route path="/provider" element={<ProviderDashboard />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/verify-otp" element={<VerifyOTP />} /> */}
    </Routes>
  );
}
