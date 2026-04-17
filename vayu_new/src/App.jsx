// This file controls ALL page navigation

import { Routes, Route } from "react-router-dom";

// Import all pages
import Home from "./pages/Home/Home.jsx";
import Company from "./pages/About/Company/Company.jsx";
import Team from "./pages/About/Team/Team.jsx";
import Trishul from "./pages/Products/Trishul/Trishul.jsx";
import TR250 from "./pages/Products/TR250/TR250.jsx";
import News from "./pages/News/News.jsx";
import Gallery from "./pages/Gallery/Gallery.jsx";
import Contact from "./pages/Contact/Contact.jsx";

// Import Navbar (will appear on all pages)
import Navbar from "./components/navbar/Navbar.jsx";

export default function App() {
  return (
    <>
      {/* Navbar is always visible */}
      <Navbar />

      {/* This section changes based on URL */}
      <Routes>
        <Route path="/" element={<Home />} />

        {/* About */}
        <Route path="/about" element={<Company />} />
        <Route path="/about/team" element={<Team />} />

        {/* Products */}
        <Route path="/products/trishul" element={<Trishul />} />
        <Route path="/products/tr250" element={<TR250 />} />

        {/* Other pages */}
        <Route path="/news" element={<News />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
