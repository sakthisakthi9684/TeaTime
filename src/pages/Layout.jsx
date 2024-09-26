// pages/Layout.js
import React from "react";
import { Link } from "react-router-dom";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-green-600 text-white p-4">
        <h1 className="text-2xl font-bold text-center">Tea Haven</h1>
        <nav className="mt-2">
          <ul className="flex justify-center space-x-4">
            <li>
              <Link to="/" className="hover:text-green-200">Home</Link>
            </li>
            <li>
              <Link to="/order" className="hover:text-green-200">Order Tea</Link>
            </li>
            <li>
              <Link to="/types" className="hover:text-green-200">Types of Tea</Link>
            </li>
            <li>
              <Link to="/feedback" className="hover:text-green-200">Feedback</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>

      {/* Footer */}
      {/* <footer className="bg-green-600 text-white p-4 text-center">
        <p>© 2024 Tea Haven. All rights reserved.</p>
      </footer> */}
    </div>
  );
}

export default Layout;
