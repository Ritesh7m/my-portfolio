import React, { useState, useEffect } from "react";
import BackgroundGrid from "./components/common/BackgroundGrid";
import CustomCursor from "./components/common/CustomCursor";
import Navbar from "./components/header/Navbar";
import CommandPalette from "./components/header/CommandPalette";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import TechStack from "./components/skills/TechStack";
import Projects from "./components/projects/Projects";
import JourneyTimeline from "./components/journey/JourneyTimeline";
import HowIBuild from "./components/philosophy/HowIBuild";
import Achievements from "./components/achievements/Achievements";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  // Global hotkey listener for CMD+K and CTRL+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Precision Desktop Follower Cursor */}
      <CustomCursor />

      {/* Atmospheric Background Grid & Cursor Spotlight */}
      <BackgroundGrid />

      {/* Floating Glass Navigation */}
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Interactive Developer Command Center (CMD+K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />

      {/* Main Content Sections */}
      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <JourneyTimeline />
        <HowIBuild />
        <Achievements />
        <Contact />
      </main>

      {/* Technical Minimal Footer */}
      <Footer onOpenCommandPalette={() => setCommandPaletteOpen(true)} />
    </>
  );
};

export default App;
