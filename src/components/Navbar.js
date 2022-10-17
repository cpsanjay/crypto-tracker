import React from "react";
import { FaCoins } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <Link to="/" className="navbar">
      <FaCoins className="icon" />
      <h1>
        Coins <span className="purple">Search</span>
      </h1>
    </Link>
  );
};

export default Navbar;
