import React, { useState, useEffect } from "react";
import LiveClock from "./LiveClock";
import { IconTerminal, IconMenu, IconClose, IconDownload } from "../common/Icons";
import { profile } from "../../data/profile";

const Navbar = ({ onOpenCommandPalette }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Stack", href: "#stack" },
    { name: "Work", href: "#work" },
    { name: "Journey", href: "#journey" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Active section detection
      const sections = ["hero", "about", "stack", "work", "journey", "process", "contact"];
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      style={{
        position: "fixed",
        top: "1rem",
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        justifyContent: "center",
        padding: "0 1rem",
        pointerEvents: "none", // Allows clicking through outside navbar
      }}
    >
      <nav
        style={{
          pointerEvents: "auto",
          width: "100%",
          maxWidth: "1100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.6rem 1.2rem",
          borderRadius: "9999px",
          backgroundColor: isScrolled ? "rgba(10, 12, 18, 0.85)" : "rgba(14, 17, 24, 0.65)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: isScrolled ? "1px solid rgba(255, 255, 255, 0.12)" : "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow: isScrolled ? "0 16px 32px -8px rgba(0, 0, 0, 0.7)" : "0 8px 24px -4px rgba(0, 0, 0, 0.4)",
          transition: "all 0.25s ease",
        }}
      >
        {/* Brand / Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontWeight: 700,
            fontSize: "0.95rem",
            color: "#ffffff",
            letterSpacing: "-0.01em",
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "26px",
              height: "26px",
              borderRadius: "6px",
              background: "linear-gradient(135deg, #38bdf8 0%, #818cf8 100%)",
              color: "#07080c",
              fontWeight: 800,
              fontSize: "0.85rem",
            }}
          >
            R
          </span>
          <span>RITESH</span>
        </a>

        {/* Live Clock Element in Nav (Desktop) */}
        <div style={{ display: "none", alignItems: "center" }} className="nav-clock-wrapper">
          <LiveClock compact={true} />
        </div>

        {/* Desktop Links */}
        <div
          style={{
            display: "none",
            alignItems: "center",
            gap: "0.25rem",
          }}
          className="desktop-nav-links"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  color: isActive ? "#ffffff" : "#94a3b8",
                  padding: "0.4rem 0.85rem",
                  borderRadius: "9999px",
                  backgroundColor: isActive ? "rgba(255, 255, 255, 0.08)" : "transparent",
                  border: isActive ? "1px solid rgba(255, 255, 255, 0.12)" : "1px solid transparent",
                  transition: "all 0.15s ease",
                }}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Right CTA / Command Palette Button */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <button
            onClick={onOpenCommandPalette}
            title="Open Command Center (CMD+K / CTRL+K)"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.45rem",
              fontSize: "0.75rem",
              fontFamily: "var(--font-mono)",
              color: "#cbd5e1",
              backgroundColor: "rgba(255, 255, 255, 0.06)",
              padding: "0.35rem 0.75rem",
              borderRadius: "9999px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(56, 189, 248, 0.4)";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
              e.currentTarget.style.color = "#cbd5e1";
            }}
          >
            <IconTerminal className="w-3.5 h-3.5" style={{ color: "#38bdf8" }} />
            <span className="cmd-k-text">CMD+K</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="mobile-nav-toggle"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0.4rem",
              borderRadius: "0.5rem",
              color: "#f8fafc",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
            }}
          >
            {mobileMenuOpen ? <IconClose className="w-5 h-5" /> : <IconMenu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "5rem",
            left: "1rem",
            right: "1rem",
            backgroundColor: "#0d1017",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            borderRadius: "1rem",
            padding: "1.25rem",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.8)",
            pointerEvents: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "0.65rem",
            zIndex: 99,
          }}
        >
          <div style={{ paddingBottom: "0.5rem", borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
            <LiveClock compact={true} />
          </div>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                padding: "0.65rem 0.85rem",
                borderRadius: "0.5rem",
                color: "#e2e8f0",
                fontSize: "0.9375rem",
                fontWeight: 500,
                backgroundColor: activeSection === link.href.substring(1) ? "rgba(56, 189, 248, 0.12)" : "transparent",
              }}
            >
              {link.name}
            </a>
          ))}

          <a
            href={profile.contact.resumeUrl}
            download="Ritesh-Maurya-Resume.pdf"
            className="btn btn-secondary"
            style={{ width: "100%", marginTop: "0.5rem", fontSize: "0.85rem" }}
          >
            <IconDownload className="w-4 h-4" /> Download Resume
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 860px) {
          .desktop-nav-links { display: flex !important; }
          .nav-clock-wrapper { display: flex !important; }
          .mobile-nav-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
