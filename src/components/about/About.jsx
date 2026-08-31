import React from "react";
import { profile } from "../../data/profile";
import {
  IconBriefcase,
  IconCode,
  IconLayers,
  IconSparkles,
  IconMapPin,
  IconGraduation,
  IconArrowUpRight,
} from "../common/Icons";

const About = () => {
  const storyCards = [
    {
      title: "WHO I AM",
      icon: <IconBriefcase className="w-5 h-5" style={{ color: "#38bdf8" }} />,
      content: profile.about.whoIAm,
      tag: "Background",
    },
    {
      title: "WHAT I BUILD",
      icon: <IconCode className="w-5 h-5" style={{ color: "#60a5fa" }} />,
      content: profile.about.whatIBuild,
      tag: "Specialization",
    },
    {
      title: "HOW I WORK",
      icon: <IconLayers className="w-5 h-5" style={{ color: "#34d399" }} />,
      content: profile.about.howIWork,
      tag: "Philosophy",
    },
    {
      title: "WHAT I'M EXPLORING",
      icon: <IconSparkles className="w-5 h-5" style={{ color: "#a78bfa" }} />,
      content: profile.about.whatImExploring,
      tag: "Focus 2026",
    },
  ];

  return (
    <section id="about" className="section-wrapper">
      <div className="app-container">
        {/* Header */}
        <div className="section-header">
          <div className="section-kicker">
            <IconBriefcase className="w-4 h-4" /> About Ritesh
          </div>
          <h2 className="section-title">Engineering practical solutions for business workflows.</h2>
          <p className="section-subtitle">
            Junior Developer at <strong>Amazia Fashion Pvt. Ltd.</strong> building full-stack ERP dashboards,
            alongside delivering production web applications as a freelance developer.
          </p>
        </div>

        {/* 4-Part Storytelling Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
            marginBottom: "3rem",
          }}
        >
          {storyCards.map((card, i) => (
            <div
              key={card.title}
              className="glass-panel"
              style={{
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1.25rem",
                  }}
                >
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "0.5rem",
                      backgroundColor: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid var(--border-subtle)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {card.icon}
                  </div>
                  <span
                    style={{
                      fontSize: "0.6875rem",
                      fontFamily: "var(--font-mono)",
                      color: "#64748b",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {card.tag}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    color: "#f8fafc",
                    marginBottom: "0.75rem",
                  }}
                >
                  {card.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.9375rem",
                    lineHeight: 1.65,
                    color: "#94a3b8",
                  }}
                >
                  {card.content}
                </p>
              </div>

              <div
                style={{
                  marginTop: "1.5rem",
                  height: "2px",
                  width: "28px",
                  backgroundColor: i === 0 ? "#38bdf8" : i === 1 ? "#60a5fa" : i === 2 ? "#34d399" : "#a78bfa",
                  borderRadius: "2px",
                }}
              />
            </div>
          ))}
        </div>

        {/* Highlight Banner: Current Roles & Availability */}
        <div
          className="glass-panel"
          style={{
            padding: "1.75rem 2rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.5rem",
            background: "linear-gradient(135deg, rgba(14, 17, 24, 0.8) 0%, rgba(20, 24, 35, 0.5) 100%)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                backgroundColor: "rgba(56, 189, 248, 0.12)",
                border: "1px solid rgba(56, 189, 248, 0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#38bdf8",
                flexShrink: 0,
              }}
            >
              <IconGraduation className="w-6 h-6" />
            </div>
            <div>
              <div style={{ fontSize: "0.9375rem", fontWeight: 600, color: "#fff" }}>
                B.E. Information Technology · VPPCOEVA, Mumbai
              </div>
              <div style={{ fontSize: "0.8125rem", color: "#94a3b8" }}>
                Graduated with focus on Computer Engineering, Algorithms, and Distributed Systems.
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: "0.75rem" }}>
            <a href="#work" className="btn btn-secondary" style={{ fontSize: "0.8125rem" }}>
              Explore Projects
            </a>
            <a href="#contact" className="btn btn-primary" style={{ fontSize: "0.8125rem" }}>
              Work With Me <IconArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
