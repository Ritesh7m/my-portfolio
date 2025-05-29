import React from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import MouseParticles from "react-mouse-particles";
import "./App.css";
import Qualification from "./components/qualification/Qualification";
import Works from "./components/work/Works";
import Contact from "./components/contact/Contact";


const App = () => {
  return (
    <>
      <MouseParticles g={2} num={6} color="gray" cull="p, button" level={9} />
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Works />
        <Contact />
      </main>
    </>
  );
};

export default App;
