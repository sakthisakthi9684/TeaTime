// pages/TeaOrder.js
import React from "react";

const teaOptions = [
  { id: 1, name: "Green Tea", price: "$3.00" },
  { id: 2, name: "Black Tea", price: "$2.50" },
  { id: 3, name: "Oolong Tea", price: "$4.00" },
  { id: 4, name: "Herbal Tea", price: "$3.50" },
];

function TeaOrder() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-6">Order Your Tea</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {teaOptions.map((tea) => (
          <div
            key={tea.id}
            className="bg-white shadow-lg rounded-lg p-4 text-center"
          >
            <h3 className="text-xl font-semibold mb-2">{tea.name}</h3>
            <p className="text-lg">{tea.price}</p>
            <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeaOrder;
