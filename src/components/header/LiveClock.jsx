import React, { useState, useEffect } from "react";

const LiveClock = ({ compact = false }) => {
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat("en-GB", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        });
        setTimeString(formatter.format(now));
      } catch (err) {
        // Fallback if Intl fails
        const d = new Date();
        const utc = d.getTime() + d.getTimezoneOffset() * 60000;
        const istDate = new Date(utc + 3600000 * 5.5);
        const pad = (n) => String(n).padStart(2, "0");
        setTimeString(`${pad(istDate.getHours())}:${pad(istDate.getMinutes())}:${pad(istDate.getSeconds())}`);
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!timeString) return null;

  if (compact) {
    return (
      <div
        className="live-clock-compact"
        title="Live time in Mumbai, India (IST)"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.45rem",
          fontFamily: "var(--font-mono)",
          fontSize: "0.75rem",
          color: "var(--text-secondary)",
          background: "rgba(255, 255, 255, 0.04)",
          padding: "0.3rem 0.65rem",
          borderRadius: "0.4rem",
          border: "1px solid var(--border-subtle)",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        <span
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            backgroundColor: "#10b981",
            boxShadow: "0 0 8px #10b981",
          }}
        />
        <span style={{ color: "#f8fafc", fontWeight: 500 }}>{timeString}</span>
        <span style={{ color: "#64748b" }}>IST</span>
      </div>
    );
  }

  return (
    <div
      className="live-clock-banner"
      title="Live time in Mumbai, India (IST)"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.6rem",
        fontFamily: "var(--font-mono)",
        fontSize: "0.8125rem",
        color: "var(--text-secondary)",
        background: "rgba(14, 16, 23, 0.7)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        padding: "0.4rem 0.85rem",
        borderRadius: "9999px",
        border: "1px solid var(--border-medium)",
        fontVariantNumeric: "tabular-nums",
        letterSpacing: "0.02em",
      }}
    >
      <span
        style={{
          width: "7px",
          height: "7px",
          borderRadius: "50%",
          backgroundColor: "#10b981",
          boxShadow: "0 0 10px rgba(16, 185, 129, 0.8)",
          display: "inline-block",
        }}
      />
      <span style={{ color: "#ffffff", fontWeight: 600 }}>{timeString}</span>
      <span style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>
        IST · Mumbai
      </span>
    </div>
  );
};

export default LiveClock;
