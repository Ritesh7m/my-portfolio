import React, { useState } from "react";
import { engineeringSteps } from "../../data/philosophy";
import { IconTerminal, IconCheck, IconLayers } from "../common/Icons";

const HowIBuild = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="section-wrapper">
      <div className="app-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-kicker">
            <IconTerminal className="w-4 h-4" /> Methodology
          </div>
          <h2 className="section-title">How I Build & Engineer</h2>
          <p className="section-subtitle">
            A disciplined, systematic approach to problem solving, software design, and deployment.
            My personal development philosophy for writing maintainable code that delivers real business value.
          </p>
        </div>

        {/* Steps Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {engineeringSteps.map((item, idx) => {
            const isCurrent = activeStep === idx;
            return (
              <div
                key={item.step}
                className="glass-panel"
                onMouseEnter={() => setActiveStep(idx)}
                style={{
                  padding: "1.75rem",
                  cursor: "pointer",
                  borderColor: isCurrent ? "rgba(56, 189, 248, 0.4)" : "var(--border-subtle)",
                  backgroundColor: isCurrent ? "rgba(14, 17, 26, 0.9)" : "var(--bg-surface)",
                  transform: isCurrent ? "translateY(-3px)" : "translateY(0)",
                  transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                  boxShadow: isCurrent ? "0 12px 30px -8px rgba(56, 189, 248, 0.15)" : "none",
                }}
              >
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
                      fontFamily: "var(--font-mono)",
                      fontSize: "1.1rem",
                      fontWeight: 800,
                      color: isCurrent ? "#38bdf8" : "#64748b",
                    }}
                  >
                    {item.step}
                  </span>

                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: isCurrent ? "#38bdf8" : "rgba(255, 255, 255, 0.1)",
                      transition: "background-color 0.2s ease",
                    }}
                  />
                </div>

                <h3
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: isCurrent ? "#ffffff" : "#f1f5f9",
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.875rem",
                    color: isCurrent ? "#cbd5e1" : "#94a3b8",
                    lineHeight: 1.6,
                  }}
                >
                  {item.summary}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowIBuild;
