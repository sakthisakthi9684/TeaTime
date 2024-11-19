import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    employeeID: "",
    phoneNumber: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, employeeID, phoneNumber } = formData;

    // Basic Validation
    if (!name || !email || !employeeID || !phoneNumber) {
      setMessage("All fields are required.");
      return;
    }

    try {
      // const response = await axios.post("https://your-api-endpoint/register", {
      //   name,
      //   email,
      //   employeeID,
      //   phoneNumber,
      // });


      console.log(formData);
      

      if (response.status === 200) {
        setMessage("Registration successful!");
        setFormData({ name: "", email: "", employeeID: "", phoneNumber: "" });
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setMessage("Registration failed. Please try again.");
    }
  };

  return (
    <div className="page register bg-teal-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-teal-700 mb-4">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-left text-teal-700 font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-teal-300 rounded-lg py-2 px-3 text-teal-700 focus:ring-2 focus:ring-teal-500 focus:outline-none"
            />
          </div>

          {/* Employee ID Field */}
          <div>
            <label className="block text-left text-teal-700 font-medium mb-1">
              Employee ID
            </label>
            <input
              type="text"
              name="employeeID"
              placeholder="Enter your Employee ID"
              value={formData.employeeID}
              onChange={handleChange}
              className="w-full border border-teal-300 rounded-lg py-2 px-3 text-teal-700 focus:ring-2 focus:ring-teal-500 focus:outline-none"
            />
          </div>
          
          {/* Email Field */}
          <div>
            <label className="block text-left text-teal-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-teal-300 rounded-lg py-2 px-3 text-teal-700 focus:ring-2 focus:ring-teal-500 focus:outline-none"
            />
          </div>

          {/* Phone Number Field */}
          <div>
            <label className="block text-left text-teal-700 font-medium mb-1">
              Phone Number
            </label>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Enter your phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full border border-teal-300 rounded-lg py-2 px-3 text-teal-700 focus:ring-2 focus:ring-teal-500 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-teal-600 text-white py-2 px-4 w-full rounded-lg hover:bg-teal-700 transition duration-300"
          >
            Register
          </button>
        </form>
        {/* Response Message */}
        {message && <p className="mt-4 text-center text-teal-600">{message}</p>}
      </div>
    </div>
  );
}

export default Register;
