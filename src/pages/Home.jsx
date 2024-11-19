import React from "react";

function Home() {
  return (
    <div className="bg-teal-100 min-h-screen flex flex-col items-center justify-center text-teal-900">
      <div className="text-center max-w-2xl p-6 bg-white rounded-lg shadow-lg items-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to Tea Lovers</h2>
        <p className="text-lg mb-6">
          Discover the joy of tea, explore different types, and place your order
          now!
        </p>

        <button className="px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition">
          Explore More
        </button>
      </div>
    </div>
  );
}

export default Home;
