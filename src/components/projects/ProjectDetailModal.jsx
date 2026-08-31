import React, { useEffect } from "react";
import {
  IconClose,
  IconExternal,
  IconGithub,
  IconLayers,
  IconCheck,
  IconTerminal,
} from "../common/Icons";

const ProjectDetailModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  const { details } = project;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(5, 7, 11, 0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem",
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "840px",
          maxHeight: "90vh",
          backgroundColor: "#0d1017",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          borderRadius: "1.25rem",
          boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.9)",
          overflowY: "auto",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div
          style={{
            position: "sticky",
            top: 0,
            backgroundColor: "rgba(13, 16, 23, 0.95)",
            backdropFilter: "blur(10px)",
            padding: "1.25rem 1.75rem",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            zIndex: 10,
          }}
        >
          <div>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "#38bdf8",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              {project.category}
            </span>
            <h2 style={{ fontSize: "1.35rem", fontWeight: 700, color: "#fff" }}>
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              padding: "0.5rem",
              borderRadius: "0.5rem",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              color: "#94a3b8",
              display: "flex",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
          >
            <IconClose className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: "1.75rem" }}>
          {/* Project Screenshot / Media Banner */}
          <div
            style={{
              width: "100%",
              height: "280px",
              borderRadius: "0.875rem",
              overflow: "hidden",
              marginBottom: "1.75rem",
              backgroundColor: "#07090e",
              border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top center",
              }}
            />
          </div>

          {/* Action Links */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              marginBottom: "2rem",
            }}
          >
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ fontSize: "0.875rem" }}
              >
                Launch Live App <IconExternal className="w-4 h-4" />
              </a>
            )}

            {project.codeLink && (
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ fontSize: "0.875rem" }}
              >
                <IconGithub className="w-4 h-4" /> View Source Code
              </a>
            )}
          </div>

          {/* Technology Pills */}
          <div style={{ marginBottom: "2rem" }}>
            <div
              style={{
                fontSize: "0.75rem",
                fontFamily: "var(--font-mono)",
                color: "#64748b",
                textTransform: "uppercase",
                marginBottom: "0.6rem",
              }}
            >
              Technologies & Infrastructure
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-tag" style={{ color: "#e2e8f0" }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Section: Overview */}
          {details?.overview && (
            <div style={{ marginBottom: "1.75rem" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#fff", marginBottom: "0.5rem" }}>
                Overview
              </h3>
              <p style={{ fontSize: "0.9375rem", color: "#94a3b8", lineHeight: 1.65 }}>
                {details.overview}
              </p>
            </div>
          )}

          {/* Grid: Problem & Solution */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.25rem",
              marginBottom: "2rem",
            }}
          >
            {details?.problem && (
              <div
                style={{
                  padding: "1.25rem",
                  borderRadius: "0.75rem",
                  backgroundColor: "rgba(239, 68, 68, 0.05)",
                  border: "1px solid rgba(239, 68, 68, 0.18)",
                }}
              >
                <div
                  style={{
                    fontSize: "0.75rem",
                    fontFamily: "var(--font-mono)",
                    color: "#f87171",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    marginBottom: "0.4rem",
                  }}
                >
                  The Challenge / Problem
                </div>
                <p style={{ fontSize: "0.875rem", color: "#cbd5e1", lineHeight: 1.6 }}>
                  {details.problem}
                </p>
              </div>
            )}

            {details?.solution && (
              <div
                style={{
                  padding: "1.25rem",
                  borderRadius: "0.75rem",
                  backgroundColor: "rgba(16, 185, 129, 0.05)",
                  border: "1px solid rgba(16, 185, 129, 0.18)",
                }}
              >
                <div
                  style={{
                    fontSize: "0.75rem",
                    fontFamily: "var(--font-mono)",
                    color: "#34d399",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    marginBottom: "0.4rem",
                  }}
                >
                  Architectural Solution
                </div>
                <p style={{ fontSize: "0.875rem", color: "#cbd5e1", lineHeight: 1.6 }}>
                  {details.solution}
                </p>
              </div>
            )}
          </div>

          {/* Features List */}
          {details?.features && details.features.length > 0 && (
            <div style={{ marginBottom: "2rem" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#fff", marginBottom: "0.75rem" }}>
                Key Technical Features
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {details.features.map((feat, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.65rem",
                      fontSize: "0.875rem",
                      color: "#94a3b8",
                    }}
                  >
                    <IconCheck className="w-4 h-4 text-cyan-400" style={{ marginTop: "0.15rem", flexShrink: 0 }} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Architecture & Technical Challenges */}
          {details?.architecture && (
            <div
              style={{
                padding: "1.25rem",
                borderRadius: "0.75rem",
                backgroundColor: "rgba(255, 255, 255, 0.03)",
                border: "1px solid var(--border-subtle)",
                marginBottom: "1.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  color: "#38bdf8",
                  fontFamily: "var(--font-mono)",
                  marginBottom: "0.5rem",
                }}
              >
                <IconTerminal className="w-4 h-4" /> System Architecture
              </div>
              <p style={{ fontSize: "0.875rem", color: "#cbd5e1", lineHeight: 1.6 }}>
                {details.architecture}
              </p>
            </div>
          )}

          {details?.challenges && (
            <div
              style={{
                padding: "1.25rem",
                borderRadius: "0.75rem",
                backgroundColor: "rgba(255, 255, 255, 0.02)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <div
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  color: "#e2e8f0",
                  fontFamily: "var(--font-mono)",
                  marginBottom: "0.5rem",
                }}
              >
                Engineering Challenges & Solutions
              </div>
              <p style={{ fontSize: "0.875rem", color: "#94a3b8", lineHeight: 1.6 }}>
                {details.challenges}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
