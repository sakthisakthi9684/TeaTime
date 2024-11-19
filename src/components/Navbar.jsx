import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import Qsis from "../assets/Qsis.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo flex gap-3 ">
        <img src={Qsis} alt="Tea cups" className="rounded-lg shadow-md mb-3" />
        <span className="py-2 text-3xl">Tea Haven</span>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/order">Order Tea</Link>
        </li>
        {/* <li>
          <Link to="/types">Types</Link>
        </li> */}
        <li>
          <Link to="/feedback">Feedback</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
