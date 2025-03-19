import React from "react";
import { Link } from "react-router-dom";
import "./../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>LMS</h2>
      <div>
        <Link to="/forum">Forum</Link>
        <Link to="/tracking">Tracking</Link>
      </div>
    </nav>
  );
};

export default Navbar;
