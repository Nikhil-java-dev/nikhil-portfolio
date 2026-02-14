import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import GithubStats from "./components/GithubStats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";

function App() {

  useEffect(() => {
  const handleMove = (e) => {
    document.querySelectorAll(".spotlight-card").forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--x", `${x}px`);
      card.style.setProperty("--y", `${y}px`);
    });
  };

  window.addEventListener("mousemove", handleMove);
  return () => window.removeEventListener("mousemove", handleMove);
}, []);


  return (
    <>
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <GithubStats />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
