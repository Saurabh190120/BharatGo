import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ role: "traveller" });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-20">
      <h2 className="text-2xl mb-4">Login</h2>
      <input className="border w-full p-2 mb-3" placeholder="Email" />
      <input type="password" className="border w-full p-2 mb-3" placeholder="Password" />
      <button className="bg-black text-white w-full py-2">Login</button>
    </form>
  );
}
