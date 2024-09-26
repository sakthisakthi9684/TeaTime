// pages/Types.js
import React from "react";
import tea from "../assets/tea.jpeg";

function Types() {
  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: `url(${tea})` }}>
      <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Types of Tea</h2>
        <ul className="list-disc pl-5 space-y-2 text-lg">
          <li>Green Tea: Known for its antioxidants.</li>
          <li>Black Tea: Rich in flavor and caffeine.</li>
          <li>Herbal Tea: Made from various herbs and flowers.</li>
          <li>Oolong Tea: A traditional Chinese tea.</li>
          <li>White Tea: Delicate and light.</li>
        </ul>
      </div>
    </div>
  );
}

export default Types;
