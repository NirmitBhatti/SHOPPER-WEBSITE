import React, { useState } from "react";
import axios from "axios";
import API from "../../BackEndURL"; // make sure this points to your backend URL
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  // handle input
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!data.email || !data.password) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      const res = await axios.post(`${API}/api/user/login`, data, {
        headers: { "Content-Type": "application/json" },
      });

      if (res.data.success) {
        toast.success(res.data.message || "Login successful!");
        console.log("✅ Login success:", res.data);

        // you can save user data or token in localStorage if needed
        localStorage.setItem("userData", JSON.stringify(res.data.body));
      } else {
        toast.warn(res.data.message || "Login failed, please try again.");
        console.log("⚠️ Login failed:", res.data);
      }
    } catch (error) {
      console.error("❌ Login error:", error);
      toast.error("Something went wrong while logging in.");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
      }}
    >
      <div
        className="card p-4 shadow-lg rounded"
        style={{
          width: "500px",
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          border: "none",
        }}
      >
        <h3 className="text-center mb-3 fw-bold text-dark">Login</h3>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Email Address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={data.email}
              onChange={handleChange}
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              value={data.password}
              onChange={handleChange}
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-dark w-100 mb-3">
            Login
          </button>

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="m-0">
              Not a user?{" "}
              <Link
                to="/signup"
                className="text-primary text-decoration-none fw-semibold"
              >
                Sign up today
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
