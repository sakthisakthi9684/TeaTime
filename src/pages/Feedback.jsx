import React, { useState } from "react";
import axios from "axios";

function Feedback() {
  const [feedback, setFeedback] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://your-api-endpoint/feedback", {
        feedback,
      });

      if (response.status === 200) {
        setMessage("Thank you for your feedback!");
        setFeedback(""); // Clear the feedback input
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      setMessage("Failed to submit feedback. Please try again later.");
    }
  };

  return (
    <div className="page feedback bg-teal-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
        <h2 className="text-2xl font-bold text-teal-700 mb-4">Feedback</h2>
        <p className="text-teal-600 mb-6">
          We value your feedback! Let us know your thoughts about our tea.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Feedback Textarea */}
          <div>
            <label className="block text-left text-teal-700 font-medium mb-1">
              Your Feedback
            </label>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Share your feedback here..."
              className="w-full border border-teal-300 rounded-lg py-2 px-3 text-teal-700 focus:ring-2 focus:ring-teal-500 focus:outline-none"
              rows="4"
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="bg-teal-700 text-white py-2 px-4 w-full rounded-lg hover:bg-teal-800 transition duration-300"
          >
            Submit Feedback
          </button>
        </form>
        {/* Response Message */}
        {message && <p className="mt-4 text-teal-600">{message}</p>}
      </div>
    </div>
  );
}

export default Feedback;
