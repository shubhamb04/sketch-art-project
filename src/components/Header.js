import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="link">
        Rohit Sketch Art
      </Link>

      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/imagegrid" className="link">
        Sketches
      </Link>
      <Link to="/about" className="link">
        About
      </Link>
      <Link to="/contact" className="link">
        Contact
      </Link>
    </header>
  );
}

export default Header;
