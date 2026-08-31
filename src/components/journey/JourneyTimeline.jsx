import React, { useState } from "react";
import { timelineEvents } from "../../data/journey";
import { IconGraduation, IconBriefcase, IconAward, IconCheck } from "../common/Icons";

const JourneyTimeline = () => {
  const [selectedYear, setSelectedYear] = useState("2026");

  const years = ["2026", "2025", "2024", "2023"];

  return (
    <section id="journey" className="section-wrapper">
      <div className="app-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-kicker">
            <IconGraduation className="w-4 h-4" /> Trajectory
          </div>
          <h2 className="section-title">Development Journey & Milestones</h2>
          <p className="section-subtitle">
            A chronological timeline of hands-on engineering, collegiate hackathons, internship experience,
            and professional production impact.
          </p>
        </div>

        {/* Year Filter Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "3rem",
            borderBottom: "1px solid var(--border-subtle)",
            paddingBottom: "1rem",
            overflowX: "auto",
          }}
        >
          {years.map((year) => {
            const isSelected = selectedYear === year;
            return (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                style={{
                  fontSize: "0.875rem",
                  fontFamily: "var(--font-mono)",
                  fontWeight: isSelected ? 700 : 500,
                  padding: "0.45rem 1.15rem",
                  borderRadius: "0.5rem",
                  backgroundColor: isSelected ? "#fff" : "rgba(255, 255, 255, 0.04)",
                  color: isSelected ? "#07080c" : "#94a3b8",
                  border: isSelected ? "1px solid #fff" : "1px solid var(--border-subtle)",
                  transition: "all 0.15s ease",
                  cursor: "pointer",
                }}
              >
                {year}
              </button>
            );
          })}
        </div>

        {/* Timeline Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {timelineEvents
            .filter((group) => group.year === selectedYear || selectedYear === "all")
            .map((group) => (
              <div key={group.year}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    marginBottom: "1.75rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "1.75rem",
                      fontWeight: 800,
                      color: "#38bdf8",
                    }}
                  >
                    {group.year}
                  </span>
                  <div
                    style={{
                      height: "1px",
                      flex: 1,
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "0.875rem",
                      color: "#94a3b8",
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    {group.title}
                  </span>
                </div>

                {/* Milestone Cards in this Year */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                    gap: "1.25rem",
                  }}
                >
                  {group.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="glass-panel"
                      style={{
                        padding: "1.75rem",
                        position: "relative",
                        borderLeft: item.highlight
                          ? "3px solid #38bdf8"
                          : "1px solid var(--border-subtle)",
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
                            fontSize: "0.6875rem",
                            fontFamily: "var(--font-mono)",
                            color: item.highlight ? "#38bdf8" : "#94a3b8",
                            backgroundColor: item.highlight
                              ? "rgba(56, 189, 248, 0.1)"
                              : "rgba(255, 255, 255, 0.04)",
                            border: item.highlight
                              ? "1px solid rgba(56, 189, 248, 0.25)"
                              : "1px solid rgba(255, 255, 255, 0.08)",
                            padding: "0.2rem 0.55rem",
                            borderRadius: "9999px",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                            fontWeight: 600,
                          }}
                        >
                          {item.tag}
                        </span>

                        {item.highlight && (
                          <span
                            style={{
                              width: "6px",
                              height: "6px",
                              borderRadius: "50%",
                              backgroundColor: "#38bdf8",
                              boxShadow: "0 0 8px #38bdf8",
                            }}
                          />
                        )}
                      </div>

                      <h3
                        style={{
                          fontSize: "1.1rem",
                          fontWeight: 700,
                          color: "#ffffff",
                          marginBottom: "0.65rem",
                          lineHeight: 1.35,
                        }}
                      >
                        {item.title}
                      </h3>

                      <p
                        style={{
                          fontSize: "0.875rem",
                          lineHeight: 1.6,
                          color: "#94a3b8",
                        }}
                      >
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;
