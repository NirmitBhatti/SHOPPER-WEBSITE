import React, { useState } from "react";
import axios from "axios";
import API from "../../BackEndURL";
import { toast } from "react-toastify";

const Signup = () => {
   const [data, setData] = useState({
     name: "",
     email: "",
     password: "",
     phone: "",
     image: "",
   });

   // Handle input change
   const signupHandleChange = (e) => {
     const { name, value, files } = e.target;

     if (name === "image" && files && files[0]) {
       const reader = new FileReader();
       reader.onloadend = () => {
         setData({ ...data, image: reader.result }); // convert image → Base64
       };
       reader.readAsDataURL(files[0]);
     } else {
       setData({ ...data, [name]: value });
     }
   };

   // Handle form submit
   const signUpHandleSubmit = async (e) => {
     e.preventDefault();

     // you don’t need FormData for Google Sheets — JSON is enough
     try {
       const res = await axios.post(`${API}/api/user/signup`, data, {
         headers: { "Content-Type": "application/json" },
       });

       console.log("✅ Signup success:", res.data);
       toast.success(res.data.message || "Signup successful!");
     } catch (error) {
       console.log("❌ Signup failed:", error);
       toast.error("Signup failed! Check console for details.");
     }
   };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(135deg, #fceabb 0%, #f8b500 100%)",
      }}
    >
      <div
        className="card shadow-lg p-4"
        style={{
          width: "450px",
          background: "rgba(255,255,255,0.95)",
          borderRadius: "15px",
        }}
      >
        <h3 className="text-center fw-bold mb-3">Create Account</h3>
        <form onSubmit={signUpHandleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Full Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter your name"
              value={data.name}
              onChange={signupHandleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Email Address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={data.email}
              onChange={signupHandleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Create password"
              value={data.password}
              onChange={signupHandleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Phone Number</label>
            <input
              type="text"
              name="phone"
              className="form-control"
              placeholder="Enter phone number"
              value={data.phone}
              onChange={signupHandleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Profile Image</label>
            <input
              type="file"
              name="image"
              className="form-control"
              accept="image/*"
              onChange={signupHandleChange}
            />
          </div>

          <button type="submit" className="btn btn-dark w-100 mt-2">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
