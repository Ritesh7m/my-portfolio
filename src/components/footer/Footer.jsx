import React from "react";
import { profile } from "../../data/profile";
import { IconGithub, IconLinkedin, IconTwitter, IconMail, IconArrowUpRight } from "../common/Icons";

const Footer = ({ onOpenCommandPalette }) => {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border-subtle)",
        backgroundColor: "#05070a",
        padding: "4.5rem 0 3rem 0",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div className="app-container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "3rem",
            marginBottom: "3.5rem",
          }}
        >
          {/* Col 1: Identity */}
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "1.1rem",
                fontWeight: 800,
                color: "#ffffff",
                marginBottom: "0.5rem",
                letterSpacing: "-0.01em",
              }}
            >
              <span
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "5px",
                  background: "linear-gradient(135deg, #38bdf8 0%, #818cf8 100%)",
                  color: "#07080c",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  fontSize: "0.8rem",
                }}
              >
                R
              </span>
              <span>RITESH MAURYA</span>
            </div>

            <div
              style={{
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "#cbd5e1",
                marginBottom: "0.25rem",
              }}
            >
              {profile.title} · {profile.company.name}
            </div>

            <div
              style={{
                fontSize: "0.75rem",
                fontFamily: "var(--font-mono)",
                color: "#38bdf8",
                marginBottom: "1rem",
              }}
            >
              {profile.tagline}
            </div>

            <p style={{ fontSize: "0.8125rem", color: "#64748b", maxWidth: "320px", lineHeight: 1.6 }}>
              Specialized in Next.js, TypeScript, DuckDB, and business automation workflows.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <div
              style={{
                fontSize: "0.75rem",
                fontFamily: "var(--font-mono)",
                color: "#94a3b8",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "1.25rem",
              }}
            >
              Navigation
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <a href="#hero" style={{ fontSize: "0.875rem", color: "#94a3b8" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")} onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}>
                Home & Status
              </a>
              <a href="#about" style={{ fontSize: "0.875rem", color: "#94a3b8" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")} onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}>
                About & Philosophy
              </a>
              <a href="#stack" style={{ fontSize: "0.875rem", color: "#94a3b8" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")} onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}>
                Tech Stack
              </a>
              <a href="#work" style={{ fontSize: "0.875rem", color: "#94a3b8" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")} onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}>
                Projects
              </a>
              <a href="#journey" style={{ fontSize: "0.875rem", color: "#94a3b8" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")} onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}>
                Trajectory & SIH 2025
              </a>
              <a href="#contact" style={{ fontSize: "0.875rem", color: "#94a3b8" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")} onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}>
                Contact
              </a>
            </div>
          </div>

          {/* Col 3: Direct Channels */}
          <div>
            <div
              style={{
                fontSize: "0.75rem",
                fontFamily: "var(--font-mono)",
                color: "#94a3b8",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "1.25rem",
              }}
            >
              Connect
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.875rem",
                  color: "#94a3b8",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#38bdf8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
              >
                <IconLinkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
                <IconArrowUpRight className="w-3 h-3 text-slate-500" />
              </a>

              <a
                href={profile.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.875rem",
                  color: "#94a3b8",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#38bdf8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
              >
                <IconGithub className="w-4 h-4 text-slate-300" />
                <span>GitHub</span>
                <IconArrowUpRight className="w-3 h-3 text-slate-500" />
              </a>

              <a
                href={`mailto:${profile.contact.email}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.875rem",
                  color: "#94a3b8",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#38bdf8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
              >
                <IconMail className="w-4 h-4 text-rose-400" />
                <span>Email</span>
                <IconArrowUpRight className="w-3 h-3 text-slate-500" />
              </a>

              <button
                onClick={onOpenCommandPalette}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.875rem",
                  color: "#94a3b8",
                  textAlign: "left",
                  marginTop: "0.25rem",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#38bdf8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
              >
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "#38bdf8" }}>⌘K</span>
                <span>Command Center</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(255, 255, 255, 0.06)",
            fontSize: "0.8125rem",
            color: "#64748b",
            fontFamily: "var(--font-mono)",
          }}
        >
          <div>
            © 2026 Ritesh Maurya · {profile.location}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <span>Built with React & Vite</span>
            <span>•</span>
            <span style={{ color: "#10b981" }}>Asia/Kolkata (IST)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
