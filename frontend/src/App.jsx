import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [dark, setDark] = useState(true);
  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-[#F5F2EC] dark:bg-[#080810] text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
        <Navbar dark={dark} setDark={setDark} />
        <Hero />
        <div className="gold-divider max-w-6xl mx-auto" />
        <About />
        <div className="gold-divider max-w-6xl mx-auto" />
        <Skills />
        <div className="gold-divider max-w-6xl mx-auto" />
        <Projects />
        <div className="gold-divider max-w-6xl mx-auto" />
        <Services />
        <div className="gold-divider max-w-6xl mx-auto" />
        <Testimonials />
        <div className="gold-divider max-w-6xl mx-auto" />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
