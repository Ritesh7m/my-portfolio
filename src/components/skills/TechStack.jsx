import React, { useState } from "react";
import { skillCategories } from "../../data/skills";
import { IconLayers, IconCode, IconDatabase, IconServer, IconTerminal } from "../common/Icons";

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const getCategoryIcon = (catId) => {
    switch (catId) {
      case "frontend":
        return <IconCode className="w-4 h-4" />;
      case "backend":
        return <IconServer className="w-4 h-4" />;
      case "database":
        return <IconDatabase className="w-4 h-4" />;
      case "tools":
        return <IconTerminal className="w-4 h-4" />;
      case "languages":
        return <IconLayers className="w-4 h-4" />;
      default:
        return <IconLayers className="w-4 h-4" />;
    }
  };

  // Find related skills for the currently hovered skill
  const getRelatedSkills = (skillName) => {
    if (!skillName) return [];
    for (const cat of skillCategories) {
      const match = cat.skills.find((s) => s.name === skillName);
      if (match && match.related) {
        return match.related;
      }
    }
    return [];
  };

  const relatedList = getRelatedSkills(hoveredSkill);

  // Projects mapped to skills (only actual projects)
  const projectTechMapping = {
    "Next.js": ["Amazia ERP Dashboard", "R.S Enterprises RO System"],
    "TypeScript": ["Amazia ERP Dashboard"],
    "DuckDB": ["Amazia ERP Dashboard"],
    "SQL": ["Amazia ERP Dashboard"],
    "Google Apps Script": ["Amazia ERP Dashboard"],
    "React.js": ["E-Learning Platform (StudyNotion)", "QuickPaste", "Leetstatus"],
    "Node.js": ["E-Learning Platform", "R.S Enterprises", "QuickPaste"],
    "Express.js": ["E-Learning Platform", "QuickPaste"],
    "MongoDB": ["E-Learning Platform", "R.S Enterprises", "QuickPaste"],
    "Tailwind CSS": ["E-Learning Platform", "R.S Enterprises", "Leetstatus"],
  };

  const displayedCategories =
    activeCategory === "all"
      ? skillCategories
      : skillCategories.filter((c) => c.id === activeCategory);

  return (
    <section id="stack" className="section-wrapper">
      <div className="app-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-kicker">
            <IconLayers className="w-4 h-4" /> Technical Arsenal
          </div>
          <h2 className="section-title">Verified Developer Stack</h2>
          <p className="section-subtitle">
            Technologies and architectural tools used in daily production, client projects, and ERP automation.
            Hover over any technology to inspect its ecosystem connections.
          </p>
        </div>

        {/* Filter Bar */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginBottom: "2.5rem",
            borderBottom: "1px solid var(--border-subtle)",
            paddingBottom: "1rem",
          }}
        >
          <button
            onClick={() => setActiveCategory("all")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.45rem",
              fontSize: "0.8125rem",
              fontFamily: "var(--font-mono)",
              padding: "0.45rem 0.95rem",
              borderRadius: "0.5rem",
              backgroundColor: activeCategory === "all" ? "#fff" : "rgba(255, 255, 255, 0.04)",
              color: activeCategory === "all" ? "#07080c" : "#94a3b8",
              fontWeight: activeCategory === "all" ? 700 : 500,
              border: activeCategory === "all" ? "1px solid #fff" : "1px solid var(--border-subtle)",
              transition: "all 0.15s ease",
            }}
          >
            All Categories
          </button>

          {skillCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  fontSize: "0.8125rem",
                  fontFamily: "var(--font-mono)",
                  padding: "0.45rem 0.95rem",
                  borderRadius: "0.5rem",
                  backgroundColor: isActive ? "#fff" : "rgba(255, 255, 255, 0.04)",
                  color: isActive ? "#07080c" : "#94a3b8",
                  fontWeight: isActive ? 700 : 500,
                  border: isActive ? "1px solid #fff" : "1px solid var(--border-subtle)",
                  transition: "all 0.15s ease",
                }}
              >
                {getCategoryIcon(cat.id)}
                <span>{cat.shortTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Categories Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.75rem",
          }}
        >
          {displayedCategories.map((category) => (
            <div
              key={category.id}
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
                    gap: "0.75rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "0.375rem",
                      backgroundColor: "rgba(56, 189, 248, 0.1)",
                      color: "#38bdf8",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {getCategoryIcon(category.id)}
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#fff" }}>
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p style={{ fontSize: "0.8125rem", color: "#64748b", marginBottom: "1.25rem" }}>
                  {category.description}
                </p>

                {/* Skill Pills */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                  {category.skills.map((skill) => {
                    const isSelf = hoveredSkill === skill.name;
                    const isRelated = relatedList.includes(skill.name);

                    let bg = "rgba(255, 255, 255, 0.03)";
                    let border = "rgba(255, 255, 255, 0.08)";
                    let textColor = "#e2e8f0";
                    let transform = "scale(1)";

                    if (isSelf) {
                      bg = "rgba(56, 189, 248, 0.2)";
                      border = "rgba(56, 189, 248, 0.6)";
                      textColor = "#ffffff";
                      transform = "scale(1.04)";
                    } else if (isRelated) {
                      bg = "rgba(52, 211, 153, 0.15)";
                      border = "rgba(52, 211, 153, 0.45)";
                      textColor = "#34d399";
                      transform = "scale(1.02)";
                    }

                    return (
                      <div
                        key={`${category.id}-${skill.name}`}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.4rem",
                          padding: "0.45rem 0.85rem",
                          borderRadius: "0.5rem",
                          backgroundColor: bg,
                          border: `1px solid ${border}`,
                          color: textColor,
                          fontSize: "0.8125rem",
                          fontFamily: "var(--font-mono)",
                          fontWeight: isSelf ? 600 : 500,
                          transform,
                          transition: "all 0.15s ease",
                          cursor: "default",
                        }}
                      >
                        <span
                          style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            backgroundColor: isSelf ? "#38bdf8" : isRelated ? "#34d399" : "#64748b",
                          }}
                        />
                        <span>{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic Connection Indicator */}
              {hoveredSkill && (
                <div
                  style={{
                    marginTop: "1.25rem",
                    paddingTop: "0.85rem",
                    borderTop: "1px solid rgba(255, 255, 255, 0.05)",
                    fontSize: "0.75rem",
                    fontFamily: "var(--font-mono)",
                    color: "#94a3b8",
                  }}
                >
                  {projectTechMapping[hoveredSkill] ? (
                    <div>
                      <span style={{ color: "#38bdf8" }}>Connected Project:</span>{" "}
                      {projectTechMapping[hoveredSkill].join(", ")}
                    </div>
                  ) : null}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
