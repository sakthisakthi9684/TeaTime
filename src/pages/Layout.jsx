import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Layout.css";

function Layout() {
  return (
    <div className="layout">
      <Navbar />
      <main className="content">
        {/* This renders the child route content */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
