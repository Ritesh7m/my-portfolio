import React from "react";
import { achievements } from "../../data/certifications";
import { IconAward, IconCheck } from "../common/Icons";

const Achievements = () => {
  return (
    <section id="achievements" className="section-wrapper">
      <div className="app-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-kicker">
            <IconAward className="w-4 h-4" /> Verified Credentials
          </div>
          <h2 className="section-title">Certifications & Competitions</h2>
          <p className="section-subtitle">
            Confirmed collegiate hackathon milestones and technical certifications earned throughout my development career.
          </p>
        </div>

        {/* Featured SIH 2025 Spotlight Card */}
        {achievements
          .filter((a) => a.id === "sih-2025")
          .map((sih) => (
            <div
              key={sih.id}
              className="glass-panel"
              style={{
                padding: "2.25rem",
                marginBottom: "2rem",
                borderRadius: "1.25rem",
                border: "1px solid rgba(56, 189, 248, 0.3)",
                background:
                  "linear-gradient(135deg, rgba(14, 20, 32, 0.8) 0%, rgba(10, 14, 22, 0.95) 100%)",
                boxShadow: "0 16px 40px -10px rgba(56, 189, 248, 0.12)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Subtle ambient light */}
              <div
                style={{
                  position: "absolute",
                  top: "-50%",
                  right: "-20%",
                  width: "350px",
                  height: "350px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, transparent 70%)",
                  filter: "blur(50px)",
                  pointerEvents: "none",
                }}
              />

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1.5rem",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <div>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      fontSize: "0.75rem",
                      fontFamily: "var(--font-mono)",
                      color: "#38bdf8",
                      backgroundColor: "rgba(56, 189, 248, 0.1)",
                      border: "1px solid rgba(56, 189, 248, 0.25)",
                      padding: "0.25rem 0.65rem",
                      borderRadius: "9999px",
                      marginBottom: "0.75rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    <span>{sih.category}</span>
                    <span>•</span>
                    <span>{sih.date}</span>
                  </div>

                  <h3 style={{ fontSize: "1.45rem", fontWeight: 800, color: "#fff", marginBottom: "0.4rem" }}>
                    {sih.title}
                  </h3>

                  <div style={{ fontSize: "0.875rem", color: "#cbd5e1", marginBottom: "0.75rem" }}>
                    {sih.organization}
                  </div>

                  <p style={{ fontSize: "0.9375rem", color: "#94a3b8", maxWidth: "600px", lineHeight: 1.6 }}>
                    {sih.description}
                  </p>
                </div>

                {/* Big Stat Box */}
                <div
                  style={{
                    backgroundColor: "rgba(10, 13, 20, 0.8)",
                    border: "1px solid rgba(56, 189, 248, 0.35)",
                    borderRadius: "1rem",
                    padding: "1.5rem 2rem",
                    textAlign: "center",
                    minWidth: "180px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "1.85rem",
                      fontWeight: 800,
                      color: "#38bdf8",
                    }}
                  >
                    45 / 90
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      fontFamily: "var(--font-mono)",
                      color: "#94a3b8",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      marginTop: "0.25rem",
                    }}
                  >
                    Teams Shortlisted
                  </div>
                </div>
              </div>
            </div>
          ))}

        {/* Other Verified Certifications Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {achievements
            .filter((a) => a.id !== "sih-2025")
            .map((item) => (
              <div
                key={item.id}
                className="glass-panel"
                style={{
                  padding: "1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "1rem",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.6875rem",
                        fontFamily: "var(--font-mono)",
                        color: "#94a3b8",
                        textTransform: "uppercase",
                      }}
                    >
                      {item.category}
                    </span>
                    <span
                      style={{
                        fontSize: "0.6875rem",
                        fontFamily: "var(--font-mono)",
                        color: "#64748b",
                      }}
                    >
                      {item.date}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "#fff",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {item.title}
                  </h3>

                  <div
                    style={{
                      fontSize: "0.8125rem",
                      color: "#38bdf8",
                      fontWeight: 500,
                      marginBottom: "0.75rem",
                    }}
                  >
                    {item.organization}
                  </div>

                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "#94a3b8",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.description}
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.45rem",
                    marginTop: "1.5rem",
                    fontSize: "0.75rem",
                    fontFamily: "var(--font-mono)",
                    color: "#34d399",
                  }}
                >
                  <IconCheck className="w-3.5 h-3.5" />
                  <span>Verified Credential</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
