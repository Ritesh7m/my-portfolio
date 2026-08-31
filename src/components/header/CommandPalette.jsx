import React, { useState, useEffect, useRef } from "react";
import { profile } from "../../data/profile";
import {
  IconSearch,
  IconClose,
  IconCode,
  IconBriefcase,
  IconLayers,
  IconGraduation,
  IconAward,
  IconMail,
  IconGithub,
  IconLinkedin,
  IconDownload,
  IconCopy,
  IconCheck,
} from "../common/Icons";

const CommandPalette = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const actions = [
    {
      id: "projects",
      name: "View Projects & Architecture",
      category: "Navigation",
      icon: <IconCode className="w-4 h-4 text-cyan-400" />,
      perform: () => {
        document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "about",
      name: "About & Engineering Approach",
      category: "Navigation",
      icon: <IconBriefcase className="w-4 h-4 text-blue-400" />,
      perform: () => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "stack",
      name: "Tech Stack & Systems",
      category: "Navigation",
      icon: <IconLayers className="w-4 h-4 text-emerald-400" />,
      perform: () => {
        document.getElementById("stack")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "journey",
      name: "Timeline & Career Milestones",
      category: "Navigation",
      icon: <IconGraduation className="w-4 h-4 text-purple-400" />,
      perform: () => {
        document.getElementById("journey")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "achievements",
      name: "Achievements & SIH 2025",
      category: "Navigation",
      icon: <IconAward className="w-4 h-4 text-amber-400" />,
      perform: () => {
        document.getElementById("achievements")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "contact",
      name: "Get in Touch / Contact Form",
      category: "Navigation",
      icon: <IconMail className="w-4 h-4 text-rose-400" />,
      perform: () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "copy-email",
      name: "Copy Email Address",
      category: "Actions",
      detail: profile.contact.email,
      icon: copied ? <IconCheck className="w-4 h-4 text-emerald-400" /> : <IconCopy className="w-4 h-4 text-slate-400" />,
      perform: () => {
        navigator.clipboard.writeText(profile.contact.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      },
    },
    {
      id: "download-cv",
      name: "Download Resume / CV",
      category: "Actions",
      detail: "PDF Document",
      icon: <IconDownload className="w-4 h-4 text-slate-400" />,
      perform: () => {
        const link = document.createElement("a");
        link.href = profile.contact.resumeUrl;
        link.download = "Ritesh-Maurya-Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      },
    },
    {
      id: "github",
      name: "GitHub Profile",
      category: "External Links",
      detail: "github.com/Ritesh7m",
      icon: <IconGithub className="w-4 h-4 text-slate-400" />,
      perform: () => {
        window.open(profile.contact.github, "_blank", "noopener,noreferrer");
      },
    },
    {
      id: "linkedin",
      name: "LinkedIn Profile",
      category: "External Links",
      detail: "linkedin.com/in/ritesh-maurya-7459s",
      icon: <IconLinkedin className="w-4 h-4 text-slate-400" />,
      perform: () => {
        window.open(profile.contact.linkedin, "_blank", "noopener,noreferrer");
      },
    },
  ];

  const filteredActions = actions.filter((action) => {
    const q = query.toLowerCase().trim();
    return (
      action.name.toLowerCase().includes(q) ||
      action.category.toLowerCase().includes(q) ||
      (action.detail && action.detail.toLowerCase().includes(q))
    );
  });

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const executeAction = (action) => {
    if (!action) return;
    action.perform();
    if (action.id !== "copy-email") {
      onClose();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredActions.length));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredActions.length) % Math.max(1, filteredActions.length));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredActions[selectedIndex]) {
        executeAction(filteredActions[selectedIndex]);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(5, 7, 11, 0.75)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        zIndex: 10000,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingTop: "15vh",
        paddingLeft: "1rem",
        paddingRight: "1rem",
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          backgroundColor: "#0d1017",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          borderRadius: "0.875rem",
          boxShadow: "0 24px 60px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.05)",
          overflow: "hidden",
        }}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Command Center Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "0.85rem 1.15rem",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            gap: "0.75rem",
          }}
        >
          <IconSearch className="w-5 h-5" style={{ color: "var(--accent-cyan)", flexShrink: 0 }} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or jump to section..."
            style={{
              width: "100%",
              background: "transparent",
              border: "none",
              outline: "none",
              color: "#fff",
              fontSize: "0.9375rem",
              fontFamily: "var(--font-sans)",
            }}
          />
          <span
            style={{
              fontSize: "0.6875rem",
              fontFamily: "var(--font-mono)",
              background: "rgba(255, 255, 255, 0.07)",
              color: "var(--text-muted)",
              padding: "0.2rem 0.45rem",
              borderRadius: "0.3rem",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            ESC
          </span>
        </div>

        {/* Results List */}
        <div
          ref={listRef}
          style={{
            maxHeight: "340px",
            overflowY: "auto",
            padding: "0.5rem",
          }}
        >
          {filteredActions.length === 0 ? (
            <div
              style={{
                padding: "2rem 1rem",
                textAlign: "center",
                color: "var(--text-muted)",
                fontSize: "0.875rem",
              }}
            >
              No matching commands found.
            </div>
          ) : (
            filteredActions.map((action, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={action.id}
                  onClick={() => executeAction(action)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0.65rem 0.85rem",
                    borderRadius: "0.5rem",
                    cursor: "pointer",
                    backgroundColor: isSelected ? "rgba(56, 189, 248, 0.12)" : "transparent",
                    border: isSelected ? "1px solid rgba(56, 189, 248, 0.25)" : "1px solid transparent",
                    transition: "all 0.12s ease",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "28px",
                        height: "28px",
                        borderRadius: "0.4rem",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        color: isSelected ? "#38bdf8" : "#94a3b8",
                      }}
                    >
                      {action.icon}
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: "0.875rem",
                          fontWeight: 500,
                          color: isSelected ? "#fff" : "#e2e8f0",
                        }}
                      >
                        {action.name}
                      </div>
                      {action.detail && (
                        <div
                          style={{
                            fontSize: "0.75rem",
                            fontFamily: "var(--font-mono)",
                            color: isSelected ? "#93c5fd" : "#64748b",
                          }}
                        >
                          {action.detail}
                        </div>
                      )}
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span
                      style={{
                        fontSize: "0.6875rem",
                        fontFamily: "var(--font-mono)",
                        color: "#64748b",
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {action.category}
                    </span>
                    {isSelected && (
                      <span
                        style={{
                          fontSize: "0.6875rem",
                          fontFamily: "var(--font-mono)",
                          color: "#38bdf8",
                        }}
                      >
                        ↵
                      </span>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0.55rem 1rem",
            backgroundColor: "rgba(0, 0, 0, 0.35)",
            borderTop: "1px solid rgba(255, 255, 255, 0.06)",
            fontSize: "0.6875rem",
            color: "#64748b",
            fontFamily: "var(--font-mono)",
          }}
        >
          <div style={{ display: "flex", gap: "0.75rem" }}>
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <div style={{ color: "var(--accent-cyan)" }}>
            Ritesh Maurya · Command Center
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
