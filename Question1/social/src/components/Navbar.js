import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="p-4 bg-gray-800 text-white flex gap-4">
    <Link to="/">Home</Link>
    <Link to="/top-users">Top Users</Link>
    <Link to="/trending">Trending</Link>
    <Link to="/feed">Live Feed</Link>
  </nav>
);

export default Navbar;
