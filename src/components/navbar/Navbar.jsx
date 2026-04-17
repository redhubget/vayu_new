import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "20px", background: "#f5f5f5" }}>
      <Link to="/">Home</Link> | 
      <Link to="/about" style={{ marginLeft: "10px" }}>About</Link> | 
      <Link to="/about/team" style={{ marginLeft: "10px" }}>Team</Link> | 
      <Link to="/products/trishul" style={{ marginLeft: "10px" }}>TRISHUL</Link> | 
      <Link to="/products/tr250" style={{ marginLeft: "10px" }}>TR250</Link> | 
      <Link to="/news" style={{ marginLeft: "10px" }}>News</Link> | 
      <Link to="/gallery" style={{ marginLeft: "10px" }}>Gallery</Link> | 
      <Link to="/contact" style={{ marginLeft: "10px" }}>Contact</Link>
    </nav>
  );
}
