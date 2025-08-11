import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact"; 
import Projects from "./pages/Projects"; 

export default function App() {
  const [iconTrue, setIconTrue] = useState(true);

  return (
    <Router>
      <Navbar setIconTrue={setIconTrue} iconTrue={iconTrue} />
      <Routes>
        <Route path="/" element={<Hero iconTrue={iconTrue} />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Analytics/>
    </Router>
  );
}
