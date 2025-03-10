import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import "./../styles/Navbar.css";
import myLogo from './../assets/image.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = (e) => {
    if (isOpen && !e.target.closest('.navbar-nav') && !e.target.closest('.hamburger')) {
      setIsOpen(false);
    }
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener('click', closeMenu);
    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, [isOpen]);

  return (
    <div className="navbar">
      <div className="logo">
        {/* <img src={myLogo} alt="Logo" />  */}
        <a href="https://prakhar-pande.vercel.app">
        <img src="https://see.fontimg.com/api/rf5/lg2Bw/N2Y2MjFhMWU4Zjc4NDM5OGFlNTI2ZDBhODIwNjQ1MDAudHRm/UHJha2hhciBQYW5kZQ/feelfree-personal-use-regular.png?r=fs&h=53&w=1000&fg=EB0BFE&bg=FFFFFF&tb=1&s=53" 
        alt="Cursive fonts" /></a>
      </div>

      {/* <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div> */}
      <label className="hamburger">
        <input type="checkbox" checked={isOpen} onChange={() => setIsOpen(!isOpen)} />
        <svg viewBox="0 0 32 32">
          <path
            className="line line-top-bottom"
            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
          ></path>
          <path className="line" d="M7 16 27 16"></path>
        </svg>
      </label>


      <ul className={`navbar-nav ${isOpen ? "open" : ""}`} onClick={handleLinkClick}>
        <li className="navbar-item">
          <NavLink to="/" activeClassName="active-link">Home</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/education" activeClassName="active-link">Education</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/experience" activeClassName="active-link">Experience</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/projects" activeClassName="active-link">Projects</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/achievements" activeClassName="active-link">Achievements</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;