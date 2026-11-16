import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import ProjectDetails from "./pages/ProjectDetails";
import Contact from "./pages/Contact";
import FloatingContactButtons from "./components/FloatingContactButtons";
import "./App.css";

export default function App() {
  return (
    <MainLayout>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:slug" element={<ProjectDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
       <FloatingContactButtons />
    </MainLayout>
  );
}