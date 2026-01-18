import { Link } from "react-router-dom";

export default function Register() {
  return (
    <>
    

      <div className="min-h-screen flex items-center justify-center bg-softbg px-4">
        <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">
          
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold">Create Account</h2>
            <p className="text-gray-500 text-sm">
              Join Voyage and start your journey
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter username"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter email"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Create password"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm password"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary outline-none"
              />
            </div>

           <button
  type="submit"
  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-medium transition"
>
  Sign Up
</button>

          </form>

          {/* Footer */}
          <p className="text-sm text-center text-gray-500 mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-primary font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
