import React from "react";
import { Link } from "react-router-dom";
import "./../styles/Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <ul className="navbar-nav">
            <li className="navbar-item">
              <Link to="/">Home</Link>
            </li>

            <li className="navbar-item">
              <Link to="/education">Education</Link>
            </li>

            <li className="navbar-item">
              <Link to="/experience">Experience</Link>
            </li>

            <li className="navbar-item">
              <Link to="/projects">Projects</Link>
            </li>

            <li className="navbar-item">
              <Link to="/achievements">Achievements</Link>
            </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
