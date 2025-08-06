import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import AboutMe from "./pages/AboutMe";

export default function App() {
  const [iconTrue, setIconTrue] = useState(true);

  return (
    <Router>
      <Navbar setIconTrue={setIconTrue} iconTrue={iconTrue}/>
      <Routes>
        <Route path="/" element={<Hero iconTrue={iconTrue}/>} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </Router>
  );
}
