import React, { useState } from "react";
import { profile } from "../../data/profile";
import LiveClock from "../header/LiveClock";
import {
  IconArrowUpRight,
  IconDownload,
  IconBriefcase,
  IconMapPin,
  IconGithub,
  IconLinkedin,
  IconTwitter,
  IconTerminal,
} from "../common/Icons";

const Hero = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 14, y: y * -14 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section
      id="hero"
      className="section-wrapper"
      style={{
        paddingTop: "7.5rem",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
    >
      <div className="app-container">
        {/* Top Live Clock & Global Status Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
            marginBottom: "2.5rem",
          }}
        >
          <LiveClock />

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.8125rem",
              fontFamily: "var(--font-mono)",
              color: "#94a3b8",
              backgroundColor: "rgba(255, 255, 255, 0.03)",
              border: "1px solid var(--border-subtle)",
              padding: "0.35rem 0.85rem",
              borderRadius: "9999px",
            }}
          >
            <span className="status-dot" />
            <span style={{ color: "#f8fafc", fontWeight: 500 }}>Active Role:</span>
            <span>Junior Developer @ Amazia Fashion</span>
          </div>
        </div>

        {/* Hero Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "3.5rem",
            alignItems: "center",
          }}
        >
          {/* Left Column: Identity & Typography */}
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontFamily: "var(--font-mono)",
                fontSize: "0.8125rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#38bdf8",
                marginBottom: "1rem",
              }}
            >
              <span>{profile.tagline}</span>
            </div>

            <h1
              style={{
                fontSize: "clamp(2.75rem, 6vw, 4.5rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.08,
                marginBottom: "1.25rem",
                color: "#ffffff",
              }}
            >
              RITESH
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #ffffff 30%, #94a3b8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                MAURYA
              </span>
            </h1>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                fontSize: "1.125rem",
                color: "#cbd5e1",
                fontWeight: 500,
                marginBottom: "1.5rem",
              }}
            >
              <span
                style={{
                  padding: "0.25rem 0.75rem",
                  backgroundColor: "rgba(56, 189, 248, 0.12)",
                  border: "1px solid rgba(56, 189, 248, 0.28)",
                  borderRadius: "0.375rem",
                  color: "#38bdf8",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                }}
              >
                {profile.title}
              </span>
              <span>•</span>
              <span style={{ color: "#94a3b8", display: "flex", alignItems: "center", gap: "0.35rem" }}>
                <IconMapPin className="w-4 h-4 text-slate-400" />
                {profile.location}
              </span>
            </div>

            <p
              style={{
                fontSize: "clamp(1.1rem, 2vw, 1.25rem)",
                lineHeight: 1.6,
                color: "#94a3b8",
                maxWidth: "540px",
                marginBottom: "2.25rem",
              }}
            >
              “{profile.headline}”
            </p>

            {/* CTAs */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                marginBottom: "2.5rem",
              }}
            >
              <a href="#work" className="btn btn-primary">
                View My Work <IconArrowUpRight className="w-4 h-4" />
              </a>

              <a href="#contact" className="btn btn-secondary">
                Let's Talk
              </a>

              <a
                href={profile.contact.resumeUrl}
                download="Ritesh-Maurya-Resume.pdf"
                className="btn btn-secondary"
                title="Download verified resume"
              >
                <IconDownload className="w-4 h-4" /> CV
              </a>
            </div>

            {/* Social Icons */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "#64748b", textTransform: "uppercase" }}>
                Connect:
              </span>
              <a
                href={profile.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                style={{
                  color: "#94a3b8",
                  padding: "0.5rem",
                  borderRadius: "0.5rem",
                  backgroundColor: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid var(--border-subtle)",
                  display: "flex",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
              >
                <IconGithub className="w-4 h-4" />
              </a>
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                style={{
                  color: "#94a3b8",
                  padding: "0.5rem",
                  borderRadius: "0.5rem",
                  backgroundColor: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid var(--border-subtle)",
                  display: "flex",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
              >
                <IconLinkedin className="w-4 h-4" />
              </a>
              <a
                href={profile.contact.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter Profile"
                style={{
                  color: "#94a3b8",
                  padding: "0.5rem",
                  borderRadius: "0.5rem",
                  backgroundColor: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid var(--border-subtle)",
                  display: "flex",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
              >
                <IconTwitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Photo Card & Developer Status */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
            }}
          >
            {/* Editorial Frame with 3D Parallax Tilt */}
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "380px",
                perspective: "1000px",
              }}
            >
              <div
                style={{
                  position: "relative",
                  borderRadius: "1.25rem",
                  padding: "0.75rem",
                  backgroundColor: "rgba(20, 24, 35, 0.65)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  boxShadow: "0 24px 50px -12px rgba(0, 0, 0, 0.7), 0 0 40px rgba(56, 189, 248, 0.12)",
                  transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
                  transition: "transform 0.15s ease-out",
                  overflow: "hidden",
                }}
              >
                {/* Photo container */}
                <div
                  style={{
                    position: "relative",
                    borderRadius: "0.875rem",
                    overflow: "hidden",
                    aspectRatio: "1 / 1.05",
                    backgroundColor: "#0d1117",
                  }}
                >
                  <img
                    src={profile.images.avatar}
                    alt={profile.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center top",
                      filter: "contrast(1.05) brightness(0.98)",
                    }}
                  />

                  {/* Gradient Overlay for Editorial Mood */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(180deg, transparent 65%, rgba(7, 8, 12, 0.85) 100%)",
                      pointerEvents: "none",
                    }}
                  />

                  {/* Floating Tag inside Photo */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "0.85rem",
                      left: "0.85rem",
                      right: "0.85rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      backgroundColor: "rgba(10, 12, 18, 0.8)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "0.5rem",
                      padding: "0.45rem 0.75rem",
                    }}
                  >
                    <div>
                      <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#fff" }}>
                        Ritesh Maurya
                      </div>
                      <div style={{ fontSize: "0.6875rem", fontFamily: "var(--font-mono)", color: "#38bdf8" }}>
                        Amazia Fashion Pvt. Ltd.
                      </div>
                    </div>
                    <span
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: "#34d399",
                        boxShadow: "0 0 8px #34d399",
                      }}
                    />
                  </div>
                </div>

                {/* Technical Stack Bar below photo */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    paddingTop: "0.75rem",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6875rem",
                    color: "#94a3b8",
                  }}
                >
                  <span>NEXT.JS</span>
                  <span>•</span>
                  <span>TYPESCRIPT</span>
                  <span>•</span>
                  <span>DUCKDB</span>
                  <span>•</span>
                  <span>SQL</span>
                </div>
              </div>
            </div>

            {/* Developer Status Widget */}
            <div
              style={{
                marginTop: "1.75rem",
                width: "100%",
                maxWidth: "380px",
                padding: "1rem 1.25rem",
                borderRadius: "0.875rem",
                backgroundColor: "rgba(14, 17, 24, 0.7)",
                backdropFilter: "blur(12px)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "0.75rem",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontSize: "0.6875rem",
                    fontFamily: "var(--font-mono)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    color: "#34d399",
                    fontWeight: 600,
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: "#34d399",
                    }}
                  />
                  Currently Building
                </span>
                <span style={{ fontSize: "0.6875rem", fontFamily: "var(--font-mono)", color: "#64748b" }}>
                  May 2026 — Present
                </span>
              </div>

              <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "#fff", marginBottom: "0.25rem" }}>
                {profile.company.role} · {profile.company.name}
              </div>

              <p style={{ fontSize: "0.75rem", color: "#94a3b8", lineHeight: 1.5, marginBottom: "0.75rem" }}>
                {profile.company.workDescription}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                <span className="tech-tag">Next.js</span>
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">DuckDB</span>
                <span className="tech-tag">SQL</span>
                <span className="tech-tag">Google Apps Script</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
