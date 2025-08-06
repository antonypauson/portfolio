import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import AboutMe from "./pages/AboutMe";

export default function App() {
  return (
    // <div className="min-h-screen">

    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </Router>
  );
}
