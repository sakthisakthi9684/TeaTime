// pages/Feedback.js
import React, { useState } from "react";

function Feedback() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission logic, e.g., sending the data to an API
    console.log("Feedback submitted:", { name, email, message });
    // Reset the form after submission
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: `url(../assets/tea.jpeg)` }}>
      <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Feedback</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <textarea
            placeholder="Your Feedback"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-green-700 text-white rounded hover:bg-green-600 transition duration-300 ease-in-out"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
}

export default Feedback;
