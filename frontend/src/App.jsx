import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import AnimatedBackground from "./components/ui/AnimatedBackground";
import LiquidGlass from 'liquid-glass-react'
import Home from "./pages/Home";
import About from "./pages/About";
import Generate from "./pages/Generate";

export default function App() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="contact" element={<Generate />} />
      </Routes>
    </>
  );
}