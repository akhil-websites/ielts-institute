import React, { useState } from "react";
import "../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">IELTS Institute</div>

      {/* Desktop Menu */}
      <ul className="navbar-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#features">Courses</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#footer">Contact</a></li>
      </ul>

      {/* Hamburger Icon */}
      <div 
        className={`hamburger ${menuOpen ? "active" : ""}`} 
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Mobile Menu */}
      <ul className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <li onClick={toggleMenu}><a href="#hero">Home</a></li>
        <li onClick={toggleMenu}><a href="#features">Courses</a></li>
        <li onClick={toggleMenu}><a href="#testimonials">Testimonials</a></li>
        <li onClick={toggleMenu}><a href="#footer">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
