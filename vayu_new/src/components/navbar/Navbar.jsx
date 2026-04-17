// This is your top navigation bar

import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  // State to control dropdown visibility
  const [showAbout, setShowAbout] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  return (
    <nav style={{ padding: "20px", background: "#f0f0f0" }}>
      
      {/* HOME */}
      <Link to="/">Home</Link>

      {/* ABOUT DROPDOWN */}
      <span
        style={{ marginLeft: "20px", position: "relative" }}
        onMouseEnter={() => setShowAbout(true)}
        onMouseLeave={() => setShowAbout(false)}
      >
        About ▼

        {showAbout && (
          <div style={{ position: "absolute", background: "#fff", padding: "10px" }}>
            <div>
              <Link to="/about">Company</Link>
            </div>
            <div>
              <Link to="/about/team">Team</Link>
            </div>
          </div>
        )}
      </span>

      {/* PRODUCTS DROPDOWN */}
      <span
        style={{ marginLeft: "20px", position: "relative" }}
        onMouseEnter={() => setShowProducts(true)}
        onMouseLeave={() => setShowProducts(false)}
      >
        Products ▼

        {showProducts && (
          <div style={{ position: "absolute", background: "#fff", padding: "10px" }}>
            <div>
              <Link to="/products/trishul">TRISHUL Mk1</Link>
            </div>
            <div>
              <Link to="/products/tr250">TR250</Link>
            </div>
          </div>
        )}
      </span>

      {/* OTHER LINKS */}
      <Link to="/news" style={{ marginLeft: "20px" }}>News</Link>
      <Link to="/gallery" style={{ marginLeft: "20px" }}>Gallery</Link>
      <Link to="/contact" style={{ marginLeft: "20px" }}>Contact</Link>
    </nav>
  );
}
