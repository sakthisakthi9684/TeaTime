// Game.js
import React, { useState, useEffect } from "react";

function Game() {
  const [boxes, setBoxes] = useState(Array(7).fill(false));
  const [clickedOrder, setClickedOrder] = useState([]);

  const handleBoxClick = (index) => {
    const newBoxes = [...boxes];
    newBoxes[index] = true;
    setBoxes(newBoxes);
    setClickedOrder((prevOrder) => [...prevOrder, index]);
  };

  useEffect(() => {
    if (clickedOrder.length === 7) {
      const timer = setTimeout(() => {
        resetBoxes();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [clickedOrder]);

  const resetBoxes = () => {
    const reversedOrder = [...clickedOrder].reverse();
    const timer = setInterval(() => {
      const nextIndex = reversedOrder.pop();
      if (nextIndex !== undefined) {
        const newBoxes = [...boxes];
        newBoxes[nextIndex] = false;
        setBoxes(newBoxes);
      } else {
        clearInterval(timer);
        setClickedOrder([]);
      }
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">C-Shaped Game</h1>

      {/* Game Grid */}
      <div className="grid grid-cols-3 gap-4">
        <Box clicked={boxes[0]} onClick={() => handleBoxClick(0)} />
        <Box clicked={boxes[1]} onClick={() => handleBoxClick(1)} />
        <Box clicked={boxes[2]} onClick={() => handleBoxClick(2)} />

        <div className="col-span-3 flex justify-center">
          <Box clicked={boxes[4]} onClick={() => handleBoxClick(4)} />
        </div>

        <Box clicked={boxes[5]} onClick={() => handleBoxClick(5)} />
        <Box clicked={boxes[6]} onClick={() => handleBoxClick(6)} />
        <Box clicked={boxes[7]} onClick={() => handleBoxClick(7)} />
      </div>

      <button
        onClick={resetBoxes}
        className="mt-8 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-300 ease-in-out"
      >
        Reset Game
      </button>
    </div>
  );
}

// Box Component
const Box = ({ clicked, onClick }) => {
  return (
    <div
      className={`w-24 h-24 flex justify-center items-center rounded-md cursor-pointer
      ${clicked ? "bg-green-500" : "bg-gray-300"} 
      transition duration-300 ease-in-out transform hover:scale-105`}
      onClick={onClick}
    >
      {/* Optional content in the box */}
    </div>
  );
};

export default Game;
