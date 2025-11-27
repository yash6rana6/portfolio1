import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Service from "./components/Services/Service";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Nav />

      {/* All sections are displayed on SAME PAGE */}
      <Header id="home" />
      <About id="about" />
      <Service id="services" />
      <Projects id="projects" />
      <Contact id="contact" />

      <Footer />

      {/* Routes only for URL change (no page reload) */}
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/about" element={<></>} />
        <Route path="/services" element={<></>} />
        <Route path="/projects" element={<></>} />
        <Route path="/contact" element={<></>} />
      </Routes>
    </Router>
  );
}

export default App;
