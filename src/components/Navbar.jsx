import ThemeToggle from "./ThemeToggle";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => observer.observe(sec));
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar glass">
      <h1 className="logo">
  <span className="first">Nikhil</span>{" "}
  <span className="last">Srivastava</span>
</h1>




      {/* Desktop Menu */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <a className={active === "about" ? "active" : ""} href="#about" onClick={closeMenu}>
            About
          </a>
        </li>
        <li>
          <a className={active === "skills" ? "active" : ""} href="#skills" onClick={closeMenu}>
            Skills
          </a>
        </li>
        <li>
          <a className={active === "projects" ? "active" : ""} href="#projects" onClick={closeMenu}>
            Projects
          </a>
        </li>
        
        <li>
          <a className={active === "contact" ? "active" : ""} href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </li>

        <li>
          <a className={active === "contact" ? "active" : ""} href="https://linkedin.com/in/nikhil-srivastava-7a2266298" onClick={closeMenu}>
            LinkedIn
          </a>
        </li>
      </ul>

      {/* Right Controls */}
      <div className="nav-right">
        <ThemeToggle />

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
