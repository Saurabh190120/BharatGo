import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const VerifyOTP = ({ email }) => {
const { state } = useLocation();
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const submitOTP = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/api/verify-otp/", {
        email: state.email,
        otp,
      });
      navigate("/login");
    } catch {
      setError("Invalid or expired OTP");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={submitOTP}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm"
      >
        <h2 className="text-xl font-bold text-center mb-6">
          Verify Email
        </h2>

        {error && <p className="text-red-600 mb-4 text-sm">{error}</p>}

        <input
          placeholder="Enter OTP"
          onChange={(e) => setOtp(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-lg"
          required
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
          Verify
        </button>
      </form>
    </div>
  );
};

export default VerifyOTP;
