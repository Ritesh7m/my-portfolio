import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { profile } from "../../data/profile";
import {
  IconMail,
  IconLinkedin,
  IconGithub,
  IconTwitter,
  IconCopy,
  IconCheck,
  IconArrowUpRight,
} from "../common/Icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(""); // "sending" | "sent" | "error" | ""
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try {
      emailjs.init("1fJuDws2qxj0FQSUc");
    } catch (err) {
      console.warn("EmailJS init warning:", err);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("sending");

    const currentTime = new Date().toLocaleString();

    try {
      await emailjs.send(
        "service_w96in71",
        "template_uh2mfqu",
        {
          name: formData.name,
          reply_to: formData.email,
          message: formData.message,
          time: currentTime,
          to_email: profile.contact.email,
        },
        "1fJuDws2qxj0FQSUc"
      );

      setSubmitStatus("sent");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => {
        setSubmitStatus("");
        setIsSubmitting(false);
      }, 3500);
    } catch (error) {
      console.error("EmailJS submission error:", error);
      setSubmitStatus("error");
      setTimeout(() => {
        setSubmitStatus("");
        setIsSubmitting(false);
      }, 4000);
    }
  };

  return (
    <section id="contact" className="section-wrapper">
      <div className="app-container">
        {/* Big Bold Headline Call-to-Action */}
        <div style={{ marginBottom: "3.5rem" }}>
          <div className="section-kicker">
            <IconMail className="w-4 h-4" /> Get in Touch
          </div>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.25rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#ffffff",
              marginBottom: "1rem",
            }}
          >
            LET'S BUILD
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #38bdf8 0%, #818cf8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              SOMETHING USEFUL.
            </span>
          </h2>
          <p className="section-subtitle">
            Whether you have an inquiry regarding a full-stack developer role, an ERP data solution, or a client web project — my inbox is open.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem",
            alignItems: "start",
          }}
        >
          {/* Left Column: Direct channels */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* Email Card with One-Click Copy */}
            <div className="glass-panel" style={{ padding: "1.75rem" }}>
              <div
                style={{
                  fontSize: "0.75rem",
                  fontFamily: "var(--font-mono)",
                  color: "#64748b",
                  textTransform: "uppercase",
                  marginBottom: "0.5rem",
                }}
              >
                Direct Email
              </div>

              <div
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "#ffffff",
                  marginBottom: "1rem",
                  wordBreak: "break-all",
                }}
              >
                {profile.contact.email}
              </div>

              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="btn btn-secondary"
                  style={{ fontSize: "0.8125rem", padding: "0.5rem 0.95rem" }}
                >
                  {copied ? (
                    <>
                      <IconCheck className="w-4 h-4 text-emerald-400" /> Copied!
                    </>
                  ) : (
                    <>
                      <IconCopy className="w-4 h-4" /> Copy Email
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${profile.contact.email}`}
                  className="btn btn-primary"
                  style={{ fontSize: "0.8125rem", padding: "0.5rem 0.95rem" }}
                >
                  Send Direct Mail <IconArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Social Channels */}
            <div className="glass-panel" style={{ padding: "1.75rem" }}>
              <div
                style={{
                  fontSize: "0.75rem",
                  fontFamily: "var(--font-mono)",
                  color: "#64748b",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                Professional Networks
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <a
                  href={profile.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0.75rem 1rem",
                    borderRadius: "0.5rem",
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid var(--border-subtle)",
                    color: "#e2e8f0",
                    transition: "all 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.06)";
                    e.currentTarget.style.borderColor = "var(--border-medium)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.03)";
                    e.currentTarget.style.borderColor = "var(--border-subtle)";
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <IconLinkedin className="w-5 h-5 text-blue-400" />
                    <div>
                      <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "#fff" }}>
                        LinkedIn
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "#94a3b8" }}>
                        ritesh-maurya-7459s
                      </div>
                    </div>
                  </div>
                  <IconArrowUpRight className="w-4 h-4 text-slate-400" />
                </a>

                <a
                  href={profile.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0.75rem 1rem",
                    borderRadius: "0.5rem",
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid var(--border-subtle)",
                    color: "#e2e8f0",
                    transition: "all 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.06)";
                    e.currentTarget.style.borderColor = "var(--border-medium)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.03)";
                    e.currentTarget.style.borderColor = "var(--border-subtle)";
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <IconGithub className="w-5 h-5 text-slate-200" />
                    <div>
                      <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "#fff" }}>
                        GitHub
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "#94a3b8" }}>
                        Ritesh7m
                      </div>
                    </div>
                  </div>
                  <IconArrowUpRight className="w-4 h-4 text-slate-400" />
                </a>

                <a
                  href={profile.contact.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0.75rem 1rem",
                    borderRadius: "0.5rem",
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid var(--border-subtle)",
                    color: "#e2e8f0",
                    transition: "all 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.06)";
                    e.currentTarget.style.borderColor = "var(--border-medium)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.03)";
                    e.currentTarget.style.borderColor = "var(--border-subtle)";
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <IconTwitter className="w-5 h-5 text-slate-200" />
                    <div>
                      <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "#fff" }}>
                        X (Twitter)
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "#94a3b8" }}>
                        @RiteshMaur78747
                      </div>
                    </div>
                  </div>
                  <IconArrowUpRight className="w-4 h-4 text-slate-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Working Contact Form */}
          <div className="glass-panel" style={{ padding: "2.25rem" }}>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#fff", marginBottom: "0.5rem" }}>
              Send a Direct Message
            </h3>
            <p style={{ fontSize: "0.875rem", color: "#94a3b8", marginBottom: "1.75rem" }}>
              Your message will be sent directly to my personal inbox via EmailJS.
            </p>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div>
                <label
                  htmlFor="contact-name"
                  style={{
                    display: "block",
                    fontSize: "0.75rem",
                    fontFamily: "var(--font-mono)",
                    color: "#cbd5e1",
                    marginBottom: "0.4rem",
                    textTransform: "uppercase",
                  }}
                >
                  Your Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Alex Sharma"
                  required
                  disabled={isSubmitting}
                  style={{
                    width: "100%",
                    padding: "0.85rem 1rem",
                    borderRadius: "0.5rem",
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid var(--border-medium)",
                    color: "#fff",
                    fontSize: "0.9375rem",
                    fontFamily: "var(--font-sans)",
                    outline: "none",
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  style={{
                    display: "block",
                    fontSize: "0.75rem",
                    fontFamily: "var(--font-mono)",
                    color: "#cbd5e1",
                    marginBottom: "0.4rem",
                    textTransform: "uppercase",
                  }}
                >
                  Email Address *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@company.com"
                  required
                  disabled={isSubmitting}
                  style={{
                    width: "100%",
                    padding: "0.85rem 1rem",
                    borderRadius: "0.5rem",
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid var(--border-medium)",
                    color: "#fff",
                    fontSize: "0.9375rem",
                    fontFamily: "var(--font-sans)",
                    outline: "none",
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  style={{
                    display: "block",
                    fontSize: "0.75rem",
                    fontFamily: "var(--font-mono)",
                    color: "#cbd5e1",
                    marginBottom: "0.4rem",
                    textTransform: "uppercase",
                  }}
                >
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describe your project, role, or proposal..."
                  required
                  disabled={isSubmitting}
                  style={{
                    width: "100%",
                    padding: "0.85rem 1rem",
                    borderRadius: "0.5rem",
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid var(--border-medium)",
                    color: "#fff",
                    fontSize: "0.9375rem",
                    fontFamily: "var(--font-sans)",
                    outline: "none",
                    resize: "vertical",
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
                style={{
                  width: "100%",
                  padding: "0.9rem",
                  backgroundColor:
                    submitStatus === "sent"
                      ? "#10b981"
                      : submitStatus === "error"
                      ? "#ef4444"
                      : "#ffffff",
                  color: submitStatus === "sent" || submitStatus === "error" ? "#ffffff" : "#07080c",
                  borderColor:
                    submitStatus === "sent"
                      ? "#10b981"
                      : submitStatus === "error"
                      ? "#ef4444"
                      : "#ffffff",
                }}
              >
                {submitStatus === "sending" ? (
                  "Sending Message..."
                ) : submitStatus === "sent" ? (
                  <>
                    <IconCheck className="w-5 h-5" /> Message Sent Successfully!
                  </>
                ) : submitStatus === "error" ? (
                  "Failed to Send. Please Email Directly"
                ) : (
                  <>
                    Send Message <IconArrowUpRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
