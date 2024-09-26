// pages/Home.js
import React from "react";
import tea from "../assets/tea.jpeg";

function Home() {
  return (
    <div 
      className="flex items-center justify-center h-screen w-full bg-cover bg-center" 
      style={{ backgroundImage: `url(${tea})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-lg text-center max-w-lg mx-auto">
        <h2 className="text-3xl font-bold mb-4">Welcome to Tea Haven</h2>
        <p className="text-lg mb-6">
          Discover the world of tea, its varieties, and the health benefits it offers.
        </p>
      </div>
    </div>
  );
}

export default Home;
