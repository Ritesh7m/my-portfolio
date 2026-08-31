import React, { useState } from "react";
import { projects } from "../../data/projects";
import ProjectDetailModal from "./ProjectDetailModal";
import { IconCode, IconExternal, IconGithub, IconArrowUpRight } from "../common/Icons";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProjectId, setHoveredProjectId] = useState(null);

  return (
    <section id="work" className="section-wrapper">
      <div className="app-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-kicker">
            <IconCode className="w-4 h-4" /> Selected Works
          </div>
          <h2 className="section-title">Production Systems & Web Apps</h2>
          <p className="section-subtitle">
            Real-world full-stack platforms, client websites, and developer tools built with modern engineering standards.
            Click any project to inspect its problem statement, architecture, and feature breakdown.
          </p>
        </div>

        {/* Featured Projects List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {projects.map((project, index) => {
            const isHovered = hoveredProjectId === project.id;
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className="glass-panel"
                onMouseEnter={() => setHoveredProjectId(project.id)}
                onMouseLeave={() => setHoveredProjectId(null)}
                style={{
                  borderRadius: "1.25rem",
                  overflow: "hidden",
                  padding: "0",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  boxShadow: isHovered
                    ? "0 20px 40px -10px rgba(0, 0, 0, 0.7), 0 0 35px rgba(56, 189, 248, 0.15)"
                    : "0 4px 20px rgba(0, 0, 0, 0.4)",
                  borderColor: isHovered ? "rgba(56, 189, 248, 0.35)" : "var(--border-subtle)",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                    alignItems: "center",
                  }}
                >
                  {/* Media View (reverses order on odd items for visual interest) */}
                  <div
                    onClick={() => setSelectedProject(project)}
                    style={{
                      order: isEven ? 1 : 2,
                      height: "100%",
                      minHeight: "340px",
                      position: "relative",
                      overflow: "hidden",
                      cursor: "pointer",
                      backgroundColor: "#07090e",
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
                        transform: isHovered ? "scale(1.04)" : "scale(1)",
                        transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                    />

                    {/* Gradient Mask */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(180deg, rgba(7, 8, 12, 0.1) 0%, rgba(7, 8, 12, 0.65) 100%)",
                        pointerEvents: "none",
                      }}
                    />

                    {/* Interactive "Inspect Architecture" overlay */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: "1.25rem",
                        left: "1.25rem",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        backgroundColor: "rgba(10, 12, 18, 0.85)",
                        backdropFilter: "blur(8px)",
                        padding: "0.45rem 0.85rem",
                        borderRadius: "9999px",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        color: "#fff",
                        fontSize: "0.75rem",
                        fontFamily: "var(--font-mono)",
                        fontWeight: 600,
                        transform: isHovered ? "translateY(0)" : "translateY(4px)",
                        opacity: isHovered ? 1 : 0.85,
                        transition: "all 0.2s ease",
                      }}
                    >
                      <span>INSPECT DETAILS</span>
                      <IconArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
                    </div>
                  </div>

                  {/* Information Panel */}
                  <div
                    style={{
                      order: isEven ? 2 : 1,
                      padding: "2.5rem 2.25rem",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      {/* Top Badges */}
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
                            fontSize: "0.75rem",
                            fontFamily: "var(--font-mono)",
                            color: "#38bdf8",
                            letterSpacing: "0.05em",
                            textTransform: "uppercase",
                            fontWeight: 600,
                          }}
                        >
                          {project.category}
                        </span>

                        {project.featured && (
                          <span
                            style={{
                              fontSize: "0.6875rem",
                              fontFamily: "var(--font-mono)",
                              color: "#34d399",
                              backgroundColor: "rgba(52, 211, 153, 0.1)",
                              border: "1px solid rgba(52, 211, 153, 0.25)",
                              padding: "0.2rem 0.5rem",
                              borderRadius: "9999px",
                            }}
                          >
                            Featured
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3
                        onClick={() => setSelectedProject(project)}
                        style={{
                          fontSize: "1.45rem",
                          fontWeight: 700,
                          color: "#ffffff",
                          marginBottom: "0.5rem",
                          cursor: "pointer",
                          transition: "color 0.15s ease",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#38bdf8")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
                      >
                        {project.title}
                      </h3>

                      <div
                        style={{
                          fontSize: "0.875rem",
                          color: "#cbd5e1",
                          marginBottom: "1rem",
                          fontWeight: 500,
                        }}
                      >
                        {project.tagline}
                      </div>

                      <p
                        style={{
                          fontSize: "0.9375rem",
                          lineHeight: 1.6,
                          color: "#94a3b8",
                          marginBottom: "1.5rem",
                        }}
                      >
                        {project.shortDescription}
                      </p>

                      {/* Tech Pills */}
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "0.45rem",
                          marginBottom: "2rem",
                        }}
                      >
                        {project.technologies.map((tech) => (
                          <span key={tech} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Row */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        flexWrap: "wrap",
                      }}
                    >
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="btn btn-primary"
                        style={{ fontSize: "0.8125rem", padding: "0.6rem 1.15rem" }}
                      >
                        Inspect Architecture
                      </button>

                      {project.demoLink && (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-secondary"
                          style={{ fontSize: "0.8125rem", padding: "0.6rem 1rem" }}
                        >
                          Live App <IconExternal className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {project.codeLink && (
                        <a
                          href={project.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-secondary"
                          style={{ fontSize: "0.8125rem", padding: "0.6rem 1rem" }}
                          aria-label={`View code for ${project.title}`}
                        >
                          <IconGithub className="w-4 h-4" /> Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal View for Project Deep Dive */}
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;
