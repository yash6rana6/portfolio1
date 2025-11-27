import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavCSS from "./Nav.module.css";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (path, sectionId) => {
    navigate(path); 
    setIsOpen(false);

    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100); 
  };

  return (
    <header className={NavCSS.header}>
      <div className={NavCSS.logo}>
        <h2>
          Y<span>ash Deep Singh</span>
        </h2>
      </div>

      <nav className={`${NavCSS.nav} ${isOpen ? NavCSS.open : ""}`}>
        <span onClick={() => handleNavClick("/", "home")}>Home</span>
        <span onClick={() => handleNavClick("/about", "about")}>About</span>
        <span onClick={() => handleNavClick("/services", "services")}>Services</span>
        <span onClick={() => handleNavClick("/projects", "projects")}>Projects</span>
        <span onClick={() => handleNavClick("/contact", "contact")}>Contact</span>
      </nav>

      <div className={NavCSS.bars} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}

export default Nav;
