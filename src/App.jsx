import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { useEffect } from "react";
import { gsap } from "gsap";


export default function App() {

  useEffect(() => {
    const cursor = document.querySelector("#cursor");

    window.addEventListener("mousemove", (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power3.out"
      });
    });

  }, []);

  return (
    <div className="px-4 sm:px-6 bg-gray-950 py-4">
      <div>
        <div id="cursor" className="bg-white h-4 w-4 rounded-full fixed"></div>
      </div>

      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

    </div>
  );
}
