import React, { useState } from "react";
// import axios from "axios";

function TeaOrder() {
  const [name, setName] = useState("");
  const [order, setOrder] = useState("");
  const [sugarLevel, setSugarLevel] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      name,
      order,
      sugarLevel,
    };

    try {
      // Send the data payload to the API
      // const response = await axios.post("https://your-api-endpoint.com/order", payload);
      console.log(payload);
      
      // Assuming the response contains a success message and the order details
      // setOrderData(response.data); // Store the response data in orderData state
      setMessage(response.data.message || "Order placed successfully!");
    } catch (error) {
      setMessage("There was an error placing your order.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page order bg-teal-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
        <h2 className="text-2xl font-bold text-teal-700 mb-4">
          Order Your Favorite Tea
        </h2>
        <p className="text-teal-600 mb-6">
          Explore our wide range of teas and place your order conveniently.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div>
            <label className="block text-left text-teal-700 font-medium mb-1">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-teal-300 rounded-lg py-2 px-3 text-teal-700 focus:ring-2 focus:ring-teal-500 focus:outline-none"
            />
          </div>

          {/* Your Order */}
          <div>
            <label className="block text-left text-teal-700 font-medium mb-1">
              Your Order
            </label>
            <select
              value={order}
              onChange={(e) => setOrder(e.target.value)}
              className="w-full border border-teal-300 rounded-lg py-2 px-3 text-teal-700 focus:ring-2 focus:ring-teal-500 focus:outline-none"
              defaultValue=""
            >
              <option value="" disabled>
                Select your tea
              </option>
              <option value="tea">Tea</option>
              <option value="coffee">Coffee</option>
              <option value="milk">Milk</option>
              <option value="none">None</option>
            </select>
          </div>

          {/* Sugar Level */}
          <div>
            <label className="block text-left text-teal-700 font-medium mb-1">
              Sugar Level
            </label>
            <select
              value={sugarLevel}
              onChange={(e) => setSugarLevel(e.target.value)}
              className="w-full border border-teal-300 rounded-lg py-2 px-3 text-teal-700 focus:ring-2 focus:ring-teal-500 focus:outline-none"
            >
              <option value="" disabled>
                Select sugar preference
              </option>
              <option value="with-sugar">With Sugar</option>
              <option value="without-sugar">Without Sugar</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-teal-700 text-white py-2 px-4 w-full rounded-lg hover:bg-teal-800 transition duration-300"
            disabled={loading}
          >
            {loading ? "Placing Order..." : "Place Order"}
          </button>
        </form>

        {/* Message */}
        {message && <p className="mt-4 text-teal-700">{message}</p>}
      </div>
    </div>
  );
}

export default TeaOrder;
