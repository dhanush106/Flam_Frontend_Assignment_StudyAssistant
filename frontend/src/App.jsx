import { Route, Routes } from "react-router-dom";
import { HistoryProvider } from "./context/HistoryContext";
import Navbar from "./components/layout/Navbar";
import AnimatedBackground from "./components/ui/AnimatedBackground";
import LiquidGlass from 'liquid-glass-react'
import Home from "./pages/Home";
import About from "./pages/About";
import Generate from "./pages/Generate";
import Results from "./pages/Results";
import Roadmap from "./pages/Roadmap";
import Flashcards from "./pages/Flashcards";
import HistoryPage from "./pages/History";

export default function App() {
  return (
    <HistoryProvider>
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/generate" element={<Generate />} />
      <Route path="/results" element={<Results />} />
      <Route path="/roadmap" element={<Roadmap />} />
      <Route path="/flashcards" element={<Flashcards />} />
      <Route path="/history" element={<HistoryPage />} />
    </Routes>
      <AnimatedBackground />
      <Navbar />


    </>
    </HistoryProvider>
  );
}