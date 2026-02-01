import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("USER");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submit = async () => {
    try {
      await api.post("accounts/register/", {
        username,
        email,
        password,
        role,
      });
      navigate("/login");
    } catch {
      setError("Registration failed");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow w-[420px]">
        <h2 className="text-2xl font-bold text-center mb-6 text-red-600">
          Register
        </h2>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <input
          className="border p-3 w-full mb-3 rounded"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="border p-3 w-full mb-3 rounded"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="border p-3 w-full mb-3 rounded"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <select
          className="border p-3 w-full mb-4 rounded"
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="USER">Passenger</option>
          <option value="PROVIDER">Bus Operator</option>
        </select>

        <button
          onClick={submit}
          className="w-full bg-red-500 text-white py-3 rounded font-semibold"
        >
          Create Account
        </button>
      </div>
    </div>
  );
}
