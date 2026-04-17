import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <nav style={styles.nav}>
      
      {/* LOGO */}
      <div style={styles.logo}>VAYUVYA</div>

      {/* NAV LINKS */}
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>

        <div
          style={styles.dropdown}
          onMouseEnter={() => setAboutOpen(true)}
          onMouseLeave={() => setAboutOpen(false)}
        >
          <span style={styles.link}>About</span>
          {aboutOpen && (
            <div style={styles.menu}>
              <Link to="/about">Company</Link>
              <Link to="/about/team">Team</Link>
            </div>
          )}
        </div>

        <div
          style={styles.dropdown}
          onMouseEnter={() => setProductsOpen(true)}
          onMouseLeave={() => setProductsOpen(false)}
        >
          <span style={styles.link}>Products</span>
          {productsOpen && (
            <div style={styles.menu}>
              <Link to="/products/trishul">TRISHUL Mk1</Link>
              <Link to="/products/tr250">TR250</Link>
            </div>
          )}
        </div>

        <Link to="/news" style={styles.link}>News</Link>
        <Link to="/gallery" style={styles.link}>Gallery</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px 40px",
    background: "#ffffff",
    borderBottom: "1px solid #eee"
  },
  logo: {
    fontWeight: "bold",
    fontSize: "18px"
  },
  links: {
    display: "flex",
    gap: "20px",
    alignItems: "center"
  },
  link: {
    textDecoration: "none",
    color: "#333",
    cursor: "pointer"
  },
  dropdown: {
    position: "relative"
  },
  menu: {
    position: "absolute",
    top: "30px",
    background: "#fff",
    border: "1px solid #ddd",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "5px"
  }
};
